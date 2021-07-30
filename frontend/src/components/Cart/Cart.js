import axios from "axios";
import { ShopContext } from "../../storeContext";
const { useEffect, useContext } = wp.element;
const styles = {
    position: 'fixed',
    right: 0,
    bottom: 0,
    background: '#fff'
}
const Cart = ({ data }) => {
    const { store, setStore } = useContext(ShopContext)

    useEffect(() => {
        axios.get('/wp-json/wc/store/cart').then(res => setStore(
            {
                ...store,
                cart: res.data
            }
        ))
    }, [])

    useEffect(() => {
        setStore({
            ...store,
            cart: data.cart
        })

    }, [data.cart])
    return (
        <div className="cart" style={styles}>
            {
                store.cart?.items?.length ? store.cart.items.map((item => {
                    return (
                        <div>{item.quantity}
                            {item.name}
                        </div>
                    )
                })) : null
            }
        </div >
    )
}

export default Cart;