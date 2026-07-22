import { User } from 'lucide-react';
import { Image } from '@/components/ui/image';

// Replace this with your own photo URL (or upload an image via chat and paste the URL here)
const profileSrc = '';

export default function ProfileImage() {
  return (
    <div className="group relative h-[380px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-xl transition-all duration-300 hover:border-blue-500/40 sm:h-[460px] lg:h-[520px]">
      {profileSrc ? (
        <Image
          src={profileSrc}
          alt="Daniyal Ahmed"
          fittingType="fill"
          className="h-full w-full"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-slate-600 transition-colors group-hover:text-blue-400/70">
          <User className="h-12 w-12" />
          <span className="font-mono text-[10px] uppercase tracking-widest">your photo</span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-blue-500/15 transition-opacity duration-300 group-hover:ring-blue-500/40" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-background/40 via-transparent to-transparent" />
    </div>
  );
}