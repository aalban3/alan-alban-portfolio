import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Portfolio from "./component/Portfolio";
import CaseStudy from "./component/CaseStudy";
import dashdoc from "./caseStudies/dashdoc";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/work/dashdoc">
          <CaseStudy study={dashdoc} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
