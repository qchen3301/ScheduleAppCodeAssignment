import React, { Component } from 'react'
import * as AppActions from "../actions/AppActions"

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
    toggleModal = () => {
        this.setState({modalVisible: !this.state.modalVisible})
    }

    onButtonClick = (showModal) => {
        AppActions.showHide(showModal)
    }

  render() {

    return (
      <div>
        Hello World from Appointments Component! <br />
        Select Your Appointment Time Below <br />

        <button onClick={()=> this.onButtonClick(true)}>
            9AM Show Modal
        </button>

        {/* <button onClick={this.toggleModal}>Open Modal</button>
        <UserModal 
            show={this.state.modalVisible} 
            onClose={this.toggleModal}
            modalVisible = {this.state.modalVisible}/> */}
      </div>
    )
  }
}
