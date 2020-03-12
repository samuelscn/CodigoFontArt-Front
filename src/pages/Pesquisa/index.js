import React, { Component } from 'react';

import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

import imagemteste from '../../img/giphy.jpg'

export default class Pesquisa extends Component {
    
    state = {
        produtos: [],
        titulo: ''
    };

    componentDidMount() {
        const title = this.props.match.params.title;

        this.setState({ titulo: title});

        this.loadProdutos();
    }

    loadProdutos = async () => {
        const response = await api.get("/todosprodutos");

        this.setState({ produtos: response.data });
    }
    
    render() {
        var aux = 0;
        return(
            <div className="body-pesquisa">
                <div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-secondary" type="button">Ordenar Por</button>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">Lower Price</option>
                            <option value="2">High Price</option>
                        </select>
                    </div>
                    <div className="box">
                        {this.state.produtos.map(produto => {
                            if(produto.title === this.state.titulo) {
                                return(
                                    <article key={produto._id}>
                                        <div className="card text-center">
                                            <img className="card-img-top" src={imagemteste}/>
                                            <div className="card-body">
                                                <h5 className="card-title">{produto.title}</h5>
                                                <p className="card-text">Por R$ {produto.price},00 <br/> ou apenas <br/> 3x de R${produto.price/3},00</p>
                                                <Link to={`/produtos/${produto._id}`} className="btn btn-warning">COMPRAR</Link>
                                            </div>
                                        </div>
                                    </article>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        );
    }
}