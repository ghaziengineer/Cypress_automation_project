export class LoginPage {
  // method for logging into website
  userLogin(username: string, password: string): void {

    cy.visit('/');                                            // visit page
    cy.get('[data-test="username"]').type(username);    // enter user name
    cy.get('[data-test="password"]').type(password);   // enter password
    cy.get('[data-test="login-button"]').click();          // click login button
  }
}
