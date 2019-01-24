import React, { Component } from 'react'
import UserIDStore from '../store/UserIDStore'
import * as AppActions from "../actions/AppActions"
import BtnColorStore from '../store/BtnColorStore';
import btnColorStore from '../store/BtnColorStore';

export default class Appointments extends Component {
    state = {
        btnColor: btnColorStore.getAll(),
        userID: UserIDStore.getAll()
    }

    componentWillMount() {
      UserIDStore.on("change", () => {
        this.setState({userID: UserIDStore.getAll()})
      })
      BtnColorStore.on("change", ()=> {
        this.setState({btnColor: btnColorStore.getAll()})
      })
    }

    onButtonClick = (showModal,userID) => {
        AppActions.showHide(showModal)
        // this.setState({btnColor})
        this.setState({userID})
        // AppActions.setID(userID)
    }

    changeColor = (btnColor) => {
      return btnColor
    }

  render() {
    // styles buttons and triggers a change to the color red when a timeslot is reserved
    const reservedTimeSlot = {  
      backgroundColor: this.changeColor(),
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
          onClick={() => {this.onButtonClick(true, 1); this.changeColor("red")}}
          style = {{backgroundColor:this.changeColor()}} > 9 AM </button>  
        {/* <button 
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
          style = {reservedTimeSlot}>5 PM</button> */}
      </div>
    )
  }
}
