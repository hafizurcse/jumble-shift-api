/**
 * Created by hafizur.rahman on 06/06/2018.
 */

module.exports.notFound = (req, res, next) => {
  res.boom.notFound();
};

// error handler
module.exports.badImplementation = (err, req, res, next) => {
  // show error traces in dev environment
  if (req.app.get('env') === 'development') {
    console.log(err);
  }
  res.boom.badImplementation();
};
