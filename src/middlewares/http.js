'use strict'

const buildResponse = ({ callbackPayload = {}, statusCode = 200 } = {}) => {
  const filledResponse = {
    data: [],
    message: 'Ok',
    success: true,
    errors: undefined,
    ...callbackPayload
  }

  return {
    statusCode,
    body: JSON.stringify(filledResponse),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Strict-Transport-Security': 'max-age=31536000; includeSubdomains; preload'
    }
  }
}

module.exports =
  (handler) =>
  async (event = {}, context = {}) => {
    try {
      const body = event.body || {}
      const pathParameters = event.pathParameters || {}
      const queryStringParameters = event.queryStringParameters || {}

      const callbackPayload = await handler({
        ...(Object.keys(body).length > 0 ? { body: JSON.parse(body) } : {}),
        pathParameters,
        queryStringParameters
      })

      return buildResponse({ callbackPayload })
    } catch (error) {
      const errorMessage = error && error.message
      return buildResponse({ statusCode: 500, callbackPayload: { success: false, message: errorMessage } })
    }
  }
