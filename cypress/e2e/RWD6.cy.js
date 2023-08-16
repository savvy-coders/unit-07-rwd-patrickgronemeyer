describe('Media Query Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should have responsive layout for navigation menu items', () => {
      cy.get('.nav').should('have.css', 'display', 'flex');
    });
});