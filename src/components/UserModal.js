import React, { Component } from 'react'
import AppStore from "../store/AppStore"
import * as AppActions from "../actions/AppActions"
import styled from 'styled-components'

// const ModalBackgroundDiv = styled.div`
//     position: fixed;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     background-color: rgba(0,0,0,0.3);
//     padding: 50;
// `
// const ModalForm = styled.form`
//     background-color: black;
//     border-radius: 5;
//     max-width: 500;
//     min-height: 300;
//     margin: 0 auto;
//     padding: 30;
// `
export default class UserModal extends Component {

    state = {
        showModal: AppStore.getShowModal(),
        userId: AppStore.getUserId()
    }

    componentDidMount() {
        AppStore.on("modalToggled", this.showModal, this.getUserId)
        // AppStore.on("storeUpdated", this.getUserId)
    }

    componentWillUnMount() {
        AppStore.removeListener("modalToggled", this.showModal, this.getUserId)
        // AppStore.removeListener("storeUpdated", this.getUserId)
    }

    showModal = () => {
        this.setState({showModal: AppStore.getShowModal()})
    }

    setUserID = () => {
        this.setState({userId: AppStore.getUserId()})
    }

    onButtonClick = (showModal) => {
        AppActions.showHide(showModal)
    }

    // handleChange = (event) => {
    //     const userInfo = {...this.state.userInfo}
    //     userInfo[event.target.name] = event.target.value
    //     userInfo[event.target.phone] = event.target.value
    //     this.setState({userInfo})
    // }

    // handleSubmit = async (event) => {
    //     event.preventDefault()
    //     alert("!")
    //     this.setState({...this.state.userInfo})
    // }

  render() {
      if (!this.state.showModal) {
          return null
      }

    return (
      <div >
        Hello World from a User's Modal! <br />
        If all goes as planned you should see me <br />
        when a timeslot button is clicked <br />
        <button onClick={()=> this.onButtonClick(false)}>I'm done here. Take me awaaaay!!!</button>
        {/* <form onSubmit = {this.handleSubmit}>
            <input 
                type='text'
                name='name'
                placeholder='Enter your name'
                value={this.state.userInfo.name}
                onChange={this.handleChange}
                /><br/>
            <input 
                type='text'
                name='phone'
                placeholder='Enter your phone number'
                value={this.state.userInfo.phone}
                onChange={this.handleChange}
                /> <br/>
            <input type='submit' value='Save the date (or else)'/>
            <button onClick={this.props.onClose}>Cancel</button>
        </form> */}
      </div>
    )
  }
}