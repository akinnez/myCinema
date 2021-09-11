key = 'AIzaSyCpyfZpvHMq9XrEkniQIUWdV2sh7RujGUc';
async function getVideoCatData() {
  id = 'evyb2UUM0Y0';
  // chart = 'mostPopular'
  return fetch(
    `https://www.googleapis.com/youtube/v3/captions?videoId=${id}&key=${key}`
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      ret(json.items[0].id);
    })
    .catch((err) => {
      console.error('Error loading GAPI client for API', err);
    });
}

function ret(id) {
  return fetch(
    `https://www.googleapis.com/youtube/v3/captions/${id}&key=${key}`
  )
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => {
      console.error('Error loading GAPI client for API', err);
    });
  }
async function checkit() {
  return fetch(
    `https://akinnez.github.io/myCinema/json/movie.json`
  )
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => {
      console.error('Error loading GAPI client for API', err);
    });
}
