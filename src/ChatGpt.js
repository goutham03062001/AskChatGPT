import axios from 'axios';

async function chatGpt(prompt, model, apiKey) {
  const response = await axios.post(
    'https://api.openai.com/v1/engines/' + model + '/completions',
    {
      prompt: prompt,
      max_tokens:150,
      n: 1,
      temperature: 0
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      }
    }
  );
    console.log("your choices : ",response.data.choices[0].text)
  return response.data.choices[0].text;
}


export default chatGpt;