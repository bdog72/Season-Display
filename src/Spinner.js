import React from 'react';

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        <h1>{props.message}</h1>
        <h2>{props.message1}</h2>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Hold Your Horses Bozo',
  message1: 'Please Accept Location Request'
};

export default Spinner;

// <div className="ui big text loader">{props.message}</div>
