import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }: { product: any }) {
    return (
        <div className="border p-4 rounded-lg">
            <Image
                src={product.image_url}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold">${product.price}</p>
            <Link href={`/products/${product.id}`} className="text-blue-500 hover:underline">
                View Details
            </Link>
        </div>
    );
}