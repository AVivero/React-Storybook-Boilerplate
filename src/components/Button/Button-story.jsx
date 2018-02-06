import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
// import { action } from '@storybook/addon-actions';
import Button from './Button';

storiesOf('Buttons', module).addDecorator(withKnobs).addWithInfo('Button', () => {
  const className = text('className', 'btn-danger');
  const disabled = boolean('Disabled', false);
  const type = text('Type', 'button');
  const tabIndex = number('TabIndex', 4);

  const onClick = () => {
    console.log('button clicked');
  };

  return (
    <div>
      <Button
        className={className}
        disabled={disabled}
        type={type}
        tabIndex={tabIndex}
        onClick={onClick}
      >
        Click Me
      </Button>
    </div>);
});
