function router(routes, ob) {
  ob = ob || {};
  routeEvent(ob, 'before');
  route();

  window.addEventListener('hashchange', function () {
    routeEvent(ob, 'before');
    route();
  }, false);


  function routeEvent(ob, prop) {
    if (!ob[prop]) return;
    else if (typeof ob[prop] === 'function') ob[prop]();
  }

  function route() {
    var hash = window.location.hash, route, func, hashArr, routeArr, i, len, params = [];
    for (route in routes) {
      func = routes[route];
      if (!routes.hasOwnProperty(route) && typeof func !== 'function') break;
      hashArr = hash.substring(hash.indexOf('/') + 1).split('/');
      routeArr = route.substring(route.indexOf('/') + 1).split('/');
      len = hashArr.length;
      if (len !== routeArr.length) continue;
      for (i = 0; i < len; i += 1) {
        if (routeArr[i] !== hashArr[i] && routeArr[i].charAt(0) !== ':') break;
        if (routeArr[i].charAt(0) === ':') params.push(hashArr[i]);
        if (i === len - 1) func.apply(this, params);
      }
    }
  }
}
