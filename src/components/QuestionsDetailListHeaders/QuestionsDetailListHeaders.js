import React from 'react';
import { QuestionsDetailListHeadersContainer } from './QuestionsDetailListHeaders.style';

const QuestionsDetailListHeaders = () => {
  return (
    <QuestionsDetailListHeadersContainer>
      <div>Choice</div>
      <div>Votes</div>
      <div>Percent</div>
      <div></div>
    </QuestionsDetailListHeadersContainer>
  );
};

QuestionsDetailListHeaders.propTypes = {};

export default QuestionsDetailListHeaders;
