/* describe('View Profile UI Verification', () => {
    it('should login and verify the UI screen for View Profile', () => {
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').should('be.visible').click();
  
      // Confirm that the user is logged in
      cy.contains('John Doe', { timeout: 10000 }).should('be.visible');
      cy.get('#username.dropdown-toggle.nav-link', { timeout: 10000 }).should('be.visible');
  
      // Click on the profile dropdown
      cy.get('#username.dropdown-toggle.nav-link').click();
      cy.contains('Profile').click();
  
      // Verify profile form fields
      cy.get('input#name.form-control', { timeout: 15000 }).should('be.visible').and('have.value', 'John Doe');
      cy.get('input#email.form-control').should('be.visible').and('have.value', 'john@email.com');
      cy.get('input#password.form-control').should('be.visible');
      cy.get('input#confirmPassword.form-control').should('be.visible');
      cy.get('button.btn.btn-primary').should('be.visible').and('contain', 'Update');
  
      // Verify the orders table headers
      cy.get('.table-responsive table thead', { timeout: 15000 }).within(() => {
        cy.contains('ID').should('be.visible');
        cy.contains('DATE').should('be.visible');
        cy.contains('TOTAL').should('be.visible');
        cy.contains('PAID').should('be.visible');
        cy.contains('DELIVERED').should('be.visible');
      });
  
      // Verify presence of at least one "Details" button in the orders table
      cy.get('.table-responsive').within(() => {
        cy.contains('Details').should('exist');
      });
    });
  });
  */


  /*describe('Access Profile Page Without Logging In', () => {
    it('should redirect to login page and show Sign In link on the navigation bar', () => {
      cy.visit('http://localhost:3000/profile');
      cy.url().should('eq','http://localhost:3000/login');
      cy.get('a[href="/login"]').should('be.visible').and('contain', 'Sign In');
    });
  });
  */

  /* describe('Verify Profile Information Display', () => {
    it('should log in, go to profile page, and verify the information', () => {
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');   
      cy.get('#password').type('123456');        
      cy.get('button.btn.btn-primary').should('be.visible').click(); 
      cy.get('#username', { timeout: 10000 }).should('be.visible').click();
      cy.get('a[href="/profile"]').click();
      cy.get('#name')
        .should('be.visible')
        .and('have.value', 'John Doe');
      cy.get('#email')
        .should('be.visible')
        .and('have.value', 'john@email.com');
      cy.get('#password')
        .should('be.visible')
        .and('have.value', ''); 
      cy.get('#confirmPassword')
        .should('be.visible')
        .and('have.value', ''); 
    });
  });
  */

  /* describe('Verify Order History Display', () => {
    beforeEach(() => {
      // Login and go to Profile page
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').should('be.visible').click(); 
  
      cy.get('.dropdown-toggle').contains('John Doe').click();
      cy.get('a').contains('Profile').click();
  
      cy.url().should('include', '/profile');
    });
  
    it('should display correct order history', () => {
      // Wait for the table to be visible and ensure it's not blocked by other elements
      cy.get('table.table.table-striped').should('be.visible').and('not.be.disabled');
  
      // Ensure there are rows in the table
      cy.get('table tbody tr').should('have.length.greaterThan', 0); // At least 1 row
  
      // Loop through each row and validate columns
      cy.get('table tbody tr').each(($row) => {
        cy.wrap($row).within(() => {
          // Check the ID column is not empty
          cy.get('td').eq(0).invoke('text').should('not.be.empty');
  
          // Check the Date column is not empty
          cy.get('td').eq(1).invoke('text').should('not.be.empty');
  
          // Check the Total column is not empty
          cy.get('td').eq(2).invoke('text').should('not.be.empty');
  
          // Check Paid Status (column 3) — SVG icon (✘) or a date
          cy.get('td').eq(3).then(($td) => {
            const hasSvg = $td.find('svg').length > 0;
            const text = $td.text().trim();
  
            if (hasSvg) {
              cy.wrap($td).find('svg').should('exist');
            } else {
              expect(text).to.match(/\d{4}-\d{2}-\d{2}/); // Match a date format
            }
          });
  
          // Check Delivery Status (column 4) — SVG icon (✘) or a date
          cy.get('td').eq(4).then(($td) => {
            const hasSvg = $td.find('svg').length > 0;
            const text = $td.text().trim();
  
            if (hasSvg) {
              cy.wrap($td).find('svg').should('exist');
            } else {
              expect(text).to.match(/\d{4}-\d{2}-\d{2}/); // Match a date format
            }
          });
  
          // Check the Details button
          cy.get('td').eq(5).find('a').should('exist').and('contain', 'Details');
        });
      });
    });
  });
  */
  
  
  /* describe('Verify "Details" Button in Order List', () => {

    before(() => {
     
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');   
      cy.get('#password').type('123456');        
      cy.get('button.btn.btn-primary').should('be.visible').click(); 
      cy.get('#username', { timeout: 10000 }).should('be.visible').click();
      cy.get('a[href="/profile"]').click();
      cy.url().should('include', '/profile');
    });
  
    it('should redirect to the order details page when "Details" button is clicked', () => {
    
      cy.contains('My Orders')
        .should('be.visible');
  
      cy.get('a.btn.btn-light.btn-sm').contains('Details').click();
  
      cy.url().should('include', '/order/');
    });
  
  });
  */


  