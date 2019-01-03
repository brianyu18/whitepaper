import React, {Component} from 'react'
import '../App.css'
import UIkit from 'uikit';
import '../../node_modules/uikit/dist/css/uikit.min.css'

export default class Login extends Component{
  state = {
    username: "",
    password: ""
  }

  addUser = (value) => {
    this.setState({
      username: value
    })
  }

  addPass = (value) => {
    this.setState({
      password: value
    })
  }

  loginSuccess = (e) => {
    if(this.state.username.length !== 0 && this.state.password.length !== 0){
      this.props.loggedIn()
    }
  }

  render(){
    return(
      <div class="uk-flex uk-flex-center uk-flex-middle uk-background-muted uk-height-viewport">

      			<div class="uk-width-medium uk-padding-small">
            <h1 style={{"fontFamily":"'Lora', serif", "textAlign":"-webkit-center"}}>WHITE PAPER</h1>
      				<form >
      					<fieldset class="uk-fieldset">
      						<legend style={{"textAlign":"-webkit-center"}}class="uk-legend"></legend>
      						<div class="uk-margin">
      							<div class="uk-inline uk-width-1-1">
      								<span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: user"></span>
      								<input onChange={(e)=>this.addUser(e.target.value)} class="uk-input uk-form-large" required placeholder="Username" type="text"/>
      							</div>
      						</div>
      						<div class="uk-margin">
      							<div class="uk-inline uk-width-1-1">
      								<span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
      								<input onChange={(e)=>this.addPass(e.target.value)} class="uk-input uk-form-large" required placeholder="Password" type="password"/>
      							</div>
      						</div>

      						<div class="uk-margin">
      							<label><input class="uk-checkbox" type="checkbox"/> Keep me logged in</label>
      						</div>
      						<div class="uk-margin">
      							<button onClick={(e)=>this.loginSuccess(e)} type="submit" class="uk-button uk-button-primary uk-button-primary uk-button-large uk-width-1-1">LOG IN</button>
      						</div>
      					</fieldset>
      				</form>
      				<div>
      					<div class="uk-text-center">
      						<a class="uk-link-reset uk-text-small" data-uk-toggle="target: #recover;animation: uk-animation-slide-top-small">Forgot your password?</a>
      					</div>
      					<div class="uk-margin-small-top" id="recover" hidden>
      						<form>

      							<div class="uk-margin-small">
      								<div class="uk-inline uk-width-1-1">
      									<span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: mail"></span>
      									<input class="uk-input" placeholder="E-mail" required type="text"/>
      								</div>
      							</div>
      							<div class="uk-margin-small">
      								<button type="submit" class="uk-button uk-button-primary uk-button-primary uk-width-1-1">SEND PASSWORD</button>
      							</div>

      						</form>
      					</div>
      				</div>
      			</div>
      		</div>
    )
  }
}
