/**
 * PricingController
 *
 * @description :: Server-side logic for managing Pricings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: (req, res) => {
    const data = {
      title: 'PricingController',
    };
    return res.view('pages/pricing/index', data);
  },
};

