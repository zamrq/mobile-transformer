/**
 * TrainingProductController
 *
 * @description :: Server-side logic for managing Trainingproducts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
  index: (req, res) => {
    const data = {
      title: 'Product Training',
    };
    return res.view('pages/trainingProduct/index', data);
  },
};
