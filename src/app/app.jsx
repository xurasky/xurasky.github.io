import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "../components/navigation";
import paths from "./paths";

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        {paths.map((item, index) => {
          return <Route exact key={index} path={item.path} component={item.component} />;
        })}
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
