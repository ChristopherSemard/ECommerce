import { create } from "zustand";

const useCartStore = create((set) => ({
    cartStore: null,
    updateCartStore: (newCart) =>
        set(() => ({
            cartStore: newCart,
        })),
}));

export default useCartStore;
