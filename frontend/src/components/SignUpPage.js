import React from 'react';
import SignUpForm from "./SignUpForm";
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from "../store/UserStore";
import CancelButton from "./CancelButton";
import SignUpButton from "./SignUpButton";
import axios from "axios";
class SignUpPage extends React.Component {
  constructor (props){
    super(props);
    this.state={
      username: '',
      email:"",
      password:'',
      buttonDisabled: false,
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  }
  handleChangeName(e) {
    this.setState({name:e.target.value});
}

handleChangeEmail(e) {
    this.setState({email:e.target.value});
}

handleChangePassword(e) {
    this.setState({password:e.target.value});
}

  resetForm(){
    this.setState({
      username: '',
      email:'',
      password:'',
      buttonDisabled:false
    })
  }
  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
         console.log(this.state);
    var apiBaseUrl = "http://localhost:8080/api/";
    var data={
    "name":this.state.name,
    "user_email":this.state.email,
    "password":this.state.password
    }
    var headers = { 'Accept': 'application/json',
    'Context-type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': "*"
    }
    console.log(data);
    axios.post(apiBaseUrl+'register', data, {headers: headers}).then(function (response) {
    console.log(response);
    if(response.data.success){
    console.log(data);
    console.log("Login successfull");
    }else{ alert(response.data.message);
    }
    }).catch(function (error) {
         console.log(error);
    });
}
}
validateForm() {
  let errors= {};
  let formIsValid = true;
  if (!this.state.name) {
    formIsValid = false;
    errors["username"] = "*Please enter your username.";
    }
  if (typeof this.state.name !== "undefined") {
      if (!this.state.name.match(/^[a-zA-Z ]*$/)) {
      formIsValid = false;
      errors["username"] = "*Please enter alphabet characters only.";
      }
    }
  if (!this.state.email) {
    formIsValid = false;
    errors["email"] = "*Please enter your email-ID.";
    }
  if (typeof this.state.email !== "undefined") {
  //regular expression for email validation
  var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  if (!pattern.test(this.state.email)) {
      formIsValid = false;
      errors["email"] = "*Please enter valid email-ID.";
      }
  }
  if (!this.state.password) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
      }
  if (typeof this.state.password !== "undefined") {
      if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
      formIsValid = false;
      errors["password"] = "*Please enter secure and strong password.";
      }
  }
  this.setState({
  errors: errors
  });
return formIsValid;
}
  render (){
    return(
        <div>
      <InputField
        type="text"
        placeholder='Name'
        value= {this.state.username ? this.state.username : ''}
        onChange={(val)=> this.setInputValue('username',val)}
      />

        <InputField
          type="text"
          placeholder='E-mail'
          value= {this.state.email ? this.state.email : ''}
          onChange={(val)=> this.setInputValue('email',val)}
      />
      <InputField
          type="password"
          placeholder='Password'
          value= {this.state.password ? this.state.password : ''}
          onChange={(val)=> this.setInputValue('password',val)}
      />

      <SubmitButton 
        text="Login"
        disabled={this.state.buttonDisabled}
        onClick={ () => this.doSignUp()}
        />

       <CancelButton 
        text="Cancel"
      //  disabled={this.state.buttonDisabled}
        onClick={ () => this.doCancel()}
        /> 
        </div>
    );
  }
}

export default SignUpPage;
