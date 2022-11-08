import styles from './Button.module.scss';
import React from 'react';

function Button({ children, color = 'green', rounded = true, ...rest }) {
  return (
    <button
      className={[
        styles['button'],
        styles[`button-${rounded ? 'rounded' : 'rectangle'}`],
        styles[`button-${color}`],
      ].join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
