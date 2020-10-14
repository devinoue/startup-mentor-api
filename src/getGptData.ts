import axios from 'axios'
import { prompt } from './prompt'

export default async function getGptData(word: string) {
  const config = {
    method: 'post',
    url: 'https://api.openai.com/v1/engines/davinci/completions',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    data: {
      prompt: `${prompt}\nkeyword: ${word}\n`,
      max_tokens: 456,
      temperature: Math.round(Math.random() * 100) / 100,
      top_p: 1,
      n: 1,
      stop: ['\n'],
      presence_penalty: 0.5,
      frequency_penalty: 0.43,
    },
  }
  const res: any = await axios(config as any).catch(function (error) {
    console.log(error)
  })

  return res.data['choices'][0]['text']
}
