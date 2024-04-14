'use client'
import { useStore } from "@/app/lib/store";
import Cart from "@/app/ui/cart/cart";

type CartContainerProps = {};

const CartContainer: React.FC<CartContainerProps> = () => {
  const cartItems = useStore((state) => state.cartItems);

  return <Cart items={cartItems} />;
};

export default CartContainer;