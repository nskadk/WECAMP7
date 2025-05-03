const baseUrl = 'http://localhost:3000'; 
const userToken = pm.environment.get('user_token'); 
const adminToken = pm.environment.get('admin_token'); 

const testCases = [
    {
        name: 'Admin creates new order with valid data',
        token: adminToken,
        payload: {
            orderItems: [{
                _id: "67fcca9ab518affa322b95df",
                name: "iPhone 13 Pro 256GB Memory",
                qty: 1,
                image: "something"
            }],
            paymentMethod: "PayPal",
            shippingAddress: {
                address: "123 St",
                city: "NY",
                postalCode: "10001",
                country: "USA"
            }
        },
        expectedStatus: 201
    },
    {
        name: 'User creates new order with valid data',
        token: userToken,
        payload: {
            orderItems: [{
                _id: "67fcca9ab518affa322b95df",
                name: "iPhone 13 Pro 256GB Memory",
                qty: 1,
                image: "something"
            }],
            paymentMethod: "PayPal",
            shippingAddress: {
                address: "123 St",
                city: "NY",
                postalCode: "10001",
                country: "USA"
            }
        },
        expectedStatus: 201
    },
    {
        name: 'User creates new order with many valid product',
        token: userToken,
        payload: {
            orderItems: [{
                _id: "67fcca9ab518affa322b95df",
                name: "iPhone 13 Pro 256GB Memory",
                qty: 1,
                image: "something"
            }, {
                _id: "67fcca9ab518affa322b95e0",
                name: "Amazon Echo Dot 3rd Generation",
                qty: 2,
                image: "something2"
            }],
            paymentMethod: "PayPal",
            shippingAddress: {
                address: "123 St",
                city: "NY",
                postalCode: "10001",
                country: "USA"
            }
        },
        expectedStatus: 201
    },
    {
        name: 'Non-user tries to create order (no token)',
        token: null,
        payload: {
            orderItems: [{
                _id: "67fcca9ab518affa322b95e0",
                quantity: 1
            }],
            paymentMethod: "PayPal",
            shippingAddress: {
                address: "123 St",
                city: "NY",
                postalCode: "10001",
                country: "USA"
            }
        },
        expectedStatus: 401
    },
    {
        name: 'User creates order with non-existing product',
        token: userToken,
        payload: {
            orderItems: [{
                _id: "67fcca9ab518affa322b94df",
                name: "iPhone 13 Pro 256GB Memory",
                qty: 1,
                image: "something"
            }],
            paymentMethod: "PayPal",
            shippingAddress: {
                address: "123 St",
                city: "NY",
                postalCode: "10001",
                country: "USA"
            }
        },
        expectedStatus: 404
    }, 
    {
        name: 'User creates order with invalid product id',
        token: userToken,
        payload: {
            orderItems: [{
                _id: "67fcca9ab518affa322b94d",
                name: "iPhone 13 Pro 256GB Memory",
                qty: 1,
                image: "something"
            }],
            paymentMethod: "PayPal",
            shippingAddress: {
                address: "123 St",
                city: "NY",
                postalCode: "10001",
                country: "USA"
            }
        },
        expectedStatus: 400
    },
    {
        name: 'User creates new order with out of stock product',
        token: userToken,
        payload: {
            orderItems: [{
                _id: "67fcca9ab518affa322b95e3",
                name: "Amazon Echo Dot 3rd Generation",
                qty: 1,
                image: "something"
            }],
            paymentMethod: "PayPal",
            shippingAddress: {
                address: "123 St",
                city: "NY",
                postalCode: "10001",
                country: "USA"
            }
        },
        expectedStatus: 409
    },
    {
        name: 'User creates new order without providing quantity',
        token: userToken,
        payload: {
            orderItems: [{
                _id: "67fcca9ab518affa322b95df",
                name: "iPhone 13 Pro 256GB Memory",
                qty: "",
                image: "something"
            }],
            paymentMethod: "PayPal",
            shippingAddress: {
                address: "123 St",
                city: "NY",
                postalCode: "10001",
                country: "USA"
            }
        },
        expectedStatus: 400
    },
    {
        name: 'User creates new order quantity = 0',
        token: userToken,
        payload: {
            orderItems: [{
                _id: "67fcca9ab518affa322b95df",
                name: "iPhone 13 Pro 256GB Memory",
                qty: 0,
                image: "something"
            }],
            paymentMethod: "PayPal",
            shippingAddress: {
                address: "123 St",
                city: "NY",
                postalCode: "10001",
                country: "USA"
            }
        },
        expectedStatus: 400
    },
    {
        name: 'User creates new order quantity exceed the quantity in stock',
        token: userToken,
        payload: {
            orderItems: [{
                _id: "67fcca9ab518affa322b95df",
                name: "iPhone 13 Pro 256GB Memory",
                qty: 1000,
                image: "something"
            }],
            paymentMethod: "PayPal",
            shippingAddress: {
                address: "123 St",
                city: "NY",
                postalCode: "10001",
                country: "USA"
            }
        },
        expectedStatus: 409
    },
    {
        name: 'User creates new order and provide quantity as a number string',
        token: userToken,
        payload: {
            orderItems: [{
                _id: "67fcca9ab518affa322b95df",
                name: "iPhone 13 Pro 256GB Memory",
                qty: "3",
                image: "something"
            }],
            paymentMethod: "PayPal",
            shippingAddress: {
                address: "123 St",
                city: "NY",
                postalCode: "10001",
                country: "USA"
            }
        },
        expectedStatus: 201
    },
    {
        name: 'User creates new order and provide quantity as a non-number string',
        token: userToken,
        payload: {
            orderItems: [{
                _id: "67fcca9ab518affa322b95df",
                name: "iPhone 13 Pro 256GB Memory",
                qty: "abc",
                image: "something"
            }],
            paymentMethod: "PayPal",
            shippingAddress: {
                address: "123 St",
                city: "NY",
                postalCode: "10001",
                country: "USA"
            }
        },
        expectedStatus: 400
    },
    {
        name: 'User creates new order with many product and one product have invalid value',
        token: userToken,
        payload: {
            orderItems: [{
                _id: "67fcca9ab518affa322b95df",
                name: "iPhone 13 Pro 256GB Memory",
                qty: 1,
                image: "something"
            }, {
                _id: "67fcca9ab518affa322b95e",
                name: "another product",
                qty: 1,
                image: "something"
            }],
            paymentMethod: "PayPal",
            shippingAddress: {
                address: "123 St",
                city: "NY",
                postalCode: "10001",
                country: "USA"
            }
        },
        expectedStatus: 400
    },
    {
        name: 'User tries to create order with empty items',
        token: userToken,
        payload: {
            orderItems: [],
            paymentMethod: "PayPal",
            shippingAddress: {
                address: "123 St",
                city: "NY",
                postalCode: "10001",
                country: "USA"
            }
        },
        expectedStatus: 400
    },
    {
        name: 'Create order with missing shipping address',
        token: userToken,
        payload: {
            orderItems: [{
                _id: "67fcca9ab518affa322b95df",
                name: "iPhone 13 Pro 256GB Memory",
                qty: 1,
                image: "something"
            }],
            paymentMethod: "PayPal",
            shippingAddress: {
                address: "",
                city: "",
                postalCode: "",
                country: ""
            }
        },
        expectedStatus: 400
    },
    {
        name: 'Create order with missing payment method',
        token: userToken,
        payload: {
            orderItems: [{
                _id: "67fcca9ab518affa322b95df",
                name: "iPhone 13 Pro 256GB Memory",
                qty: 1,
                image: "something"
            }],
            paymentMethod: "",
            shippingAddress: {
                address: "123 St",
                city: "NY",
                postalCode: "10001",
                country: "USA"
            }
        },
        expectedStatus: 400
    },
    {
        name: 'Create order with not provided payment method',
        token: userToken,
        payload: {
            orderItems: [{
                _id: "67fcca9ab518affa322b95df",
                name: "iPhone 13 Pro 256GB Memory",
                qty: 1,
                image: "something"
            }],
            paymentMethod: "MoMo",
            shippingAddress: {
                address: "123 St",
                city: "NY",
                postalCode: "10001",
                country: "USA"
            }
        },
        expectedStatus: 400
    },
];

// Loop through and send each test
testCases.forEach((testCase, index) => {
  pm.sendRequest({
    url: `${baseUrl}/api/orders`,
    method: 'POST',
    header: {
      "Content-Type": "application/json",
      ...(testCase.token ? { "Cookie": `token=${testCase.token}` } : {})
    },
    body: {
      mode: 'raw',
      raw: JSON.stringify(testCase.payload)
    }
  }, function (err, res) {
    pm.test(`Test #${index + 1}: ${testCase.name}`, function () {
      pm.expect(res.code).to.eql(testCase.expectedStatus);

      // If the response is NOT the expected status, print out the error message
      if (res.code !== testCase.expectedStatus) {
        console.error(`Unexpected status code: expected ${testCase.expectedStatus} but got ${res.code}`);
      }

      // Parse the response body if it exists
      let jsonData;
      try {
        jsonData = res.json();
      } catch (e) {
        console.error("Could not parse response JSON.");
      }

      if (jsonData && jsonData.message) {
        console.log(`Error Message: ${jsonData.message}`);
      } else if (jsonData && jsonData.error) {
        console.log(`Error Message: ${jsonData.error}`);
      }
    });
  });
});
