/**
 * Get the URL parameters
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */
export const getParams = function(url) {
  let params = {};
  let parser = document.createElement('a');
  parser.href = url;
  let query = parser.search.substring(1);
  let vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split('=');
    params[pair[0]] = decodeURIComponent(pair[1]);
  }
  return params;
};
