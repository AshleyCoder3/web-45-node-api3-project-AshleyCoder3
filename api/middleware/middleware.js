const User = require('../users/users-model')

function logger(req, res, next) {
  console.log(`it's a ${req.method} request!`)
  console.log(`This is using ${req.headers.host}${req.url}`)
  console.log(`At ${Date()}`)
  next()
}

async function validateUserId(req, res, next) {
  try {
    const { id } = req.params
    const possUser = await User.findById(id)
    if (possUser) {
      req.user = possUser
      next()
    } else {
      next({
        message: 'user not found',
        status: 404
      })
    }
  } catch (err) {
    next(err)
  }

}

function validateUser(req, res, next) {
  if (!req.body.name) {
    next({
      message: 'missing required name field',
      status: 400
    })
  } else {
    next()
  }
}

function validatePost(req, res, next) {
  if (!req.body.text) {
    next({
      message: 'missing required text field',
      status: 400
    })
  } else {
    next()
  }
}

// do not forget to expose these functions to other modules
module.exports = { logger, validateUserId, validateUser, validatePost }
