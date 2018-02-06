import React from 'react';
import {storiesOf} from '@storybook/react';
import { withKnobs, text, boolean, number} from '@storybook/addon-knobs/react';
import {action} from '@storybook/addon-actions';
import TextInput from '../TextInput';

storiesOf('TextInput', module).addWithInfo('Text Input', () => {

  const id = text("Id", 'sampleInputText');
  const placeholder = text('Placeholder', 'placeholder...');
  const className = text('className', '');
  const invalid = boolean('Invalid', false);
  const labelText = text('LabelText', 'Label');
  const disabled = boolean('Disabled', false);

  return (
      <div>
        <TextInput
          id={id}
          placeholder={placeholder}
          onChange={()=>{}}
          invalid={invalid}
          labelText={labelText}
          disabled={disabled}
        />
      </div>)
});

// missing the knobs
// .addDecorator(withKnobs)
