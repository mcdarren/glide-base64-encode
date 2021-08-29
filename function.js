
window.function = function (url) {
  if (url.value === undefined) return undefined;
  
  var filename = url.value.split('/').slice(-1);
  return btoa(filename);
}
