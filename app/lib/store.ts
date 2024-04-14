import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

import { IMarketState} from "@/app/lib/definitions"

const useStore = create<IMarketState>()(
  devtools(
    persist(
      (set) => ({
        cartItems: [],
        phone: '',

        addCartItem: (item) => {
          set((state) => ({
            cartItems: [...state.cartItems, item],
          }));
        },
        deleteCartItem: (id) => {
          set((state) => {
            const newItems = state.cartItems.filter((item) => item.id !== id);
            return { cartItems: newItems };
          });
        },
        changeQuantity: (id, quantity) => {
          set((state) => {
            const newItems = state.cartItems.map((item) => {
              if (item.id === id) {
                return { ...item, quantity };
              }
              return item;
            });
            return { cartItems: newItems };
          });
        },
        updatePhone: (newPhone) => {
          set((state) => ({ phone: newPhone }));
        },
      }),
      { name: 'marketStore', storage: createJSONStorage(() => sessionStorage) },
    ),
  ),
);

export { useStore };
