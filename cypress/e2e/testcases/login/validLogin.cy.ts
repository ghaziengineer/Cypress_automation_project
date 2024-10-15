describe('valid Login testcase', () => {
  it('should log in successfully with valid credentials', () => {
    cy.visit('/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click()

    // Assert
    cy.location('pathname').should('be.equal', '/inventory.html')
    cy.contains('.title', 'Products').should('be.visible')
  });
});