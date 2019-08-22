import React, { Component } from "react";
import styles from "./TextBox.module.css";

class TextBox extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          borderStyle: "solid",
          borderRadius: "10px",
          borderColor: "grey",
          width: "100%",
          minHeight: "300px",
          fontSize: "1.5em",
          padding: "20px"
        }}
      >
        <span className={styles.pre}>{this.props.str.pre}</span>
        <span className={styles.selectedChar}>{this.props.str.curr}</span>
        {this.props.str.post}
      </div>
    );
  }
}

export default TextBox;
