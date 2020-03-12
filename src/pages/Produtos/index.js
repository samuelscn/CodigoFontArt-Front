import React, {Component} from "react";
import api from '../../services/api';
import { Link } from 'react-router-dom';

import imagemProduto from '../../img/placapixel.jpg';
import imagemteste from "../../img/zelda.jpg";
import imagemgyph from "../../img/giphy.jpg";

import './styles.css'

export default class Produtos extends Component {
    state = {
        produto: {},
        produtos: [],
        produtoInfo: {},
        page: 1,
        qtdy: 1,
        id: '',
        todoCarrinho: [],
        armazena: {
            ArrayId: '',
            QtdProduto: ''
        }
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/produtos/${id}`);
        const resposta = await api.get("/todoscarrinho");
    
        this.setState({ todoCarrinho: resposta.data });
        this.setState({ produto: response.data });
        this.setState({ id: id });
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

    criandoCarrinho = async (event) => {
        event.preventDefault();

        this.state.armazena.ArrayId = await this.state.id;
        this.state.armazena.QtdProduto = await this.state.qtdy;

        var QtdProduto;
        var aux;
        var idCarrinho;

        await this.state.todoCarrinho.map(carrinho => {
            if(this.state.armazena.ArrayId === carrinho.ArrayId) {
                QtdProduto = carrinho.QtdProduto + 1;
                aux = 0;
                idCarrinho = carrinho._id;
            }
        });

        if(aux === 0) {
            api.put(`/carrinho/${idCarrinho}`, [QtdProduto]);
            window.location.href = "http://localhost:3000/carrinho";
        }else {
            api.post("/carrinho",  this.state.armazena );
            window.location.href = "http://localhost:3000/carrinho";
        }
    };

    render() {
        const { produto } = this.state;
        const { produtos } = this.state;

        return(
            <div>
                <div id="Produto-Definicao">
                    <div id="imagem-produto">
                        <img src={imagemgyph}/>
                        <div id="informacao-produto">
                            <h1> {produto.title} </h1>
                            <p> Por R$ {produto.price},00 </p>
                            <p> ou apenas </p>
                            <p> 6X DE R$ {produto.price/6},00 </p>
                            <div className="btn btn-sucess">Frete Grátis</div>
                            <br></br>
                            <button onClick={this.criandoCarrinho} className="btn btn-warning">Adicionar ao Carrinho</button>
                        </div>
                    </div>
                </div>
                <br></br>
                <div id="definicao">
                    <h3>Definição</h3>
                    <p>{produto.description} </p>
                    <br></br>        
                    <h5>Garantia</h5>
                    <p>Para assegurar sua compra, nós checamos, conferimos e testamos todos
                         os produtos antes de serem cadastrados para venda. 
                         Oferecemos garantia de 3 meses.
                    </p>
                    <br></br>
                    <h5>Todas as imagens são meramente ilustrativas.</h5>
                    <p>Como o produto já foi usado, nós temos diferentes unidades dele e a conservação pode variar de unidade pra unidade (a embalagem original pode conter pequenos danos de tempo), mas isso não muda o fato do produto ser original e estar em excelente estado.</p>
                </div>
                <br></br>
                <div id="texto">
                    <text>Aproveite e veja também</text>
                </div>
                <br></br>
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
