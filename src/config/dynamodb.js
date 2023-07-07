'use strict'

const AWS = require('aws-sdk')
const isLocal = process.env.IS_OFFLINE

if (isLocal) {
  AWS.config.update({
    credentials: {
      accessKeyId: 'test',
      secretAccessKey: 'test'
    }
  })
}

const dynamoDB = new AWS.DynamoDB.DocumentClient({
  endpoint: isLocal ? new AWS.Endpoint(`http://localhost:4566`) : undefined
})

module.exports = { dynamoDB }
