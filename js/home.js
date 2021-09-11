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
  
  var i = Math.floor(Math.random() * 38);
  // console.log(MoviesPng);
  pageBanner();
  function pageBanner() {
    document.getElementById(
      'pageBanner'
    ).style.backgroundImage = `url(${MoviesPng[i].Image})`;
  }
  function trailer() {}
  
  bannerDetails.innerHTML += `<div>
          <h1>${MoviesPng[i].title}</h1>
              <div class="textContainer">
                      <span>
                      ${MoviesPng[i].desc.substr(0, 220) + '...'}
                      </span>
          </div>
          <div>
              <button class="btn mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Play Trailer</button>
          </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn btn-close" data-bs-dismiss="modal" aria-label="Close">Close</button>
              </div>
              <div class="modal-body">
                
              </div>
             
            </div>
          </div>
        </div>
              </div>
            </div>      
  `;
  
  moviesDisplay();
  function moviesDisplay() {
    for (let index = 0; index < MoviesPng.length; index++) {
      ul.innerHTML += ` <li class='imgList'>
          <img src="${MoviesPng[index].Image}" alt="">
          <div id='overlay'>
            <div>
              <button class='btn' id='button' data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="getInfo(MoviesPng[${index}])">Movie Details</button>
              </div>
            </div>
  </li>      
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
        </div>
      </div>
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
  

