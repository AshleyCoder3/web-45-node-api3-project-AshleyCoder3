const express = require('express');
const User = require('./users-model')
const Post = require('../posts/posts-model')
const { validateUserId, validateUser, validatePost } = require('../middleware/middleware')

const router = express.Router();

router.get('/', (req, res, next) => {
  User.get(req.query)
    .then(users => {
      res.status(200).json(users)
    })
    .catch(next)
});

router.get('/:id', validateUserId, (req, res) => {
  res.json(req.user)
});

router.post('/', validateUser, (req, res, next) => {
  User.insert(req.body)
    .then(user => {
      res.json(user)
    })
    .catch(next)
});

router.put('/:id', validateUserId, validateUser, (req, res, next) => {
  User.update(req.params.id, req.body)
    .then(user => {
      res.json(user)
    })
    .catch(next)
});

router.delete('/:id', validateUserId, (req, res, next) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  User.remove(req.params.id)
    .then(() => {
      res.json(req.user)
    })
    .catch(next)
});

router.get('/:id/posts', validateUserId, (req, res, next) => {
  // RETURN THE ARRAY OF USER POSTS
  User.getUserPosts(req.params.id)
    .then(post => {
      res.json(post)
    })
    .catch(next)
});

router.post('/:id/posts', validateUserId, validatePost, (req, res, next) => {
  // RETURN THE NEWLY CREATED USER POST
  const postInfo = { ...req.body, user_id: req.params.id }
  Post.insert(postInfo)
    .then(post => {
      res.json(post)
    })
    .catch(next)
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