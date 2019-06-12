import React from 'react';
import { Route, Switch } from 'react-router-dom';
import QuestionsList from 'components/QuestionsList/QuestionsList';
import QuestionsDetail from 'components/QuestionsDetail/QuestionsDetail';
import NewQuestionForm from 'components/NewQuestionForm/NewQuestionForm';
import NotFound from 'components/NotFound/NotFound';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={QuestionsList} />
      <Route exact path="/questions/:questionId" component={QuestionsDetail} />
      <Route exact path="/new-question" component={NewQuestionForm} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default AppRoutes;
