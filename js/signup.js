// function signup() {
//   if (localStorage.getItem(`${document.getElementById('email').value}`)) {
//     var signupArr = JSON.parse(
//       localStorage.getItem(`${document.getElementById('email').value}`)
//     );
//     signupArr[0].name = document.getElementById('name').value;
//     signupArr[0].username = document.getElementById('username').value;
//     signupArr[0].password = document.getElementById('password').value;
//     localStorage.setItem(
//       `${document.getElementById('email').value}`,
//       JSON.stringify(signupArr)
//     );
//   } else {
//     signupArr = [
//       {
//         name: `${document.getElementById('name').value}`,
//         email: `${document.getElementById('email').value}`,
//         username: `${document.getElementById('username').value}`,
//         password: `${document.getElementById('password').value}`,
//       },
//     ];
//     localStorage.setItem(
//       `${document.getElementById('email').value}`,
//       JSON.stringify(signupArr)
//     );
//   }
// }

// url = 'https://akinnez.github.io/myCinema/json/users.json'
const form = document.querySelector('form')
users=[]
let createAccount = async()=>{

  // e.preventDefault();

  const formData = {
    Name: form.name.value,
    Email: form.email.value,
    Username: form.username.value,
    Password: form.password.value 
  }
  // users.push(formData)
console.log(formData);
  return fetch('https://akinnez.github.io/myCinema/json/users.json')
  .then((res)=>res.json())
  .then((data)=>console.log(data))
  .catch((err)=>{
    console.log('message from api:' +err);
  })
  // window.location.replace('/startup.html')
  //  location.href='startup.html';
}

// form.addEventListener('submit', createAccount)