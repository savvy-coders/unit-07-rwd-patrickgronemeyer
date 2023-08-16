describe('Media Query Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should have correct styles for navigation menu items in media query', () => {
      cy.viewport(768, 1024);
      cy.get('.nav').should('have.css', 'flex-direction', 'column');
      cy.get('.nav').should('have.css', 'font-size', '16px');
    });
});