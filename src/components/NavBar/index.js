import React, { Component } from 'react'

import "./styles.css"

export default class NavBar extends Component {
    home() {
        window.location.href = "http://localhost:3000";
    }

    render() {
        return(
        <body id="nav-bar">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" id="todas-categorias" href="#">Todas Categorias</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a onClick={this.home} className="nav-item nav-link active" id="nav-item-one" href="#">Home <span
                            className="sr-only">(Página atual)</span></a>
                        <a className="nav-item nav-link" id="nav-item-one" href="#">Produto</a>
                        <a className="nav-item nav-link" id="nav-item-one" href="#">Produto</a>
                        <a className="nav-item nav-link disabled" id="nav-item-one" href="#">Produto</a>
                        <a className="nav-item nav-link" id="nav-item-one" href="#">Produto</a>
                        <a className="nav-item nav-link" id="nav-item-one" href="#">Produto</a>
                        <a className="nav-item nav-link" id="nav-item-one" href="#">Produto</a>
                        <a className="nav-item nav-link" id="nav-item-one" href="#">Produto</a>
                        <a className="nav-item nav-link" id="nav-item-one" href="#">Produto</a>
                    </div>
                </div>
            </nav>
        </body>
        )
    }
}
