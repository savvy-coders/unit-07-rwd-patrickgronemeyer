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

  it('should have correct width and float for .column in media query', () => {
    cy.viewport(768, 1024);
    cy.get('.column').should(($column) => {
      const width = $column.width();
      expect(width).to.be.closeTo(768, 100); // Allow for a small error margin
    });
    cy.get('.column').should('have.css', 'float', 'none');
  });

  it('should have correct background color for .container in portrait orientation', () => {
    cy.viewport(768, 1024);
    cy.get('.container').should('have.css', 'background-color', 'rgb(204, 204, 204)');
  });

  it('should have correct background color for .container in landscape orientation', () => {
    cy.viewport(1024, 768);
    cy.get('.container').should('have.css', 'background-color', 'rgb(238, 238, 238)');
  });

  it('should have correct styles for navigation menu items in media query', () => {
    cy.viewport(768, 1024);
    cy.get('.nav').should('have.css', 'flex-direction', 'column');
    cy.get('.nav').should('have.css', 'font-size', '16px');
  });

  it('should have responsive layout for navigation menu items', () => {
    cy.get('.nav').should('have.css', 'display', 'flex');
  });

  it('should have transition effect on navigation menu', () => {
    cy.get('.nav').should(($nav) => {
      const transition = $nav.css('transition');
      expect(transition).to.include('all'); // replace with your transition property
    });
  });
});
