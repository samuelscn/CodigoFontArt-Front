import React from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from './pages/main';
import Produtos from "./pages/Produtos";
import Carrinho from './pages/Carrinho';
import CriarProduto from './pages/CriarProduto';
import NotFound from './pages/NotFound';
import Pesquisa from './pages/Pesquisa';
import NotCart from './pages/NotCart';
import AlertSucess from './pages/Alert';
import AlertError from './pages/AlertError';
import Checkout from './pages/Checkout';
import EditarProdutos from './pages/EditarProdutos';
import Edit from './pages/Edit';
import NoProduct from './pages/NoProduct';

const Routes = () => (
  <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/produtos/:id" component={Produtos}/>
          <Route path="/carrinho" component={Carrinho}/>
          <Route path="/criarproduto" component={CriarProduto}/>
          <Route path="/notfound" component={NotFound} />
          <Route path="/pesquisa/:title" component={Pesquisa} />
          <Route path="/notcart" component={NotCart} />
          <Route path="/alertsucess" component={AlertSucess} />
          <Route path="/alerterror" component={AlertError} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/editarprodutos" component={EditarProdutos} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/noproduct" component={NoProduct} />
      </Switch>
  </BrowserRouter>
);

export default Routes;
