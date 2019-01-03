import React, {Component} from 'react'
import '../App.css'
import UIkit from 'uikit';
import '../../node_modules/uikit/dist/css/uikit.min.css'

import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);
 
export default class Search extends Component{

  render(){
    return(
      <form onChange={e => this.props.searchFriends(e.target.value)} class="uk-search uk-search-default uk-margin-top uk-margin-left">
          <span data-uk-search-icon data-uk-icon="search"></span>
          <input class="uk-search-input" type="search" placeholder="Search..."/>
      </form>
    )
  }
}
