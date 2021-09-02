function logger(req, res, next) {
  console.log(`it's a ${req.method} request!`)
  console.log(`This is using ${req.url}`)
  console.log(`At ${Date()}`)
  next()
}
//eslint-disable-next-line
function validateUserId(req, res, next) {
  // DO YOUR MAGIC
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
module.exports = { logger }
