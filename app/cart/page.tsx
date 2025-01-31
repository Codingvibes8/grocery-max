'use client';

import { useCart } from '@/lib/cart';
import CartItem from '@/components/CartItem';

export default function CartPage() {
    const { cart, removeFromCart } = useCart();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Your Cart</h1>
            {cart.map((item) => (
                <CartItem key={item.id} item={item} onRemove={removeFromCart} />
            ))}
        </div>
    );
}