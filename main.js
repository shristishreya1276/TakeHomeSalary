function getResponse() {
  const query = document.getElementById("query").value;
  fetch("https://api.openai.com/v1/engine/davinci-codex/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer YOUR_API_KEY_HERE",
    },
    body: JSON.stringify({
      prompt: query,
      max_tokens: 60,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const output = data.choices[0].text;
      document.getElementById("response").innerHTML = output;
    })
    .catch((error) => console.log(error));
}
