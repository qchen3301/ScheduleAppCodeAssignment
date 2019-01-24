import React, { Component } from 'react'
import UserModal from './UserModal'

export default class Users extends Component {
    state = {
        showComponent: false,
        userID: this.props.userID
    }
  render() {
      if (!this.state.showComponent) {
          return null
      }
    return (
      <div>
        <UserModal userID = {this.state.userID}/>
      </div>
    )
  }
}
