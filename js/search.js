async function getSearchData() {
    key = 'AIzaSyCpyfZpvHMq9XrEkniQIUWdV2sh7RujGUc';
    
    return fetch(
      `https://www.googleapis.com/youtube/v3/search?&key=${key}`,
      
    )
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => {
        console.error('Error loading GAPI client for API', err);
      });
  }