async function getVideoData() {
  key = 'AIzaSyCpyfZpvHMq9XrEkniQIUWdV2sh7RujGUc'
  chart = 'mostPopular'



  return fetch(
    `https://www.googleapis.com/youtube/v3/videos?key=${key}`,

  )
    .then(
      (response) => response.json()
    )
    .then(
      (json) => {
        console.log(json);
      }

    )
    .catch((err) => {
      console.error('Error loading GAPI client for API', err);
    });
}