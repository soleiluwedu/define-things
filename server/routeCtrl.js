const routeCtrl = {
  get: (req, res, next) => {
    res.locals.successMsg = `redirected to '/'`;
    res.redirect('/');
    return next();
  },

  post: (req, res, next) => {
    switch (req.url) {
      case '/define': res.locals.oxford_param = '/regions=us'; break;
      case '/synonym': res.locals.oxford_param = '/synonyms'; break;
      case '/antonym': res.locals.oxford_param = '/antonyms'; break;
      default: // If route is not recognized, redirect to '/'.
        res.locals.successMsg = `redirected to '/'`;
        res.redirect('/');
    }
    return next();
  }
}

module.exports = routeCtrl;