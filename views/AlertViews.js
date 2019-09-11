class AlertViews {
  static successMessageAdd(value) {
    console.log(`'${value}' successfully added.`)
  }

  static successMessageDelete(id) {
    console.log(`Todo with id '${id}' successfully deleted.`)
  }
}

module.exports = AlertViews
