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
      setToken:'',
    }
  }
  async doLogout(){
     try{
          const token=UserStore.setToken;
          console.log(token);
          console.log(UserStore.setToken);
          
          var header = {
                    'Accept': 'application/json',
                    'Context-type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin': "*",
                    'Authorization' : 'Bearer '+ token,
               }
          
         axios.post('/api/logout',null,{
              "headers" : header
         })
       .then((res) => {
           if(res.data.success=='true'){
           console.log(res,res.data);
           alert("logout SuccessFull");
           console.log(res.data.token);
           UserStore.isLoggedIn= false;
           UserStore.username="";
           UserStore.setToken="";
         }
       else{
         console.log(res.data.message);
         console.log(res.data.token);
         console.log(res.data);
         console.log(UserStore.setToken);
         console.log(res);
         console.log("Bearer",UserStore.setToken);
         let str="bearer " + UserStore.setToken;
         console.log(str);
         var out=`Bearer ${UserStore.setToken}`;
         console.log(out);
        // console.log("Bearer" UserStore.setToken);
         }
       })
       .catch((err) => {
           alert(err.message);
         console.log("AXIOS ERROR: ", err);
       })
     }
     catch(e){
           console.log(e)  
     } 
   }
  render (){
    return(
          <div className='app'>
            <div className='container'>
              Welcome {UserStore.username}
              <SubmitButton 
                 text ={'Log out'}
                disabled={false}
                onClick={()=> this.doLogout()}
              />
            </div>
          </div>
    );
  }
}

export default LoginForm;