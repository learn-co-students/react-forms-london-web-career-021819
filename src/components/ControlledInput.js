import React, { Component } from 'react';

class Form extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form>
        <input type="text" name="firstName" onChange={e => this.handleChange(e)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={e => this.handleChange(e)} value={this.state.lastName} />
      </form>
    );
  }

}

export default Form
