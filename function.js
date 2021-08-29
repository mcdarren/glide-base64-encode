
window.function = function (url, strip) {
  if (url.value === undefined) return undefined;
  var strip;
  if (strip.value === undefined) {
    strip = false;
  }
  else {
    strip = true;
  }
  
  if (strip === true) {
    var filename = url.value.split('/').slice(-1);
    return btoa(filename);
  }
  else {
    return btoa(url.value);
  }

}
