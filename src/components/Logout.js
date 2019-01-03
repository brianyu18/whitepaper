import React, {Component} from 'react'
import '../App.css'
import UIkit from 'uikit';
import '../../node_modules/uikit/dist/css/uikit.min.css'

export default class Logout extends Component{

  render(){
    return(
      <button onClick={()=>this.props.logout()} class="uk-button uk-button-default uk-margin-left">Log Out</button>
    )
  }

}
