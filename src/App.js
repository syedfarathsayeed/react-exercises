import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Countries,
  HexadecimalColorTable,
  HolidayDestination,
  ImageCard,
  IntroCard,
  NumberGenerator,
  PopulationCard,
  Portfolio,
  SubscribeCard,
  TimesOfDay,
} from "./exercises";
import Mainscene from "./Mainscene";

const NotFound = () => <h1>Page not found</h1>

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Mainscene} />
        <Route path="/exercise-1" component={ImageCard} />
        <Route path="/exercise-2" component={IntroCard} />
        <Route path="/exercise-3" component={SubscribeCard} />
        <Route path="/exercise-4" component={NumberGenerator} />
        <Route path="/exercise-5" component={HexadecimalColorTable} />
        <Route path="/exercise-6" component={PopulationCard} />
        <Route path="/exercise-7" component={Portfolio} />
        <Route path="/exercise-8" component={HolidayDestination} />
        <Route path="/exercise-9" component={TimesOfDay} />
        <Route path="/exercise-10" component={Countries} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
