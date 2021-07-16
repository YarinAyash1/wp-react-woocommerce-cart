import axios from "axios";
import Product from "../Product/Product";
const { useState, useEffect } = wp.element;

const ProductsList = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('/wp-json/wc/store/products').then(res => setProducts(res.data))

    }, [])
    return (
        <div className="products">
            {
                products.map((product) => <Product data={product} />)
            }
        </div>
    )
}

export default ProductsList;