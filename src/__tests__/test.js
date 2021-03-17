/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import async from '../js/app.js';

test('should work with promise and async/await', async () => {
  const data = await async();
  expect(data).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
});
