import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Erro from './pages/Erro';
import Filme from './pages/Filme';

import Header from './components/Header';

const routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/filme/:id" component={Filme} />
                <Route path="*" component={Erro} />
            </Switch>
        </BrowserRouter>
    );
}

export default routes;