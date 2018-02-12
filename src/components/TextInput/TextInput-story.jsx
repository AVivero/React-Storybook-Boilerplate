import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
// import { action } from '@storybook/addon-actions';
import TextInput from './TextInput';

// Text Input
storiesOf('Inputs', module).addDecorator(withKnobs).addWithInfo('Text Input', () => {
  // const id = text('Id', 'sampleInputText');
  const placeholder = text('Placeholder', 'placeholder...');
  const inputClass = text('inputClass', '');
  const invalid = boolean('Invalid', false);
  const disabled = boolean('Disabled', false);
  const type = text('Type', 'text');

  return (
    <div>
      <TextInput
        // id={id}
        placeholder={placeholder}
        onChange={() => {}}
        invalid={invalid}
        disabled={disabled}
        inputClass={inputClass}
        type={type}
      />
    </div>);
});

// Disabled Text Input
storiesOf('Inputs', module).addDecorator(withKnobs).addWithInfo('Disabled Text Input', () => {
  const id = text('Id', 'sampleInputText');
  const placeholder = text('Placeholder', 'placeholder...');
  const inputClass = text('inputClass', '');
  const invalid = boolean('Invalid', false);
  const disabled = boolean('Disabled', true);
  const type = text('Type', 'text');

  return (
    <div>
      <TextInput
        id={id}
        placeholder={placeholder}
        onChange={() => {}}
        invalid={invalid}
        disabled={disabled}
        inputClass={inputClass}
        type={type}
      />
    </div>);
});

// Text Input With Label
storiesOf('Inputs', module).addDecorator(withKnobs).addWithInfo('Text Input w/ Label', () => {
  const id = text('Id', 'sampleInputText');
  const placeholder = text('Placeholder', 'placeholder...');
  const inputClass = text('inputClass', '');
  const invalid = boolean('Invalid', false);
  const labelText = text('LabelText', 'Label');
  const disabled = boolean('Disabled', false);
  const type = text('Type', 'text');

  return (
    <div>
      <TextInput
        id={id}
        placeholder={placeholder}
        onChange={() => {}}
        invalid={invalid}
        labelText={labelText}
        disabled={disabled}
        inputClass={inputClass}
        type={type}
      />
    </div>);
});

// Text Input With Invalid Value
storiesOf('Inputs', module).addDecorator(withKnobs).addWithInfo('Text Input w/ Invalid Value', () => {
  const id = text('Id', 'sampleInputText');
  const placeholder = text('Placeholder', 'placeholder...');
  const inputClass = text('inputClass', '');
  const invalid = boolean('Invalid', true);
  const helpMessage = text('Error Message', 'Whoops something\'s wrong!');
  const labelText = text('LabelText', 'Label');
  const disabled = boolean('Disabled', false);
  const type = text('Type', 'text');

  return (
    <div>
      <TextInput
        id={id}
        placeholder={placeholder}
        onChange={() => {}}
        invalid={invalid}
        helpMessage={helpMessage}
        labelText={labelText}
        disabled={disabled}
        inputClass={inputClass}
        type={type}
      />
    </div>);
});

// Text Input With Type Password
storiesOf('Inputs', module).addDecorator(withKnobs).addWithInfo('Text Input With Type Password', () => {
  const id = text('Id', 'password');
  const placeholder = text('Placeholder', 'password...');
  const inputClass = text('inputClassName', 'password');
  const invalid = boolean('Invalid', false);
  const helpMessage = text('Error Message', 'Whoops something\'s wrong!');
  const labelText = text('LabelText', 'Password');
  const disabled = boolean('Disabled', false);
  const type = text('Type', 'password');

  return (
    <div>
      <TextInput
        id={id}
        placeholder={placeholder}
        onChange={() => {}}
        invalid={invalid}
        helpMessage={helpMessage}
        labelText={labelText}
        disabled={disabled}
        inputClass={inputClass}
        type={type}
      />
    </div>);
});
