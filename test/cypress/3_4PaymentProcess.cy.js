
describe('Successfully make payment with PayPal after placing an order', () => {
  it('should complete the checkout flow and pay with PayPal', () => {

    // Step 2: Visit product page
    cy.visit('http://localhost:3000/product/67fccbbd6777405a78084b78');
  
    // Step 3: Add to Cart
    cy.contains('button', 'Add To Cart').click();
    
    // Step 4: Go to Cart and Proceed to Checkout
    cy.contains('button', 'Proceed To Checkout').click();
    // Step 1: Login
  cy.get('#email').type('user3803@email.com');
  cy.get('#password').type('123456');
  cy.contains('button', 'Sign In').click();
    // Step 5: Fill Shipping Info
    cy.get('#address').type('123 Main Street');
    cy.get('#city').type('New York');
    cy.get('#postalCode').type('10001');
    cy.get('#country').type('United States');
    cy.contains('button', 'Continue').click(); // Continue after shipping

    // Step 6: Select Payment Method
    cy.contains('button', 'Continue').click(); // Continue after payment

    // Step 7: Place Order
    cy.contains('button', 'Place Order').click();

    // Step 8: Click PayPal
    cy.wait(5000); // Wait for the PayPal button to appear
    cy.get('[data-button][data-funding-source="paypal"]').should('be.visible').click({ force: true });

    // Step 9: PayPal Login
    cy.origin('https://www.paypal.com', () => {
      cy.get('#email').type('han12345@gmail.com');
      cy.get('#password').type('han12345');
      cy.get('button#btnLogin').click();
      cy.get('#payment-submit-btn').click();
    });

    // Step 10: Verify Payment Success
    cy.contains('Order is paid').should('be.visible');
    cy.visit('http://localhost:3000/profile');
    cy.contains('Paid').should('be.visible');
  });
});
