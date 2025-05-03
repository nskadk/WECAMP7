const baseUrl = 'http://localhost:3000';
const userToken = pm.environment.get('user_token'); 

const testCases = [
    {
        name: 'Logout with valid token',
        token: userToken,
        expectedStatus: 200
    },
    {
        name: 'Logout without token',
        token: null, // No token
        expectedStatus: 200 // or 401 depending on backend behavior
    }
];

testCases.forEach((testCase, index) => {
    const headers = {
        "Cookie": testCase.token ? `token=${testCase.token}` : ''
    };


    pm.sendRequest({
        url: `${baseUrl}/api/users/logout`,
        method: 'POST',
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
        });
    });
});
