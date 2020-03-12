import React, { Component } from 'react'

import "./styles.css"

export default class Top extends Component {
    
    clickou() {
        window.location.href = "http://localhost:3000/criarproduto";
    }
    
    render() {
        return(
            <body id="top-bar">
                <button type="button" className="btn btn-warning" id="botao-top-bar">Fale Conosco</button>
                <text>Melhor loja de pixel art do Brasil</text>
                <button onClick={this.clickou} className="btn btn-warning" id="botao-top-bar">Registrar Produto</button>
            </body>
        )
    }
}

