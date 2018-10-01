import React from 'react';

const Box = ({ children }) => {
  const style = {
    backgroundColor: 'white',
    border: '1px solid #e6e6e6',
    textAlign: 'center',
    marginBottom: '1em',
    padding: '1em'
  };

  return <div style={style}>{children}</div>;
};

export default Box;
