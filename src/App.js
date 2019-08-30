import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Typer from "./components/Typer";
import Stats from "./components/Stats";
import Exercise from "./components/Exercise";
import Fan from "./images/Fan1.png";

{
  /* <link
  href="https://fonts.googleapis.com/css?family=Muli&display=swap"
  rel="stylesheet"
/>; */
}

class App extends Component {
  state = {
    stage: 1,
    trainingPhase: false,
    settings: {
      selectedTextType: "",
      quantity: ""
    }
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <img src={Fan} alt="fan" width="30%" />
        {this.checkStage()}
      </React.Fragment>
    );
  }
  checkStage() {
    if (this.state.stage === 2) {
      return <Typer settings={this.state.settings} />;
    } else if (this.state.stage === 3) {
      return <Stats />;
    } else if (this.state.stage === 4) {
      return <Exercise />;
    } else {
      return <Instructions onSettings={this.handleSettings} />;
    }
  }

  handleSettings = (txt, quant) => {
    this.setState({
      settings: {
        selectedTextType: txt,
        quantity: quant
      },
      stage: 2
    });
  };
}

export default App;
