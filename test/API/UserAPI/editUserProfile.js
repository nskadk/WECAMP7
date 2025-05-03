const baseUrl = 'http://localhost:3000'; 
const userToken = pm.environment.get('user_token'); // Valid token
const invalidToken = 'Bearer faketoken123456'; // Fake/expired token

const testCases = [
    {
        name: 'Update profile with valid token and valid data',
        token: userToken,
        payload: {
            name: "Henry Stone",
            email: "johnnystone@example.com",
            // password: "123456"
        },
        expectedStatus: 200,
        validateFields: true
    },
    {
        name: 'Update profile without token',
        token: null,
        payload: {
            name: "Henry Stone",
            email: "johnnystone@example.com"
        },
        expectedStatus: 401
    },
    {
        name: 'Update profile with invalid token',
        token: invalidToken,
        payload: {
            name: "Henry Stone",
            email: "johnnystone@example.com"
        },
        expectedStatus: 401
    },
    {
        name: 'Update profile with missing required fields',
        token: userToken,
        payload: {
            name: "" // Missing email field here
        },
        expectedStatus: 400
    }
];

// Loop through test cases
testCases.forEach((testCase, index) => {
    const headers = {
        "Cookie": testCase.token ? `token=${testCase.token}` : ''
    };

    pm.sendRequest({
        url: `${baseUrl}/api/users/profile`,
        method: 'PUT',
        header: headers,
        body: {
            mode: 'raw',
            raw: JSON.stringify(testCase.payload)
        }
    }, function (err, res) {
        pm.test(`Test #${index + 1}: ${testCase.name}`, function () {
            pm.expect(res.code).to.eql(testCase.expectedStatus);

            if (err) {
                console.log(`Error in ${testCase.name}:`, err);
            }

            if (res.code >= 400) {
                console.log(`Failure Response in ${testCase.name}:`, res.json());
            }

            if (res.code === 200 && testCase.validateFields) {
                const jsonData = res.json();
                pm.expect(jsonData).to.have.property('_id');
                pm.expect(jsonData.name).to.eql(testCase.payload.name);
                pm.expect(jsonData.email).to.eql(testCase.payload.email);
                pm.expect(jsonData).to.have.property('isAdmin');
            }
        });
    });
});
