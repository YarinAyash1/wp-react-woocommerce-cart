const { createContext, useState } = wp.element;
const ShopContext = createContext()

const Store = ({ children }) => {
    const initialState = {
        cart: [],
        update,

    }
    const [store, setStore] = useState(initialState)
    function update(cart) {
        setStore({
            ...store, cart
        })
    }

    return (
        <ShopContext.Provider value={{ store, setStore }} >
            {children}
        </ShopContext.Provider >
    )
}

export { ShopContext, Store }