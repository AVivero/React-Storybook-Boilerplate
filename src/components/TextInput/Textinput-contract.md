
# TextInput Documentation/Contract

## Name
TextInput

## Brief Description
Standard text-input element that represents an HTML `<input>` of `type="text"` or `type="password"`.

## What it renders?
Renders a `<input>` element, but the element can also have a `<label>` component and or an `<div>` element below the `<input>` representing an error alert if the value is not valid:

```html
<!-- if the prop labelText is passed to the component with a value, this <label> element will be included -->
<label htmlFor={id} className={labelClasses}>
      {labelText}
</label>

<!-- If the invalid prop is passed to the component aria-invalid, data-invalid and aria-describedby will be included in the <input element> and the component will be rendered like this-->
<input
      {...otherProps}
      {...textInputProps}
      className={`${textInputClasses} invalid`}
      data-invalid="data-invalid"
      aria-invalid="true"
      aria-describedby={errorId}
/>

<!-- If the invalid prop is not passed to the component the <input will be rendered like this>-->
<input {...otherProps} {...textInputProps} className={textInputClasses} />

<!-- If the invalid and errorMsg props are passed to the component, the <div> element showing up an alert will be included -->
<div id={errorId} className="alert alert-danger" role="alert">
      <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true" />
      <span className="sr-only">
        Error:
      </span>
      {errorMsg}
</div>

<!-- The render method will look like this, if label and error  -->
<div className="form-group">
  <!-- if no labelText, {label} will be null, so no label will be rendered -->
  {label}

  <!-- if invalid is passed to the component the <input> element will have the attributes data-invalid, aria-invalid and aria-describedby -->
  {input}

  <!-- if invalid is not passed to the component {error} will be null, so no error msg will be rendered -->
  {error}
</div>);
```

## Props the component receives

- `id: PropTypes.string.isRequired`  `<input>` id, also used for the `{errorId}` variable used to define the id of the `<div>`element used to show up the alert in case invalid exists, and also used for the `{htmlFor}` variable that define the `htmlFor` attribute of the `<label>` element

- `inputClass: PropTypes.string`  Prop that is added to `form-control ` and this is used as the class name of the `input` element

- `disabled: PropTypes.bool`  If `true` the `input` element will be rendered as disabled

- `labelText: PropTypes.string`  If this prop is passed, the `label` element will be included

- `labelClass: PropTypes.string`  Class name of the `label` element (in case `{labelText}` exists, if not, the `label` element will not be rendered)

- `placeholder: PropTypes.string`  Prop used for the `placeholder` attribute of the `<input>` element

- `type: PropTypes.oneOf(['text', 'password'])`  Prop used for the `type` attribute of the `<input>` element (it can be `text` or `password`)

- `defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])`  Prop used for the `defaultValue` attribute of the `input` element

- `onChange: PropTypes.func`  Callback function that will get executed when change the value of the `<input>` element, if this is not disabled

- `onClick: PropTypes.func`  Callback function that will get executed when clicking on the `<input>` element, if this is not disabled

- `invalid: PropTypes.bool` (This prop define how the component render) Prop used to define if the value of the `input` element is not valid, if `invalid` is passed the attributes data-invalid, aria-invalid and aria-describedby are included in the `<input>` and the class `invalid` is included too, if both `invalid` and `errorMsg` are passed, the `<div>` element that show up the error msg is rendered too.

- `errorMsg: PropTypes.string`  Prop used as the content of the `<div>` element that show up the error msg (if `invalid` is passed too)

It may receive more props and these are going to applied to the `<input>` element

## State the component holds
Stateless component

## What the component does when the user interacts with it
Execute the respective callback if any was specified as a prop for that action... (onChange, onClick...)
