import enzyme, { configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { dummyQuestions } from 'utils/test-services/dummyQuestions';

configure({ adapter: new Adapter() });

/**
 * @description Dummy test reducers
 */
global.defaultTestReducers = {
  questionsReducer: {
    questions: dummyQuestions,
    loading: false,
    error: null
  }
};
/**
 * @description Dummy middleware
 */
const middlewares = [thunk];

/**
 * @description Dummy Redux store
 */
global.mockStore = configureMockStore(middlewares);
global.testStore = global.mockStore(global.defaultTestReducers);

/**
 * @param {React.Component | React.FunctionComponent} component // React Component
 * @param {enzyme.ShallowWrapper | enzyme.ReactWrapper} enzymeFunction // Enzyme rendering method (mount, shallow, render)
 * @param {object} reducers // Redux reducers
 */
global.setupReduxConnectedComponent = (
  component,
  enzymeFunction,
  reducers = global.defaultTestReducers
) => {
  return enzyme[enzymeFunction](
    <Provider store={global.mockStore(reducers)}>{component}</Provider>
  );
};

/**
 * @param {React.Component | React.FunctionComponent} component // React Component
 * @param {enzyme.ShallowWrapper | enzyme.ReactWrapper} enzymeFunction // Enzyme rendering method (mount, shallow, render)
 * @param {object} reducers // Redux reducers
 */
global.setupReduxConnectedReactRouterComponent = (
  component,
  enzymeFunction,
  reducers = global.defaultTestReducers
) => {
  return enzyme[enzymeFunction](
    <MemoryRouter initialEntries={['/']}>
      <Provider store={global.mockStore(reducers)}>{component}</Provider>
    </MemoryRouter>
  );
};
