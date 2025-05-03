/*describe('EP01_1_01 - Successful registration with valid email and password', () => {
    it('should register and redirect to login page', () => {
      cy.visit('http://localhost:3000/'); 
      cy.get('.nav-link[href="/login"]').should('be.visible').click();  
      cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
      cy.get('#name').type('User 12345');
      cy.get('#email').type('user12345@gmail.com');
      cy.get('#password').type('Qwert.1357');
      cy.get('#confirmPassword').type('Qwert.1357');
      cy.get('button.btn.btn-primary').should('be.visible').click(); 
      cy.url().should('include', '/register?redirect=/');
    });
  });
*/


/* describe('EP01_1_02 - Registration with existing email', () => {
    it('should show error for duplicate email', () => {
      cy.visit('http://localhost:3000/'); 
      cy.get('.nav-link[href="/login"]').should('be.visible').click();  
      cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
      cy.get('#name').type('User 1234');
      cy.get('#email').type('user1234@gmail.com');
      cy.get('#password').type('Qwert.1357');
      cy.get('#confirmPassword').type('Qwert.1357');
      cy.get('button.btn.btn-primary').should('be.visible').click();
      cy.contains('User already exists');
    });
  });
  */
  

  /* describe('EP01_1_03 - Registration with invalid email', () => {

    it('should reject invalid email: user23@@gmail.com', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('user23@@gmail.com');
        cy.get('#password').type('Qwert.1357');
        cy.get('#confirmPassword').type('Qwert.1357');
        cy.get('button.btn.btn-primary').should('be.visible').click(); 
        cy.contains("A part following '@' should not contain the symbol '@'.");
    });
  
    it('should reject invalid email: user23.gmail.com', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('user23.gmail.com');
        cy.get('#password').type('Qwert.1357');
        cy.get('#confirmPassword').type('Qwert.1357');
        cy.get('button.btn.btn-primary').should('be.visible').click(); 
        cy.contains("Please include an '@' in the email address. 'user12345.gmail.com' is missing an '@'.");
    });
  
    it('should reject invalid email: user23@domain,com', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('user23@domain,com');
        cy.get('#password').type('Qwert.1357');
        cy.get('#confirmPassword').type('Qwert.1357');
        cy.get('button.btn.btn-primary').should('be.visible').click(); 
        cy.contains("A part following '@' should not contain the symbol ','.");
    });
  
    it('should reject invalid email: user2@domaincom', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('user2@domaincom');
        cy.get('#password').type('Qwert.1357');
        cy.get('#confirmPassword').type('Qwert.1357');
        cy.get('button.btn.btn-primary').should('be.visible').click(); 
        cy.contains("Please include an '.' in the email address. 'user12345@domaincom' is missing an '.'.");
    });
  
    it('should reject invalid email: user2!@gmail.com', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('user2!@gmail.com');
        cy.get('#password').type('Qwert.1357');
        cy.get('#confirmPassword').type('Qwert.1357');
        cy.get('button.btn.btn-primary').should('be.visible').click(); 
        cy.contains("A part following '@' should not contain the symbol '!'.");
    });
  
    it('should reject invalid email: user2*@gmail.com', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('user2*@gmail.com');
        cy.get('#password').type('Qwert.1357');
        cy.get('#confirmPassword').type('Qwert.1357');
        cy.get('button.btn.btn-primary').should('be.visible').click(); 
        cy.contains("A part following '@' should not contain the symbol '*'.");
    });

    it('should reject invalid email: user2%@gmail.com', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('user2%@gmail.com');
        cy.get('#password').type('Qwert.1357');
        cy.get('#confirmPassword').type('Qwert.1357');
        cy.get('button.btn.btn-primary').should('be.visible').click(); 
        cy.contains("A part following '@' should not contain the symbol '%'.");
    });

    it('should reject invalid email: user2 @gmail.com', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('user2 @gmail.com');
        cy.get('#password').type('Qwert.1357');
        cy.get('#confirmPassword').type('Qwert.1357');
        cy.get('button.btn.btn-primary').should('be.visible').click(); 
        cy.contains("A part following '@' should not contain the symbol ' '.");
    });
});
*/
/* describe('EP01_1_04 - Registration with invalid password', () => {
    it('should reject invalid password: Qw1357', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('awq@gmail.com');
        cy.get('#password').type('Qw1357');
        cy.get('#confirmPassword').type('Qw1357');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
    );

    it ('should reject invalid password: qwertyui', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('awd@gmail.com');
        cy.get('#password').type('qwertyui');
        cy.get('#confirmPassword').type('qwertyui');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
    );
    it ('should reject invalid password: QWERTYUI', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('awf@gmail.com');
        cy.get('#password').type('QWERTYUI');
        cy.get('#confirmPassword').type('QWERTYUI');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
    );

    it ('should reject invalid password: Qwerty1357', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('awg@gmail.com');
        cy.get('#password').type('Qwerty1357');
        cy.get('#confirmPassword').type('Qwerty1357');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
    );

    it('should reject invalid password: Q135791.', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('aww@gmail.com');
        cy.get('#password').type('Q135791.');
        cy.get('#confirmPassword').type('Q135791.');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
    );
    it('should reject invalid password: q135791.', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('awe@gmail.com');
        cy.get('#password').type('q135791.');
        cy.get('#confirmPassword').type('q135791.');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
    );
    it('should reject invalid password: Qwertyui.', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('awr@gmail.com');
        cy.get('#password').type('Qwertyui.');
        cy.get('#confirmPassword').type('Qwertyui.');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
    );

    it('should reject invalid password: Qwertyui', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('awww@gmail.com');
        cy.get('#password').type('Qwertyui.');
        cy.get('#confirmPassword').type('Qwertyui.');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
    );
    it('should reject invalid password: Qwe1234.', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('awt@gmail.com');
        cy.get('#password').type('Qwe1234.');
        cy.get('#confirmPassword').type('Qwe1234.');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
    ); 
    it ('should reject invalid password: Qabcd.1357', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('awy@gmail.com');
        cy.get('#password').type('Qabcd.1357');
        cy.get('#confirmPassword').type('Qabcd.1357');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
    );
    it ('should reject invalid password: Qqqqq1357.', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('awu@gmail.com');
        cy.get('#password').type('Qqqqq1357.');
        cy.get('#confirmPassword').type('Qqqqq1357.');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
    );
    it ('should reject invalid password: Qwert.1111', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('awi@gmail.com');
        cy.get('#password').type('Qwert.1111');
        cy.get('#confirmPassword').type('Qwert.1111');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
    );
    it ('should reject invalid password: password.135', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('awo@gmail.com');
        cy.get('#password').type('password.135');
        cy.get('#confirmPassword').type('password.135');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
    );
    it ('should reject invalid password: Qw.12345678', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('awp@gmail.com');
        cy.get('#password').type('Qw.12345678');
        cy.get('#confirmPassword').type('Qw.12345678');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
    );
    it ('should reject invalid password: Qiloveyou.135', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('awa@gmail.com');
        cy.get('#password').type('Qiloveyou.135');
        cy.get('#confirmPassword').type('Qiloveyou.135');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
    );
    it ('should reject invalid password: aws.1357', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('aws@gmail.com');
        cy.get('#password').type('aws.1357');
        cy.get('#confirmPassword').type('aws.1357');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
    );
})
*/
/* describe('EP01_1_04 - Registration with invalid password', () => {
    it ('should reject invalid password: Qwertyui', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('amh@gmail.com');
        cy.get('#password').type('Qwertyui');
        cy.get('#confirmPassword').type('Qwertyui');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
);
})
*/

/* describe('EP01_1_05 - registration with reconfirmed password differs from password', () => {
    it('should show error for mismatched passwords', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('amj@gmail.com');
        cy.get('#password').type('Qwert.1357');
        cy.get('#confirmPassword').type('Qwert.1358');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains('Passwords do not match');
    }
    );
})
*/
/* describe ('EP01_1_06 - Registration with empty fields', () => {
    it('should show error for empty name', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type(' ');
        cy.get('#email').type('aqq@gmail.com');
        cy.get('#password').type('Qwert.1357');
        cy.get('#confirmPassword').type('Qwert.1357');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains("User validation failed: name : Path `name` is required.");
    }
    );
    it('should show error for empty email', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type(' ');
        cy.get('#password').type('Qwert.1357');
        cy.get('#confirmPassword').type('Qwert.1357');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains("User validation failed: email : Path `email` is required.");
    }
    );
    it('should show error for empty password', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('aqw@gmail.com');
        cy.get('#password').type(' ');
        cy.get('#confirmPassword').type('Qwert.1357');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains("User validation failed: password : Path `password` is required.");
    }
    );
    it('should show error for empty confirm password', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('aqe@gmail.com');
        cy.get('#password').type('Qwert.1357');
        cy.get('#confirmPassword').type(' ');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains("Passwords do not match");
    }
    );
})
*/
/* describe ('EP01_1_06 - Registration with empty fields', () => {
    it('should show error for empty password', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('aml@gmail.com');
        cy.get('#password').type(' ');
        cy.get('#confirmPassword').type('Qwert.1357');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains("Passwords do not match");
    }
    );
    it('should show error for empty confirm password', () => {
        cy.visit('http://localhost:3000/'); 
        cy.get('.nav-link[href="/login"]').should('be.visible').click();  
        cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
        cy.get('#name').type('User ABC');
        cy.get('#email').type('amz@gmail.com');
        cy.get('#password').type('Qwert.1357');
        cy.get('#confirmPassword').type(' ');
        cy.get('button.btn.btn-primary').should('be.visible').click();
        cy.contains("Passwords do not match");
    }
    );
})*/
/*describe('EP01_1_07 - Existed username', () => {
    it('should register and redirect to login page', () => {
      cy.visit('http://localhost:3000/'); 
      cy.get('.nav-link[href="/login"]').should('be.visible').click();  
      cy.get('a[href="/register?redirect=/"]').should('be.visible').click();
      cy.get('#name').type('User ABC');
      cy.get('#email').type('amv@gmail.com');
      cy.get('#password').type('Qwert.1357');
      cy.get('#confirmPassword').type('Qwert.1357');
      cy.get('button.btn.btn-primary').should('be.visible').click();
      cy.url().should('include', '/register?redirect=/');
    });
  });
  */
  