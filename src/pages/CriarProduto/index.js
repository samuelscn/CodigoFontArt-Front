import React, {Component} from "react";

import api from '../../services/api';

export default class CriarProduto extends Component {
    state = {
        title: '',
        description: '',
        price: ''
    }

    submitHandler = async (event) =>  {
        await api.post("/produtos", this.state);
        window.location.href = "http://localhost:3000/alertsucess";
    }

    render() {
        const {title, description, price} = this.state
        return(
            <div className="body-cria-produto">
                <div class="card-body">
                    <form onSubmit={this.submitHandler}>
                        <label for="title">Titulo: </label>
                            <input onChange={event => this.setState({title: event.target.value})} value={title} type="text" name="title" class="form-control" placeholder="Title"/>
                        <label for="description">Descricao: </label>
                            <input onChange={event => this.setState({description: event.target.value})} value={description} type="text" name="description" class="form-control" placeholder="Description"/>
                        <label for="price">Preco: </label>    
                            <input onChange={event => this.setState({price: event.target.value})} value={price} type="number" name="price" class="form-control" placeholder="Price"/>
                            <br></br>
                    <button type="submit" class="btn btn-sucess">Criar Produto</button>
                    </form>
                </div>
            </div>
        );
    }
}