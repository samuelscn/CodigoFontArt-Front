import React, {Component} from "react";
import { Alert } from 'reactstrap';
import api from '../../services/api';

import './styles.css';

export default class CriarProduto extends Component {
    state = {
        armazena: {
            title: '',
            description: '',
            price: ''
        },
        visible: false,
        produtos: []
    }

    async componentDidMount() {
        const response = await api.get("/todosprodutos");

        this.setState({ produtos: response.data });
    }

    submitHandler = async (e) =>  {
        e.preventDefault();

        if(this.state.armazena.title == '') {
            this.setState({ visible: true });
        }
        if(this.state.armazena.description == '') {
            this.setState({ visible: true });
        }
        if(this.state.armazena.price == '') {
            this.setState({ visible: true });
        }
        if(this.state.armazena.title != '' && this.state.armazena.description != '' && this.state.armazena.price != '') {
            await api.post("/produtos", this.state.armazena);
            window.location.href = "http://localhost:3000/alertsucess";
        }
    }

    navegar = () => {
        if(this.state.produtos.length == 0) {
            window.location.href = "http://localhost:3000/noproduct";
        }else {
            window.location.href = "http://localhost:3000/editarprodutos";
        }
    }

    close = () => {
        this.setState({ visible: false });
    }

    render() {
        const { title } = this.state.armazena.title;
        const { description } = this.state.armazena.description;
        const { price } = this.state.armazena.price;
        return(
            <div className="body-cria-produto">
                <div className="button-editar-produto">
                    <button onClick={this.navegar} class="btn btn-warning">
                        Editar Produtos
                    </button>
                </div>
                <Alert class="alert alert-warning"  isOpen={this.state.visible} toggle={this.close}>Preencha todos os campos!</Alert>
                <div class="card-body">
                    <form onSubmit={this.submitHandler}>
                        <label for="title">Titulo: </label>
                            <input onChange={event => this.state.armazena.title = event.target.value} value={title} type="text" name="title" class="form-control" placeholder="Title"/>
                        <label for="description">Descricao: </label>
                            <input onChange={event => this.state.armazena.description = event.target.value} value={description} type="text" name="description" class="form-control" placeholder="Description"/>
                        <label for="price">Preco: </label>    
                            <input onChange={event => this.state.armazena.price = event.target.value} value={price} type="number" name="price" class="form-control" placeholder="Price"/>
                            <br></br>
                    <button type="submit" class="btn btn-sucess">Criar Produto</button>
                    </form>
                </div>
            </div>
        );
    }
}