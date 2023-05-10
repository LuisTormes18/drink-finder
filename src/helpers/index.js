const base_url = "https://www.thecocktaildb.com/api/json/v1/1/";

export const startLoadCategories = async () => {
  const resp = await fetch(`${base_url}list.php?c=list`);
  const categories = await resp.json();

  return categories.drinks;
};

export const startLoadRecetas = async ({
  drink = "milk",
  category = "Ordinary Drink",
}) => {
  const resp = await fetch(`${base_url}filter.php?i=${drink}&c=${category}`);
  const recetas = await resp.json();
  return recetas.drinks.slice(0, 12);
};
export const startLoadRandomDrinks = async () => {
  const resp = await fetch(`${base_url}random.php`);
  const recetas = await resp.json();
  return recetas.drinks;
};

export const startLoadDetails = async (id) => {
  const resp = await fetch(`${base_url}lookup.php?i=${id}`);
  const receta = await resp.json();

  return receta.drinks[0];
};
