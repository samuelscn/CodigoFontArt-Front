import React, { Component } from 'react';

import noProductWolf from '../../img/noProductWolf.gif';

import './styles.css';

export default class NoProduct extends Component {
    render() {
        return(
            <div className="body-no-product">
                <div>
                    <h1>THERE ISN'T PRODUCTS IN DATABASE!</h1>
                    <img src={noProductWolf} />
                </div>
            </div>
        )
    }
}