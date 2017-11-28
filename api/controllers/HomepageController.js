/**
 * HomepageController
 *
 * @description :: Server-side logic for managing Homepages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: (req, res) => {
    const data = {
      title: 'Homepage',
    };
    return res.view('pages/homepage/index', data);
  },
};

