const axios = require('axios');

async function getMealsByIngredient(ing) {
  const data = await axios.get(
    'https://www.themealdb.com/api/json/v1/1/filter.php?i=' + ing
  );

  console.log(data.data.meals);
  return data.data;
}
//getMealsByIngredient('chicken');

async function getMealsCategories() {
  const data = await axios.get(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );

  console.log(data.data);

  return data.data;
}
//getMealsCategories();

async function getMealsCategory(cat) {
  const data = await axios.get(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );

  const catFound = data.data.categories.find(
    (category) => category.strCategory === cat
  );

  console.log(catFound);
  return catFound;
}
//getMealsCategory('Vegan');

module.exports = {
  getMealsCategories,
  getMealsCategory,
  getMealsByIngredient
};
