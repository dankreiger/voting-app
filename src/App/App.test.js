import React from 'react';
import App from './App';

describe('App', () => {
  let component;
  const fetchQuestions = jest.fn();

  beforeEach(() => {
    component = global.setupReduxConnectedReactRouterComponent(
      <App fetchQuestions={fetchQuestions} />,
      'mount'
    );
  });

  describe('rendering', () => {
    test('renders as expected', () => {
      expect(component.length).toBe(1);
      expect(component).toMatchSnapshot();
    });
  });

  describe('fetching from api on mount', () => {
    test('calls fetchQuestions on mount', () => {
      requestAnimationFrame(done => {
        expect(fetchQuestions).toHaveBeenCalled();
        done();
      });
    });
  });
});
