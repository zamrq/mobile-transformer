/**
 * TrainingBSCController
 *
 * @description :: Server-side logic for managing Trainingbscs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
  index: (req, res) => {
    const data = {
      title: 'BSC Training',
    };
    return res.view('pages/trainingBSC/index', data);
  },
};
