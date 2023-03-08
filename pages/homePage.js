const { I } = inject();

module.exports = {
  buttons: {
    logout: '~Sair',
  },

  checkLoginSuccess() {
    I.waitForElement(this.buttons.logout, 5)
    I.seeElement(this.buttons.logout)
  }
}
