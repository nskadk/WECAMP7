/* describe('Adding Products to Cart Successfully', () => {

    before(() => {
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').should('be.visible').click();
    
      cy.get('#username', { timeout: 10000 }).should('be.visible');
    });
  
    it('should add product to cart with selected quantity', () => {
      cy.get('a[href^="/product/"]')
        .first()
        .click();
  
      // Ensure quantity is selected
      cy.get('select.form-control').select('1');
      cy.get('select.form-control').find('option:selected').should('have.value', '1');
      
      // Wait for the Add To Cart button to be enabled
      cy.get('button').contains('Add To Cart')
        .should('not.be.disabled', { timeout: 10000 }) // Increase timeout
        .click();
      
      // Check if URL has changed to cart
      cy.url().should('include', '/cart');
    });
  
  });
*/

/* describe('Verify Adding Products to Cart When Not Logged In', () => {
    it('should prompt for login when trying to add products to the cart without being logged in', () => {
      
        cy.visit('http://localhost:3000/product/67fccfc1adeeb8b4044e930d'); 
        
        cy.contains('Qty')
            .parent()
            .find('select.form-control')
            .should('be.visible')
            .select('1') 
            .should('have.value', '1');
        
        cy.get('button').contains('Add To Cart').click(); 
        cy.url().should('include', 'http://localhost:3000/cart');
    });
});
*/

/* describe('Verify Products in Cart After Log Out and Log In', () => {
    it('should retain the cart items after logging out and logging back in', () => {
        
        cy.visit('http://localhost:3000/login');
        cy.get('#email').type('john@email.com');
        cy.get('#password').type('123456');
        cy.get('button.btn.btn-primary').click();
        cy.get('#username', { timeout: 10000 }).should('be.visible');

        cy.visit('http://localhost:3000/product/67fccfc1adeeb8b4044e930d');
        cy.contains('Qty')
            .parent()
            .find('select.form-control')
            .should('be.visible')
            .select('2')
            .should('have.value', '2');
        
        cy.get('button').contains('Add To Cart').click();

        cy.get('#username').click(); 
        cy.contains('Logout').click();

        cy.visit('http://localhost:3000/login');
        cy.get('#email').type('john@email.com');
        cy.get('#password').type('123456');
        cy.get('button.btn.btn-primary').click();
        cy.get('#username', { timeout: 10000 }).should('be.visible');

        cy.get('a[href="/cart"]').click(); 
        cy.get('body').then(($body) => {
        cy.contains('Your cart is empty').should('not.be.visible');
        });
    }); 
}); 
*/

/* describe('Verify Quantity Dropdown Options', () => {

    before(() => {
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').should('be.visible').click();
      cy.get('#username', { timeout: 10000 }).should('be.visible');
    });
  
    it('should display correct quantity options dynamically', () => {
      cy.get('a[href^="/product/"]').first().click();
  
      cy.get('select.form-control')
        .should('be.visible')
        .find('option')
        .then(options => {
          
          const realOptions = [...options].filter(option => option.value !== '');
          
          realOptions.forEach((option, index) => {
            expect(option.value).to.equal(String(index + 1));
          });
        });
    });
  
  });*/
  
  /* describe('Verify Selecting Quantity from Dropdown', () => {

    before(() => {
      
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').should('be.visible').click();
      cy.get('#username', { timeout: 10000 }).should('be.visible');
    });
  
    it('should allow user to select a quantity option', () => {
      
      cy.get('a[href^="/product/"]').first().click();
  
      
      cy.get('select.form-control')
        .should('be.visible')
        .then(select => {
          
          const realOptions = [...select.find('option')].filter(opt => opt.value !== '');
  
          if (realOptions.length > 0) {
            const optionToSelect = realOptions[0].value;
  
            cy.get('select.form-control').select(optionToSelect);
  
            cy.get('select.form-control').should('have.value', optionToSelect);
          } else {
            throw new Error('No quantity options available to select.');
          }
        });
    });
  
  });*/

  /* describe('Verify Default Product Quantity Before Selection', () => {

    before(() => {
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').should('be.visible').click();
      cy.get('#username', { timeout: 10000 }).should('be.visible');
    });
  
    it('should display 1 as the default quantity', () => {
      cy.get('a[href^="/product/"]').first().click();
  
      cy.get('select.form-control', { timeout: 10000 }).should('be.visible');
  
      cy.get('select.form-control').find('option:selected').should('have.value', '1');
    });
  
  });
  */
 
  /* describe('Verify Update Product Quantity in Cart', () => {

    before(() => {
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').should('be.visible').click();
      cy.get('#username', { timeout: 10000 }).should('be.visible');
    });
  
    it('should update quantity from 2 to 5 in the cart', () => {
     
      cy.visit('http://localhost:3000/product/67fccfc1adeeb8b4044e9310');
  
     
      cy.contains('Qty') 
        .parent()  
        .find('select.form-control')  
        .should('be.visible')  
        .select('2')  
        .should('have.value', '2'); 
  
      
      cy.get('button').contains('Add To Cart').click();
  
     
      cy.get('a[href="/cart"]').click();
  
     
      cy.get('select.form-control').first()  
        .should('be.visible') 
        .select('2')  
        .should('have.value', '2');  
      
      cy.get('select.form-control').first()  
        .select('5') 
        .should('have.value', '5');  
    });
  
  });*/

  /* describe('Verify Default Product Quantity', () => {

    before(() => {
      
      cy.visit('http://localhost:3000/product/67fccfc1adeeb8b4044e9310');  
    });
  
    it('should show default quantity as 1 before any selection is made', () => {
      
      cy.contains('Qty')  
        .parent()  
        .find('select.form-control')  
        .should('be.visible')  
        .and('have.value', '1');  
    });
  
  });*/

  /* describe('Verify Product is Out of Stock in Cart', () => {
    it('should show the product is out of stock on the product page', () => {
      cy.visit('http://localhost:3000/product/6807f43dcd90ed588748ec53'); 
  
      cy.get('.col').should('contain.text', 'Out Of Stock');
    });
  
    it('should not allow adding the out of stock product to the cart', () => {
      cy.visit('http://localhost:3000/product/6807f43dcd90ed588748ec53'); 
  
      
      cy.get('button.btn-block.btn.btn-primary')
        .should('be.visible') 
        .and('be.disabled');
    });
  });
  */
  /* describe('Edit Cart Successfully', () => {
    it('should add product to cart, update quantity and price correctly', () => {
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').click();
      cy.get('#username', { timeout: 10000 }).should('be.visible');
      
     
      cy.visit('http://localhost:3000/product/67fccfc1adeeb8b4044e930d'); 
      
      cy.contains('Qty')
        .parent()  
        .find('select.form-control')  
        .should('be.visible')  
        .select('1')  
        .should('have.value', '1'); 
  
      cy.get('button').contains('Add To Cart').click();
      
      cy.contains('a.nav-link', 'Cart').click();
      cy.get('.list-group-item').first().within(() => {
        cy.get('.row').should('be.visible'); 
  
        
        cy.get('.col-md-2').eq(2).invoke('text').then((unitPriceText) => {
          const unitPrice = parseFloat(unitPriceText.replace('$', '').trim());
  
          cy.get('.form-control').select('1');
  
          cy.wait(1000);
  

          cy.get('.col-md-2').eq(2).invoke('text').then((totalPriceText) => {
            const totalPrice = parseFloat(totalPriceText.replace('$', '').trim()); 
            
            expect(totalPrice).to.equal(unitPrice * 1); 
          });
        });
      });
    });
  });
  */
  
  /* describe('Edit Cart Successfully', () => {
    it('should add product to cart, update quantity, price correctly, and delete product', () => {
      
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').click();
      cy.get('#username', { timeout: 10000 }).should('be.visible');
  
      
      cy.visit('http://localhost:3000/product/67fccfc1adeeb8b4044e930d'); 
  
      
      cy.contains('Qty')
        .parent()  
        .find('select.form-control')  
        .should('be.visible')  
        .select('1')  
        .should('have.value', '1');
  
      
      cy.get('button').contains('Add To Cart').click();
  
      cy.visit('http://localhost:3000/cart'); 
  
      cy.get('.list-group-item').should('have.length.greaterThan', 0); 
  
      cy.get('.list-group-item').first().within(() => {
        cy.get('.row').should('be.visible'); 
      });
  
      cy.get('.list-group-item').first().within(() => {
        cy.get('.col-md-2').eq(2).invoke('text').then((unitPriceText) => {
          const unitPrice = parseFloat(unitPriceText.replace('$', '').trim()); 
  
          cy.get('.form-control').select('1').should('have.value', '1'); 
  
          cy.wait(1000);
  
          cy.get('.col-md-2').eq(2).invoke('text').then((totalPriceText) => {
            const totalPrice = parseFloat(totalPriceText.replace('$', '').trim()); 
            
            expect(totalPrice).to.equal(unitPrice * 1); 
          });
        });
      });

      cy.get('.list-group-item').first().within(() => {
        cy.get('button.btn.btn-light').click(); 
      });
  
      cy.get('.list-group-item').should('have.length', 0); 
    });
  });
  */

  /* describe('Proceed to Checkout Button', () => {
    it('should be visible, clickable, and navigate to checkout page', () => {
    
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').click();
      cy.get('#username', { timeout: 10000 }).should('be.visible');
  
      cy.visit('http://localhost:3000/product/67fccfc1adeeb8b4044e930d'); 
  
      
      cy.contains('Qty')
        .parent()  
        .find('select.form-control')  
        .should('be.visible')  
        .select('1')  
        .should('have.value', '1');
  
      
      cy.get('button').contains('Add To Cart').click();
  
      cy.visit('http://localhost:3000/cart'); 
  
      cy.get('.list-group-item').should('have.length.greaterThan', 0); 
  
      cy.get('.list-group-item').first().within(() => {
        cy.get('.row').should('be.visible'); 
      });

      cy.contains('button', 'Checkout')
        .should('be.visible')
        .and('not.be.disabled') 
        .click();
  
      cy.url().should('include', '/shipping');
    });
  });
  */

  /* describe('Cart Checkout and Confirmation', () => {
    it('should fill in shipping info and navigate to payment page', () => {
      
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').click();
      cy.get('#username', { timeout: 10000 }).should('be.visible');
      
      cy.visit('http://localhost:3000/product/67fccfc1adeeb8b4044e930d');
      cy.contains('Qty')
        .parent()
        .find('select.form-control')
        .should('be.visible')
        .select('1')
        .should('have.value', '1');
      cy.get('button').contains('Add To Cart').click();
      
      cy.visit('http://localhost:3000/cart');
      cy.get('.list-group-item').should('have.length.greaterThan', 0);
      cy.contains('button', 'Checkout')
        .should('be.visible')
        .and('not.be.disabled')
        .click();
      
      cy.url().should('include', '/shipping');
      
      cy.get('#address').should('be.visible').type('District 10');
      cy.get('#city').should('be.visible').type('Ho Chi Minh');
      cy.get('#postalCode').should('be.visible').type('109');
      cy.get('#country').should('be.visible').type('VietNam');
      
      cy.get('button[type="submit"]').contains('Continue').click();
      
      cy.url().should('include', '/payment');
    });
  });
  */

  /* describe('Shipping Address Field Validation', () => {
    it('should prevent proceeding when Address has more than 255 characters', () => {
  
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').click();
      cy.get('#username', { timeout: 10000 }).should('be.visible');
      
      cy.visit('http://localhost:3000/product/67fccfc1adeeb8b4044e930d');
      cy.contains('Qty')
        .parent()
        .find('select.form-control')
        .should('be.visible')
        .select('1')
        .should('have.value', '1');
      cy.get('button').contains('Add To Cart').click();
      
      cy.visit('http://localhost:3000/cart');
      cy.get('.list-group-item').should('have.length.greaterThan', 0);
      cy.contains('button', 'Checkout')
        .should('be.visible')
        .and('not.be.disabled')
        .click();
      
      cy.url().should('include', '/shipping');
      
      const longAddress = '123 Long Street Name That Continues Beyond Normal Length, Apartment 45B, District 9, Central City, Metropolis, United Provinces of Residential Complex, Near Grand Shopping Mall, Behind Old Cinema Building, Next to Coffee Corner, Extremely Extended Neighborhood Name Without Abbreviation';
  
      // Fill in shipping form
      cy.get('#address')
        .should('be.visible')
        .clear()
        .type(longAddress);
      
      cy.get('#city')
        .should('be.visible')
        .clear()
        .type('HCM');
  
      cy.get('#postalCode')
        .should('be.visible')
        .clear()
        .type('700000');
  
      cy.get('#country')
        .should('be.visible')
        .clear()
        .type('VietNam');
  
      cy.get('button[type="submit"]').contains('Continue').click();
  
      cy.url().should('include', '/shipping'); 
    });
  });
  */

  /* describe('Shipping Address Field left in blank', () => {
    it('should display an error if the address field is left blank and prevent further action', () => {
      
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').click();
      cy.get('#username', { timeout: 10000 }).should('be.visible');
      
      
      cy.visit('http://localhost:3000/product/67fccfc1adeeb8b4044e930d');
      cy.contains('Qty')
        .parent()
        .find('select.form-control')
        .should('be.visible')
        .select('1')
        .should('have.value', '1');
      cy.get('button').contains('Add To Cart').click();
      
     
      cy.visit('http://localhost:3000/cart');
      cy.get('.list-group-item').should('have.length.greaterThan', 0);
      cy.contains('button', 'Checkout')
        .should('be.visible')
        .and('not.be.disabled')
        .click();
      
      
      cy.url().should('include', '/shipping');
      
      cy.get('#address').should('be.visible').clear();
      cy.get('#city').should('be.visible').type('Ho Chi Minh');
      cy.get('#postalCode').should('be.visible').type('109');
      cy.get('#country').should('be.visible').type('VietNam');
      

      cy.get('button[type="submit"]').contains('Continue').click();
      cy.contains('Please fill out this field.'); 
      
    
      cy.url().should('include', '/shipping'); 
    });
  });
  */

  /* describe('City Field Validation', () => {
    it('should display an error if the city field has more than 50 characters', () => {
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').click();
      cy.get('#username', { timeout: 10000 }).should('be.visible');
  
      cy.visit('http://localhost:3000/product/67fccfc1adeeb8b4044e930d');
      cy.contains('Qty')
        .parent()
        .find('select.form-control')
        .should('be.visible')
        .select('1')
        .should('have.value', '1');
      cy.get('button').contains('Add To Cart').click();
  
     
      cy.visit('http://localhost:3000/cart');
      cy.get('.list-group-item').should('have.length.greaterThan', 0);
      cy.contains('button', 'Checkout')
        .should('be.visible')
        .and('not.be.disabled')
        .click();
  
      
      cy.url().should('include', '/shipping');
      
      cy.get('#address').should('be.visible').clear().type('123 Example St');
      cy.get('#city').should('be.visible').clear().type('A'.repeat(51));
      cy.get('#postalCode').should('be.visible').clear().type('109');
      cy.get('#country').should('be.visible').clear().type('VietNam');
  
     
      cy.get('button[type="submit"]').contains('Continue').click();
  
     
      cy.get('.error')
        .should('be.visible')
        .and('contain', 'City must be less than 50 characters'); 
  
      
      cy.url().should('include', '/shipping');
    });
  });
  */
  

  /* describe('City Field left in blank', () => {
    it('should display an error if the city field is left blank', () => {
    
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').click();
      cy.get('#username', { timeout: 10000 }).should('be.visible');
  
      
      cy.visit('http://localhost:3000/product/67fccfc1adeeb8b4044e930d');
      cy.contains('Qty')
        .parent()
        .find('select.form-control')
        .should('be.visible')
        .select('1')
        .should('have.value', '1');
      cy.get('button').contains('Add To Cart').click();
  
     
      cy.visit('http://localhost:3000/cart');
      cy.get('.list-group-item').should('have.length.greaterThan', 0);
      cy.contains('button', 'Checkout')
        .should('be.visible')
        .and('not.be.disabled')
        .click();
  
    
      cy.url().should('include', '/shipping');
      
      cy.get('#address').should('be.visible').clear().type('123 Example St');
      cy.get('#city').should('be.visible').clear(); 
      cy.get('#postalCode').should('be.visible').clear().type('109');
      cy.get('#country').should('be.visible').clear().type('VietNam');
  
      
      cy.get('button[type="submit"]').contains('Continue').click();
  
      
      cy.get('.error')
        .should('be.visible')
        .and('contain', 'Please fill out this field.'); 
  
      
      cy.url().should('include', '/shipping');
    });
  });
  */
  

  /* describe('Postal Code field validation', () => {
    it('should display an error if the postal code field has more than 10 characters', () => {
     
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').click();
      cy.get('#username', { timeout: 10000 }).should('be.visible');
  
     
      cy.visit('http://localhost:3000/product/67fccfc1adeeb8b4044e930d');
      cy.contains('Qty')
        .parent()
        .find('select.form-control')
        .should('be.visible')
        .select('1')
        .should('have.value', '1');
      cy.get('button').contains('Add To Cart').click();
  
     
      cy.visit('http://localhost:3000/cart');
      cy.get('.list-group-item').should('have.length.greaterThan', 0);
      cy.contains('button', 'Checkout')
        .should('be.visible')
        .and('not.be.disabled')
        .click();
  
     
      cy.url().should('include', '/shipping');
      
      cy.get('#address').should('be.visible').clear().type('123 Example St');
      cy.get('#city').should('be.visible').clear().type('Ho Chi Minh'); 
      cy.get('#postalCode').should('be.visible').clear().type('12345678901'); 
      cy.get('#country').should('be.visible').clear().type('VietNam');
  
      
      cy.get('button[type="submit"]').contains('Continue').click();
  
      
      cy.get('.error')
        .should('be.visible')
        .and('contain', 'Postal code must be less than 10 characters'); 
  
     
      cy.url().should('include', '/shipping');
    });
  });
  */

  /* describe('Postal Code Field left in blank', () => {
    it('should display an error if the postal code field is left blank', () => {
     
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').click();
      cy.get('#username', { timeout: 10000 }).should('be.visible');
  
     
      cy.visit('http://localhost:3000/product/67fccfc1adeeb8b4044e930d');
      cy.contains('Qty')
        .parent()
        .find('select.form-control')
        .should('be.visible')
        .select('1')
        .should('have.value', '1');
      cy.get('button').contains('Add To Cart').click();
  
      
      cy.visit('http://localhost:3000/cart');
      cy.get('.list-group-item').should('have.length.greaterThan', 0);
      cy.contains('button', 'Checkout')
        .should('be.visible')
        .and('not.be.disabled')
        .click();
  
      
      cy.url().should('include', '/shipping');
      
      cy.get('#address').should('be.visible').clear().type('123 Example St');
      cy.get('#city').should('be.visible').clear().type('Ho Chi Minh');
      cy.get('#postalCode').should('be.visible').clear(); 
      cy.get('#country').should('be.visible').clear().type('VietNam');
  
      
      cy.get('button[type="submit"]').contains('Continue').click();
  
      
      cy.get('.error')
        .should('be.visible')
        .and('contain', 'Please fill out this field.'); 
  
      cy.url().should('include', '/shipping');
    });
  });
  */
  

  /* describe('Country Field Validation', () => {
    it.only('should display an error if the country field has more than 50 characters', () => {
      
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').click();
      cy.get('#username', { timeout: 10000 }).should('be.visible');
  
     
      cy.visit('http://localhost:3000/product/67fccfc1adeeb8b4044e930d');
      cy.contains('Qty')
        .parent()
        .find('select.form-control')
        .should('be.visible')
        .select('1')
        .should('have.value', '1');
      cy.get('button').contains('Add To Cart').click();
  
     
      cy.visit('http://localhost:3000/cart');
      cy.get('.list-group-item').should('have.length.greaterThan', 0);
      cy.contains('button', 'Checkout')
        .should('be.visible')
        .and('not.be.disabled')
        .click();
  
     
      cy.url().should('include', '/shipping');
      
      cy.get('#address').should('be.visible').clear().type('123 Example St');
      cy.get('#city').should('be.visible').clear().type('Ho Chi Minh');
      cy.get('#postalCode').should('be.visible').clear().type('70000');
      cy.get('#country').should('be.visible').clear()
        .type('ThisCountryNameIsWayTooLongToBeValidAndShouldCauseError123');
  
     
      cy.get('button[type="submit"]').contains('Continue').click();
  
      
      cy.get('.error')
        .should('be.visible')
        .and('contain', 'Country must be less than 50 characters'); 
  
     
      cy.url().should('include', '/shipping');
    });
  });
  */

  /* describe('Country Field left in blank', () => {
    it('should display an error if the country field is left blank', () => {
      
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').click();
      cy.get('#username', { timeout: 10000 }).should('be.visible');
  
      
      cy.visit('http://localhost:3000/product/67fccfc1adeeb8b4044e930d');
      cy.contains('Qty')
        .parent()
        .find('select.form-control')
        .should('be.visible')
        .select('1')
        .should('have.value', '1');
      cy.get('button').contains('Add To Cart').click();
  
      
      cy.visit('http://localhost:3000/cart');
      cy.get('.list-group-item').should('have.length.greaterThan', 0);
      cy.contains('button', 'Checkout')
        .should('be.visible')
        .and('not.be.disabled')
        .click();
  
      
      cy.url().should('include', '/shipping');
  
      cy.get('#address').should('be.visible').clear().type('123 Example St');
      cy.get('#city').should('be.visible').clear().type('Ho Chi Minh');
      cy.get('#postalCode').should('be.visible').clear().type('70000');
      cy.get('#country').should('be.visible').clear(); 
  
     
      cy.get('button[type="submit"]').contains('Continue').click();
  
      
      cy.get('.error')
        .should('be.visible')
        .and('contain', 'Please fill out this field.'); 
  
      
      cy.url().should('include', '/shipping');
    });
  });
  */
 

  /* describe('Payment Method Selection', () => {
    it('should display PayPal payment method, allow user to proceed to the summary page', () => {
      
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').click();
      cy.get('#username', { timeout: 10000 }).should('be.visible');
  
      
      cy.visit('http://localhost:3000/product/67fccfc1adeeb8b4044e930d');
      cy.contains('Qty')
        .parent()
        .find('select.form-control')
        .should('be.visible')
        .select('1')
        .should('have.value', '1');
      cy.get('button').contains('Add To Cart').click();
  
      
      cy.visit('http://localhost:3000/cart');
      cy.get('.list-group-item').should('have.length.greaterThan', 0);
      cy.contains('button', 'Checkout')
        .should('be.visible')
        .and('not.be.disabled')
        .click();
  
      
      cy.url().should('include', '/shipping');
      
      cy.get('#address').should('be.visible').clear().type('123 Happy Street');
      cy.get('#city').should('be.visible').clear().type('Happy City');
      cy.get('#postalCode').should('be.visible').clear().type('12345');
      cy.get('#country').should('be.visible').clear().type('Happiness');
  
      
      cy.get('button.btn.btn-primary').contains('Continue').click(); 
  
      
      cy.url().should('include', '/payment');
      
      
      cy.get('input[type="radio"]').should('have.length', 1); 
      cy.get('label').contains('PayPal').should('be.visible'); 
  
    
      cy.get('input[type="radio"]').check(); 
      cy.get('button.btn.btn-primary').contains('Continue').click(); 
  
      cy.url().should('eq', 'http://localhost:3000/placeorder'); 
      

    });
  });
  */

/* describe('Place Order and Order Summary', () => {
    it('should display order summary along with shipping address, payment method, and payment options', () => {
      
      // Step 1: Login
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('john@email.com');
      cy.get('#password').type('123456');
      cy.get('button.btn.btn-primary').click();
      cy.get('#username', { timeout: 10000 }).should('be.visible');
  
      // Step 2: Add a product to the cart
      cy.visit('http://localhost:3000/product/67fccfc1adeeb8b4044e930d');
      cy.contains('Qty')
        .parent()
        .find('select.form-control')
        .first()
        .should('be.visible')
        .select('1')
        .should('have.value', '1');
  
      cy.get('button').contains('Add To Cart').click();
  
      // Step 3: Visit Cart and Checkout
      cy.visit('http://localhost:3000/cart');
      cy.get('.list-group-item').should('have.length.greaterThan', 0);
      cy.contains('button', 'Checkout')
        .should('be.visible')
        .and('not.be.disabled')
        .click();
  
      // Step 4: Fill Shipping Information
      cy.url().should('include', '/shipping');
      cy.get('#address').clear().type('70000');
      cy.get('#city').clear().type('Ho Chi Minh City');
      cy.get('#postalCode').clear().type('700000');
      cy.get('#country').clear().type('Vietnam');
      cy.get('button[type="submit"]').contains('Continue').click();
  
      // Step 5: Select Payment Method (Choose PayPal first)
      cy.url().should('include', '/payment');
      cy.get('input[type="radio"][value="PayPal"]').check();
      cy.get('button[type="submit"]').contains('Continue').click();
  
      // Step 6: Verify Place Order Page
      cy.url().should('include', '/placeorder');
  
      // Ensure the "Place Order" button is visible and interactable
      cy.contains('button', 'Place Order')
        .should('be.visible')
        .and('not.be.disabled') // Ensure it's not disabled
        .click();  // Click the button
  
      // After clicking, we no longer depend on the URL but rather check for the page elements
  
      // Confirm Order ID heading (it should appear regardless of the dynamic URL)
      cy.get('h1').should('contain.text', 'Order');
  
      // Confirm Shipping Info
      cy.contains('h2', 'Shipping').should('be.visible');
      cy.contains('p', 'Name: John Doe').should('be.visible');
      cy.get('a[href="mailto:john@email.com"]').should('be.visible');
      cy.contains('p', 'Address:70000, Ho Chi Minh City 700000, Vietnam').should('be.visible');
      cy.get('div[role="alert"]').contains('Not Delivered').should('be.visible');
  
      cy.get('div.paypal-buttons', { timeout: 10000 }).should('be.visible');
      cy.get('div.paypal-buttons iframe').should('have.length.at.least', 1).and('be.visible');

    });
  });
  */