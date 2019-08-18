import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Typer from "./components/Typer";
import Stats from "./components/Stats";
import Exercise from "./components/Exercise";

class App extends Component {
  state = {
    stage: 1,
    trainingPhase: false
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        {this.checkStage()}
      </React.Fragment>
    );
  }
  checkStage() {
    if (this.state.stage === 2) {
      return <Typer />;
    } else if (this.state.stage === 3) {
      return <Stats />;
    } else if (this.state.stage === 4) {
      return <Exercise />;
    } else {
      return <Instructions />;
    }
  }
}

export default App;
