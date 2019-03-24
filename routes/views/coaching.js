let keystone = require('keystone');

exports = module.exports = function (req, res) {

  let view = new keystone.View(req, res);
  let locals = res.locals;

  locals.section = 'coaching';
  locals.packages = [];

  view.on('init', function (next) {
    let q = keystone.list('Package').model.find();

    q.exec(function (err, results) {
      locals.packages = results;

      next(err);

    });
  });

  view.render('coaching');
}