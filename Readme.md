# gravatar

  modella plugin for generating gravatars for node.js and browser.
  
## Installation

In the browser (using component):

    component install modella/gravatar
    
On the server:

    npm install modella-gravatar

## Example

```js
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

user.save(function(err) {
  console.log(user.gravatar());
});
```

## License

MIT
