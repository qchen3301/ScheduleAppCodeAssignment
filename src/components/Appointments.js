import React, { Component } from 'react'
import UserModal from './UserModal'


export default class Appointments extends Component {
    alertTest = () => {
        alert("Button clicked!")
    }
  render() {
    return (
      <div>
        Hello World from Appointments Component! <br />
        Select Your Appointment Time Below <br />
        <UserModal/>
        <button onClick={this.alertTest}>9 AM</button>
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
