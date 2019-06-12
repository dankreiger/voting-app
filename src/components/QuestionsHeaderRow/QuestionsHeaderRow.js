import React, { memo } from 'react';
import { string } from 'prop-types';
import {
  QuestionsHeaderRowContainer,
  QuestionsHeaderRowHeadline,
  QuestionsHeaderRowButton
} from './QuestionsHeaderRow.styles';

const QuestionsHeaderRow = memo(({ headlineText, buttonLink, buttonText }) => {
  return (
    <QuestionsHeaderRowContainer>
      <QuestionsHeaderRowHeadline>{headlineText}</QuestionsHeaderRowHeadline>
      <QuestionsHeaderRowButton to={buttonLink}>
        {buttonText}
      </QuestionsHeaderRowButton>
    </QuestionsHeaderRowContainer>
  );
});

QuestionsHeaderRow.propTypes = {
  headlineText: string,
  buttonLink: string,
  buttonText: string
};

export default QuestionsHeaderRow;
