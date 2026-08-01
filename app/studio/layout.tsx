import type { ReactNode } from "react";

export default function StudioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-0 z-[200] h-screen overflow-auto bg-slate-950">
      {children}
    </div>
  );
}
