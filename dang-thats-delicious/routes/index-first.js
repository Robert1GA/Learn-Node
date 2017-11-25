const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const rob = { name: 'Rob', age: 100, cool: true};
  // res.json(rob);
  // res.send('Hey! It works!');
  // res.send(req.query.name);
  // res.json(req.query);
  res.render('hello', {
    name: 'rob',
    dog: req.query.dog,
    title: 'I love food'
  });
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
})

module.exports = router;
