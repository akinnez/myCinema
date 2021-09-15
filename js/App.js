if (localStorage.getItem('mode')) {
  light()
}
function light_mode() {
  document.getElementById('btn').innerHTML='dark mode';
  document.querySelector('body').className = 'bg-light'
  document.querySelector('.overlay').style.backgroundColor= 'transparent'
  myNav.className = 'bg-light'
  localStorage.setItem('mode','true')
 }
 function dark_mode() {
  document.getElementById('btn').innerHTML='light mode';
  localStorage.removeItem('mode');
  document.querySelector('.overlay').style.backgroundColor= 'rgb(0,0,0,0.8)'
  // document.querySelector('.overlay').style.opacity = '1'
  document.querySelector('body').className = 'bg-dark'
  myNav.className = 'bg-dark'
 }




const signupArr = []
function getStarted() { 
   signupArr.push({email:document.getElementById('email').value});
   localStorage.setItem(`${document.getElementById('email').value}`, JSON.stringify(signupArr))
      location.href = 'signup.html';
 }

 function light() {
 (document.getElementById('btn').innerText=='light mode' ? light_mode():dark_mode());
}

 