import React from 'react';
import { shallow } from 'enzyme';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
  describe('Renders common props as expected', () => {
    // eslint-disable-next-line function-paren-newline
    const wrapper = shallow(
      <RadioButton
        defaultChecked
        radioButtonClassName="radioButtonClassName"
        disabled
        id="radioButtonId"
        name="radioButtonName"
        labelText="Label Text"
        value="radioButtonValue"
      />);

    it('Render the <label> and an <input>', () => {
      expect(wrapper.find('label').length).toBe(1);
      expect(wrapper.find('input').length).toBe(1);
    });

    it('The <input> should be defaultChecked if passed as a prop', () => {
      expect(wrapper.find('input').props().defaultChecked).toEqual(true);
    });

    it('<input> should have className equal to prop if passed', () => {
      expect(wrapper.find('input').hasClass('radioButtonClassName')).toBe(true);
    });

    it('<input> should be disabled if passed as prop', () => {
      expect(wrapper.find('input').props().disabled).toBe(true);
    });

    it('<input> should have id equal to prop if passed', () => {
      expect(wrapper.find('input').props().id).toEqual('radioButtonId');
    });

    it('<input> should have name equal to prop if passed', () => {
      expect(wrapper.find('input').props().name).toEqual('radioButtonName');
    });

    it('<input> should have value equal to prop', () => {
      expect(wrapper.find('input').props().value).toEqual('radioButtonValue');
    });

    it('<label> should have content equal to labelText prop', () => {
      expect(wrapper.find('label').props().text).toEqual('Label Text');
    });
  });


  // defaultChecked: false,
  // disabled: false

  describe('Renders <input> with default props as expected', () => {
    // eslint-disable-next-line function-paren-newline
    const wrapper = shallow(
      <RadioButton
        id="radioButtonId"
        labelText="Label Text"
        value="radioButtonValue"
      />);

    it('Should set disabled to false by default', () => {
      expect(wrapper.props().disabled).toBe(false);
    });

    it('Should set defaultChecked to false by default', () => {
      expect(wrapper.props().defaultChecked).toBe(false);
    });
  });

  describe('Renders other props as expected', () => {
    // eslint-disable-next-line function-paren-newline
    const wrapper = shallow(
      <RadioButton
        id="radioButtonId"
        labelText="Label Text"
        value="radioButtonValue"
        otherProp1="otherProp1Value"
        otherProp2="otherProp2Value"
      />);

    it('Should have name if one is passed via props', () => {
      expect(wrapper.props().otherProp1).toEqual('otherProp1Value');
    });

    it('Should have testProp if one is passed via props', () => {
      expect(wrapper.props().otherProp2).toEqual('otherProp2Value');
    });
  });
});
