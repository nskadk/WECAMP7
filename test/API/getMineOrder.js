// Define all test cases
const testCases = [
  {
    name: "Admin gets their own orders",
    method: "GET",
    endpoint: "/api/orders/mine",
    token: pm.environment.get("admin_token"),
    expectedStatus: 200,
    expectedBody: "orders"
  },
  {
    name: "User gets their own orders",
    method: "GET",
    endpoint: "/api/orders/mine",
    token: pm.environment.get("user_token"),
    expectedStatus: 200,
    expectedBody: "orders"
  },
  {
    name: "User tries to get their orders when they have none",
    method: "GET",
    endpoint: "/api/orders/mine",
    token: pm.environment.get("noorder_token"), 
    expectedStatus: 200,
    expectedBody: "[]"
  },
  {
    name: "No token provided",
    method: "GET",
    endpoint: "/api/orders/mine",
    token: "",
    expectedStatus: 401,
    expectedBody: "Not authorized, no token"
  }
];

// BASE URL (hardcoded here or get from environment)
const baseUrl = "http://localhost:3000"; // Or pm.environment.get("base_url")

// Loop through and test each case
testCases.forEach((testCase, index) => {
  pm.sendRequest({
    url: baseUrl + testCase.endpoint,
    method: testCase.method,
    header: {
      "Cookie": testCase.token ? `token=${testCase.token}` : ''
    }
  }, function (err, res) {
    pm.test(`Test #${index + 1}: ${testCase.name}`, function () {
      pm.expect(res.code).to.eql(testCase.expectedStatus);

      const resBody = res.text();

      if (testCase.expectedBody && testCase.expectedStatus !== 200) {
        pm.expect(resBody).to.include(testCase.expectedBody);
      }

      if (testCase.expectedStatus === 200) {
        try {
          const jsonData = res.json();
          pm.expect(jsonData).to.be.an("array");
        } catch (e) {
          pm.expect.fail(`Response is not valid JSON: ${e}`);
        }
      }
    });
  });
});
