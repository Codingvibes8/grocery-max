'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
    const { theme, setTheme } = useTheme();

    return (
        <nav className="sticky z-50 top-0 left-0 flex justify-between items-center p-4 border-b h-16">
            <Link href="/" className="text-xl font-bold">
                Grocery-Max
            </Link>
            <div className="flex items-center gap-4">
                <Link href="/cart">Cart</Link>
                <Link href="/orders">Orders</Link>
                <Button variant="ghost" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </Button>
            </div>
        </nav>
    );
}