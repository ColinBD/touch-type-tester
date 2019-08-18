import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Instructions extends Component {
  state = {
    selectedTextType: "",
    quantity: ""
  };

  render() {
    return (
      <React.Fragment>
        <p>What do you want to type?</p>
        <Button
          id="Design"
          className={this.getBtnTxtTypeClassName("Design")}
          onClick={this.setBtnClassName}
        >
          Design
        </Button>
        <Button
          id="Movies"
          className={this.getBtnTxtTypeClassName("Movies")}
          onClick={this.setBtnClassName}
        >
          Movie
        </Button>
        <Button
          id="News"
          className={this.getBtnTxtTypeClassName("News")}
          onClick={this.setBtnClassName}
        >
          News
        </Button>
        <Button
          id="Harry Potter"
          className={this.getBtnTxtTypeClassName("Harry Potter")}
          onClick={this.setBtnClassName}
        >
          Harry Potter
        </Button>
        <p>How much typing do you want?</p>
        <Button
          id="Small"
          className={this.getBtnQuantClassName("Small")}
          onClick={this.setBtnQuantClassName}
        >
          Small
        </Button>
        <Button
          id="Medium"
          className={this.getBtnQuantClassName("Medium")}
          onClick={this.setBtnQuantClassName}
        >
          Medium
        </Button>
        <Button
          id="Large"
          className={this.getBtnQuantClassName("Large")}
          onClick={this.setBtnQuantClassName}
        >
          Large
        </Button>
        <p>{this.showGoButton()}</p>
      </React.Fragment>
    );
  }

  showGoButton = () => {
    if (this.state.selectedTextType !== "" && this.state.quantity !== "") {
      return <Button className="btn btn-lg">GO</Button>;
    }
  };

  getBtnTxtTypeClassName = btn => {
    let cName = "btn btn-success m-2 ";
    if (this.state.selectedTextType === btn) {
      cName += "disabled";
    }
    return cName;
  };

  setBtnClassName = e => {
    if (e.target.id !== this.state.selectedTextType) {
      //we are selecting the button
      this.setState({
        selectedTextType: e.target.id
      });
    }
  };
  getBtnQuantClassName = btn => {
    let cName = "btn btn-success m-2 ";
    if (this.state.quantity === btn) {
      cName += "disabled";
    }
    return cName;
  };

  setBtnQuantClassName = e => {
    if (e.target.id !== this.state.selectedTextType) {
      //we are selecting the button
      this.setState({
        quantity: e.target.id
      });
    }
  };
}

export default Instructions;
