
window.function = function (url, strip) {
  if (url.value === undefined) return undefined;
  
  if (strip.value === true) {
    var filename = url.value.split('/').slice(-1);
    return btoa(filename);
  }
  else {
    return btoa(url.value);
  }

}
