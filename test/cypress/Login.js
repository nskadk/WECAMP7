import loginData from "../test_data"

describe('Login Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    })

    it('Login successfully with admin', () => {
        const user = loginData.valid[0];
        cy.get('#email').type(user.email)
        cy.get('#password').type(user.password)
        cy.contains('button', 'Sign In').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })
    it('Login successfully with user john', () => {
        const user = loginData.valid[1];
        cy.get('#email').type(user.email)
        cy.get('#password').type(user.password)
        cy.contains('button', 'Sign In').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })
    it('Login successfully with user jane', () => {
        const user = loginData.valid[2];
        cy.get('#email').type(user.email)
        cy.get('#password').type(user.password)
        cy.contains('button', 'Sign In').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })
    it('Login failed if email is empty', () => {
        const user = loginData.invalid[0];
        if (user.email) {
            cy.get('#email').type(user.email);
        }
        if (user.password) {
            cy.get('#password').type(user.password);
        }
        cy.contains('button', 'Sign In').click();
        cy.url().should('eq', 'http://localhost:3000/login');
        cy.get('div.Toastify__toast-body')
  .should('contain', user.message);
    })
    
    it('Login failed if password is empty', () => {
        const user = loginData.invalid[1];
        if (user.email) {
            cy.get('#email').type(user.email);
        }
        if (user.password) {
            cy.get('#password').type(user.password);
        }
        cy.contains('button', 'Sign In').click();
        cy.url().should('eq', 'http://localhost:3000/login');
        cy.get('div.Toastify__toast-body')
  .should('contain', user.message);
    })
    
    it('Login failed if email and password are empty', () => {
        const user = loginData.invalid[2];
        if (user.email) {
            cy.get('#email').type(user.email);
        }
        if (user.password) {
            cy.get('#password').type(user.password);
        }
        cy.contains('button', 'Sign In').click();
        cy.url().should('eq', 'http://localhost:3000/login');
        cy.get('div.Toastify__toast-body')
        .should('contain', user.message);      
    })
})
