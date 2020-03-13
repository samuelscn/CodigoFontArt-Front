import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css'

export default class Header extends Component {
   
   state = {
    word: '',
    produtos: [],
    aux: 0,
    carrinho: [],
    qtd: 0
   };

   async componentDidMount() {
        const resposta = await api.get("/todoscarrinho");
        var armazenaQtd = 0;

        this.setState({carrinho: resposta.data});
        console.log(this.state.carrinho);
        if(this.state.carrinho.length != 0) {
            this.state.carrinho.map(cart => {
                armazenaQtd = armazenaQtd + cart.QtdProduto;
            });
        }
        console.log(armazenaQtd);
        this.setState({qtd: armazenaQtd});
        this.loadProdutos();
   }

   loadProdutos = async () => {
       const response = await api.get("/todosprodutos");

       this.setState({ produtos: response.data });
   }

   handlerSubmit = async (e) => {
    e.preventDefault();

    var aux;

    await this.state.produtos.map(produto => {
        console.log(produto.title);
        if(produto.title === this.state.word) {
            aux = 0;
        }
    });

    if(aux == 0) {
        window.location.href = `http://localhost:3000/pesquisa/${this.state.word}`;
    } else {
        window.location.href = "http://localhost:3000/notfound";
    }
    
   }

   navToCart = () => {
       if(this.state.carrinho.length == 0) {
            window.location.href = "http://localhost:3000/notcart";
       }else {
            window.location.href = "http://localhost:3000/carrinho";
       }
   }

    render() {
        return(
            <header id="main-header">
                <p>CODIGO<br/>Font<br/>Art</p>
                    <form onSubmit={this.handlerSubmit} className="form-inline">
                        <input onChange={e => this.setState({ word: e.target.value })} value={this.state.word} className="form-control mr-sm-2" type="text" placeholder="Busque aqui..." aria-label="Pesquisar"/>
                        <button type="submit" className="btn btn-warning">GO</button>
                    </form>
                    <button onClick={this.navToCart} type="button" className="btn btn-primary">
                        <i className="fas fa-shopping-cart"></i>
                        <span className="badge badge-light">{this.state.qtd}</span>
                    </button>
            </header>
        );
    }
}

