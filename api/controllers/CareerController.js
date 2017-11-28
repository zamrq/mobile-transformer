/**
 * CareerController
 *
 * @description :: Server-side logic for managing Careers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: (req, res) => {
    const data = {
      title: 'CareerController',
    };
    return res.view('pages/career/index', data);
  },
};
