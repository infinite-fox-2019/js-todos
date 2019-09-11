class TodoViews {
  static list(data) {
    const newData = data.map(d => {
      return Date.parse(d.created_date)
    })
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

  static filter(data) {
    console.log(data)
  }
}

module.exports = TodoViews
