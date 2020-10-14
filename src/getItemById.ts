import * as AWS from 'aws-sdk'
AWS.config.update({ region: 'ap-northeast-1' })
const docClient = new AWS.DynamoDB.DocumentClient()

export default async function getItemById(id: string, status: string) {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: { id: id, status },
  }
  try {
    const { Item } = await docClient.get(params).promise()
    return Item
  } catch (err) {
    console.log('DynamoDB error: ', err)
  }
}
