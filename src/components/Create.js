import React, {Component} from 'react'
import '../App.css'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import New from './New'
import '../../node_modules/uikit/dist/css/uikit.min.css'

// loads the Icon plugin
UIkit.use(Icons);

export default class Create extends Component{
  state = {

  }

  render(){

    return(
      <div  class="uk-align-center">

          <div id="toggle-animation" class="uk-card uk-card-default uk-card-body uk-margin-small" hidden>
            <New />
          </div>
      </div>
    )
  }
}
