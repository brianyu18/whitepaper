import React, {Component} from 'react'
import '../App.css'
import UIkit from 'uikit';
import '../../node_modules/uikit/dist/css/uikit.min.css'

export default class UserCard extends Component{

  render(){

    return(
      <div className="uk-card uk-card-default uk-grid-margin">
          <div className="uk-card-header">
              <div className="uk-grid-small uk-flex-middle" uk-grid>
                  <div className="uk-width-auto">
                      <img className="uk-border-circle" width="40" height="40" src={this.props.user.picture.medium}/>
                  </div>
                  <div className="uk-width-expand">
                      <h3 className="uk-card-title uk-margin-remove-bottom">{this.props.user.name.first}</h3>
                      <p className="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
                  </div>

              </div>
          </div>
          <div className="uk-card-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          <div className="uk-card-footer">
              <a onClick={()=>this.props.refresh()}href="#" className="uk-button uk-button-text">Read more</a>
          </div>
      </div>
    )
  }
}
