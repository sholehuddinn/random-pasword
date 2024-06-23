let paswordLength = document.getElementById('paswordLength');
let pasword = document.getElementById('pasword');
let btnSave = document.getElementById('btnSave');

function generatePasword(len) {
  const lowAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const upAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const number = '0123456789'
  const symbol = "!@#$%^&*()_+-=[]{}:|\<>?,./"

  const data = lowAlphabet + upAlphabet + number + symbol;
  let generator = '';
  for (let i = 0; i < len; i++) {
    generator += data.charAt(~~(Math.random() * data.length));
  };
  return generator;
}

function getPasword() {
  const newPasword = generatePasword(paswordLength.value);
  pasword.value = newPasword;
}

function savePasword() {
  document.title = pasword.value;
  btnSave.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Password Saya : ${document.title}`))
  btnSave.setAttribute('download', 'password.txt');
}