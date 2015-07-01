'use strict';

// 404 handler
module.exports = function(req, res, next) {
  res.status(404).render('404.hbs');
};
