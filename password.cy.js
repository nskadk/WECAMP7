/* describe('Verify successful password change with new password with valid format', () => {

    it('should change the password successfully and redirect to the login page', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('#email').type('aq@gmail.com');   
        cy.get('#password').type('Asdfg_24689');        
        cy.get('button.btn.btn-primary').should('be.visible').click(); 
        cy.get('#username', { timeout: 10000 }).should('be.visible').click();
        cy.get('a[href="/profile"]').click();

        cy.get('#name')
        .should('be.visible')
        .and('have.value', 'aq');
      cy.get('#email')
        .should('be.visible')
        .and('have.value', 'aq@gmail.com');
      cy.get('#password')
        .should('be.visible')
        .type('Asdfg_246890');
      cy.get('#confirmPassword')
        .should('be.visible')
        .type('Asdfg_246890');

      cy.contains('Update').click();
  
      cy.contains('Profile updated successfully').should('be.visible');
    });
  
  });
  */

  /* describe('Verify unsuccessful password change with invalid password format', () => {

    it('should not allow password change with invalid password: Qw1357', () => {
      cy.visit('http://localhost:3000/login');
  
     
      cy.get('#email').type('asdz@gmail.com');
      cy.get('#password').type('Qwert.1357');
      cy.get('button.btn.btn-primary').click();
  
      
      cy.get('#username', { timeout: 10000 }).should('be.visible').click();
      cy.get('a[href="/profile"]').click();
  
      
      cy.get('#password').clear().type('Qw1357');
      cy.get('#confirmPassword').clear().type('Qw1357');
      cy.contains('Update').click();
  
      
      cy.contains('Invalid password format').should('be.visible');
    });

    it('should not allow password change with invalid password: qwertyui', () => {
        cy.visit('http://localhost:3000/login');
    
       
        cy.get('#email').type('asdz@gmail.com');
        cy.get('#password').type('Qw1357');
        cy.get('button.btn.btn-primary').click();
    
        
        cy.get('#username', { timeout: 10000 }).should('be.visible').click();
        cy.get('a[href="/profile"]').click();
    
        
        cy.get('#password').clear().type('qwertyui');
        cy.get('#confirmPassword').clear().type('qwertyui');
        cy.contains('Update').click();
    
        
        cy.contains('Invalid password format').should('be.visible');
      });

      it('should not allow password change with invalid password: QWERTYUI', () => {
        cy.visit('http://localhost:3000/login');
    
       
        cy.get('#email').type('asdz@gmail.com');
        cy.get('#password').type('qwertyui');
        cy.get('button.btn.btn-primary').click();
    
        
        cy.get('#username', { timeout: 10000 }).should('be.visible').click();
        cy.get('a[href="/profile"]').click();
    
        
        cy.get('#password').clear().type('QWERTYUI');
        cy.get('#confirmPassword').clear().type('QWERTYUI');
        cy.contains('Update').click();
    
        
        cy.contains('Invalid password format').should('be.visible');
      });

      it('should not allow password change with invalid password: Qwerty1237', () => {
        cy.visit('http://localhost:3000/login');
    
       
        cy.get('#email').type('asdz@gmail.com');
        cy.get('#password').type('QWERTYUI');
        cy.get('button.btn.btn-primary').click();
    
        
        cy.get('#username', { timeout: 10000 }).should('be.visible').click();
        cy.get('a[href="/profile"]').click();
    
        
        cy.get('#password').clear().type('Qwerty1237');
        cy.get('#confirmPassword').clear().type('Qwerty1237');
        cy.contains('Update').click();
    
        
        cy.contains('Invalid password format').should('be.visible');
      });

      it('should not allow password change with invalid password: Q135791.', () => {
        cy.visit('http://localhost:3000/login');
    
       
        cy.get('#email').type('asdz@gmail.com');
        cy.get('#password').type('Qwerty1237');
        cy.get('button.btn.btn-primary').click();
    
        
        cy.get('#username', { timeout: 10000 }).should('be.visible').click();
        cy.get('a[href="/profile"]').click();
    
        
        cy.get('#password').clear().type('Q135791.');
        cy.get('#confirmPassword').clear().type('Q135791.');
        cy.contains('Update').click();
    
        
        cy.contains('Invalid password format').should('be.visible');
      });

      it('should not allow password change with invalid password: q135791.', () => {
        cy.visit('http://localhost:3000/login');
    
       
        cy.get('#email').type('asdz@gmail.com');
        cy.get('#password').type('Q135791.');
        cy.get('button.btn.btn-primary').click();
    
        
        cy.get('#username', { timeout: 10000 }).should('be.visible').click();
        cy.get('a[href="/profile"]').click();
    
        
        cy.get('#password').clear().type('q135791.');
        cy.get('#confirmPassword').clear().type('q135791.');
        cy.contains('Update').click();
    
        
        cy.contains('Invalid password format').should('be.visible');
      });

      it('should not allow password change with invalid password: Qwertyui.', () => {
        cy.visit('http://localhost:3000/login');
    
       
        cy.get('#email').type('asdz@gmail.com');
        cy.get('#password').type('q135791.');
        cy.get('button.btn.btn-primary').click();
    
        
        cy.get('#username', { timeout: 10000 }).should('be.visible').click();
        cy.get('a[href="/profile"]').click();
    
        
        cy.get('#password').clear().type('Qwertyui.');
        cy.get('#confirmPassword').clear().type('Qwertyui.');
        cy.contains('Update').click();
    
        
        cy.contains('Invalid password format').should('be.visible');
      });

      it('should not allow password change with invalid password: Qwe1234.', () => {
        cy.visit('http://localhost:3000/login');
    
       
        cy.get('#email').type('asdz@gmail.com');
        cy.get('#password').type('Qwertyui.');
        cy.get('button.btn.btn-primary').click();
    
        
        cy.get('#username', { timeout: 10000 }).should('be.visible').click();
        cy.get('a[href="/profile"]').click();
    
        
        cy.get('#password').clear().type('Qwe1234.');
        cy.get('#confirmPassword').clear().type('Qwe1234.');
        cy.contains('Update').click();
    
        
        cy.contains('Invalid password format').should('be.visible');
      });

      it('should not allow password change with invalid password: Qabcd.1357', () => {
        cy.visit('http://localhost:3000/login');
    
       
        cy.get('#email').type('asdz@gmail.com');
        cy.get('#password').type('Qwe1234.');
        cy.get('button.btn.btn-primary').click();
    
        
        cy.get('#username', { timeout: 10000 }).should('be.visible').click();
        cy.get('a[href="/profile"]').click();
    
        
        cy.get('#password').clear().type('Qabcd.1357');
        cy.get('#confirmPassword').clear().type('Qabcd.1357');
        cy.contains('Update').click();
    
        
        cy.contains('Invalid password format').should('be.visible');
      });

      it('should not allow password change with invalid password: Qqqqq1357.', () => {
        cy.visit('http://localhost:3000/login');
    
       
        cy.get('#email').type('asdz@gmail.com');
        cy.get('#password').type('Qabcd.1357');
        cy.get('button.btn.btn-primary').click();
    
        
        cy.get('#username', { timeout: 10000 }).should('be.visible').click();
        cy.get('a[href="/profile"]').click();
    
        
        cy.get('#password').clear().type('Qqqqq1357.');
        cy.get('#confirmPassword').clear().type('Qqqqq1357.');
        cy.contains('Update').click();
    
        
        cy.contains('Invalid password format').should('be.visible');
      });

      it('should not allow password change with invalid password: Qwert.1111', () => {
        cy.visit('http://localhost:3000/login');
    
       
        cy.get('#email').type('asdz@gmail.com');
        cy.get('#password').type('Qqqqq1357.');
        cy.get('button.btn.btn-primary').click();
    
        
        cy.get('#username', { timeout: 10000 }).should('be.visible').click();
        cy.get('a[href="/profile"]').click();
    
        
        cy.get('#password').clear().type('Qwert.1111');
        cy.get('#confirmPassword').clear().type('Qwert.1111');
        cy.contains('Update').click();
    
        
        cy.contains('Invalid password format').should('be.visible');
      });

      it('should not allow password change with invalid password: password.135', () => {
        cy.visit('http://localhost:3000/login');
    
       
        cy.get('#email').type('asdz@gmail.com');
        cy.get('#password').type('Qwert.1111');
        cy.get('button.btn.btn-primary').click();
    
        
        cy.get('#username', { timeout: 10000 }).should('be.visible').click();
        cy.get('a[href="/profile"]').click();
    
        
        cy.get('#password').clear().type('password.135');
        cy.get('#confirmPassword').clear().type('password.135');
        cy.contains('Update').click();
    
        
        cy.contains('Invalid password format').should('be.visible');
      });

      it('should not allow password change with invalid password: Qw.12345678', () => {
        cy.visit('http://localhost:3000/login');
    
       
        cy.get('#email').type('asdz@gmail.com');
        cy.get('#password').type('password.135');
        cy.get('button.btn.btn-primary').click();
    
        
        cy.get('#username', { timeout: 10000 }).should('be.visible').click();
        cy.get('a[href="/profile"]').click();
    
        
        cy.get('#password').clear().type('Qw.12345678');
        cy.get('#confirmPassword').clear().type('Qw.12345678');
        cy.contains('Update').click();
    
        
        cy.contains('Invalid password format').should('be.visible');
      });

      it('should not allow password change with invalid password: Qiloveyou.135', () => {
        cy.visit('http://localhost:3000/login');
    
       
        cy.get('#email').type('asdz@gmail.com');
        cy.get('#password').type('Qw.12345678');
        cy.get('button.btn.btn-primary').click();
    
        
        cy.get('#username', { timeout: 10000 }).should('be.visible').click();
        cy.get('a[href="/profile"]').click();
    
        
        cy.get('#password').clear().type('Qiloveyou.135');
        cy.get('#confirmPassword').clear().type('Qiloveyou.135');
        cy.contains('Update').click();
    
        
        cy.contains('Invalid password format').should('be.visible');
      });

      it('should not allow password change with invalid password: asdz.1357', () => {
        cy.visit('http://localhost:3000/login');
    
       
        cy.get('#email').type('asdz@gmail.com');
        cy.get('#password').type('Qw.12345678');
        cy.get('button.btn.btn-primary').click();
    
        
        cy.get('#username', { timeout: 10000 }).should('be.visible').click();
        cy.get('a[href="/profile"]').click();
    
        
        cy.get('#password').clear().type('asdz.1357');
        cy.get('#confirmPassword').clear().type('asdz.1357');
        cy.contains('Update').click();
    
        
        cy.contains('Invalid password format').should('be.visible');
      });

      it('should not allow password change with invalid password: Qwerty1237', () => {
        cy.visit('http://localhost:3000/login');
    
       
        cy.get('#email').type('asdz@gmail.com');
        cy.get('#password').type('asdz.1357');
        cy.get('button.btn.btn-primary').click();
    
        
        cy.get('#username', { timeout: 10000 }).should('be.visible').click();
        cy.get('a[href="/profile"]').click();
    
        
        cy.get('#password').clear().type('Qwerty1237');
        cy.get('#confirmPassword').clear().type('Qwerty1237');
        cy.contains('Update').click();
    
        
        cy.contains('Invalid password format').should('be.visible');
      });
  });
  */

  /* describe('Verify unsuccessful password change with repeated password', () => {

    it('should not allow password change with repeated password', () => {
      cy.visit('http://localhost:3000/login');
  
     
      cy.get('#email').type('asdz@gmail.com');
      cy.get('#password').type('Qwert.1357');
      cy.get('button.btn.btn-primary').click();
  
      
      cy.get('#username', { timeout: 10000 }).should('be.visible').click();
      cy.get('a[href="/profile"]').click();
  
      
      cy.get('#password').clear().type('Qwert.1357');
      cy.get('#confirmPassword').clear().type('Qwert.1357');
      cy.contains('Update').click();
  
      
      cy.contains('New password must differ from old password.').should('be.visible');
    });
  
  });
  */


  /* describe('Verify unsuccessful password change when any field is empty', () => {

    it('should not allow password change if any required field is empty', () => {
      cy.visit('http://localhost:3000/login');

      cy.get('#email').type('asdz@gmail.com');
      cy.get('#password').type('Qwert.1357');
      cy.get('button.btn.btn-primary').click();

      cy.contains('ae', { timeout: 10000 }).should('be.visible');
      cy.get('#username.dropdown-toggle.nav-link', { timeout: 10000 }).should('be.visible');
     
      cy.get('#name').should('be.visible').and('have.value', 'asdz').clear();
      cy.get('#email').should('be.visible').and('have.value', 'asdz@gmail.com');
      cy.get('#password').should('be.visible').type('Qwerty.1357');
      cy.get('#confirmPassword').should('be.visible').type('Qwerty.1357');
      
      cy.contains('Update').click();
      cy.contains('All fields are required').should('be.visible');
  
    });
  
  });
  */
  