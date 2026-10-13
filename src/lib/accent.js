// Literal Tailwind class strings per accent (Tailwind's scanner needs whole
// tokens present in source, so these can't be built with template strings).
export const ACCENT = {
  bluetick: {
    text: "text-[#0095F6]",
    border: "border-[#0095F6]/40",
    borderHover: "hover:border-[#0095F6]/70",
    bg: "bg-[#0095F6]/10",
    glow: "shadow-[0_0_30px_-6px_rgba(0,149,246,0.5)]",
    dot: "bg-[#0095F6]",
  },
  silver: {
    text: "text-silver-2",
    border: "border-white/10",
    borderHover: "hover:border-white/25",
    bg: "bg-white/5",
    glow: "shadow-[0_0_30px_-8px_rgba(255,255,255,0.15)]",
    dot: "bg-silver-2",
  },
  "wa-green": {
    text: "text-mint",
    border: "border-wa-green/30",
    borderHover: "hover:border-wa-green/50",
    bg: "bg-wa-green/10",
    glow: "shadow-[0_0_30px_-8px_rgba(37,211,102,0.35)]",
    dot: "bg-wa-green",
  },
  green: {
    text: "text-mint",
    border: "border-wa-green/30",
    borderHover: "hover:border-wa-green/50",
    bg: "bg-wa-green/10",
    glow: "shadow-[0_0_30px_-8px_rgba(37,211,102,0.35)]",
    dot: "bg-wa-green",
  },
  "tg-blue": {
    text: "text-tg-blue",
    border: "border-tg-blue/30",
    borderHover: "hover:border-tg-blue/50",
    bg: "bg-tg-blue/10",
    glow: "shadow-[0_0_30px_-8px_rgba(56,189,248,0.4)]",
    dot: "bg-tg-blue",
  },
  blue: {
    text: "text-tg-blue",
    border: "border-tg-blue/30",
    borderHover: "hover:border-tg-blue/50",
    bg: "bg-tg-blue/10",
    glow: "shadow-[0_0_30px_-8px_rgba(56,189,248,0.4)]",
    dot: "bg-tg-blue",
  },
  "web3-purple": {
    text: "text-web3-purple",
    border: "border-web3-purple/30",
    borderHover: "hover:border-web3-purple/50",
    bg: "bg-web3-purple/10",
    glow: "shadow-[0_0_30px_-8px_rgba(192,132,252,0.35)]",
    dot: "bg-web3-purple",
  },
  purple: {
    text: "text-web3-purple",
    border: "border-web3-purple/30",
    borderHover: "hover:border-web3-purple/50",
    bg: "bg-web3-purple/10",
    glow: "shadow-[0_0_30px_-8px_rgba(192,132,252,0.35)]",
    dot: "bg-web3-purple",
  },
  "recovery-red": {
    text: "text-recovery-red",
    border: "border-recovery-red/30",
    borderHover: "hover:border-recovery-red/50",
    bg: "bg-recovery-red/10",
    glow: "shadow-[0_0_30px_-8px_rgba(248,113,113,0.35)]",
    dot: "bg-recovery-red",
  },
  red: {
    text: "text-recovery-red",
    border: "border-recovery-red/30",
    borderHover: "hover:border-recovery-red/50",
    bg: "bg-recovery-red/10",
    glow: "shadow-[0_0_30px_-8px_rgba(248,113,113,0.35)]",
    dot: "bg-recovery-red",
  },
  ofm: {
    text: "text-[#00C6FF]",
    border: "border-[#00AFF0]/30",
    borderHover: "hover:border-[#00AFF0]/60",
    bg: "bg-[#00AFF0]/10",
    glow: "shadow-[0_0_30px_-8px_rgba(0,175,240,0.35)]",
    dot: "bg-[#00AFF0]",
  },
  cyan: {
    text: "text-[#00C6FF]",
    border: "border-[#00AFF0]/30",
    borderHover: "hover:border-[#00AFF0]/60",
    bg: "bg-[#00AFF0]/10",
    glow: "shadow-[0_0_30px_-8px_rgba(0,175,240,0.35)]",
    dot: "bg-[#00AFF0]",
  },
};

export function accentFor(key) {
  return ACCENT[key] || ACCENT.silver;
}
