// const base_url = "https://www.thecocktaildb.com/api/json/v1/1/";

export const startLoadCategories = async () => {
    const resp = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
    );
    const categories = await resp.json();

    return categories.data.drink;
};

export const startLoadRecetas = async ({ drink, category }) => {
    const resp = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}&c=${category}`
    );
    const recetas = await resp.json();

    return recetas.data.drinks;
};

export const startLoadDetails = async (id) => {
    const resp = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const receta = await resp.json();

    return receta.data.drinks[0];
};
