import React, { Component } from 'react'
import UserModal from './UserModal'

export default class Appointments extends Component {
    state = {
        modalVisible: false,
        clicks: 0,
        btnColor: ''
    }

    setAppointment = () => {
        console.log("You clicked 9AM")
    }

    alertTest = () => {
        alert("Button clicked!")
        this.setState({
            clicks: this.state.clicks + 1,
            btnColor: "red",
            modalVisible: !this.state.modalVisible
        })

        console.log("You clicked 9AM " + this.state.clicks + " amount of times")
        console.log("The button color is now " + this.state.btnColor)
        console.log("Modal open? " + this.state.modalVisible)
    }

  render() {

    return (
      <div>
        Hello World from Appointments Component! <br />
        Select Your Appointment Time Below <br />
        {/* ternary in button tag triggers the modal */}
        <button 
            style={{background: this.state.btnColor}} 
            onClick={this.alertTest}>9 AM </button>
        <button 
            style={{background: this.state.btnColor}}
            onClick={this.alertTest}>10 AM </button>
        {this.state.modalVisible ? <UserModal/> : null}
      </div>
    )
  }
}
