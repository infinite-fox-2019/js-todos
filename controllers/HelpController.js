const Display = require('../views/Display')

class HelpController {
  static help(){
    Display.helpMessage()
  }
}

module.exports = HelpController