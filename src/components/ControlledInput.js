// Code ControlledInput Component Here
import React, { Component } from "react";

class ControlledInput extends Component {
  state = {
    value: ""
  };

  // update the state in response to any changes made by the user.  Can apply validations before this happens
  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  // entire state object can be sent wherever its content is needed
  handleSubmit = event => {
    event.preventDefault();

    // this.sendFormSomewhere(this.state)
  };

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default ControlledInput;
