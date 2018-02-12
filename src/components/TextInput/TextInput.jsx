import PropTypes from 'prop-types';
import React from 'react';
import ID from '../../tools/ID';

const TextInput = ({
  labelText,
  labelClass,
  inputClass,
  id,
  placeholder,
  type,
  invalid,
  disabled,
  helpMessage,
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

  const helpBlockId = `${id}-help-msg`;
  const textInputClasses = `form-control ${inputClass}`;
  const labelClasses = `control-label ${labelClass}`;

  const label = labelText
    ? (
      // eslint-disable-next-line jsx-a11y/label-has-for
      <label htmlFor={id} className={labelClasses}>
        {labelText}
      </label>)
    : null;

  const input = invalid
    ? (
      <input
        {...otherProps}
        {...textInputProps}
        className={textInputClasses}
        data-invalid="data-invalid"
        aria-invalid="true"
        aria-describedby={helpBlockId}
      />)
    : (
      <input {...otherProps} {...textInputProps} className={textInputClasses} />
    );

  const helpMessageBlock = invalid && helpMessage
    ? (
      <span id={helpBlockId} className="help-block">
        {helpMessage}
      </span>)
    : null;

  return (
    (invalid)
      ? (
        <div className="form-group has-error">
          {label}
          {input}
          {helpMessageBlock}
        </div>)
      : (
        <div className="form-group">
          {label}
          {input}
        </div>)
  );
};

TextInput.propTypes = {
  // input id, also used for the errorId and the htmlFor for the label
  id: PropTypes.string,

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

  // help text used for the help block
  helpMessage: PropTypes.string,
};

TextInput.defaultProps = {
  id: `textInput-${ID()}`,
  disabled: false,
  type: 'text',
  invalid: false,
  helpMessage: '',
  inputClass: '',
  labelClass: '',
  labelText: '',
  placeholder: '',
  defaultValue: '',
  onChange: () => {},
  onClick: () => {},
};

export default TextInput;
