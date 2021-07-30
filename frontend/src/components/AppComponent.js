import axios from "axios";
import React, { Component, useEffect } from 'react'
import Cart from '../components/Cart/Cart';
import ProductsList from '../components/ProductsList/ProductsList';
import { Store } from '../storeContext';

export default class AppComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Store>
                <Cart data={this.state} />
                <ProductsList />
            </Store>
        )
    }
}
