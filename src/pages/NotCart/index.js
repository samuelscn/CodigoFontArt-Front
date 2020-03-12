import React, { Component } from 'react';
import { render } from '@testing-library/react';

import gifCartChrono from '../../img/notChrono.gif';
import gifCart from '../../img/cart.gif';

import './styles.css';

export default class NotCart extends Component {
    render() {
        return(
            <div className="body-not-found">
                <div className="Body">
                    <h1>NO HAVE ITEMS TO CART</h1>
                    <img src={gifCart} />
                </div>
            </div>
        );
    }
}