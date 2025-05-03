const baseUrl = 'http://localhost:3000';
const adminToken = pm.environment.get('admin_token'); // Admin's valid token
const userToken = pm.environment.get('user_token'); // Normal user's valid token
const invalidToken = 'Bearer faketoken123456'; // Fake/expired token

const userTests = [
    {
        name: 'Get all users with valid admin token',
        token: adminToken,
        url: '/api/users',
        expectedStatus: 200,
        isArray: true 
    },
    {
        name: 'Get all users with no token',
        token: null,
        url: '/api/users',
        expectedStatus: 401
    },
    {
        name: 'Get all users with invalid token',
        token: invalidToken,
        url: '/api/users',
        expectedStatus: 401
    },
    {
        name: 'Get all users with non-admin token',
        token: userToken,
        url: '/api/users',
        expectedStatus: 403 
    }
];

const supplierTests = [
    {
        name: 'Get supplier by non-existent ID',
        token: adminToken,
        url: '/api/suppliers/999',
        expectedStatus: 404
    }
];

// Merge all test cases
const allTests = [...userTests, ...supplierTests];

// Run the tests
allTests.forEach((testCase, index) => {
    const headers = {
        "Cookie": testCase.token ? `token=${testCase.token}` : ''
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

            if (testCase.expectedStatus === 200 && testCase.isArray) {
                const jsonData = res.json();
                pm.expect(jsonData).to.be.an('array');
            }

            if (res.code >= 400) {
                console.log(`Failure Response in ${testCase.name}:`, res.json());
            }
        });
    });
});
