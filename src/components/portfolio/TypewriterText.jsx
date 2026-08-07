import { useEffect, useState } from 'react';

const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const PAUSE_AFTER_TYPE = 1600;
const PAUSE_AFTER_DELETE = 300;

// Cycles through `words` with a typing/deleting effect, using the
// .animate-blink keyframe already defined in index.css for the caret.
export default function TypewriterText({ words, className = '' }) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0] ?? '');
      return;
    }

    const current = words[wordIndex % words.length];
    let timeout;

    if (phase === 'typing') {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_SPEED);
      } else {
        timeout = setTimeout(() => setPhase('deleting'), PAUSE_AFTER_TYPE);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), DELETE_SPEED);
      } else {
        timeout = setTimeout(() => {
          setWordIndex((i) => (i + 1) % words.length);
          setPhase('typing');
        }, PAUSE_AFTER_DELETE);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, wordIndex, words]);

  return (
    <span className={className}>
      <span aria-hidden="true">
        {text}
        <span className="animate-blink ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-current align-middle" />
      </span>
      <span className="sr-only">{words.join(' · ')}</span>
    </span>
  );
}
