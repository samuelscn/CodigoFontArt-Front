import React, { Component } from 'react';

import './styles.css';

export default class AlertError extends Component {
    
    toggle() {
        window.location.href = "http://localhost:3000/criarproduto";
    }
    
    render() {
        return(
            <div class="alert alert-danger" role="alert" >
                Não foi possivel criar o produto, verifique os campos e tente novamente!
                <button onClick={this.toggle} class="btn btn-outline-secondary"><i class="fas fa-times"/></button>
            </div>
        );
    }
}