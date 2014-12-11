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

module.exports = function(prop, attr, defaultAvatar) {
  prop = prop || 'email';
  attr = attr || 'gravatar';

  return function(model) {
    model.attr(attr, { type : 'string' });
    model.on('saving', function(obj, fn) {
      if(obj[attr]()) return fn();
      var email = obj[prop]();
      obj[attr](url(email, defaultAvatar));
      fn();
    });
  };
};

/**
 * Get the gravatar url
 *
 * @param {String} email
 * @return {String} url
 */

function url(email, defaultAvatar) {
  if (defaultAvatar) defaultAvatar = 'd=' + defaultAvatar;
  defaultAvatar = defaultAvatar || ''
  return 'https://secure.gravatar.com/avatar/' + md5(email) + '?' + defaultAvatar;
}
