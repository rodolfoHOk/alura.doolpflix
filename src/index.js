import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import EditarCategoria from './pages/cadastro/EditarCategoria';

const Pagina404 = () => (<div> Página Erro 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/cadastro/editarcategoria" component={EditarCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
