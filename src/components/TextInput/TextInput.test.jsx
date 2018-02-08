import React from 'react';
import { shallow, mount } from 'enzyme';
import TextInput from './TextInput';

test('render a document title', () => {
  const wrapper = shallow(<TextInput id="text-input-id" />);
  expect(wrapper.prop('id')).toEqual('text-input-id');
});
