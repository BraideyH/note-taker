// middleware that gives each note a unique ID which is important for deletion.
module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);