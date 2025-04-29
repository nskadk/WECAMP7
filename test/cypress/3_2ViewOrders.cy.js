describe('Order History Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('user3803@email.com');
      cy.get('#password').type('123456');
      cy.contains('button', 'Sign In').click();
  
      cy.get('#username').should('be.visible').click({ force: true });
      cy.contains('a', 'Profile', { timeout: 10000 }).should('be.visible').click();
      cy.url().should('include', '/profile');
    });
  
    it('Verify order history is displayed', () => {
      cy.contains('My Orders').should('be.visible');
      cy.get('table tbody tr').should('have.length.greaterThan', 0);
    });
  
    it('Verify Paid and Delivered status', () => {
      cy.get('table tbody tr').first().within(() => {
        cy.get('td').eq(3).should('exist');
        cy.get('td').eq(4).should('exist');
      });
    });
  
    it('Verify detail button works', () => {
      cy.get('table tbody tr').first().within(() => {
        cy.contains('Details').click();
      });
      cy.url().should('include', '/order/');
    });
  
    it('Verify unpaid and undelivered order displays correctly', () => {
      cy.get('table tbody tr').first().within(() => {
        cy.get('td').eq(3).find('svg').should('exist'); 
        cy.get('td').eq(4).find('svg').should('exist'); 
      });
    });
  });
  
