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

    componentWillMount() {
        UserModalStore.on("change", ()=> {
            this.setState({
                userInfo: UserModalStore.getAll()
            })
        })
    }
    componentDidMount() {
        AppStore.on("modalToggled", this.showModal)
    }

    componentWillUnMount() {
        AppStore.removeListener("modalToggled", this.showModal)
    }

    showModal = () => {
        this.setState({showModal: AppStore.getShowModal()})
    }

    onButtonClick = (showModal) => {
        AppActions.showHide(showModal)
    }

    createUserInfo() {
        UserInfoActions.createUserInfo()
    }
    // handleChange = (event) => {
    //     const userInfo = {...this.state.userInfo}
    //     userInfo[event.target.name] = event.target.value
    //     this.setState({userInfo})
    // }

    // handleSubmit = async (event, showModal) => {
    //     event.preventDefault()
    //     alert("!")
    //     this.setState({...this.state.userInfo})
    //     AppActions.showHide(showModal)
    // }

  render() {
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
            <button>Accept</button>
            <button onClick={()=> this.onButtonClick(false)}>Cancel</button>

          </ModalForm>
      </ModalBackgroundDiv>
    )
  }
}