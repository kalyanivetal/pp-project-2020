import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from "../store/UserStore";
import axios from "axios";
class LoginForm extends React.Component {
  constructor (props){
    super(props);
    this.state={
      username: '',
      password:'',
      buttonDisabled: false,
      setToken:''
    }
  }

  setInputValue(property, val){
    val=val.trim();
    if(val.length >20){
      return;
    }
    this.setState({
      [property] : val
    })
  }

  resetForm(){
    this.setState({
      username: '',
      password:'',
      buttonDisabled:false,
      setToken:''
    })
  }

  async doLogin(){
    if(!this.state.username){
      return
    }

    if(!this.state.password){
      return
    }

    this.setState({
      buttonDisabled:true
    }) 
    try{
      var postData = {
        email: this.state.username,
        password: this.state.password
      };
      let axiosConfig = {
          headers : {
            'Accept': 'application/json',
            'Context-type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*'
          }
      };
      axios.post('/api/login', postData, axiosConfig)
    .then((res) => {
        if(res.data.success=='true'){
        console.log(res,res.data);
        alert("login SuccessFull");
        UserStore.isLoggedIn= true;
        UserStore.username=res.data.payload;  
        UserStore.setToken= res.data.token;
        console.log(res.data.token);
        console.log(UserStore.setToken);
      }
    else{
      alert(res.data.message);
      this.resetForm();
    }
      })
    .catch((err) => {
       this.resetForm();
        alert(err.message);
      console.log("AXIOS ERROR: ", err);
})
    }
    catch(e){
      console.log(e);
      this.resetForm();
    }
  }

  render (){
    return(
      <div className="loginForm">
      loginField
      <InputField
        type="text"
        placeholder='Username'
        value= {this.state.username ? this.state.username : ''}
        onChange={(val)=> this.setInputValue('username',val)}
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
        onClick={ () => this.doLogin()}
        />
      </div>
    );
  }
}

export default LoginForm;