Feature('login'); 

const { I, loginPage } = inject()

Scenario('test configuration', ({homePage}) => {
  loginPage.doLogin('eliezer.castro', '$_Ewhdr4*1723!13')
  homePage.checkLoginSuccess()
});
