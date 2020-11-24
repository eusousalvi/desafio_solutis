export default function getLocalStorage(key, initial) {
  try {
    const data = JSON.parse(window.localStorage.getItem(key));
    return data;
  } catch (error) {
    return initial;
  }
}
