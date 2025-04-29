describe('Profile - Edit Name and Email Validation', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000/login');
      cy.get('#email').type('user3803@email.com');
      cy.get('#password').type('123456');
      cy.contains('button', 'Sign In').click();
  
      cy.get('#username').should('be.visible').click({ force: true });
      cy.contains('a', 'Profile',{ timeout: 10000 }).should('be.visible').click();
      cy.url().should('include', '/profile');
    });
  
    // Kiểm tra khi sửa tên với số lượng ký tự tối đa
    it('Verify when editing Name with max length characters', () => {
      cy.get('#name').clear().type('a'.repeat(256));  // Đảm bảo độ dài vượt quá 255 ký tự
      cy.contains('button', 'Update').click();
      
      // Kiểm tra xem trường tên có bị đánh dấu là không hợp lệ hay không
      cy.get('#name:invalid').should('exist');
    });
  
    // Kiểm tra khi sửa tên với ký tự full-width
    it('Verify editing Name with full-width characters', () => {
      cy.get('#name').clear().type('Ｊｅｎｉｆｅｒ'); // Ví dụ tên với ký tự full-width
      cy.contains('button', 'Update').click();
      
      // Kiểm tra xem trường tên có bị đánh dấu là không hợp lệ hay không
      cy.get('#name:invalid').should('exist');
    });
  
    // Kiểm tra khi sửa tên với ký tự đặc biệt và số
    it('Verify editing Name with special characters/number', () => {
      cy.get('#name').clear().type('12334556 / *!@#%ˆ/ !@$&ahijsojd');
      cy.contains('button', 'Update').click();
      
      // Kiểm tra xem trường tên có bị đánh dấu là không hợp lệ hay không
      cy.get('#name:invalid').should('exist');
    });
  
    // Kiểm tra khi trường tên bị bỏ trống
    it('Verify update when user leaves the Name field empty', () => {
      cy.get('#name').clear();
      cy.contains('button', 'Update').click();
      cy.get('#name:invalid').should('exist');
    });
  
    // Kiểm tra email khi thiếu domain
    it('Verify edit email when missing domain', () => {
      cy.get('#email').clear().type('user@.com');
      cy.contains('button', 'Update').click();
      // Kiểm tra xem trường email có bị đánh dấu là không hợp lệ hay không
      cy.get('#email:invalid').should('exist');
    });
  
    // Kiểm tra email khi thiếu dấu '.' trong domain
    it('Verify edit email when missing "." in domain', () => {
      cy.get('#email').clear().type('user@domain');
      cy.contains('button', 'Update').click();
      // Kiểm tra xem trường email có bị đánh dấu là không hợp lệ hay không
      cy.get('#email:invalid').should('exist');
    });
  
    // Kiểm tra email với ký tự đặc biệt
    it('Verify email with Special Characters', () => {
      cy.get('#email').clear().type('user@domain,com'); // Ví dụ với dấu phẩy trong email
      cy.contains('button', 'Update').click();
      // Kiểm tra xem trường email có bị đánh dấu là không hợp lệ hay không
      cy.get('#email:invalid').should('exist');
    });
  
    // Kiểm tra khi email có nhiều dấu '@'
    it('Verify update their email with multiple "@" Symbols', () => {
      cy.get('#email').clear().type('user@@example.com');
      cy.contains('button', 'Update').click();
      // Kiểm tra xem trường email có bị đánh dấu là không hợp lệ hay không
      cy.get('#email:invalid').should('exist');
    });
  
    // Kiểm tra khi email có ký tự không hỗ trợ
    it('Verify update their email with unsupported characters', () => {
      cy.get('#email').clear().type('user!@example.com');
      cy.contains('button', 'Update').click();
      // Kiểm tra xem trường email có bị đánh dấu là không hợp lệ hay không
      cy.get('#email:invalid').should('exist');
    });
  
    // Kiểm tra khi trường email bị bỏ trống
    it('Verify update when user leaves the Email field empty', () => {
      cy.get('#email').clear();
      cy.contains('button', 'Update').click();
      cy.get('#email:invalid').should('exist');
    });
  
    // Kiểm tra khi nhập mật khẩu không hợp lệ
    it('Verify update the profile when input invalid Password', () => {
      cy.get('#password').clear().type('invalidPassword');
      cy.contains('button', 'Update').click();
      // Kiểm tra xem thông báo lỗi có xuất hiện khi mật khẩu không hợp lệ
      cy.contains('Password is invalid').should('be.visible');
    });
  
    // Kiểm tra khi nhập xác nhận mật khẩu không hợp lệ
    it('Verify update the profile when input invalid Confirm Password', () => {
      cy.get('#password').clear().type('validPassword123');
      cy.get('#confirmPassword').clear().type('invalidPassword123');
      cy.contains('button', 'Update').click();
      // Kiểm tra thông báo lỗi khi mật khẩu và xác nhận mật khẩu không khớp
      cy.contains('Passwords do not match').should('be.visible');
    });
  
  });
  
