import { supabase } from '@/lib/supabase';
import ProductCard from '@/components/ProductCard';

export default async function CategoryPage({ params }: { params: { category: string } }) {
    const { data: products } = await supabase
        .from('products')
        .select('*')
        .eq('category', params.category);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{params.category}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}