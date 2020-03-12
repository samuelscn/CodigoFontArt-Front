import React, { Component } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';

import imagemteste from "../../img/zelda.jpg";
import "./styles.css"

export default class Main extends Component {
    state = {
      produtos: [],
      produtoInfo: {},
      page: 1
    };

    componentDidMount() {
        this.loadProdutos();
    }

    loadProdutos = async (page = 1) => {
        const response = await api.get(`/produtos?page=${page}`);

        const { docs, ...produtoInfo } = response.data;

        this.setState({ produtos: docs, produtoInfo, page });
    };

    prevPage = () => {
        const { page, produtoInfo } = this.state;

        if ( page === 1 ) {
            return;
        }

        const pageNumber = page - 1;

        this.loadProdutos(pageNumber);
    };

    nextPage = () => {
        const { page, produtoInfo } = this.state;

        if ( page === produtoInfo.pages ) return;

        const pageNumber = page + 1;

        this.loadProdutos(pageNumber);
    };

    render() {
        const { produtos } = this.state;
        return (
            <div id="main">
                <div id="Box-Decoration">
                    <p>MAIS VENDIDOS</p>
                </div>
                <div id="box">
                    <div id="actions">
                        <button className="next-button" onClick={this.prevPage}><i className="fas fa-angle-double-left"></i></button>
                    </div>
                    {produtos.map(produto => (
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
                    ))}
                    <div id="actions">
                        <button className="next-button" onClick={this.nextPage}><i className="fas fa-angle-double-right"></i></button>
                    </div>
                </div>
                <div id="Box-Decoration">
                    <p>PRODUTOS QUE BAIXARAM DE PREÇO</p>
                </div>
                <div id="box">
                    <div id="actions">
                        <button className="next-button" onClick={this.prevPage}><i className="fas fa-angle-double-left"></i></button>
                    </div>
                    {produtos.map(produto => (
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
                    ))}
                    <div id="actions">
                        <button className="next-button" onClick={this.nextPage}><i className="fas fa-angle-double-right"></i></button>
                    </div>
                </div>
                <div id="Box-Decoration">
                    <p>DICAS DA CODIGO FONT ART</p>
                </div>
                <div id="box">
                    <div id="actions">
                        <button className="next-button" onClick={this.prevPage}><i className="fas fa-angle-double-left"></i></button>
                    </div>
                    {produtos.map(produto => (
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
                    ))}
                    <div id="actions">
                        <button className="next-button" onClick={this.nextPage}><i className="fas fa-angle-double-right"></i></button>
                    </div>
                </div>
            </div>
        );
    }
}
