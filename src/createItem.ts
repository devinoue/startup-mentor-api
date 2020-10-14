// lambda-fns/createNote.ts
import * as AWS from 'aws-sdk'
const docClient = new AWS.DynamoDB.DocumentClient()
import { Item } from './type'

export default async function createItem(todo: Item) {
  console.log(todo)
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: todo,
  }
  try {
    await docClient.put(params).promise()
    return todo
  } catch (err) {
    console.log('DynamoDB error: ', err)
    return null
  }
}
