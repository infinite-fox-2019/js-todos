class AlertViews {
  static successMessageAdd(value) {
    console.log(`'${value}' successfully added.`)
  }

  static successMessageDelete(id) {
    console.log(`Todo with id '${id}' successfully deleted.`)
  }

  static successMessageAddTags({ todo, tags }) {
    console.log(`Tagged task '${todo.todo}' with tags: ${tags.join(', ')}`)
  }
}

module.exports = AlertViews
