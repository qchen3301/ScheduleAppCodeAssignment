import React, { Component } from 'react'
import * as AppActions from "../actions/AppActions"

export default class Appointments extends Component {
    state = {
        userID: 0,
        btnColor: ""
    }

    onButtonClick = (showModal, btnColor, userID) => {
        AppActions.showHide(showModal)
        this.setState({btnColor})
        this.setState({userID})
    }

  render() {

    return (
      <div>
        Hello World from Appointments Component! <br />
        Select Your Appointment Time Below <br />

        <button onClick={()=> this.onButtonClick(true, "red", 1)}> 9AM </button>
        <button onClick={()=> this.onButtonClick(true, "red", 2)}> 10AM </button>
        <button onClick={()=> this.onButtonClick(true, "red", 3)}> 11AM </button>
        <button onClick={()=> this.onButtonClick(true, "red", 4)}> 12 NOON </button>
        <button onClick={()=> this.onButtonClick(true, "red", 5)}> 1 PM </button>
        <button onClick={()=> this.onButtonClick(true, "red", 6)}> 2 PM </button>
        <button onClick={()=> this.onButtonClick(true, "red", 7)}> 3 PM </button>
        <button onClick={()=> this.onButtonClick(true, "red", 8)}> 4 PM </button>
        <button onClick={()=> this.onButtonClick(true, "red", 9)}> 5 PM </button>
      </div>
    )
  }
}
