/**
 * Module Dependencies
 */

var gravatar = require('./'),
    model = require('modella');

var User = model('user')
  .attr('name')
  .attr('email')
  .attr('password');

User.use(gravatar('email'));

var user = new User({
  name : 'matt',
  email : 'mattmuelle@gmail.com',
  password : 'test'
});

// Mock out sync
User.sync.save = function(fn) {
  fn(null);
};

user.save(function(err) {
  console.log(user.gravatar());
});
