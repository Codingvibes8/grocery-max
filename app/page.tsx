import { getProducts } from '@/lib/supabase'

import ProductCard from '@/components/ProductCard';

export default async function Home() {
    const products = await getProducts();

    return (
        <section className="min-h-[calc(100vh - 64px)] py-20 max-w-[1536px] mx-auto px-8 sm:px-12 lg:px-24">
            <h1 className={'dark:text-white font-bold text-gray-800 text-5xl mb-8'}>Welcome to Grocery-Max</h1>
            <h2 className={'dark:text-white text-gray-700 text-2xl'}>The best place to buy groceries</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
        </section>
    );

}