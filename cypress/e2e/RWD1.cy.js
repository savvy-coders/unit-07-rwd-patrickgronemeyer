describe('Media Query Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have correct width and margin for .container', () => {
    cy.viewport(1024, 768);
    cy.get('.container').should(($container) => {
      const width = $container.width();
      expect(width).to.be.closeTo(1024 * 0.9, 100); // Allow for a small error margin
    });
    cy.get('.container').should('have.css', 'margin', '0px 50.4062px');
  });
});