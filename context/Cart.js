import { createContext, useState, useEffect } from "react";

export const Context = createContext();

const Cart = ({ children }) => {

    const getInitialCart = () => JSON.parse(localStorage.getItem('cart'));
    const [cart, setCart] = useState([]);
    const [isOpen, setIsOpen ] = useState(false);
    const [total, setTotal] = useState(0);
    const [totalQty, setTotalQty] = useState(0);

    const openCart = () => {
        setIsOpen(true);
    }

    const closeCart = () => {
        setIsOpen(false);
    }

    useEffect(() => {        
        const initialCart = getInitialCart();
        if(initialCart) {
            setCart(initialCart);
        }
    }, [])

    useEffect(() => {        
        localStorage.setItem('cart', JSON.stringify(cart));
        let newTotal = 0;
        cart.forEach((item) => (newTotal += item.price*item.qty));
        setTotal(newTotal);

        let newTotalQty = 0;
        cart.forEach((item) => (newTotalQty += item.qty));
        setTotalQty(newTotalQty);

    }, [cart])

    const addItemToCart = (product, qty =1) => {
        const item = cart.find(i => i.id === product.id);
        if(item)
        {
            item.qty += qty;
            setCart([...cart]);
        } else {
            setCart([...cart, {...product, qty}]);
        }       
    }

    const removeItemFromCart = (id) => {
        const newCart = cart.filter((c) => {
            return c.id !== id;
        });
        setCart(newCart);
    }   

    const clearCart = () => {
        localStorage.removeItem('cart');
        setCart([]);
    }

    const exposed = {
        cart,
        addItemToCart,
        removeItemFromCart,
        isOpen,
        openCart,
        closeCart,
        total,
        clearCart,
        totalQty
    }
    return <Context.Provider value={exposed}>{children}</Context.Provider>
}

export default Cart;