import React, { Component } from "react";
export default class Form extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  };

  render() {
    return (
      <form>
        <input
          type="text"
          id="firstName"
          onChange={event => this.handleFirstNameChange(event)}
          value={this.state.firstName}
        />
        <input
          type="text"
          id="lastName"
          onChange={event => this.handleLastNameChange(event)}
          value={this.state.lastName}
        />
      </form>
    );
  }
}
this.handleFirstNameChange = event => {
  this.setState({
    firstName: event.target.value
  });
};

this.handleLastNameChange = event => {
  this.setState({
    lastName: event.target.value
  });
};
