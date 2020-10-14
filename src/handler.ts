import getItemById from './getItemById'
import createItem from './createItem'
import getGptData from './getGptData'

exports.handler = async (event, _context, _callback) => {
  switch (event.info.fieldName) {
    case 'getItemById':
      return await getItemById(event.arguments.id, event.arguments.status)
    case 'createItemByLambda':
      return await createItem({
        id: event.arguments.input.id,
        name: event.arguments.input.name,
        status: event.arguments.input.status,
      })
    case 'getGptData':
      const res = await getGptData(event.arguments.word)
      return res
    case 'info':
      return {
        name: 'myapp',
        version: '0.0.1',
      }
    default:
      return null
  }
}
