import Cart from './components/Cart/Cart';
import ProductsList from './components/ProductsList/ProductsList';
import { Store } from './storeContext';
const { render } = wp.element;

const App = () => {
    return (
        <Store>
            <Cart />
            <ProductsList />
        </Store>
    );
};
render(<App />, document.getElementById(`acf-app`));