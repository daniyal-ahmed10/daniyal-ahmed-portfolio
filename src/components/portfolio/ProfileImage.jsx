import { User } from 'lucide-react';
import { Image } from '@/components/ui/image';

// Replace this with your own photo URL (or upload an image via chat and paste the URL here)
const profileSrc = '';

export default function ProfileImage() {
  return (
    <div className="group relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-lg transition-all duration-300 hover:border-blue-500/40 sm:h-32 sm:w-32">
      {profileSrc ? (
        <Image
          src={profileSrc}
          alt="Daniyal Ahmed"
          fittingType="fill"
          className="h-full w-full"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 text-slate-600 transition-colors group-hover:text-blue-400/70">
          <User className="h-9 w-9" />
          <span className="font-mono text-[10px] uppercase tracking-widest">your photo</span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-blue-500/15 transition-opacity duration-300 group-hover:ring-blue-500/40" />
    </div>
  );
}