"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-08-24T16:30:00Z").getTime();

function getParts(now: number) {
  const diff = Math.max(0, TARGET - now);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const units = [
  { label: "Days", key: "days" as const },
  { label: "Hours", key: "hours" as const },
  { label: "Min", key: "minutes" as const },
  { label: "Sec", key: "seconds" as const },
];

export default function Countdown() {
  const [parts, setParts] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setParts(getParts(Date.now()));
    const id = setInterval(() => setParts(getParts(Date.now())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-2.5 sm:gap-3">
          <div className="flex flex-col items-center">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#111844] text-xl font-semibold tabular-nums text-[#eae0cf] sm:h-16 sm:w-16">
              {String(parts[unit.key]).padStart(2, "0")}
            </span>
            <span className="mt-1.5 text-[0.62rem] font-semibold tracking-[0.14em] text-[#4b5694] uppercase">
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 ? (
            <span className="text-xl font-semibold text-[#7288ae]">:</span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
