describe('Login Tests', () => {
  it('should log in successfully with valid credentials', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    // Verify successful login
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
  });
});