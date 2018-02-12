import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
// import { action } from '@storybook/addon-actions';
import RadioButton from './RadioButton';

const onChange = (event) => {
  // eslint-disable-next-line no-console
  console.log(`${event.target.nodeName} changed`);
};

// Simple Radio Button
storiesOf('RadioButton', module)
  .addDecorator(withKnobs)
  .addWithInfo('Radio Button', () => {
    const radioButtonClassName = text('radioButtonClassName', '');
    const labelClassName = text('labelClassname', '');
    const disabled = boolean('Disabled', false);
    const defaultChecked = boolean('Default Checked', false);
    // const id = text('Id', 'radio-button');
    const labelText = text('Label Text', 'Label Text Radio Button');
    const name = text('Name', 'radio button name');
    const value = text('Value', 'value');

    return (
      <div>
        <RadioButton
          radioButtonClassName={radioButtonClassName}
          labelClassName={labelClassName}
          disabled={disabled}
          defaultChecked={defaultChecked}
          // id={id}
          labelText={labelText}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>);
  });

// Simple Radio Button Disabled
storiesOf('RadioButton', module).addDecorator(withKnobs).addWithInfo('Radio Button Disabled', () => {
  const radioButtonClassName = text('radioButtonClassName', '');
  const labelClassName = text('labelClassname', '');
  const disabled = boolean('Disabled', true);
  const defaultChecked = boolean('Default Checked', false);
  const id = text('Id', 'radio-button');
  const labelText = text('Label Text', 'Label Text Radio Button');
  const name = text('Name', 'radio button name');
  const value = text('Value', 'value');

  return (
    <div>
      <RadioButton
        radioButtonClassName={radioButtonClassName}
        labelClassName={labelClassName}
        disabled={disabled}
        defaultChecked={defaultChecked}
        id={id}
        labelText={labelText}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>);
});
