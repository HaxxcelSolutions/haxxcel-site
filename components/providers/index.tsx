"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "sonner";

interface Props {
  children: ReactNode;
}

export default function Providers({
    children
}: Props) {
    return (
        <ThemeProvider>
            {children}

            <Toaster
                richColors
                position="top-right"
            />
        </ThemeProvider>
    );
}