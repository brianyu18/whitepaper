import React, {Component} from 'react'
import '../App.css'
import UIkit from 'uikit';
import '../../node_modules/uikit/dist/css/uikit.min.css'

export default class Post extends Component{

  message=(post, pic)=>{
    console.log("HEY BITCH")
    console.log(post)
    this.props.showComments(post, pic)
    console.log("hi picture",this.props.pic)
  }

  render(){
    console.log("picture", this.props.post.picture);
    return(
      <div onClick={()=>this.message(this.props.post, this.props.pic)} className="uk-card uk-card-default uk-card-body uk-grid margin">
        <div className="uk-width-auto">
            <img className="uk-border-circle" width="60" height="60" src={this.props.post.picture.medium}/>
        </div>
        <div>
          <h3 class="uk-margin-remove">{this.props.post.name.first}</h3>
          <time datetime="2016-04-01T19:00">April 01, 2016</time>
        </div>
        <br/>
        <div class="uk-width-1 uk-align-center">
          <img style={{"display":"block", "margin":"auto"}} src={this.props.pic} width="80%" alt="Image"/>
        </div>
        <br/>
        <p style={{"marginTop":"20px"}} class="uk-comment uk-comment-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      </div>
    )
  }
}
