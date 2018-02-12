import PropTypes from 'prop-types';
import React from 'react';
import ID from '../../tools/ID';

const RadioButton = ({
  radioButtonClassName,
  labelClassName,
  defaultChecked,
  disabled,
  id,
  labelText,
  name,
  onChange,
  value,
  ...otherProps
}) => {
  const radioButtonProps = {
    defaultChecked,
    disabled,
    id,
    name,
    onChange,
    value,
  };

  return (
    <div className="radio">
      <label htmlFor={id} className={labelClassName}>
        <input type="radio" className={radioButtonClassName} {...radioButtonProps} {...otherProps} />
        {labelText}
      </label>
    </div>
  );
};

RadioButton.propTypes = {
  radioButtonClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};

RadioButton.defaultProps = {
  id: `radioButton-${ID()}`,
  radioButtonClassName: '',
  labelClassName: '',
  defaultChecked: false,
  disabled: false,
  name: '',
  onChange: {},
};

export default RadioButton;
