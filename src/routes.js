import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Agenda from "./Pages/Agenda";
import Post from "./Pages/Post";
import Noticias from "./Pages/Noticias";
import Eventos from "./Pages/Eventos";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/post/:id" component={Post} />
      <Route exact path="/agenda" component={Agenda} />
      <Route exact path="/noticias" component={Noticias} />
      <Route exact path="/eventos" component={Eventos} />
      <Route
        path="*"
        component={() => {
          return <h1>Página não encontrada</h1>;
        }}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
