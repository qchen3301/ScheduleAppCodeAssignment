import React, { Component } from 'react'
import * as AppActions from "../actions/AppActions"

export default class Appointments extends Component {
    state = {
        btnColor: ['red','','','','','','','',''],
        userID: 0
    }

    onButtonClick = (showModal,btnColor,userID) => {
        AppActions.showHide(showModal)
        this.setState({btnColor})
        this.setState({userID})
        // AppActions.setID(userID)
    }

  render() {
    // styles buttons and triggers a change to the color red when a timeslot is reserved
    const reservedTimeSlot = {  
      backgroundColor: this.state.btnColor.id,
      border: 'none',
      color: 'black',
      padding: '15px 32px',
      fontSize: '16px',
      margin: '4px 2px',
      textAlign: 'center',
      display: 'inline-block'
    }

    return (
      <div>
        Hello World from Appointments Component! <br />
        Select Your Appointment Time Below <br />

        <button id = {0}
          onClick={()=>this.onButtonClick(true, "red", 1)}
          style = {reservedTimeSlot} >9 AM</button>  
        <button 
          onClick={()=>this.onButtonClick(true, "red", 2)}
          style = {reservedTimeSlot} > 10 AM </button>
        <button 
          onClick={()=>this.onButtonClick(true, "red", 3)}
          style = {reservedTimeSlot}> 11 AM </button>
        <button 
          onClick={()=>this.onButtonClick(true, "red", 4)}
          style = {reservedTimeSlot}>12 NOON</button>
        <button 
          onClick={()=>this.onButtonClick(true, "red", 5)}
          style = {reservedTimeSlot}>1 PM</button>
        <button 
          onClick={()=>this.onButtonClick(true, "red", 6)}
          style = {reservedTimeSlot}>2 PM</button>
        <button 
          onClick={()=>this.onButtonClick(true, "red", 7)}
          style = {reservedTimeSlot}>3 PM</button>
        <button 
          onClick={()=>this.onButtonClick(true, "red", 8)}
          style = {reservedTimeSlot}>4 PM</button>
        <button 
          onClick={()=>this.onButtonClick(true, "red", 9)}
          style = {reservedTimeSlot}>5 PM</button>
      </div>
    )
  }
}
