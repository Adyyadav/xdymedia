"use client";

import { useEffect, useState } from "react";

const BASE = [45, 60, 38, 70, 52, 80, 42, 65, 48, 75, 55, 68];

export default function Sparkline({ className = "" }) {
  const [heights, setHeights] = useState(BASE);

  useEffect(() => {
    setHeights(BASE.map(() => 30 + Math.round(Math.random() * 70)));
  }, []);

  return (
    <div className={`flex h-[70px] items-end gap-1.5 ${className}`}>
      {heights.map((h, i) => (
        <i
          key={i}
          className="flex-1 rounded-t"
          style={{
            height: `${h}%`,
            background: "linear-gradient(180deg, #f4f4f4, rgba(192,192,192,0.2))",
            animation: `growBar 2.4s ease-in-out infinite`,
            animationDelay: `${(i % 6) * 0.12}s`,
          }}
        />
      ))}
    </div>
  );
}
