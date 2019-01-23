import React, { Component } from 'react'
import styled from 'styled-components'

const ModalDiv = styled.div`
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`
const ModalContent = styled.div`
    background-color: #fefefe;
    color: blue;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
`

const SubmitButton = styled.button`
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
`


export default class UserModal extends Component {
  render() {
    return (
      <ModalContent>
        Hello World from a User's Modal! <br />
        If all goes as planned you should see me <br />
        when a timeslot button is clicked <br />
        <form>
            <label>Name</label>
            <input type='text'/>
            <label>Phone Number (no dashes)</label>
            <input type='text'/> <br/>
            <button>Confirm Your Appointment</button> 
            <button>Cancel</button>
        </form>
      </ModalContent>
    )
  }
}
