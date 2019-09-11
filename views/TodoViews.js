class TodoViews {
  static list(data) {
    data.forEach(d => {
      const { id, isComplete, todo } = d
      console.log(`${id}. ${isComplete ? '[x]' : '[ ]'} ${todo}`)
    })
  }

  static findById(data) {
    if (!data.isFound) {
      console.log(`Todo with id ${data.id} does not exist.`)
    } else {
      const { id, todo } = data[0]
      console.log(`${id}. ${todo}`)
    }
  }

  static filter(data) {
    console.log(data)
  }
}

module.exports = TodoViews
