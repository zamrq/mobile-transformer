/**
 * AboutController
 *
 * @description :: Server-side logic for managing Abouts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: (req, res) => {
    const data = {
      title: 'AboutController',
    };
    return res.view('pages/about/index', data);
  },
};
