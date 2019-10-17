import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Landing } from './Containers/Landing';
import Routes from './Utils/Routes';
import Products from './Containers/Products';
import CheckOut from './Containers/CheckOut';
import AddToCart from './Containers/AddToCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Landing} exact path={Routes.Landing} />
        <Route component={Products} exact path={Routes.Products} />
        <Route component={CheckOut} exact path={Routes.CheckOut} />
        <Route component={AddToCart} exact path={Routes.AddToCart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
