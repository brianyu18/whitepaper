import React, {Component} from 'react'
import '../App.css'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import '../../node_modules/uikit/dist/css/uikit.min.css'
import Comment from './Comments'

// loads the Icon plugin
UIkit.use(Icons);

export default class PostComments extends Component{

  state = {
    commentList: [],
    temp: "",
    newComment: []
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(comments => {
      console.log("the com", comments)
      this.setState({
        commentList: comments
      })
    })
  }

  setTarget=(e)=>{
    this.setState({
      temp: e
    }, console.log(this.state.temp))
  }

  addComment = () =>{
    let newCom =
    <li>
        <article class="uk-comment uk-comment-primary uk-visible-toggle">
            <header class="uk-comment-header uk-position-relative">
                <div class="uk-grid-medium uk-flex-middle" uk-grid>
                    <div class="uk-width-auto">
                        <img class="uk-border-circle" src="https://getuikit.com/docs/images/avatar.jpg" width="60" height="60" alt=""/>
                    </div>
                    <div class="uk-width-expand">
                        <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">user@email.com</a></h4>
                        <p class="uk-comment-meta uk-margin-remove-top"><a class="uk-link-reset" href="#">12 days ago</a></p>
                    </div>
                </div>
                <div class="uk-position-top-right uk-position-small uk-hidden-hover"><a class="uk-link-muted" href="#">Reply</a></div>
            </header>
            <div class="uk-comment-body">
                <p>{this.state.temp}</p>
            </div>
        </article>
    </li>

    let newArr = [...this.state.newComment, newCom]
    this.setState({
      newComment: newArr
    }, console.log("jam",this.state.newComment))
  }

  renderNew=()=>{
    console.log("home",newComment)
    let newComment

    if(this.state.newComment.length!== 0){
    newComment = this.state.newComment
      }
    return newComment
    }

  render(){
    let shorten = this.props.data.slice(-18,-10)
    let comments = shorten.map(comment => {
      return <Comment comment={comment} reply={this.state.newComment}/>
    })
    return(
      <div style={{"height":"100vh", "overflow":"scroll"}}>
      <button onClick={()=>this.props.close()} style={{"margin-right":"50px"}} class="uk-align-right" type="button" data-uk-close></button>
      <ul class="uk-comment-list" style={{"height":"100vh", "overflow":"scroll"}}>

        <li>
            <article class="uk-comment uk-visible-toggle">
                <header class="uk-comment-header uk-position-relative">
                    <div class="uk-grid-medium uk-flex-middle" uk-grid>
                        <div class="uk-width-auto">
                            <img class="uk-border-circle" src={this.props.post.picture.medium} width="60" height="60" alt=""/>
                        </div>
                        <div class="uk-width-expand">
                            <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">{this.props.post.email}</a></h4>
                            <p class="uk-comment-meta uk-margin-remove-top"><a class="uk-link-reset" href="#">12 days ago</a></p>
                        </div>
                    </div>
                    <div class="uk-position-top-right uk-position-small uk-hidden-hover"><a class="uk-link-muted" href="#">Reply</a></div>
                </header>
                <div class="uk-comment-body">
                    <div class="uk-width-1 uk-align-center">
                      <img style={{"display":"block", "margin":"auto"}} src={this.props.pic} width="50%" alt="Image"/>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
            </article>
            <ul>
              {comments}
              {this.renderNew()}
              <li>
                <h3>Comment</h3>
                <form>
                  <fieldset class="uk-fieldset">
                      <div class="uk-margin">
                          <textarea onChange={(e)=>this.setTarget(e.target.value)}class="uk-textarea" rows="5" placeholder="Share your thoughts..."></textarea>
                      </div>
                      <button onClick={()=>this.addComment()} class="uk-button uk-button-default">Post</button>
                  </fieldset>
                </form>
              </li>
            </ul>
        </li>
      </ul>
      </div>
    )
  }
}
