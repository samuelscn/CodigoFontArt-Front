import React, { Component } from 'react';

import './styles.css';

export default class AlertSucess extends Component {
    
    toggle() {
        window.location.href = "http://localhost:3000";
    }
    
    render() {
        return(
            <div class="alert alert-success" role="alert" >
                Produto Criado com Sucesso!
                <button onClick={this.toggle} class="btn btn-outline-secondary"><i class="fas fa-times"/></button>
            </div>
        );
    }
}