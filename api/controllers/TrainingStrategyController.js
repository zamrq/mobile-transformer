/**
 * TrainingStrategyController
 *
 * @description :: Server-side logic for managing Trainingstrategies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
  index: (req, res) => {
    const data = {
      title: 'Strategy Workshop',
    };
    return res.view('pages/trainingStrategy/index', data);
  },
};
