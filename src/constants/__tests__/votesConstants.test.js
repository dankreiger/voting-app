import {
  REGISTER_VOTE,
  POST_VOTE_BEGIN,
  POST_VOTE_SUCCESS,
  POST_VOTE_FAILURE
} from 'constants/index';

test('constants', () => {
  expect(REGISTER_VOTE).toBe('REGISTER_VOTE');
  expect(POST_VOTE_BEGIN).toBe('POST_VOTE_BEGIN');
  expect(POST_VOTE_SUCCESS).toBe('POST_VOTE_SUCCESS');
  expect(POST_VOTE_FAILURE).toBe('POST_VOTE_FAILURE');
});
