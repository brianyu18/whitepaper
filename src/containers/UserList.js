import React, {Component} from 'react'
import UserCard from '../components/UserCard'
import '../App.css'

export default class UserList extends Component{

  render(){
    console.log("PROPS", this.props)
    console.log("HOHO", this.props.data)
    let list = this.props.data
    let users = list.map(user => {
      return <UserCard data={this.props.data} user={user} refresh={this.props.refresh}/>

    })

    return(
      <div style={{"height":"100vh", "overflow":"scroll"}}>
        {users}
      </div>
    )
  }
}
