const baseUrl = "http://localhost:3000"; 

// Define all test cases
const deliverTestCases = [
  {
    name: "Admin sets order to delivered (valid ID)",
    method: "PUT",
    endpoint: "/api/orders/67fccf5c918d6ade4ef4be34/deliver", 
    token: pm.environment.get("admin_token"),
    expectedStatus: 200,
    expectedBodyContains: "updated order marked as delivered"
  },
  {
    name: "Admin tries to deliver non-existent order",
    method: "PUT",
    endpoint: "/api/orders/67fccf5c918d6ade4ef4be35/deliver", 
    token: pm.environment.get("admin_token"),
    expectedStatus: 404,
    expectedBodyContains: "order not found"
  },
  {
    name: "Admin tries to deliver already delivered order",
    method: "PUT",
    endpoint: "/api/orders/67fccf5c918d6ade4ef4be34/deliver",
    token: pm.environment.get("admin_token"),
    expectedStatus: 400,
    expectedBodyContains: "order already delivered"
  },
  {
    name: "Admin tries to deliver unpaid order",
    method: "PUT",
    endpoint: "/api/orders/67fcd090918d6ade4ef4be87/deliver",
    token: pm.environment.get("admin_token"),
    expectedStatus: 400,
    expectedBodyContains: "this order haven't paid"
  },
  {
    name: "User tries update delivery status",
    method: "PUT",
    endpoint: "/api/orders/someOtherOrderId789/deliver",
    token: pm.environment.get("user_token"),
    expectedStatus: 401,
    expectedBodyContains: "not authorized as admin"
  },
  {
    name: "Non-user tries update delivery status",
    method: "PUT",
    endpoint: "/api/orders/someOtherOrderId789/deliver",
    token: "",
    expectedStatus: 401,
    expectedBodyContains: "not authorized as admin"
  }
];

// Loop through and send each deliver test
deliverTestCases.forEach((testCase, index) => {
  pm.sendRequest({
    url: baseUrl + testCase.endpoint,
    method: testCase.method,
    header: {
      "Content-Type": "application/json",
      ...(testCase.token && { "Cookie": `token=${testCase.token}` })
    }
  }, function (err, res) {
    pm.test(`Deliver Test #${index + 1}: ${testCase.name}`, function () {
      pm.expect(res.code).to.eql(testCase.expectedStatus);

    //   const resBody = res.text();
    //   pm.expect(resBody.toLowerCase()).to.include(testCase.expectedBodyContains.toLowerCase());
    });
  });
});
