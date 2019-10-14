import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Landing} from "./Containers/Landing";
import Routes from "./Utils/Routes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Landing} exact path={Routes.Landing}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
