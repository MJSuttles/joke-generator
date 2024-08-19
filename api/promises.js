const jokeEndpoint = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart';

const getRequest = () => new Promise((resolve, reject) => {
  fetch(jokeEndpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .then(reject);
});

export default getRequest;
