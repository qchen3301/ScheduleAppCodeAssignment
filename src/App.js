import React, { Component } from 'react'
import './App.css'
import Appointments from './components/Appointments'
import UserModal from './components/UserModal'


export default class App extends Component {
  render() {
    return (
      <div>
        Hello World From Appointment App! Here is the home page <br/> <br/>
        <Appointments/>
        <UserModal />
      </div>
    )
  }
}