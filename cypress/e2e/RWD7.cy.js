describe('Media Query Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should have transition effect on navigation menu', () => {
      cy.get('.nav').should(($nav) => {
        const transition = $nav.css('transition');
        expect(transition).to.include('all'); // replace with your transition property
      });
    });
  });
  