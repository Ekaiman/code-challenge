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
    // .then(data => console.log(data))
    // .catch(error => {
    //   console.log('Something bad happened ' + error)
    // })
}

export default aiFetchResponse

// const responseData = () => {
//   // console.log(prompt)
//   console.log(process.env.REACT_APP_API_KEY)
//   const data = {
//     prompt: `4 dog facts`,
//     temperature: 0.3,
//     max_tokens: 150,
//     top_p: 1.0,
//     frequency_penalty: 0.0,
//     presence_penalty: 0.0
//   }
//   return fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
//     },
//     body: JSON.stringify(data)
//   })
//     .then(res => res.json())
//     .then(data => console.log(data))
// }
// export default responseData
