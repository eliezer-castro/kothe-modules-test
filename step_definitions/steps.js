require('dotenv').config();
const { I } = inject();

Given('I fill username', () => {
  I.tap('USUÁRIO')
  I.fillField('USUÁRIO', process.env.USER)
});

Given('I fill password', () => {
  I.tap('Senha')
  I.fillField('Senha', process.env.PASS)  
});

When('I click Entrar', () => {
  I.hideDeviceKeyboard();
  I.tap('~Entrar')
});

Then('I should see the home page', () => {
  I.waitForElement('~Sair', 5)
  I.seeElement('~Sair')
});
