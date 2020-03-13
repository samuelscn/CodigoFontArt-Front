import React, {Component} from "react";
import api from '../../services/api';
import { Link } from 'react-router-dom';

import imagemProduto from '../../img/placapixel.jpg';
import imagemteste from "../../img/zelda.jpg";
import imagemgyph from "../../img/giphy.jpg";

import "./styles.css"

export default class Carrinho extends Component {
    state = {
        todosCarrinho: [],
        todosProdutos: [],
        numero: 1,
        priceTotal: 0
    };

    async componentDidMount() {

        const response = await api.get("/todoscarrinho");
        const resposta = await api.get("/todosprodutos");

        this.setState({ todosCarrinho: response.data });
        this.setState({ todosProdutos: resposta.data });

        this.state.todosProdutos.map(produto => (
            this.state.todosCarrinho.map(carrinho => {
                if(produto._id == carrinho.ArrayId) {
                    this.setState({priceTotal: this.state.priceTotal + (produto.price*carrinho.QtdProduto)});
                }
            })
        ))

    }

    excluirItemCarrinho = async (event) => {
        await api.delete(`/carrinho/${event}`);

        if(this.state.todosCarrinho.length == 0) {
            window.location.href = "http://localhost:3000/notcart";
        }else {
            window.location.href = "http://localhost:3000/carrinho";
        }
    }

    adicionarQtdItem = (event) => {
        if(this.state.numero <= 0) {
            api.delete(`/carrinho/${event}`);
            if(this.todosCarrinho == null) {
                window.location.href = "http://localhost:3000/notcart";    
            }else{
                window.location.href = "http://localhost:3000/carrinho";
            }
        }else {
            api.put(`/carrinho/${event}`, [this.state.numero]);
            window.location.href = "http://localhost:3000/carrinho";
        }
    }

    deleteAll = async () => {
       await api.delete("/carrinho");

       window.location.href = "http://localhost:3000/checkout";
    }

    render() {
        const numero = this.state.numero;
        return (
            <div id="body-carrinho">
                <div id="body-info-carrinho">
                    <div id="info-carrinho">
                        <text id="text-produto">Produtos</text>
                        <text>Preço Unitário</text>
                        <text>Quantidade</text>
                        <text>SubTotal</text>
                    </div>
                        {this.state.todosProdutos.map(produto => (
                            this.state.todosCarrinho.map(carrinho => {
                        
                                if(produto._id == carrinho.ArrayId) {
                                    return(
                                        <div id="infozao">
                                            <img src={imagemProduto}/>
                                            <text id="texto-title" >{produto.title}</text>
                                            <text id="texto-price">{produto.price},00</text>
                                            <text>{carrinho.QtdProduto}</text>
                                            <div>
                                                <input onChange={event => this.setState({numero: event.target.value})} type="number" name="numero" value={numero} id="fom" class="form-control" placeholder={numero}/>
                                                <button onClick={event => this.adicionarQtdItem(event.target.value)} type="button" class="btn btn-outline-secondary" value={carrinho._id} >GO</button>
                                            </div>
                                            <text>{produto.price*carrinho.QtdProduto},00</text>
                                            <div id="badge">
                                            <button onClick={event => this.excluirItemCarrinho(event.target.value)} value={carrinho._id} type="button" class="btn btn-primary">
                                                Excluir <i class="fas fa-trash-alt"/>
                                            </button>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        ))}
                        <div className="info-price-total">
                            <text>Total:  {this.state.priceTotal},00</text>
                            <button  onClick={this.deleteAll} class="btn btn-warning">Finalizar Compra</button>
                        </div>
                </div>
            </div>
        );
    }
}