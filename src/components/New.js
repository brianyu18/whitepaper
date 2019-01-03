import React, {Component} from 'react'
import '../App.css'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import '../../node_modules/uikit/dist/css/uikit.min.css'

// loads the Icon plugin
UIkit.use(Icons);

export default class New extends Component{


  render(){

    return(
      <form class="uk-margin-left uk-margin-right">
          <fieldset class="uk-fieldset">

              <legend class="uk-legend">New Post</legend>

              <div class="uk-margin">
                  <input class="uk-input" type="text" placeholder="Image Url"/>
              </div>

              <div class="uk-margin">
                  <textarea class="uk-textarea" rows="5" placeholder="Share your thoughts..."></textarea>
              </div>

              <button onClick={console.log("hi")} class="uk-button uk-button-default uk-margin-right uk-align-right">Post</button>

          </fieldset>
      </form>
    )
  }
}
