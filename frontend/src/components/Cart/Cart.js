import axios from "axios";
import { ShopContext } from "../../storeContext";
const { useEffect, useContext } = wp.element;
const Cart = () => {
    const { store, setStore } = useContext(ShopContext)


    useEffect(() => {
        axios.get('/wp-json/wc/store/cart').then(res => setStore(
            {
                ...store,
                cart: res.data
            }
        ))
    }, [])
    return (
        <div className="cart">
            {
                store.cart?.items?.length ? store.cart.items.map((item => {
                    return (
                        <div>{item.quantity}
                            {item.name}
                        </div>
                    )
                })) : null
            }
        </div>
    )
}

export default Cart;