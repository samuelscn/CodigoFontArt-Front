import React, { Component }  from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import "./styles.css";

import imagemteste from '../../img/giphy.jpg';

export default class EditarProdutos extends Component {
    state = {
        todosProdutos: []
    }

    async componentDidMount() {
        const response = await api.get("/todosprodutos");

        this.setState({ todosProdutos: response.data });
    }

    excluirProduto = (event) => {
        api.delete(`/produtos/${event}`);
        window.location.href = "http://localhost:3000";
    }

    render() {
        return(
            <div className="body-editar">
                {this.state.todosProdutos.map(produto => (
                    <div className="container">
                        <article key={produto._id}>
                                <div className="card text-center">
                                    <img className="card-img-top" src={imagemteste}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{produto.title}</h5>
                                        <p className="card-text">Description...</p>
                                        <p className="card-text">R$ {produto.price},00</p>
                                        <Link to={`/edit/${produto._id}`} className="btn btn-warning">
                                            <i class="fas fa-pencil-alt"/>   
                                        </Link>
                                        <button onClick={event => this.excluirProduto(event.target.value)} value={produto._id} className="btn btn-danger">
                                            <i class="fas fa-trash-alt"/>   
                                        </button>
                                    </div>
                                </div>
                        </article>
                    </div>
                ))}
            </div>
        )
    }
}
