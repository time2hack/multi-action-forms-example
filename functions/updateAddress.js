exports.handler = function (event, context, callback) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 401,
      body: JSON.stringify({ status: "Error", message: "Not allowed" }),
    };
  }

  const reqBody = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify(Object.assign(reqBody, {__endpoint: 'updateAddress', receivedAt: +new Date()}))
  }
}