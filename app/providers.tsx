'use client';
import React from 'react';
import { CartProvider } from '@/lib/cart';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <CartProvider>{children}</CartProvider>
        </ThemeProvider>
    );
}