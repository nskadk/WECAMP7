const baseUrl = 'http://localhost:3000'; 
const adminToken = pm.environment.get('admin_token');
const userToken = pm.environment.get('user_token');
const validUserId = '67fcca9ab518affa322b95db'; 
const fakeUserId = '999999999999999999999999';
const invalidToken = 'Bearer faketoken123456';

const getUserByIdTests = [
    {
        name: 'Get user by valid ID with admin token',
        token: adminToken,
        url: `/api/users/${validUserId}`,
        expectedStatus: 200,
        expectObject: true
    },
    {
        name: 'Get user by non-existent ID',
        token: adminToken,
        url: `/api/users/${fakeUserId}`,
        expectedStatus: 404
    },
    {
        name: 'Get user by ID with no token',
        token: null,
        url: `/api/users/${validUserId}`,
        expectedStatus: 401
    },
    {
        name: 'Get user by ID with invalid token',
        token: invalidToken,
        url: `/api/users/${validUserId}`,
        expectedStatus: 401
    },
    {
        name: 'Get user by ID with non-admin token',
        token: userToken,
        url: `/api/users/${validUserId}`,
        expectedStatus: 403 // backend might also throw 401 or 403 depending how access is handled
    }
];

// Execute
getUserByIdTests.forEach((testCase, index) => {
    const headers = {
        'Cookie': testCase.token ? `token=${testCase.token}` : ''
    };

    pm.sendRequest({
        url: `${baseUrl}${testCase.url}`,
        method: 'GET',
        header: headers
    }, function (err, res) {
        pm.test(`Test #${index + 1}: ${testCase.name}`, function () {
            pm.expect(res.code).to.eql(testCase.expectedStatus);

            if (err) {
                console.log(`Error in ${testCase.name}:`, err);
            }

            if (testCase.expectedStatus === 200 && testCase.expectObject) {
                const jsonData = res.json();
                pm.expect(jsonData).to.be.an('object');
                pm.expect(jsonData).to.have.property('_id');
                pm.expect(jsonData).to.have.property('email');
            }

            if (res.code >= 400) {
                console.log(`Failure Response in ${testCase.name}:`, res.json());
            }
        });
    });
});
