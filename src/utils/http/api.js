export const apiQuestionsBase = `https://private-amnesiac-016e7-pollsapi.apiary-proxy.com/questions`;

export const createVotingPostUrl = (questionId, choiceId) => {
  return `https://polls.apiblueprint.org/questions/${questionId}/choices/${choiceId}`;
};
