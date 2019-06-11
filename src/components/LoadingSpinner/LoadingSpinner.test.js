import React from 'react';
import { shallow } from 'enzyme';
import { LoadingSpinner } from './LoadingSpinner';
import { StyledSpinner } from './LoadingSpinner.styles';

describe('LoadingSpinner', () => {
  let component;

  beforeEach(() => {
    component = shallow(<LoadingSpinner />);
  });

  describe('rendering', () => {
    test('renders as expected', () => {
      expect(component.length).toBe(1);
      expect(component).toMatchSnapshot();
    });
  });

  describe('structure', () => {
    test('has a StyledSpinner', () => {
      expect(component.find(StyledSpinner).length).toBe(1);
    });
    test('has 8 divs', () => {
      expect(component.find('div').length).toBe(8);
    });
  });
});
