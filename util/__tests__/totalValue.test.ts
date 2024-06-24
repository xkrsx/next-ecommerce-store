// TODO test total price and count functions

import { expect, test } from '@jest/globals';

test('should set cookie', async () => {
  // execute actual logic
  await createOrUpdateCookie(1, 1);
  // retrieve the result
  const resultCookie = getCookie('cart');
  // expects here
  expect(resultCookie['cart']).toEqual('[{"productId":1,"count":1}]');
});
