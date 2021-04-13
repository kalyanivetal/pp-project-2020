import React from 'react';
import {observer} from 'mobx-react';
import UserStore from './store/UserStore'
import LoginForm from './components/LoginForm';
import SubmitButton from './components/SubmitButton';
import SignUpPage from "./components/SignUpPage";
import axios from "axios";
import SignUp from "./components/SignUp";
import './App.css'
import Logout from "./components/Logout"

class App extends React.Component {
  constructor (props){
    super(props);
    this.state={
      username: '',
      password:'',
      buttonDisabled: false,
      setToken:''
    }
  }
  async componentDidMount(){
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
            UserStore.loading=false;
            UserStore.isLoggedIn= true;
            UserStore.username=res.data.payload;
            UserStore.setToken= res.data.token;
            console.log(res.data.token);
          }
          else{
            UserStore.loading= false;
            UserStore.isLoggedIn= false;
            UserStore.setToken='';
          }
      }
      )
    .catch((err) => {
      UserStore.loading= false;
      UserStore.isLoggedIn= false;
      UserStore.setToken="";
      console.log("AXIOS ERROR: ", err);
})
    }
    catch(e){
      UserStore.loading= false;
      UserStore.isLoggedIn= false;    
      UserStore.setToken="";
    }
  
  }
  
  render (){
    if(UserStore.loading){
      return(
        <div className='app'>
          <div className='container'>
            Loading, Please Wait...!
          </div>
        </div>
      );
     }
    else {
      if(UserStore.isLoggedIn){
        return(
          <div className='app'>
            <div className='container'>
              <Logout />
            </div>
          </div>
        );
      }
      return(
        <div className='app'>
          <div className='container'>
            <LoginForm />
          </div>
        </div>
      );
    }
  }
}

export default observer(App);
