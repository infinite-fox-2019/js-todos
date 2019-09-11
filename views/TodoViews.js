class TodoViews {
  static list(data) {
    console.table(data)
  }

  static findById(data) {
    if (!data.isFound) {
      console.log(`Todo with id ${data.id} does not exist.`)
    } else {
      const { id, todo } = data[0]
      console.log(`${id}. ${todo}`)
    }
  }

  static complete(data) {
    console.table(data)
  }

  static uncomplete(data) {
    console.table(data)
  }
}

module.exports = TodoViews
