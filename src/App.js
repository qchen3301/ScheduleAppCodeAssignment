import React, { Component } from 'react'
import './App.css'
import Appointments from './components/Appointments'

export default class App extends Component {
  render() {
    return (
      <div>
        Hello World From Appointment App! Here is the home page <br/> <br/>
        <Appointments/>
      </div>
    )
  }
}