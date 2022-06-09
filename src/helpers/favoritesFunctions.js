export function getCountProductsFavorites() {
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  return favorites ? favorites.products.length : 0;
}
