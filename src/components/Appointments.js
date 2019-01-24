import React, { Component } from 'react'
import UserIDStore from '../store/UserIDStore'
import BtnColorStore from '../store/BtnColorStore'
import * as AppActions from "../actions/AppActions"
import * as UserIDActions from '../actions/UserIDActions'
import * as BtnColorActions from '../actions/BtnColorActions'

export default class Appointments extends Component {
    state = {
        btnColor: BtnColorStore.getAll(),
        userID: UserIDStore.getAll()
    }

    componentWillMount() {
      UserIDStore.on("change", () => {
        this.setState({userID: UserIDStore.getAll()})
      })
      BtnColorStore.on("change", ()=> {
        this.setState({btnColor: BtnColorStore.getAll()})
      })
    }

    onButtonClick = (showModal,userID, reserved) => {
        AppActions.showHide(showModal)
        UserIDActions.getID(userID)
        BtnColorActions.reserveTime(reserved)
        console.log(this.state.userID)
        // AppActions.setID(userID)
    }

  render() {
    // styles buttons and triggers a change to the color red when a timeslot is reserved
    const reservedTimeSlot = {  
      backgroundColor: this.state.btnColor,
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

        <button
          onClick={() => {this.onButtonClick(true, 1, "red")}}
           style={reservedTimeSlot}> 9 AM </button>  
        <button 
          onClick={()=>this.onButtonClick(true, 2, "red")}
          style={reservedTimeSlot}> 10 AM </button>
        <button 
          onClick={()=>this.onButtonClick(true, 3, "red")}
          style={reservedTimeSlot}> 11 AM </button>
        <button 
          onClick={()=>this.onButtonClick(true, 4, "red")}
          style={reservedTimeSlot}>12 NOON</button>
        <button 
          onClick={()=>this.onButtonClick(true, 5, "red")}
          style={reservedTimeSlot}>1 PM</button>
        <button 
          onClick={()=>this.onButtonClick(true, 6, "red")}
          style={reservedTimeSlot}>2 PM</button>
        <button 
          onClick={()=>this.onButtonClick(true, 7, "red")}
          style={reservedTimeSlot}>3 PM</button>
        <button 
          onClick={()=>this.onButtonClick(true, 8, "red")}
          style={reservedTimeSlot}>4 PM</button>
        <button 
          onClick={()=>this.onButtonClick(true, 9, "red")}
          style={reservedTimeSlot}>5 PM</button>
      </div>
    )
  }
}
