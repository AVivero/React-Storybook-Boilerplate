
# RadioButton Documentation/Contract

## Name
RadioButton

## Brief Description
Simple radio input object that represents an HTML `<input>` element with `type="radio"`.

## What it renders?
Renders a `<div>` element with an `<input type="radio">` and his associated `<label>`:

```html
<div className="radio">
  <label htmlFor={id} className={labelClassName}>
    <input type="radio" className={radioButtonClassName} {...radioButtonProps} {...otherProps} />
    {labelText}
  </label>
</div>
```

## Props the component receives



- `radioButtonClassName: PropTypes.string`  Class name that is going to be applied to the `<input>` element


- `labelClassName: PropTypes.string`  Class name that is going to be applied to the <label> element


- `defaultChecked: PropTypes.bool`  True if the radio button must be default checked


- `disabled: PropTypes.bool`  True if the `<input>` element must be disabled


- `id: PropTypes.string.isRequired`  Id of the `<input>` element


- `labelText: PropTypes.string.isRequired`  This prop will be used as the <label> content


- `name: PropTypes.string`  Name of the `<input>` element


- `onChange: PropTypes.func`  Callback function to be call when the `<input>` element change


- `value: PropTypes.string.isRequired`  Value of the `<input>` element

It may receive more props and these are going to applied to the `<input>` element



## State the component holds (if any)
Stateless component

## What the component does when the user interacts with it
Normal functioning of an `<input type="radio">` element
