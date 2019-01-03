import React, {Component} from 'react'
import '../App.css'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import '../../node_modules/uikit/dist/css/uikit.min.css'

// loads the Icon plugin
UIkit.use(Icons);

export default class Comments extends Component{

  render(){

    return(
      <div>
        <li>
            <article class="uk-comment uk-comment-primary uk-visible-toggle">
                <header class="uk-comment-header uk-position-relative">
                    <div class="uk-grid-medium uk-flex-middle" uk-grid>
                        <div class="uk-width-auto">
                            <img class="uk-border-circle" src={this.props.comment.picture.medium} width="60" height="60" alt=""/>
                        </div>
                        <div class="uk-width-expand">
                            <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">{this.props.comment.email}</a></h4>
                            <p class="uk-comment-meta uk-margin-remove-top"><a class="uk-link-reset" href="#">12 days ago</a></p>
                        </div>
                    </div>
                    <div class="uk-position-top-right uk-position-small uk-hidden-hover"><a class="uk-link-muted" href="#">Reply</a></div>
                </header>
                <div class="uk-comment-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </article>
        </li>
      </div>
    )
  }
}
