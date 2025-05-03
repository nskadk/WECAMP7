const baseUrl = "http://localhost:3000"; // or pm.environment.get("base_url");

// Define all test cases
const testCases = [
  {
    name: "User fetches own order by ID",
    method: "GET",
    endpoint: "/api/orders/67fccf5c918d6ade4ef4be34",
    token: pm.environment.get("user_token"),
    expectedStatus: 200,
    expectedBodyContains: null // Specific order object, not validating text
  },
  {
    name: "Admin fetches order by ID",
    method: "GET",
    endpoint: "/api/orders/67fccf5c918d6ade4ef4be34",
    token: pm.environment.get("admin_token"),
    expectedStatus: 200,
    expectedBodyContains: null // Specific order object, not validating text
  },
  {
    name: "User fetches other user's order",
    method: "GET",
    endpoint: "/api/orders/67fccf5c918d6ade4ef4be34",
    token: pm.environment.get("user_token"),
    expectedStatus: 401,
    expectedBodyContains: "not authorized to view this order"
  },
  {
    name: "User fetches non-existing order",
    method: "GET",
    endpoint: "/api/orders/67fccf5c918d6ade4ef4be35",
    token: pm.environment.get("user_token"),
    expectedStatus: 404,
    expectedBodyContains: "Order not found"
  },
  {
    name: "User fetches invalid ID format",
    method: "GET",
    endpoint: "/api/orders/67fccf5c918d6ade4ef4be3",
    token: pm.environment.get("user_token"),
    expectedStatus: 500,
    expectedBodyContains: "Cast to ObjectId failed"
  },
  {
    name: "Fetch order without providing token",
    method: "GET",
    endpoint: "/api/orders/67fccf5c918d6ade4ef4be34",
    token: "",
    expectedStatus: 401,
    expectedBodyContains: "Not authorized, no token"
  }
];

// Loop through and send each test
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

      if (testCase.expectedBodyContains) {
        const resBody = res.text();
        pm.expect(resBody.toLowerCase()).to.include(testCase.expectedBodyContains.toLowerCase());
      }

      if (testCase.expectedStatus === 200 && !testCase.expectedBodyContains) {
        try {
          const jsonData = res.json();
          pm.expect(jsonData).to.be.an("object");
          pm.expect(jsonData._id).to.exist; // basic object structure check
        } catch (e) {
          pm.expect.fail(`Response is not valid JSON: ${e}`);
        }
      }
    });
  });
});
