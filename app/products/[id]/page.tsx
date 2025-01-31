import { supabase } from '@/lib/supabase';
import Image from 'next/image';

export default async function ProductPage({ params }: { params: { id: string } }) {
    const { data: product } = await supabase
        .from('products')
        .select('*')
        .eq('id', params.id)
        .single();

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <Image
                src={product.image_url}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-lg"
            />
            <p>{product.description}</p>
            <p className="text-lg font-bold">${product.price}</p>
        </div>
    );
}