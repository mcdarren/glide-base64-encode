
window.function = function (url) {
  if (url.value === undefined) return undefined;
  
  return url.value.split('/').slice(-1)[0];
  

}
