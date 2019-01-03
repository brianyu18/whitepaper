import React, { Component } from 'react';

import Feed from './containers/Feed';
import PostComments from './components/PostComments';
import UserList from './containers/UserList'
import Search from './components/Search'
import Login from  './components/Login'
import Logout from  './components/Logout'
import Create from './components/Create'
import './App.css';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { Route } from 'react-router-dom'

// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference
UIkit.notification('Welcome to WHITE PAPER', {pos: 'top-center'}, {status:'primary'});

class App extends Component {

  state={
    data: [],
    originalData: [],
    feedData: [],
    showPost: false,
    target: {},
    targetPic: "",
    picList: [],
    number: 1041,
    jwt: false
  }

  componentDidMount(){
    fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(users => {
      console.log("HI", users)
      this.setState({
        data: users.results,
        originalData: users.results

      })
    })
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(feed => {
      console.log("HELLO", feed)
      this.setState({
        feedData: feed
      })
    })
    fetch('https://picsum.photos/list')
    .then(res => res.json())
    .then(pics => {
      console.log("PICS", pics)
      this.setState({
        picList: pics,
      })
    })
  }

  searchFriends = (e) => {
    console.log(e)
    let newArr = this.state.originalData.filter(user => {
      console.log(user.name.first)
      return user.name.first.toLowerCase().includes(e)||user.name.last.toLowerCase().includes(e)
    })
    this.setState({
      data: newArr
    })
  }

  showComments = (post, pic) => {
    this.setState({
      showPost: true,
      target: post,
      targetPic: pic
    }, console.log("TARGET HERE", this.state.target), console.log(this.state.showPost))
  }

  returnToFeed = () => {
    this.setState({
      showPost: false,
    })
  }

  loggedIn = () => {
    this.setState({
      jwt: true
    })
  }

  logOut = () => {
    this.setState({
      jwt:false
    })
  }

  refresh = () => {
    fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(users => {
      console.log("HI", users)
      let newNum
      if(this.state.number === 1041){
        newNum = 1012
      } else {newNum = 1041}
      this.setState({
        data: users.results,
        originalData: users.results,
        number: newNum
      })
    })
  }

  render() {

    if(this.state.jwt){
      console.log('done', this.state.data)
      let showPage = null
      if(!this.state.showPost){
        showPage = <Feed number={this.state.number} feedData={this.state.feedData} showComments={this.showComments} data={this.state.data} picList={this.state.picList}/>
      } else {
        showPage = <PostComments post={this.state.target} close={this.returnToFeed} data={this.state.data} target={this.state.target} pic={this.state.targetPic}/>
      }
      return (
        <div class="uk-grid-small uk-child-width-expand@s uk-flex">
            <div class="uk-width-1-3@m">
                <Search searchFriends={this.searchFriends}/>
                <a style={{"margin-left":"10px"}} href="#toggle-animation" class="uk-icon-button" data-uk-toggle="target: #toggle-animation; animation: uk-animation-fade" uk-icon="plus-circle"></a>
                <a style={{"margin-left":"10px"}} onClick={()=>this.logOut()} class="uk-icon-button" data-uk-toggle="target: #toggle-animation; animation: uk-animation-fade" uk-icon="sign-out"></a>

                <div class="uk-card uk-card-default uk-card-body uk-flex">
                  <UserList data={this.state.data} refresh={this.refresh}/>
                </div>
            </div>
            <div>
                  <Create />
                <div class="uk-card uk-card-default uk-card-body uk-flex">
                  {showPage}
                </div>
            </div>
        </div>
      );
  } else {
    return <Login loggedIn={this.loggedIn}/>
    }
  }
}
export default App;
