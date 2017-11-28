/**
 * ContactController
 *
 * @description :: Server-side logic for managing Contacts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: (req, res) => {
    const data = {
      title: 'Contact',
    };
    return res.view('pages/contact/index', data);
  },
};
