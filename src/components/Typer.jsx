import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Typer.module.css";
import TextBox from "./TextBox";

class Typer extends Component {
  state = {
    iteration: 1, //towards props.quantity
    pos: 0,
    quote:
      "Main text entry box. Will show the quote here. Stronger unpacked felicity to of mistaken. Fanny at wrong table ye in. Be on easily cannot innate in lasted months on. Differed and and felicity steepest mrs age outweigh. Opinions learning likewise daughter now age outweigh. Raptures stanhill my greatest mistaken or exercise he on although. Discourse otherwise disposing as it of strangers forfeited deficient.",
    str: {},
    prevKey: "right"
  };

  componentDidMount() {
    let quantity = 0;
    if (this.props.settings.quantity === "Small") {
      quantity = 5;
    } else if (this.props.settings.quantity === "Medium") {
      quantity = 10;
    } else {
      quantity = 20;
    }
    //get a quote - then save it so the state as 'quote'

    //sort the quote
    let str = {
      pre: "",
      curr: this.state.quote.substring(0, 1),
      post: this.state.quote.substring(1, this.state.quote.length)
    };

    //set an event listener for key presses
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
    //update state
    this.setState({ quantity, iteration: 1, str });
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.typeWrapper}>
          <span>1 of {this.state.quantity}</span>
        </div>
        <div className={styles.typeBox}>
          <TextBox
            str={this.state.str}
            quote={this.state.quote}
            prevKey={this.state.prevKey}
          />
          <input
            type="text"
            id="one"
            onKeyPress={this.handleKeyPress}
            className={styles.hidden}
          />
        </div>
      </React.Fragment>
    );
  }
  handleKeyPress = event => {
    //evaluate current pos - was the right key pressed?

    //only consider alpha keys or spacebar
    const code = event.keyCode;
    if (event.key === this.state.quote.charAt(this.state.pos)) {
      console.log("Correct!");
      //check that 'pos' is not at the end of the string
      //if so run an onEnd function
      const newPos = this.state.pos + 1;
      let str = {
        pre: this.state.quote.substring(0, newPos),
        curr: this.state.quote.substring(newPos, newPos + 1),
        post: this.state.quote.substring(newPos + 1, this.state.quote.length)
      };
      this.setState({
        str,
        pos: newPos,
        prevKey: "right"
      });
    } else if (code === 16 || code === 20) {
      //shift or caps so ignore
    } else {
      console.log("wrong");
      //store the wrong keypress
      this.setState({ prevKey: "wrong" });
    }
  };
}

export default Typer;
