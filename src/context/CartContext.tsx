import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { ICoffeeProduct } from "../interfaces/interface";


interface CartItem extends ICoffeeProduct {
    quantity: number;
}


interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: ICoffeeProduct) => void;
    removeFromCart: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
}


const CartContext = createContext<CartContextType | undefined>(undefined);


export const CartProvider = ({ children }: { children: ReactNode }) => {

    const [cartItems, setCartItems] = useState<CartItem[]>([]);


    const addToCart = (product: ICoffeeProduct) => {

        setCartItems((prev) => {

            const existing = prev.find(
                item => item.id === product.id
            );


            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                );
            }


            return [
                ...prev,
                {
                    ...product,
                    quantity: 1
                }
            ];
        });
    };


    const removeFromCart = (id: number) => {

        setCartItems(prev =>
            prev.filter(item => item.id !== id)
        );

    };


    const increaseQuantity = (id: number) => {

        setCartItems(prev =>
            prev.map(item =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            )
        );

    };


    const decreaseQuantity = (id: number) => {

        setCartItems(prev =>
            prev.map(item =>
                item.id === id && item.quantity > 1
                    ? {
                        ...item,
                        quantity: item.quantity - 1
                    }
                    : item
            )
        );

    };


    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    );
};



// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {

    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used inside CartProvider");
    }

    return context;
};