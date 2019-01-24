import React, { Component } from 'react'
import UserModal from './UserModal'
import styled from 'styled-components'

const StyledDiv = styled.div`
    size: 0px;
`

export default class Users extends Component {
    state = {
        showComponent: false,
        userID: this.props.userID
    }
  render() {

    return (
      <StyledDiv>
        <UserModal userID = {this.state.userID}/>
      </StyledDiv>
    )
  }
}
