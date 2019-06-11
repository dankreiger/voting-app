export const dummyQuestions =
  process.env.NODE_ENV === 'production'
    ? []
    : [
        {
          url: '/questions/10',
          published_at: '2015-05-27T21:22:26.670000+00:00',
          question: 'Game Genre',
          choices: [
            { url: '/questions/10/choices/70', votes: 1382, choice: 'Shooter' },
            { url: '/questions/10/choices/69', votes: 475, choice: 'Action' },
            { url: '/questions/10/choices/75', votes: 362, choice: 'Sports' },
            {
              url: '/questions/10/choices/73',
              votes: 350,
              choice: 'Simulation'
            },
            {
              url: '/questions/10/choices/72',
              votes: 336,
              choice: 'Role-playing'
            },
            { url: '/questions/10/choices/74', votes: 306, choice: 'Strategy' },
            {
              url: '/questions/10/choices/71',
              votes: 299,
              choice: 'Action-adventure'
            }
          ]
        },
        {
          url: '/questions/9',
          published_at: '2015-05-27T21:22:26.648000+00:00',
          question: 'Favourite hot beverage?',
          choices: [
            { url: '/questions/9/choices/65', votes: 586, choice: 'Tea' },
            {
              url: '/questions/9/choices/68',
              votes: 301,
              choice: 'Hot Chocolate'
            },
            {
              url: '/questions/9/choices/67',
              votes: 291,
              choice: 'Apple Cider'
            },
            { url: '/questions/9/choices/66', votes: 285, choice: 'Coffee' }
          ]
        },
        {
          url: '/questions/8',
          published_at: '2015-05-27T21:22:26.619000+00:00',
          question: 'Transport of choice?',
          choices: [
            {
              url: '/questions/8/choices/60',
              votes: 166,
              choice: '\ud83d\ude8e'
            },
            {
              url: '/questions/8/choices/56',
              votes: 90,
              choice: '\u2708\ufe0f'
            },
            {
              url: '/questions/8/choices/64',
              votes: 57,
              choice: '\ud83d\udea0'
            },
            {
              url: '/questions/8/choices/58',
              votes: 40,
              choice: '\ud83d\ude80'
            },
            {
              url: '/questions/8/choices/59',
              votes: 29,
              choice: '\ud83d\ude97'
            },
            {
              url: '/questions/8/choices/57',
              votes: 25,
              choice: '\ud83d\ude81'
            },
            {
              url: '/questions/8/choices/62',
              votes: 24,
              choice: '\ud83d\ude83'
            },
            {
              url: '/questions/8/choices/61',
              votes: 24,
              choice: '\ud83d\ude88'
            },
            {
              url: '/questions/8/choices/63',
              votes: 24,
              choice: '\u26f5\ufe0f'
            }
          ]
        },
        {
          url: '/questions/7',
          published_at: '2015-05-27T21:22:26.601000+00:00',
          question: 'Bacon?',
          choices: [
            {
              url: '/questions/7/choices/54',
              votes: 291,
              choice: '\ud83c\uddfa\ud83c\uddf8'
            },
            {
              url: '/questions/7/choices/55',
              votes: 154,
              choice: '\ud83c\udde8\ud83c\udde6'
            },
            {
              url: '/questions/7/choices/53',
              votes: 129,
              choice: '\ud83c\uddec\ud83c\udde7'
            }
          ]
        },
        {
          url: '/questions/6',
          published_at: '2015-05-27T21:22:26.576000+00:00',
          question: 'Favourite colour?',
          choices: [
            { url: '/questions/6/choices/50', votes: 99, choice: 'Cyan' },
            { url: '/questions/6/choices/47', votes: 64, choice: 'Orange' },
            { url: '/questions/6/choices/49', votes: 36, choice: 'Green' },
            { url: '/questions/6/choices/51', votes: 30, choice: 'Blue' },
            { url: '/questions/6/choices/52', votes: 22, choice: 'Violet' },
            { url: '/questions/6/choices/48', votes: 20, choice: 'Yellow' },
            { url: '/questions/6/choices/46', votes: 19, choice: 'Red' }
          ]
        },
        {
          url: '/questions/5',
          published_at: '2015-05-27T21:22:26.557000+00:00',
          question: 'Console of choice?',
          choices: [
            { url: '/questions/5/choices/44', votes: 231, choice: 'Wii U' },
            {
              url: '/questions/5/choices/43',
              votes: 227,
              choice: 'PlayStation 4'
            },
            { url: '/questions/5/choices/45', votes: 176, choice: 'Xbox One' }
          ]
        },
        {
          url: '/questions/4',
          published_at: '2015-05-27T21:22:26.512000+00:00',
          question: 'Best fruit?',
          choices: [
            {
              url: '/questions/4/choices/37',
              votes: 178,
              choice: '\ud83c\udf50'
            },
            {
              url: '/questions/4/choices/35',
              votes: 31,
              choice: '\ud83c\udf60'
            },
            {
              url: '/questions/4/choices/30',
              votes: 23,
              choice: '\ud83c\udf4e'
            },
            {
              url: '/questions/4/choices/40',
              votes: 14,
              choice: '\ud83c\udf51'
            },
            {
              url: '/questions/4/choices/29',
              votes: 12,
              choice: '\ud83c\udf49'
            },
            {
              url: '/questions/4/choices/33',
              votes: 11,
              choice: '\ud83c\udf4a'
            },
            {
              url: '/questions/4/choices/27',
              votes: 8,
              choice: '\ud83c\udf52'
            },
            {
              url: '/questions/4/choices/38',
              votes: 7,
              choice: '\ud83c\udf47'
            },
            {
              url: '/questions/4/choices/41',
              votes: 7,
              choice: '\ud83c\udf53'
            },
            {
              url: '/questions/4/choices/32',
              votes: 6,
              choice: '\ud83c\udf3d'
            },
            {
              url: '/questions/4/choices/28',
              votes: 6,
              choice: '\ud83c\udf46'
            },
            {
              url: '/questions/4/choices/25',
              votes: 6,
              choice: '\ud83c\udf48'
            },
            {
              url: '/questions/4/choices/39',
              votes: 6,
              choice: '\ud83c\udf4c'
            },
            {
              url: '/questions/4/choices/34',
              votes: 6,
              choice: '\ud83c\udf4f'
            },
            {
              url: '/questions/4/choices/24',
              votes: 5,
              choice: '\ud83c\udf45'
            },
            {
              url: '/questions/4/choices/36',
              votes: 5,
              choice: '\ud83c\udf4b'
            },
            {
              url: '/questions/4/choices/26',
              votes: 5,
              choice: '\ud83c\udf4d'
            },
            {
              url: '/questions/4/choices/42',
              votes: 5,
              choice: '\ud83c\udf52'
            },
            { url: '/questions/4/choices/31', votes: 5, choice: '\ud83c\udf53' }
          ]
        },
        {
          url: '/questions/3',
          published_at: '2015-05-27T21:22:26.486000+00:00',
          question: 'Favourite tea type?',
          choices: [
            {
              url: '/questions/3/choices/19',
              votes: 104,
              choice: 'Oolong Tea'
            },
            { url: '/questions/3/choices/20', votes: 45, choice: 'Matcha' },
            { url: '/questions/3/choices/23', votes: 42, choice: 'Herbal' },
            { url: '/questions/3/choices/17', votes: 35, choice: 'Black Tea' },
            { url: '/questions/3/choices/22', votes: 29, choice: 'Pu-erh' },
            { url: '/questions/3/choices/18', votes: 26, choice: 'Green Tea' },
            { url: '/questions/3/choices/21', votes: 19, choice: 'White Tea' }
          ]
        },
        {
          url: '/questions/2',
          published_at: '2015-05-27T21:22:26.457000+00:00',
          question: 'Who is the best Avenger?',
          choices: [
            { url: '/questions/2/choices/8', votes: 103, choice: 'Iron Man' },
            { url: '/questions/2/choices/13', votes: 48, choice: 'Hawkeye' },
            {
              url: '/questions/2/choices/16',
              votes: 42,
              choice: 'Scarlet Witch'
            },
            { url: '/questions/2/choices/9', votes: 42, choice: 'Thor' },
            {
              url: '/questions/2/choices/12',
              votes: 32,
              choice: 'Black Widow'
            },
            { url: '/questions/2/choices/10', votes: 32, choice: 'Hulk' },
            {
              url: '/questions/2/choices/15',
              votes: 32,
              choice: 'War Machine'
            },
            {
              url: '/questions/2/choices/11',
              votes: 31,
              choice: 'Captain America'
            },
            { url: '/questions/2/choices/14', votes: 30, choice: 'Vision' }
          ]
        },
        {
          url: '/questions/1',
          published_at: '2015-05-27T21:22:26.431000+00:00',
          question: 'Favourite programming language?',
          choices: [
            { url: '/questions/1/choices/1', votes: 624, choice: 'Swift' },
            { url: '/questions/1/choices/7', votes: 251, choice: 'JavaScript' },
            { url: '/questions/1/choices/4', votes: 105, choice: 'Ruby' },
            { url: '/questions/1/choices/2', votes: 100, choice: 'Python' },
            { url: '/questions/1/choices/5', votes: 81, choice: 'C' },
            { url: '/questions/1/choices/6', votes: 68, choice: 'C++' },
            { url: '/questions/1/choices/3', votes: 58, choice: 'Objective-C' }
          ]
        }
      ];
