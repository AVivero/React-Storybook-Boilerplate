import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

describe('TextInput', () => {
  describe('Renders common props as expected', () => {
    // eslint-disable-next-line function-paren-newline
    const wrapper = shallow(
      <TextInput
        labelText="labelText"
        labelClass="labelClassName"
        inputClass="InputClassName"
        id="inputId"
        placeholder="placeholder..."
        disabled
        invalid
        helpMessage="helpMessage..."
        defaultValue="defaultValue"

        // data-invalid="data-invalid"
        // aria-invalid="true"
      />);

    it('Render the <label>, <input> and <span> if invalid and labelText props are passed', () => {
      expect(wrapper.find('label').length).toBe(1);
      expect(wrapper.find('input').length).toBe(1);
      expect(wrapper.find('span').length).toBe(1);
    });

    it('The <label> should have as content the labelText prop value', () => {
      expect(wrapper.find('label').props().text).toEqual('labelText');
    });

    it('The <label> should have as className the labelClass prop value', () => {
      expect(wrapper.find('label').hasClass('labelClassName')).toBe(true);
    });

    it('The <input> should have as className the inputClass prop value', () => {
      expect(wrapper.find('input').hasClass('InputClassName')).toBe(true);
    });

    it('<input> should have id equal to prop id if passed', () => {
      expect(wrapper.find('input').props().id).toEqual('inputId');
    });

    it('<input> should have placeholder as placeholder prop', () => {
      expect(wrapper.find('input').props().placeholder).toEqual('placeholder...');
    });

    it('<input> should be disabled if passed as prop', () => {
      expect(wrapper.find('input').props().disabled).toEqual(true);
    });

    it('<input> should have prop invalid if passed as prop', () => {
      expect(wrapper.find('input').props().invalid).toEqual(true);
    });

    it('<input> should have defaultValue if passed as prop', () => {
      expect(wrapper.find('input').props().defaultValue).toEqual('defaultValue');
    });

    it('<span> should have content equal to helpMessage prop', () => {
      expect(wrapper.find('span').props().text).toEqual('helpMessage');
    });
  });

  describe('Renders <input> with default props as expected', () => {
    // eslint-disable-next-line function-paren-newline
    const wrapper = shallow(
      <TextInput
        id="inputId"
      />);

    it('Should set disabled to false by default', () => {
      expect(wrapper.props().disabled).toBe(false);
    });

    it('Should set invalid to false by default', () => {
      expect(wrapper.props().invalid).toBe(false);
    });

    it('Should only set type to [text or password] if one is passed via props', () => {
      wrapper.setProps({ type: 'text' });
      expect(wrapper.props().type).toEqual('text');
      wrapper.setProps({ type: 'password' });
      expect(wrapper.props().type).toEqual('password');
    });
  });

  describe('Renders other props as expected', () => {
    // eslint-disable-next-line function-paren-newline
    const wrapper = shallow(
      <TextInput
        id="inputId"
        otherprop1="otherProp1Value"
        otherprop2="otherProp2Value"
      />);

    it('Should have name if one is passed via props', () => {
      expect(wrapper.props().otherprop1).toEqual('otherProp1Value');
    });

    it('Should have testProp if one is passed via props', () => {
      expect(wrapper.props().otherprop2).toEqual('otherProp2Value');
    });
  });
});
