import { dummyQuestions } from '../dummyQuestions';

export default async () => {
  return await new Promise(resolve => {
    resolve(dummyQuestions);
  });
};
