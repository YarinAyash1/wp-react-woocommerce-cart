import axios from "axios"
// import { ShopContext } from "../../storeContext";
// const { useContext } = wp.element;
const AddtoCartBtn = ({ productId, refreshCart, refreshStatus }) => {
    // const { store } = useContext(ShopContext)

    const addToCart = () => {
        axios.post('/wp-json/wc/store/cart/add-item', {
            id: productId,
            quantity: 1
        }, {
            headers: {
                'X-WC-Store-API-Nonce': storeApi.nonce
            }
        }).then(res => {
            refreshCart()
        });
    }
    return (
        <button onClick={() => addToCart()}>Add to cart</button>
    )
}

export default AddtoCartBtn;