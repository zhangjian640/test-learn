module.exports = {
  add: (...args) => {
    return args.reduce((a, b) => {
      return a + b
    })
  },
  mul: (...args) => {
    return args.reduce((a, b) => {
      return a * b
    })
  }
}