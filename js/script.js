// const btnConvertion = document.querySelector('#convertion');
const container = document.querySelector('.container');
const inputNilai = document.querySelector('#inputNilai');
const hasilConvert = document.querySelector('#hasil');
const cara = document.querySelector('#cara');
const btnReverse = document.querySelector('.btn-reverse');
const paragraf = document.getElementsByTagName('p');
const h1Judul = document.querySelector('#judul');
const formulaC = document.querySelector('.description-celcius');
const formulaF = document.querySelector('.description-fahrenheit');
const span = document.getElementsByTagName('span');

// span.style.color = 'blue';
// tombol reset
function reset() {
  inputNilai.value = '';
  hasilConvert.value = '';
  cara.innerHTML = '';
}

// Judul halaman
let celciusText = `Masukkan suhu derajat Celcius (\xB0C) ke Kotak dibawah untuk mendapatkan hasil konversi dalam bentuk Fahrenheit (\xB0F)`;
let fahrenheitText = `Masukkan suhu derajat Fahrenheit (\xB0F) ke Kotak dibawah untuk mendapatkan hasil konversi dalam bentuk Celcius (\xB0C)`;
let isOriginal = true;

function toggleText() {

  if (isOriginal) {
    h1Judul.textContent = fahrenheitText;
    formulaF.style.display = 'flex';
    formulaC.style.display = 'none';
    span[0].textContent = '\xB0F'
    span[1].textContent = '\xB0C'
  } else {
    h1Judul.textContent = celciusText;
    formulaF.style.display = 'none';
    formulaC.style.display = 'flex';
    span[0].textContent = '\xB0C'
    span[1].textContent = '\xB0F'
  }
  isOriginal = !isOriginal;
}

formulaF.style.display = 'none';
btnReverse.addEventListener('click', function () {
  let temp = convCeltoFah;
  convCeltoFah = convFahtoCel;
  convFahtoCel = temp;
  reset();
  toggleText();
})

// Fungsi Celcius-Fahrenheit
let convCeltoFah = function celToFah(ctf) {
  return (ctf * 1.8 + 32).toFixed(0);
}
// Fungsi Fahrenheit-Celcius
let convFahtoCel = function fahToCel(ftc) {
  return ((ftc - 32) * 5 / 9).toFixed(0);
}

// input nilai
inputNilai.addEventListener('input', function () {
  hasilConvert.value = convCeltoFah(inputNilai.value);
  let descCelcius = `(${inputNilai.value}&deg;C X 9/5)+32 = ${hasilConvert.value}&deg;F`;
  let descFahrenheit = `(${inputNilai.value}&deg;F - 32) X 5/9 = ${hasilConvert.value}&deg;C`;

  if (isOriginal && inputNilai.value) {
    cara.innerHTML = descCelcius;
  } else if (!isOriginal && inputNilai.value) {
    cara.innerHTML = descFahrenheit;
  } else {
    reset();
  }
});