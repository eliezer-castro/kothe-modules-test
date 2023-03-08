const { I } = inject();

module.exports = {
  filds: {
    user: 'USUÁRIO',
    password: 'Senha',
  },

  buttons: {
    enter: '~Entrar',
  },

  doLogin(user, password) {
    I.tap(this.filds.user)
    I.fillField(this.filds.user, user)
    I.tap(this.filds.password)
    I.fillField(this.filds.password, password)
    I.hideDeviceKeyboard();
    I.tap(this.buttons.enter)
  },
  
}
