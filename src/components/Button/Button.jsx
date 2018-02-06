// REFACTOR
import PropTypes from 'prop-types';
import React from 'react';

const Button = ({
  className,
  children,
  disabled,
  type,
  tabIndex,
  onClick,
  ...otherProps
}) => {
  const buttonProps = {
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
    <div className="btn-group">
      <button
        className={buttonClasses}
        {...buttonProps}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
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
};

export default Button;
