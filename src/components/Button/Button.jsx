import PropTypes from 'prop-types';
import React from 'react';

const Button = ({
  id,
  className,
  children,
  disabled,
  type,
  tabIndex,
  onClick,
  ...otherProps
}) => {
  const buttonProps = {
    id,
    children,
    disabled,
    type,
    tabIndex,
    onClick: (event) => {
      if (!disabled) {
        onClick(event);
      }
    },
  };
  const buttonClasses = `btn ${className}`;
  return (
    <button
      className={buttonClasses}
      {...buttonProps}
      {...otherProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  tabIndex: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  tabIndex: 0,
  className: 'btn',
  disabled: false,
  type: 'button',
  id: '',
};

export default Button;
