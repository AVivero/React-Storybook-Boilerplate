import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
// import { action } from '@storybook/addon-actions';
import Button from './Button';

const onClick = (event) => {
  console.log(`${event.target.nodeName} clicked`);
};

// Simple Button
storiesOf('Buttons', module).addDecorator(withKnobs).addWithInfo('Button', () => {
  const className = text('className', 'btn-danger');
  const disabled = boolean('Disabled', false);
  const type = text('Type', 'button');
  const tabIndex = number('TabIndex', 4);

  return (
    <div>
      <Button
        className={className}
        disabled={disabled}
        type={type}
        tabIndex={tabIndex}
        onClick={onClick}
        testProp="testPropValue"
      >
        Simple Button
      </Button>
    </div>);
});

// Disabled Button
storiesOf('Buttons', module).addDecorator(withKnobs).addWithInfo('Disabled Button', () => {
  const className = text('className', 'btn-danger');
  const disabled = boolean('Disabled', true);
  const type = text('Type', 'button');
  const tabIndex = number('TabIndex', 2);

  return (
    <div>
      <Button
        className={className}
        disabled={disabled}
        type={type}
        tabIndex={tabIndex}
        onClick={onClick}
      >
        Disabled Button
      </Button>
    </div>);
});
