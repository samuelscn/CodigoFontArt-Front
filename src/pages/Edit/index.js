import React, { Component } from 'react';

import './styles.css';
import editGif from '../../img/edit.gif';
import api from '../../services/api';

export default class Edit extends Component {
    state = {
        armazena: {
            title: '',
            description: '',
            price: ''
        },
        produtoInfo: []
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/produtos/${id}`);

        this.setState({ produtoInfo: response.data });
        this.state.armazena.title = await this.state.produtoInfo.title;
        this.state.armazena.description = await this.state.produtoInfo.description;
        this.state.armazena.price = await this.state.produtoInfo.price;

    }

    submitHandler = async (e) => {

        if(this.state.armazena.title == '') {
            this.state.armazena.title = this.state.produtoInfo.title;
        }

        if(this.state.armazena.description == '') {
            this.state.armazena.description = this.state.produtoInfo.description;
        }

        if(this.state.armazena.price == '') {
            this.state.armazena.price = this.state.produtoInfo.price;
        }
        api.put(`/produtos/${this.state.produtoInfo._id}`, this.state.armazena);
        
    }


    render() {
        const { title } = this.state.armazena.title;
        const { description } = this.state.armazena.description;
        const { price } = this.state.armazena.price;
        return(
            <div className="body-edit">
                <div className="titulo">
                    <img src={editGif} />
                    <div>
                        <h1> EDITAR PRODUTO </h1>
                        <h3>{this.state.produtoInfo.title}</h3>
                    </div>
                    <img src={editGif} />
                </div>
                <form onSubmit={this.submitHandler}>
                    <label for="title">Titulo: </label>
                        <input onChange={event => this.state.armazena.title = event.target.value} value={title} type="text" name="title" class="form-control" placeholder={this.state.produtoInfo.title}/>
                    <label for="description">Descricao: </label>
                        <input onChange={event => this.state.armazena.description = event.target.value} value={description} type="text" name="description" class="form-control" placeholder={this.state.produtoInfo.description}/>
                    <label for="price">Preco: </label>    
                        <input onChange={event => this.state.armazena.price = event.target.value} value={price} type="number" name="price" class="form-control" placeholder={this.state.produtoInfo.price}/>
                        <br></br>
                    <button type="submit" class="btn btn-sucess">Finalizar Edição</button>
                </form>
            </div>
        )
    }
}