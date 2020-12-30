import React, { Component } from "react";
import "../App.css";

class Control extends Component {
  render() {
    return (
      <div>
        <input
          type="button"
          value="create"
          onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode("create");
          }.bind(this)}
        ></input>

        <input
          type="button"
          value="update"
          onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode("update");
          }.bind(this)}
        ></input>

        <input
          onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode("delete");
          }.bind(this)}
          type="button"
          value="delete"
        ></input>
      </div>
    );
  }
}

export default Control;
