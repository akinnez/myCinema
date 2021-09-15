if (localStorage.getItem('mode')) {
  light()
}  
function light() {
  (document.getElementById('btn').innerText=='light mode' ? light_mode():dark_mode());
 }
 
  function light_mode() {
   document.getElementById('btn').innerHTML='dark mode';
   document.querySelector('body').style.backgroundColor = 'white'
   document.querySelector('.overlay').style.backgroundColor= 'transparent'
   document.querySelector('#myNav').style.backgroundColor= 'white'
   localStorage.setItem('mode','true')
  }
  function dark_mode() {
   document.getElementById('btn').innerHTML='light mode';
   localStorage.removeItem('mode')
   location.reload()
  }
  
  let url = `https://akinnez.github.io/myCinema/json/movie.json`
  let pageBanner = async ()=> {
         await fetch(url)
          .then((res) =>  res.json())
          .then((json) => {
            let {Upcoming}=json
            let {Recent} = json;
            var i = Math.floor(Math.random() * Recent.length )
            
    document.getElementById(
      'pageBanner'
    ).style.backgroundImage = `url(${Recent[i].Image})`;
  bannerDetails.innerHTML += 
        `<div>
          <h1>${Recent[i].title}</h1>
              <div class="textContainer">
                      <span>
                      ${Recent[i].desc.substr(0, 220) + '...'}
                      </span>
          </div>
          <div>
              <button class="btn mt-3">Play Trailer</button>
          </div>
          </div>` 
          moviesDisplay(Upcoming);
          }
            )
          .catch((err) => {
            console.error('Error loading GAPI client for API', err);
          })
     ;
    }
    window.addEventListener('DOMContentLoaded',()=> pageBanner());

    function trailer(params) {
      
    }



  
  function moviesDisplay(newMovie) {
    for (let index = 0; index < newMovie.length; index++) {
      ul.innerHTML += ` <li class='imgList'>
          <img src="${newMovie[index].Image}" alt="" class="image">
          <div id='overlay'>
            <div>
              <button class='btn' id='button' onclick="getInfo(newMovie[${index}])">Movie Details</button>
              </div>
            </div>
  </li>      
   `;
    }
  
    //   for (let movies of MoviesPng) {
    //       console.log(movies);
    //     ul.innerHTML += ` <li class='imgList'>
    //     <img src="${movies.Image}" alt="">
    //     <div id='overlay'>
    //       <div>
    //         <button class='btn' id='button' onclick="getInfo(movies)">Movie Details</button>
    //         </div>
    //       </div>
    // </li>
    // `;
    //   }
    //   console.log(document.getElementById('button'));
  }
  
  function getInfo(mine) {
    console.log(mine);
  }
  
  // function setLang(params) {
  //   document.getElementById('html').setAttribute('lang', 'ar');
  //   console.log(html.getAttribute('lang'));
  // }
  // setLang();
  

