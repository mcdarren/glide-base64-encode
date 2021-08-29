
window.function = function (url, strip, base64_encode) {
  if (url.value === undefined) return undefined;
  var strip = strip.value === undefined ? true : strip.value;
  var encode = base64_encode.value === undefined ? true : base64_encode.value;
  
  var str = url.value;
  if (strip === true) {
    str = url.value.split('/').slice(-1);
  }
  
  if (encode === true) {
    return btoa(str);
  }
  else {
    return str;
  }

}
