import React, { Component } from 'react'
import AppStore from "../store/AppStore"
import * as AppActions from "../actions/AppActions"
import * as UserInfoActions from "../actions/UserInfoActions"
import styled from 'styled-components'
import UserModalStore from '../store/UserModalStore'

const ModalBackgroundDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 1rem;
    background-color: rgba(0,0,0,0.5);
    z-index: 999;
    opacity: 1;
    overflow-x: hidden;
    overflow-y: auto;
`
const ModalForm = styled.div`
    width: 500px;
    background-color: #fff;
    padding: 10px;`
    
export default class UserModal extends Component {

    state = {
        showModal: AppStore.getShowModal(),
        userInfo: UserModalStore.getAll()
    }

    //populates state with data from store
    componentWillMount() {
        UserModalStore.on("change", ()=> {
            this.setState({
                userInfo: UserModalStore.getAll()
            })
        })
    }
    //allows component to read toggle function to display/hide modal
    componentDidMount() {
        AppStore.on("modalToggled", this.showModal)
    }
    //prevents data leak
    componentWillUnMount() {
        AppStore.removeListener("modalToggled", this.showModal)
    }
    //function to set state of modal as visible or invisible
    showModal = () => {
        this.setState({showModal: AppStore.getShowModal()})
    }
    //toggles display of modal on button click
    onButtonClick = (showModal) => {
        AppActions.showHide(showModal)
    }
    /*  TO BE COMPLETED 
        createUserInfo() does not properly read or persist data from state to store 
        using Flux logic 
        Previous commits of this app used handleChange(), handleSubmit() and
        a <form> tag to persist data to local state  */
    createUserInfo() {
        UserInfoActions.createUserInfo()
    }

  render() {
      //hides modal and does not render depending on state's showModal boolean
      if (!this.state.showModal) {
          return null
      }

    return (
      <ModalBackgroundDiv>
          <ModalForm>
            Hello World from a User's Modal! <br />
            Please enter your personal information <br />
            <input type="text" placeholder="Name"/> <br/>
            <input type="text" placeholder="Phone (no dashes)"/> <br />
            <button onClick={()=> this.onButtonClick(false)}>Accept</button>
            <button onClick={()=> this.onButtonClick(false)}>Cancel</button>
          </ModalForm>
      </ModalBackgroundDiv>
    )
  }
}