import AddtoCartBtn from './components/AddtoCartBtn/AddtoCartBtn';
import AppComponent from './components/AppComponent';
const { render, useEffect } = wp.element;

const myApp = {
    refreshStatus: 0,
    elements: {
        cart: document.getElementById(`woocommerce-react-app`),
        add_to_cart: document.getElementById(`add-to-cart-btn`),

    },
    cart: null,
    btnAddToCart: null,
    init() {
        this.renderCart();
        this.renderAddtoCartBtn();
    },
    renderCart() {
        if (this.elements.cart) {
            this.cart = render(<AppComponent />, this.elements.cart);
            window.appCart = this.cart;
        }
    },
    renderAddtoCartBtn() {
        if (this.elements.add_to_cart) {
            this.btnAddToCart = render(
                <AddtoCartBtn
                    productId={this.elements.add_to_cart.dataset.product}
                    refreshCart={(data = null) => {
                        if (this.cart) {
                            this.cart.setState({
                                cart: data,
                            });
                        }
                    }}
                />, this.elements.add_to_cart);
        }
    }
}

myApp.init()
