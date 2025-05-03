const baseUrl = 'http://localhost:3000'; 
const userToken = pm.environment.get('user_token'); // Valid token
const invalidToken = 'Bearer faketoken123456'; // Fake/expired token

const testCases = [
    {
        name: 'Get profile with valid token',
        token: userToken,
        expectedStatus: 200,
        validateFields: true
    },
    {
        name: 'Get profile with missing token',
        token: null,
        expectedStatus: 401
    },
    {
        name: 'Get profile with invalid token',
        token: invalidToken,
        expectedStatus: 401
    }
];

testCases.forEach((testCase, index) => {
    const headers = {
        'Content-Type': 'application/json',
        "Cookie": testCase.token ? `token=${testCase.token}` : ''
    };

    pm.sendRequest({
        url: `${baseUrl}/api/users/profile`,
        method: 'GET',
        header: headers
    }, function (err, res) {
        pm.test(`Test #${index + 1}: ${testCase.name}`, function () {
            pm.expect(res.code).to.eql(testCase.expectedStatus);

            if (err) {
                console.log(`Error in ${testCase.name}:`, err);
            }

            if (res.code >= 400) {
                console.log(`Failure Response in ${testCase.name}:`, res.json());
            }

            // If success and we want to check fields
            if (res.code === 200 && testCase.validateFields) {
                const jsonData = res.json();
                pm.expect(jsonData).to.have.property('_id');
                pm.expect(jsonData).to.have.property('name');
                pm.expect(jsonData).to.have.property('email');
                pm.expect(jsonData).to.have.property('isAdmin');
            }
        });
    });
});
