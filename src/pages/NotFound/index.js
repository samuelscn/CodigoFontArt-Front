import React, { Component } from 'react';
import { render } from '@testing-library/react';

import gifError from '../../img/darksouls.gif';
import gifKirby from '../../img/kirby.gif';

import './styles.css';

export default class NotFound extends Component {
    render() {
        return(
            <div className="body-not-found">
                <div className="Body">
                    <h1>NOT FOUND A PRODUCT</h1>
                    <img src={gifKirby} />
                    <img  src={gifError}/>
                </div>
            </div>
        );
    }
}