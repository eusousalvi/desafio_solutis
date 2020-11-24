const localStorage = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();

  if (action?.meta?.localStorage) {
    try {
      if (action.meta.localStorage === 'cart') {
        window.localStorage.setItem(
          action.meta.localStorage,
          JSON.stringify([...state.cart.items]),
        );
      } else {
        window.localStorage.setItem(
          action.meta.localStorage,
          JSON.stringify([...state.favorites.items]),
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return result;
};

export default localStorage;
