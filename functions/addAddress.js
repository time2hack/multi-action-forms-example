exports.handler = function (event, context, callback) {
  if (event.httpMethod === "OPTIONS") {
    callback(null, {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
      }
    });
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 401,
      body: JSON.stringify({ status: "Error", message: "Not allowed" }),
    };
  }

  const reqBody = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify(Object.assign(reqBody, {__endpoint: 'addAddress', receivedAt: +new Date()}))
  }
}