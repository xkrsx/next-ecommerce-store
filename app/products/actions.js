'use server';

export async function filterCategory(categoryName, newArray, singleItem) {
  if (singleItem === 'categoryName') {
    await newArray.push(...singleItem, singleItem);
  }
  return newArray;
}
