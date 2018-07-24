/**
 * Created by hafizur.rahman on 06/06/2018.
 */
const jumbleShift = require('../../lib/jumbleShift');
const _isEmpty = require('lodash/isEmpty')
/**
 * POST
 * @param req
 * @param res
 * @param next
 *
 * res.header: None
 *
 * req.body: {
 *  'message': ''
 * }
 */
let jumble = ((req, res, next) => {
  if (isNaN(req.query.n) || _isEmpty(req.query.n) || _isEmpty(req.body.message)) {
    return res.boom.badRequest();
  }
  let jumbledJson = {};
  jumbleShift(req.body.message, parseInt(req.query.n))
    .then((jumbledString) => {
      jumbledJson['jumbled'] = jumbledString;
      return res.status(200).send(jumbledJson);
    }).catch(err => {
      return res.boom.notFound(err);
    });
});

module.exports = jumble;
