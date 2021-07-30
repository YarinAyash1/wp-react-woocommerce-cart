import axios from "axios";
import React, { Component, useEffect } from 'react'
import Cart from '../components/Cart/Cart';
import ProductsList from '../components/ProductsList/ProductsList';
import { Store } from '../storeContext';

const App = (props) => {
    return (
        <Store>
            <Cart data={props.data} />
            <ProductsList />
        </Store>
    );
};



export default class AppComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <App data={this.state} />
        )
    }
}
