import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-8">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link href="/" className="text-2xl font-bold text-white">
                            Grocery-Max
                        </Link>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Link href="/cart" className="hover:text-gray-400">
                            About Us
                        </Link>
                        <Link href="/orders" className="hover:text-gray-400">
                            Contact
                        </Link>
                        <Link href="/" className="hover:text-gray-400">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
                <div className="mt-4 text-center md:text-left">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Grocery-Max. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
