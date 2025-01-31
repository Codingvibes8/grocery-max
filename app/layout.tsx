import "./globals.css";
import { Inter } from 'next/font/google';
import  Providers  from '@/lib/theme';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from "@/lib/cart";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <Providers>
            <CartProvider>
            <Navbar />
            <main className="min-h-screen max-w-[1536px] mx-auto p-4">{children}</main>
            <Footer />
            </CartProvider>
        </Providers>
        </body>
        </html>
    );
}