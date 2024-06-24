'use server';
// TODO test total price and count functions

import { expect, test } from '@jest/globals';
import { createOrUpdateCookie } from '../cookies';
import { totalValueCalc } from '../product-calculator';

test('total value should match', async () => {
  // execute actual logic
  await createOrUpdateCookie(1, 1);
  await createOrUpdateCookie(2, 1);
  // expects here
  expect(await totalValueCalc()).toEqual(420);
});
