/**
 * QuickscoreController
 *
 * @description :: Server-side logic for managing Quickscores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: (req, res) => {
    const data = {
      title: 'Quickscore',
    };
    return res.view('pages/quickscore/index', data);
  },
};

