 import React from 'react';

class SignUpButton extends React.Component {
  render (){
    return(
      <div className='signupButton'>
        <button
          className='signupbtn'
          disabled={this.props.disabled}
          onClick={()=>this.props.onClick()}
        >
        {this.props.text}
        </button>
      </div>
    );
  }
}

export default SignUpButton;
