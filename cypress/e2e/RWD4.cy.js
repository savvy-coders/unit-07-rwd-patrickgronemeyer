describe('Media Query Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should have correct background color for .container in landscape orientation', () => {
      cy.viewport(1024, 768);
      cy.get('.container').should('have.css', 'background-color', 'rgb(238, 238, 238)');

    });
});
      