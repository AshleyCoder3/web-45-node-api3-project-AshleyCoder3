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
//eslint-disable-next-line
function validateUser(req, res, next) {
  // DO YOUR MAGIC
}
//eslint-disable-next-line
function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = { logger, validateUserId }
