const baseUrl = 'http://localhost:3000'; // Update if needed

const testCases = [
    {
        name: 'Register valid new user',
        payload: {
            name: 'J',
            email: 'j@example.com',
            password: '123456'
        },
        expectedStatus: 201
    },
    {
        name: 'Register user with existing email',
        payload: {
            name: 'John',
            email: 'john@example.com',
            password: '123456'
        },
        expectedStatus: 400
    },
    {
        name: 'Register with missing fields (no email)',
        payload: {
            email: '',
            password: '123456'
        },
        expectedStatus: 500
    },
    {
        name: 'Register with missing fields (no password)',
        payload: {
            name: 'John',
            email: 'john2@example.com',
            password: ''
        },
        expectedStatus: 400
    }
];

testCases.forEach((testCase, index) => {
    pm.sendRequest({
        url: `${baseUrl}/api/users`,
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
                console.log(`Error occurred in ${testCase.name}:`, err);
            }
            if (res.code >= 400) {
                console.log(`Failure Response in ${testCase.name}:`, res.json());
            }
        });
    });
});
