import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Landing } from './Containers/Landing';
import Routes from './Utils/Routes';
import Products from './Containers/Products';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Landing} exact path={Routes.Landing} />
        <Route component={Products} exact path={Routes.Products} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
