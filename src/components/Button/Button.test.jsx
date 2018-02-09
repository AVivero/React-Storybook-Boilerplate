import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  describe('Renders common props as expected', () => {
    // eslint-disable-next-line function-paren-newline
    const wrapper = shallow(
      <Button
        id="buttonId"
        tabIndex={0}
        className="buttonClass"
        type="reset"
        disabled="true"
        onClick={{}}
      >
        <span className="child">Click Me</span>
      </Button>);

    it('Renders children as expected', () => {
      expect(wrapper.find('.child').length).toBe(1);
    });

    it('It should be disabled as expected', () => {
      expect(wrapper.props().disabled).toEqual(true);
    });

    it('It should be of type reset', () => {
      expect(wrapper.props().type).toEqual('button');
    });

    it('Should set tabIndex if one is passed via props', () => {
      expect(wrapper.props().tabIndex).toEqual(0);
    });

    it('Should add extra classes via className', () => {
      expect(wrapper.hasClass('buttonClass')).toBe(true);
    });
  });

  describe('Renders <button> with default props as expected', () => {
    // eslint-disable-next-line function-paren-newline
    const wrapper = shallow(
      <Button
        id="buttonId"
        onClick={() => {}}
      >
        <span className="child">Click Me</span>
      </Button>);

    it('Should set disabled to false by default', () => {
      expect(wrapper.props().disabled).toBe(false);
    });

    it('Should set type to button by default', () => {
      expect(wrapper.props().type).toEqual('button');
    });

    it('Should only set type to [button, reset or submit] if one is passed via props', () => {
      wrapper.setProps({ type: 'button' });
      expect(wrapper.props().type).toEqual('button');
      wrapper.setProps({ type: 'submit' });
      expect(wrapper.props().type).toEqual('submit');
    });
  });

  describe('Renders other props as expected', () => {
    // eslint-disable-next-line function-paren-newline
    const wrapper = shallow(
      <Button
        id="buttonId"
        onClick={() => {}}
        otherProp1="otherProp1Value"
        otherProp2="otherProp2Value"
      >
        <span className="child">Click Me</span>
      </Button>);

    it('Should have name if one is passed via props', () => {
      expect(wrapper.props().otherProp1).toEqual('otherProp1');
    });

    it('Should have testProp if one is passed via props', () => {
      expect(wrapper.props().otherProp2).toEqual('otherProp2');
    });
  });
});
