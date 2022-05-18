const apiKey = process.env.REACT_APP_API_KEY

function aiFetchResponse(prompt) {
  const url = 'https://api.openai.com/v1/engines/text-curie-001/completions'
  const bearer = 'Bearer ' + apiKey
  const data = {
    prompt: `Write a commerical for ${prompt}`,
    max_tokens: 150,
    temperature: 0.5,
    top_p: 1,
    frequency_penalty: 0.4,
    presence_penalty: 0.0
  }

  return fetch(url, {
    method: 'POST',
    headers: {
      Authorization: bearer,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
}

export default aiFetchResponse