import React, { Component } from 'react';

import imagemSucess from '../../img/sucessMan.gif';

import './styles.css';

export default class Checkout extends Component {
    render() {
        return(
            <div className="body-checkout">
                <div>
                    <h1>COMPRA FINALIZADA COM SUCESSO!</h1>
                    <img src={imagemSucess} />
                </div>
            </div>
        )
    }
}