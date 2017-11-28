/**
 * ScoreboardController
 *
 * @description :: Server-side logic for managing Scoreboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: (req, res) => {
    const data = {
      title: 'Scoreboard',
    };
    return res.view('pages/scoreboard/index', data);
  },
};
