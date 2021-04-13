 import React from 'react';

class CancelButton extends React.Component {
  render (){
    return(
      <div className='cancelButton'>
        <button
          className='cancelbtn'
          disabled={this.props.disabled}
          onClick={()=>this.props.onClick()}
        >
        {this.props.text}
        </button>
      </div>
    );
  }
}

export default CancelButton;
