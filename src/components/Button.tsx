import React from 'react';

interface OwnProps {
    title: string
    marginTop?: string
    clickHandler: () => void
}
const Button = (props: OwnProps) => {

  return (
    <div 
        style={{
            width: '100%',
            padding: '7px',
            cursor: 'pointer',
            background: 'lightgrey',
            borderRadius: '5px',
            boxSizing: 'border-box',
            marginTop: props.marginTop ?? '0px'
        }}
        onClick={props.clickHandler}
    >
      {props.title}
    </div>
  );
}

export default Button;
