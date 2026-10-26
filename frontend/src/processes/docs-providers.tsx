'use client';

import { MotionConfig } from 'motion/react';
import { AppThemeProvider } from '@/shared/ui/app-theme-provider';
import type { ReactNode } from 'react';
import { Toaster } from '@/shared/ui/sonner';
import { TooltipProvider } from '@default/ui/primitives/tooltip';

export function DocsProviders({ children }: { children: ReactNode }) {
  return (
    <AppThemeProvider>
      <MotionConfig reducedMotion="user">
        <TooltipProvider>
          {children}
          <Toaster richColors position="top-right" />
        </TooltipProvider>
      </MotionConfig>
    </AppThemeProvider>
  );
}
