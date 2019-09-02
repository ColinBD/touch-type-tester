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

  componentDidMount() {
    /*
    CALCULATE AND SET POSITION OF FAN
    original image:
      height: 1167px
      width: 3021px
      fan pos from centre: 1010px
      fan pos from top: 248px

    Do: 
    //1010/1167 * innerHeight = num pixels fan should be from center
    (innerWidth/2) - (1010/1167 * innerHeight) = fan's left position 

    248/1167 * innerHeight = num pixels fan should be from top
    */

    //calculate then set the fan's size via width prop
    console.log("scaler", window.innerHeight);
    const width = (window.innerHeight / 550) * 200;
    document.getElementsByClassName("fan")[0].style.width = "" + width + "px";

    //calculate then set fan's left position
    const offsetLeft = 80;
    const left =
      window.innerWidth / 2 - ((1010 - offsetLeft) / 1167) * window.innerHeight;
    document.getElementsByClassName("fan")[0].style.left = "" + left + "px";

    //calculate then set fan's top position
    const top = (255 / 1167) * window.innerHeight;
    document.getElementsByClassName("fan")[0].style.top = "" + top + "px";

    if (window.innerWidth / window.innerHeight > 2.589) {
      console.log(
        "full image displayed",
        window.innerWidth / window.innerHeight
      );
    } else {
      console.log("image cropped", window.innerWidth / window.innerHeight);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="fanWrapper">
          <img src={Fan} alt="fan" className="fan" />
        </div>
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
