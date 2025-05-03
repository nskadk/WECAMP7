 /*describe('Mark as Delivered', () => {
    it('should mark the order as delivered and update status', () => {

      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('admin@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').should('be.visible').click();
      
    
      cy.get('#username', { timeout: 10000 }).should('be.visible');
  
     
      cy.visit('http://localhost:3000/orders/paid');
      
    
      cy.get(`[data-order-id="66efd28dx1389444"]`).should('be.visible');
      
   
      cy.get(`[data-order-id="66efd28dx1389444"]`).within(() => {
        cy.get('button').contains('Mark as Delivered').click();
      });
  
      cy.get(`[data-order-id="66efd28dx1389444"]`).should('contain', 'Delivered');
      
      cy.get(`[data-order-id="66efd28dx1389444"]`).should('contain', 'Delivered on');
    });
  });
  */

  /* describe('Attempt to Mark a Specific Unpaid Order as Delivered', () => {
    it('should not display the "Mark as Delivered" button for an unpaid order', () => {
      
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('admin@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').should('be.visible').click();
  
      
      cy.get('#username', { timeout: 10000 }).should('be.visible');
  
      
      cy.visit('http://localhost:3000/admin/orderlist');
  
      
      cy.get('table tbody', { timeout: 10000 }).should('be.visible'); // Wait for the table and tbody to load
  
      
      cy.get('table tbody tr') 
        .contains('td', '67fcd00c4ef201d80e521cc2') 
        .parents('tr') 
        .find('a.btn-sm.btn.btn-light') 
        .click(); 
  
      
      cy.get('button.btn.btn-block.btn-primary').should('not.exist'); 
    });
  });
  */

  /* describe('Prevent Status Change After Delivered', () => {
    it('should not display the "Mark as Delivered" button after an order is marked as delivered', () => {
     
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('admin@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').should('be.visible').click();
  
      
      cy.get('#username', { timeout: 10000 }).should('be.visible');
  
     
      cy.visit('http://localhost:3000/admin/orderlist');
  
      
      cy.get('table tbody', { timeout: 10000 }).should('be.visible'); 
  
      
      cy.get('table tbody tr')
        .contains('td', '67fcd2224ef201d80e521d18') 
        .parents('tr') 
        .find('a.btn-sm.btn.btn-light') 
        .click();
  
      
      cy.get('button.btn.btn-block.btn-primary').should('not.exist'); 
    });
  });
  */

  /* describe('User Cannot Mark as Delivered', () => {
    it('should display the order info and hide the "Mark as Delivered" button for a regular user', () => {
      
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').should('be.visible').click();
  
      
      cy.get('#username', { timeout: 10000 }).should('be.visible');
  
      
      cy.visit('http://localhost:3000/profile');
  
      
      cy.get('table tbody tr')
        .contains('td', '67fcd2e44ef201d80e521d56') 
        .parents('tr')
        .find('a.btn-sm.btn.btn-light') 
        .click();
  
      
      cy.contains('h2', 'Payment Method').should('be.visible');
      cy.contains('strong', 'Method:').should('be.visible');
      cy.contains('PayPal').should('be.visible');
      cy.contains('Paid on').should('be.visible');
  
      
      cy.contains('h2', 'Order Items').should('be.visible');
      cy.get('a').contains('Sony Playstation 5').should('be.visible');
      cy.contains('1 x $399.99 = $399.99').should('be.visible');
  
      
      cy.contains('Shipping').should('be.visible');
      cy.contains('Ho Chi Minh City').should('be.visible'); 
      cy.contains('70000').should('be.visible');
  
    
      cy.get('button').contains('Mark as Delivered').should('not.exist');
    });
  });
  */