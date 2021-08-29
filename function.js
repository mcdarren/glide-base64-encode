
window.function = function (url, strip, base64_encode) {
  if (url.value === undefined) return undefined;
  
  return url.value.split('/').slice(-1);
  

}
