const baseUrl = 'http://localhost:3000';
const adminToken = pm.environment.get('admin_token'); 


const userTests = [
    {
        name: 'Admin delete a normal user',
        token: adminToken,
        url: '/api/users/680ce20968f034dd47412c81',
        expectedStatus: 200, 
    },
    {
        name: 'admin try to delete another admin',
        token: adminToken,
        url: '/api/users/680cdf8c68f034dd47412c51',
        expectedStatus: 400
    },
    {
        name: 'Admin delete non-existent user',
        token: adminToken,
        url: '/api/users/680ce20968f035dd47412c81',
        expectedStatus: 404
    },
];


// Run the tests
userTests.forEach((testCase, index) => {
    const headers = {
        "Cookie": testCase.token ? `token=${testCase.token}` : ''
    };


    pm.sendRequest({
        url: `${baseUrl}${testCase.url}`,
        method: 'DELETE',
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
