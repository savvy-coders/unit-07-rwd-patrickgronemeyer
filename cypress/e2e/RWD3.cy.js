describe('Media Query Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should have correct background color for .container in portrait orientation', () => {
      cy.viewport(768, 1024);
      cy.get('.container').should('have.css', 'background-color', 'rgb(204, 204, 204)');
    });
});