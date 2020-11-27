const BASE_URL =
  'https://my-json-server.typicode.com/gabriel-codes/solutis_json_api';
const GLOBAL_SEARCH_URL = `${BASE_URL}/products?q=`;
const PRODUCT_URL = `${BASE_URL}/products/`;
const CATEGORIES_URL = `${BASE_URL}/categories/`;
const PRODUCTS_PAGINATE_URL = `${BASE_URL}/products?_limit=5&_page=`;

const config = {
  BASE_URL,
  GLOBAL_SEARCH_URL,
  PRODUCT_URL,
  CATEGORIES_URL,
  PRODUCTS_PAGINATE_URL,
};

export default config;
