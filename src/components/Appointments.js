import React, { Component } from 'react'
import UserIDStore from '../store/UserIDStore'
import BtnColorStore from '../store/BtnColorStore'
import * as AppActions from "../actions/AppActions"
import * as UserIDActions from '../actions/UserIDActions'
import * as BtnColorActions from '../actions/BtnColorActions'

export default class Appointments extends Component {
    state = {
        btnColor: "", 
        userID: 0 //userId instansiated as 0 - buttons will override these to 1-9 
    }

    //retrieves initial data from store
    componentWillMount() {
      UserIDStore.on("change", () => {
        this.setState({userID: UserIDStore.getAll()})
      })
      BtnColorStore.on("change", ()=> {
        this.setState({btnColor: BtnColorStore.getAll()})
      })
    }

    onButtonClick = (showModal,userID) => {
        AppActions.showHide(showModal) //toggles display of modal
        UserIDActions.getID(userID) //overrides values of UserID store
        BtnColorActions.reserveTime("red") //overrides values of BtnColorStore, changing button color to red upon click
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
          onClick={() => {this.onButtonClick(true, 1)} }
          style={reservedTimeSlot}> 9 AM </button>  
        <button 
          onClick={()=>this.onButtonClick(true, 2)}
          style={reservedTimeSlot}> 10 AM </button>
        <button 
          onClick={()=>this.onButtonClick(true, 3)}
          style={reservedTimeSlot}> 11 AM </button>
        <button 
          onClick={()=>this.onButtonClick(true, 4)}
          style={reservedTimeSlot}>12 NOON</button>
        <button 
          onClick={()=>this.onButtonClick(true, 5)}
          style={reservedTimeSlot}>1 PM</button>
        <button 
          onClick={()=>this.onButtonClick(true, 6)}
          style={reservedTimeSlot}>2 PM</button>
        <button 
          onClick={()=>this.onButtonClick(true, 7)}
          style={reservedTimeSlot}>3 PM</button>
        <button 
          onClick={()=>this.onButtonClick(true, 8)}
          style={reservedTimeSlot}>4 PM</button>
        <button 
          onClick={()=>this.onButtonClick(true, 9)}
          style={reservedTimeSlot}>5 PM</button>
      </div>
    )
  }
}
