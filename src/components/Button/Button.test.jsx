import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  describe('Renders common props as expected', () => {
    // eslint-disable-next-line function-paren-newline
    const wrapper = shallow(
      <Button tabIndex={0} className="buttonClass" type="reset" disabled="true">
        <div className="child">child-1</div>
        <div className="child">child-2</div>
      </Button>);

    it('Renders children as expected', () => {
      expect(wrapper.find('.child').length).toBe(2);
    });

    it('It should be disabled as expected', () => {
      expect(wrapper.props().disabled.toEqual(true));
    });

    it('It should be of type reset', () => {
      expect(wrapper.props().type.toEqual('button'));
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
      <Button>
        <div className="child">child-1</div>
        <div className="child">child-2</div>
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
});

describe('Button', () => {
  describe('Renders other props as expected', () => {
    // eslint-disable-next-line function-paren-newline
    const wrapper = shallow(
      <Button name="buttonName" testProp='testPropValue'>
        <div className="child">child-1</div>
        <div className="child">child-2</div>
      </Button>);

    it('Should have name if one is passed via props', () => {
      expect(wrapper.props().name).toEqual('buttonName');
    });

    it('Should have testProp if one is passed via props', () => {
      expect(wrapper.props().testProp).toEqual('testPropValue');
    });

  });
