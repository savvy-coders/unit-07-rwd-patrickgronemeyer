describe('Media Query Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should have correct width and float for .column in media query', () => {
      cy.viewport(768, 1024);
      cy.get('.column').should(($column) => {
        const width = $column.width();
        expect(width).to.be.closeTo(768, 100); // Allow for a small error margin
      });
      cy.get('.column').should('have.css', 'float', 'none');
    });
});