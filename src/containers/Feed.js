import React, {Component} from 'react'
import '../App.css'
import Post from '../components/Post'

export default class Feed extends Component{

  render(){
    console.log("thestate", this.props.picList)
    let takePics = this.props.picList.slice(0,20)
    console.log("shortpic",takePics)
    let i = this.props.number
    console.log("single", takePics[i])
    let shorten = this.props.data.slice(-9,-1)
    console.log("check", shorten)
    let allPosts = shorten.map(post => {
      console.log(post)
      console.log(this.props.data)
      i+=2
      return <Post post={post} showComments={this.props.showComments} pic={`https://picsum.photos/458/354?image=${i}`}/>
    })
    return(
      <div style={{"height":"100vh", "overflow":"scroll"}}>{allPosts}</div>
    )
  }
}
