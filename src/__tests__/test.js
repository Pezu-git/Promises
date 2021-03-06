/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import prom from '../js/app.js';

test('promise_test', async () => {
  const data = await prom();
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

test('promiseError_test', async () => {
  expect.assertions(1);
  try {
    // eslint-disable-next-line no-unused-vars
    const data = await async();
  } catch (e) {
    expect(e).toEqual(e);
  }
});
