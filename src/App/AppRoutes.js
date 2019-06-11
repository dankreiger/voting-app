import React from 'react';
import { Route, Switch } from 'react-router-dom';
import QuestionsList from 'components/QuestionsList/QuestionsList';
import QuestionsDetail from 'components/QuestionsDetail/QuestionsDetail';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={QuestionsList} />
      <Route exact path="/questions/:questionId" component={QuestionsDetail} />
    </Switch>
  );
};

export default AppRoutes;
