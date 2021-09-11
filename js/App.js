if (localStorage.getItem('mode')) {
  light()
}
// console.log(document.getElementById('btn').innerText);


const signupArr = []
function getStarted() { 
   signupArr.push({email:document.getElementById('email').value});
   localStorage.setItem(`${document.getElementById('email').value}`, JSON.stringify(signupArr))
      location.href = 'signup.html';
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
