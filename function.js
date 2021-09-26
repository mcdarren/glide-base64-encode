
window.function = function (string) {
  if (string.value === undefined) return undefined;
  
  return btoa(string.value);
}
