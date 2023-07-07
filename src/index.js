'use strict'

const { S3 } = require('../../config/s3')

module.exports.handler = async (event) => {
  const allBuckets = await S3.listBuckets().promise()
  console.log('allBuckets', allBuckets)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        allBuckets
      },
      null,
      2
    )
  }
}
