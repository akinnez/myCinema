function signup() {
  if (localStorage.getItem(`${document.getElementById('email').value}`)) {
    var signupArr = JSON.parse(
      localStorage.getItem(`${document.getElementById('email').value}`)
    );
    signupArr[0].name = document.getElementById('name').value;
    signupArr[0].username = document.getElementById('username').value;
    signupArr[0].password = document.getElementById('password').value;
    localStorage.setItem(
      `${document.getElementById('email').value}`,
      JSON.stringify(signupArr)
    );
  } else {
    signupArr = [
      {
        name: `${document.getElementById('name').value}`,
        email: `${document.getElementById('email').value}`,
        username: `${document.getElementById('username').value}`,
        password: `${document.getElementById('password').value}`,
      },
    ];
    localStorage.setItem(
      `${document.getElementById('email').value}`,
      JSON.stringify(signupArr)
    );
  }
}
