const express = require('express');
const User = require('./users-model')
const Post = require('../posts/posts-model')
const { validateUserId, validateUser, validatePost } = require('../middleware/middleware')

const router = express.Router();

router.get('/', (req, res) => {
  // RETURN AN ARRAY WITH ALL THE USERS
});

router.get('/:id', validateUserId, (req, res) => {
  // RETURN THE USER OBJECT

});

router.post('/', validateUser(req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT

});

router.put('/:id', validateUserId, validateUser, (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT

});

router.delete('/:id', validateUserId, (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT

});

router.get('/:id/posts', validateUserId, (req, res) => {
  // RETURN THE ARRAY OF USER POSTS

});

router.post('/:id/posts', validateUserId, validatePost, (req, res) => {
  // RETURN THE NEWLY CREATED USER POST

  // and another middleware to check that the request body is valid
});

//***********************500 error middleware***********//
//eslint-disable-next-line
router.use((err, req, res, next) => {
  console.log(err.message); // delete after
  res.status(err.status || 500).json({
    message: err.message,
    devMessage: 'Something bad inside the users router!'
  });
});

// do not forget to export the router
module.exports = router