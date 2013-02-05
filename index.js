/**
 * Module Dependencies
 */

var md5 = require('md5');

/**
 * Browser vs node normalization
 */

md5 = (md5.digest_s) ? md5.digest_s : md5;

/**
 * Export plugin
 */

module.exports = function(attr) {
  return function(model) {
    model.attr('gravatar', { type : 'string' });
    model.on('saving', function(obj) {
      if(!obj.isNew()) return;
      var email = obj[attr]();
      obj.gravatar(url(email));
    });
  };
};

/**
 * Get the gravatar url
 *
 * @param {String} email
 * @return {String} url
 */

function url(email) {
  return 'https://secure.gravatar.com/avatar/' + md5(email);
}
