const baseUrl = 'http://localhost:3000'; // Update if needed

const testCases = [
    {
        name: 'Authenticate with correct credentials',
        payload: {
            email: 'admin@email.com',
            password: '123456'
        },
        expectedStatus: 200
    },
    {
        name: 'Authenticate with incorrect password',
        payload: {
            email: 'admin@email.com',
            password: 'wrong'
        },
        expectedStatus: 401
    },
    {
        name: 'Authenticate with unregistered email',
        payload: {
            email: 'unknown@email.com',
            password: '123456'
        },
        expectedStatus: 401
    }
];

testCases.forEach((testCase, index) => {
    pm.sendRequest({
        url: `${baseUrl}/api/users/auth`,
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
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
        });
    });
});
