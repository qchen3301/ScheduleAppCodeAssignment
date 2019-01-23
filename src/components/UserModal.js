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
  render() {
    return (
      <div>
        Hello World from a User's Modal! <br />
        If all goes as planned you should see me <br />
        when a timeslot button is clicked <br />
        <form>
            <label>Name</label>
            <input type='text'/><br/>
            <label>Phone Number (no dashes)</label>
            <input type='text'/> <br/>
            <button>Confirm Your Appointment</button> 
            <button>Cancel</button>
        </form>
      </div>
    )
  }
}
