
# Button Documentation/Contract

## Name
Button

## Brief Description
Standard button object that represents an HTML `<button>` and can be used for any action.

## What it renders?
Renders a `<button>` element:

```html
<button
  className={buttonClasses}
  {...buttonProps}
  {...otherProps}
>
  {children}
</button>
```

## Props the component receives

- `className: PropTypes.string` Class name that will be applied to the `<button>` element

- `children: PropTypes.node.isRequired` (Required) Content that will be rendered inside of the `<button>` element

- `disabled: PropTypes.bool` If the true the `<button>` The element `<button>` will be disabled and no action will be executed

- `type: PropTypes.oneOf(['button', 'reset', 'submit'])` The element `<button>` can be `type="button"`, `type="submit"` or `type="reset"`

- `tabIndex: PropTypes.number` Prop used for the `tabindex` attribute of the `<button>` element

- `onClick: PropTypes.func.isRequired` (Required) Callback function that will get executed when the `<button>` is clicked (if not disabled)

It may receive more props and these are going to applied to the `<button>` element


## State the component holds
Stateless component

## What the component does when the user interacts with it
Execute the respective callback if any was specified as a prop for that action... (onClick)
