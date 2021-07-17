import Cart from './components/Cart/Cart';
import ProductsList from './components/ProductsList/ProductsList';
import AddtoCartBtn from './components/AddtoCartBtn/AddtoCartBtn';
import { Store } from './storeContext';
const { render, useEffect } = wp.element;

const App = ({ refresh, setRefresh }) => {
    useEffect(() => {
        console.log(refresh)
    }, [refresh])
    return (
        <Store>
            <Cart refresh={refresh} setRefresh={setRefresh} />
            <ProductsList />
        </Store>
    );
};


const myApp = {
    refreshStatus: 0,
    elements: {
        cart: document.getElementById(`woocommerce-react-app`),
        add_to_cart: document.getElementById(`add-to-cart-btn`),

    },
    cart: null,
    btnAddToCart: null,
    init() {
        this.renderApp();
        this.renderCart();
    },
    refreshCart() {
        this.refreshStatus = !this.refreshStatus;
        this.refreshApp();
    },
    refreshApp() {
        this.renderApp();
    },
    renderApp() {
        if (this.elements.cart) {
            this.cart = render(<App refresh={this.refreshStatus} setRefresh={() => this.setRefresh(status)} />, this.elements.cart);
        }
    },
    renderCart() {
        if (this.elements.add_to_cart) {
            this.btnAddToCart = render(<AddtoCartBtn productId={this.elements.add_to_cart.dataset.product} refreshCart={() => {
                this.refreshCart()

            }}
                refreshStatus={this.refreshStatus}
            />, this.elements.add_to_cart);
        }
    }
}

myApp.init()
