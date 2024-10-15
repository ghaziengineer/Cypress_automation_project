describe('invalid Login testcase', () => {
  it('should not log in successfully with invalid credentials', () => {
    cy.visit('/');
   cy.get('[data-test="username"]').type('ghazi');
   cy.get('[data-test="password"]').type('ghazi_engineer');
   cy.get('[data-test="login-button"]').click();

    // Verify unsuccessful login
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service');
  });
});