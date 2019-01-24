import React, { Component } from 'react'
import styled from 'styled-components'

// const ModalContent = styled.div`
//     background-color: #fefefe;
//     color: blue;
//     margin: auto;
//     padding: 20px;
//     border: 1px solid #888;
//     width: 80%;
// `

export default class UserModal extends Component {

    state = {
        userInfo: {
            name:'',
            phone:''
        }
    }

    handleChange = (event) => {
        const userInfo = {...this.state.userInfo}
        userInfo[event.target.name] = event.target.value
        userInfo[event.target.phone] = event.target.value
        this.setState({userInfo})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        alert("!")
    }
  render() {
    return (
      <div>
        Hello World from a User's Modal! <br />
        If all goes as planned you should see me <br />
        when a timeslot button is clicked <br />
        <form onSubmit = {this.handleSubmit}>
            <input 
                type='text'
                name='name'
                placeholder='Enter your name'
                value={this.state.userInfo.name}
                onChange={this.handleChange}
                required/><br/>
            <input 
                type='text'
                name='phone'
                placeholder='Enter your phone number'
                value={this.state.userInfo.phone}
                onChange={this.handleChange}
                required/> <br/>
            <input type='submit' value='Save the date (or else)'/>
            <button>Cancel</button>
        </form>
      </div>
    )
  }
}
