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
            let {Upcoming,Recent,Popular}=json
            
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
          recentMovies(Recent);
          PopularMovies(Popular)
          loadingLazy()
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
    // let date = new Date()
    // console.log(date.)
    for (let index = 0; index < newMovie.length; index++) {
      ul.innerHTML += ` <li class='imgList'>
          <img data-src="${newMovie[index].Image}" alt="" class="image">
          <div id='overlay'>
            <div>
              <button class='btn' id='button' onclick="getInfo(newMovie[${index}])">Movie Details</button>
              </div>
            </div>
  </li>      
   `;
    }
    // loadingLazy()
  }

  function recentMovies(recentMovie) {
    // let date = new Date()
    // console.log(date.)
    for (let index = 0; index < recentMovie.length; index++) {
      ull.innerHTML += ` <li class='imgList'>
          <img data-src="${recentMovie[index].Image}" alt="" class="image">
          <div id='overlay'>
            <div>
              <button class='btn' id='button' onclick="getInfo(recentMovie[${index}])">Movie Details</button>
              </div>
            </div>
  </li>      
   `;
    }
    // loadingLazy()
  }
  function PopularMovies(popularMovie) {
    // let date = new Date()
    // console.log(date.)
    for (let index = 0; index < popularMovie.length; index++) {
      ulll.innerHTML += ` <li class='imgList'>
          <img data-src="${popularMovie[index].Image}" alt="" class="image">
          <div id='overlay'>
            <div>
              <button class='btn' id='button' onclick="getInfo(popularMovie[${index}])">Movie Details</button>
              </div>
            </div>
  </li>      
   `;
    }
    // loadingLazy()
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
  
  
  function getInfo(mine) {
    console.log(mine);
  }

  let loadingLazy = ()=> {
    var elements = document.querySelectorAll('img[data-src]');
    var index = 0;
    
    var lazyLoad = ()=> {
      if (index >= elements.length) return;
      var item = elements[index]; 
      console.log(item.offsetWidth);
      if (this.scrollY + this.innerHeight > item.offsetTop) { 
        var src = item.getAttribute('data-src');
        item.src = src;
        item.addEventListener('load', ()=> {
          item.removeAttribute('data-src');
        });
        index++;
        lazyLoad();
      }
    };
    var init = function () {
      window.addEventListener('scroll', lazyLoad);
      lazyLoad();
    };
    return init();
  }
  loadingLazy()
  ;