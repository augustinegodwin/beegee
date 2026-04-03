import { create } from 'zustand'
import { getAllOrders, getAllProducts } from '../lib/async_data';
type AppState = {
    products: Product[] | [];
    // orders: Order[] | [];
    fetchProducts: () => Promise<void>;
    // fetchOrders: () => Promise<void>;
}

export const useAppstate = create<AppState>((set) => ({
    products:[],
    // orders:[],
    fetchProducts:async ()=> {
        try {
                const products=await getAllProducts("")
                set({products})
            } catch (error) {
                console.error("Error fetching products:", error);
            }
    },
    // fetchOrders:async ()=> {
    //     try {
    //             const orders=await getAllOrders()
    //             set({orders})
    //         } catch (error) {
    //             console.error("Error fetching orders:", error);
    //         }
    // }
}))