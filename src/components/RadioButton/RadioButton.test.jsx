import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import RadioButton from './RadioButton';

test('render a document title', () => {
  const wrapper = shallow(<RadioButton id="radio-button-id" />);
  expect(wrapper.prop('id')).toEqual('radio-button-id');
});
