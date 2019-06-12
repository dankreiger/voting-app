export const dummyChoiceItem =
  process.env.NODE_ENV === 'production'
    ? {}
    : {
        choiceItem: {
          url: '/questions/10/choices/70',
          votes: 1382,
          choice: 'Shooter'
        }
      };

export const dummyChoiceItem2 =
  process.env.NODE_ENV === 'production'
    ? {}
    : {
        choice: 'Coffee',
        url: '/questions/9/choices/66',
        votes: 285
      };
