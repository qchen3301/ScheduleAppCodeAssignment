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

        <UserModal show={this.state.modalVisible}/>
        <button style={{background: this.state.btnColor}} onClick={this.alertTest}>9 AM</button>
        <button>10 AM</button>
        <button>11 AM</button>
        <button>12 PM Noon</button>
        <button>1 PM</button>
        <button>2 PM</button>
        <button>3 PM</button>
        <button>4 PM</button>
        <button>5 PM</button> 
      </div>
    )
  }
}
