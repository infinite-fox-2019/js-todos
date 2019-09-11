class TodoViews {
  static list(data) {
    console.table(data)
  }

  static findById(data) {
    console.log(data)
  }
}

module.exports = TodoViews
