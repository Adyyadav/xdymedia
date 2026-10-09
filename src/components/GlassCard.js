"use client";

import { useRef } from "react";

export default function GlassCard({
  children,
  className = "",
  strong = false,
  as: Tag = "div",
  ...props
}) {
  const ref = useRef(null);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", "-500px");
    el.style.setProperty("--my", "-500px");
  }

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`${strong ? "glass-strong" : "glass"} glass-spot ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
