import React, { useEffect } from 'react';
import { arrayOf, bool, func } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { AppContainer } from './App.styles';
import AppRoutes from './AppRoutes';
import { Question } from 'typings/Question.proptypes';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

function App({ fetchQuestions, loading, questions }) {
  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  const questionsAreLoaded = () => !loading && questions.length > 0;

  const renderApp = () => {
    if (loading) {
      return <LoadingSpinner />;
    } else if (questionsAreLoaded) {
      return <AppRoutes />;
    } else {
      return <h1>No questions available</h1>;
    }
  };
  return <AppContainer>{renderApp()}</AppContainer>;
}

App.propTypes = {
  fetchQuestions: func,
  loading: bool,
  questions: arrayOf(Question)
};

const mapStateToProps = ({ questionsReducer }) => ({
  loading: questionsReducer.loading,
  questions: questionsReducer.questions
});

export default connect(
  mapStateToProps,
  actions
)(App);
