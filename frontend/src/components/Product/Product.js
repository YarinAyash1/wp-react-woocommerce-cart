import axios from "axios"
import { ShopContext } from "../../storeContext";
const { useContext } = wp.element;
const Product = ({ data }) => {
    const { store } = useContext(ShopContext)

    const addToCart = () => {
        axios.post('/wp-json/wc/store/cart/add-item', {
            id: data.id,
            quantity: 1
        }, {
            headers: {
                'X-WC-Store-API-Nonce': storeApi.nonce
            }
        }).then(res => store.update(res.data));
    }
    return (
        <div className="product">
            <h3>{data.name}</h3>
            <button onClick={() => addToCart()}>Add to cart</button>
        </div>
    )
}

export default Product;