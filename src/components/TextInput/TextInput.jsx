import PropTypes from 'prop-types';
import React from 'react';

const TextInput = ({
  labelText,
  labelClass,
  inputClass,
  id,
  placeholder,
  type,
  invalid,
  disabled,
  errorMsg,
  defaultValue,
  onChange,
  onClick,
  ...otherProps
}) => {
  const textInputProps = {
    id,
    placeholder,
    type,
    disabled,
    defaultValue,
    onChange: (event) => {
      if (!disabled) {
        onChange(event);
      }
    },

    onClick: (event) => {
      if (!disabled) {
        onClick(event);
      }
    },
  };

  const errorId = `${id}-error-msg`;
  const textInputClasses = `form-control ${inputClass}`;
  const labelClasses = `label ${labelClass}`;

  const label = labelText
    ? (
      <label htmlFor={id} className={labelClasses}>
        {labelText}
      </label>)
    : null;

  const input = invalid
    ? (
      <input
        {...otherProps}
        {...textInputProps}
        className={`${textInputClasses} invalid`}
        data-invalid="data-invalid"
        aria-invalid="true"
        aria-describedby={errorId}
      />)
    : (
      <input {...otherProps} {...textInputProps} className={textInputClasses} />
    );

  const error = invalid && errorMsg
    ? (
      <div id={errorId} className="alert alert-danger" role="alert">
        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true" />
        <span className="sr-only">
          Error:
        </span>
        {errorMsg}
      </div>)
    : null;

  return (
    <div className="form-group">
      {label}
      {input}
      {error}
    </div>);
};

TextInput.propTypes = {
  // input id, also used for the errorId and the htmlFor for the label
  id: PropTypes.string.isRequired,

  // className for the input
  inputClass: PropTypes.string,

  // the input can be disabled
  disabled: PropTypes.bool,

  // text for the input label
  labelText: PropTypes.string,

  // className for the input label
  labelClass: PropTypes.string,

  // placeholder for the input
  placeholder: PropTypes.string,

  // input type
  type: PropTypes.oneOf(['text', 'password']),

  // defaultValue of the input can be an string or a number
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  // func that get executed the value of the input change
  onChange: PropTypes.func,

  // func that get executed when clicked on the input
  onClick: PropTypes.func,

  // the input can be invalid, that will define how to render the input
  invalid: PropTypes.bool,

  // error text used for the error element
  errorMsg: PropTypes.string,
};

TextInput.defaultProps = {
  disabled: false,
  type: 'text',
  invalid: false,
  errorMsg: 'error-msg',
  inputClass: '',
  labelClass: '',
  labelText: '',
  placeholder: '',
  defaultValue: '',
  onChange: () => {},
  onClick: () => {},
};

export default TextInput;
