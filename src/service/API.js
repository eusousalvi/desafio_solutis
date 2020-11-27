import config from '../helpers/apiConfig';

const productsFetch = async (page) => {
  const response = await fetch(config.PRODUCTS_PAGINATE_URL + page);
  const json = await response.json();
  return json;
};
const productsQueryFetch = async (searchTerm) => {
  const response = await fetch(config.GLOBAL_SEARCH_URL + searchTerm);
  const json = await response.json();
  return json;
};
const productFetch = async (id) => {
  const response = await fetch(config.PRODUCT_URL + id);
  const json = await response.json();
  return json;
};
const categoriesFetch = async () => {
  const response = await fetch(config.CATEGORIES_URL);
  const json = await response.json();
  return json;
};
const categoryFetch = async (id) => {
  const response = await fetch(config.CATEGORIES_URL + id);
  const json = await response.json();
  return json;
};

const API = {
  productsFetch,
  productFetch,
  categoriesFetch,
  categoryFetch,
  productsQueryFetch,
};

export default API;
