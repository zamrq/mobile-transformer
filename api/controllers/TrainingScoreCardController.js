/**
 * TrainingScoreCardController
 *
 * @description :: Server-side logic for managing Trainingscorecards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
  index: (req, res) => {
    const data = {
      title: 'ScoreCard Training',
    };
    return res.view('pages/trainingScoreCard/index', data);
  },
};
