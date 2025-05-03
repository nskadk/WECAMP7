const baseUrl = 'http://localhost:3000'; 
const adminToken = pm.environment.get('admin_token');
const userToken = pm.environment.get('user_token');
const validUserId = '67fcca9ab518affa322b95db'; 
const fakeUserId = '999999999999999999999999'; 
const invalidToken = 'Bearer faketoken123456';

const updateUserTests = [
    {
        name: 'Update user with valid ID and admin token',
        token: adminToken,
        url: `/api/users/${validUserId}`,
        body: { email: 'new@mail.com', isAdmin: true, name: 'New Name' },
        expectedStatus: 200,
        expectUpdatedFields: ['email', 'name', 'isAdmin']
    },
    {
        name: 'Update user with non-existent ID',
        token: adminToken,
        url: `/api/users/${fakeUserId}`,
        body: { email: 'test@mail.com', isAdmin: false, name: 'Tester' },
        expectedStatus: 404
    },
    {
        name: 'Update user with no token',
        token: null,
        url: `/api/users/${validUserId}`,
        body: { email: 'mail@test.com', isAdmin: false, name: 'NoToken' },
        expectedStatus: 401
    },
    {
        name: 'Update user with invalid/expired token',
        token: invalidToken,
        url: `/api/users/${validUserId}`,
        body: { email: 'fail@mail.com', isAdmin: false, name: 'Fail Token' },
        expectedStatus: 401
    },
    {
        name: 'Update user with non-admin token',
        token: userToken,
        url: `/api/users/${validUserId}`,
        body: { email: 'user@mail.com', isAdmin: false, name: 'User Attempt' },
        expectedStatus: 403
    },
    {
        name: 'Update user with partial fields only',
        token: adminToken,
        url: `/api/users/${validUserId}`,
        body: { name: 'OnlyNameUpdate' },
        expectedStatus: 200,
        expectUpdatedFields: ['name']
    }
];

// Execute
updateUserTests.forEach((testCase, index) => {
    const headers = {
        'Cookie': testCase.token ? `token=${testCase.token}` : ''
    };

    pm.sendRequest({
        url: `${baseUrl}${testCase.url}`,
        method: 'PUT',
        header: headers,
        body: {
            mode: 'raw',
            raw: JSON.stringify(testCase.body)
        }
    }, function (err, res) {
        pm.test(`Test #${index + 1}: ${testCase.name}`, function () {
            pm.expect(res.code).to.eql(testCase.expectedStatus);

            if (err) {
                console.log(`Error in ${testCase.name}:`, err);
            }

            if (res.code === 200 && testCase.expectUpdatedFields) {
                const jsonData = res.json();
                testCase.expectUpdatedFields.forEach(field => {
                    pm.expect(jsonData).to.have.property(field);
                    if (testCase.body[field] !== undefined) {
                        pm.expect(jsonData[field]).to.eql(testCase.body[field]);
                    }
                });
            }

            if (res.code >= 400) {
                console.log(`Failure Response in ${testCase.name}:`, res.json());
            }
        });
    });
});
