import React from 'react'

class ControlledInput extends React.Component {

  state = {
    value: " ",
  }

  handleFormChange = event => {
    this.setState({
      value: event.target.value,
    })
  }

  handleFormSubmit = event => {
  event.preventDefault()
  this.sendFormDataSomewhere(this.state)
  }

  render (){
    return (
      <form onSubmit = {event => this.handleFormSubmit(event)}>
      <input
      type = "text"
      value = {this.state.value}
      onChange = {this.handleFormChange}
      />
      </form>
    ) }
}

export default ControlledInput
