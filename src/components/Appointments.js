import React, { Component } from 'react'
import * as AppActions from "../actions/AppActions"

export default class Appointments extends Component {
    // state = {
    //     modalVisible: false,
    //     clicks: 0,
    //     btnColor: 'blue'
    // }

    onButtonClick = (showModal) => {
        AppActions.showHide(showModal)
    }


  render() {

    return (
      <div>
        Hello World from Appointments Component! <br />
        Select Your Appointment Time Below <br />

        <button onClick={()=> this.onButtonClick(true)}> 9AM </button>
        <button onClick={()=>this.onButtonClick(true)}> 10 AM </button>
        <button onClick={()=>this.onButtonClick(true)}> 11 AM </button>
        <button onClick={()=>this.onButtonClick(true)}> 12 AM </button>
        <button onClick={()=>this.onButtonClick(true)}> 1 PM </button>
        <button onClick={()=>this.onButtonClick(true)}> 2 PM </button>
        <button onClick={()=>this.onButtonClick(true)}> 3 PM </button>
        <button onClick={()=>this.onButtonClick(true)}> 4 PM </button>
        <button onClick={()=>this.onButtonClick(true)}> 5 PM </button>
      </div>
    )
  }
}
