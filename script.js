const randone = document.getElementById("one");
const randtwo = document.getElementById("two");
const randthree = document.getElementById("three");
const start = document.getElementById("start");

start.addEventListener("click", function () {
  numberone();
  numbertwo();
  numberthree();
});

function numberone() {
  const belt = document.getElementById("belt1");

  setInterval(() => {
    const number = Math.floor(Math.random() * 100);
    const span = document.createElement("span");
    if (number % 6 == 0) {
      const angka = Math.floor(Math.random() * 10);
      span.innerText = angka;
    } else {
      span.innerText = "-";
    }
    const anak1 = belt.firstElementChild;
    belt.insertBefore(span, anak1);
    const anak4 = belt.lastElementChild; // element terakhir
    var rect = anak4.getBoundingClientRect();

    if (rect.right >= 180) {
      anak4.remove()
    }
  }, 1000);
}
function numbertwo() {
  const belt = document.getElementById("belt2");

  setInterval(() => {
    const number = Math.floor(Math.random() * 100);
    const span = document.createElement("span");
    if (number % 6 == 0) {
      const angka = Math.floor(Math.random() * 10);
      span.innerText = angka;
    } else {
      span.innerText = "-";
    }
    const anak2 = belt.firstElementChild;
    belt.insertBefore(span, anak2);
    const anak4 = belt.lastElementChild;
    var rect = anak4.getBoundingClientRect();


    if (rect.right >= 180) {
      anak4.remove()
    }
  }, 1000);
}

function numberthree() {
  const belt = document.getElementById("belt3");

  setInterval(() => {
    const number = Math.floor(Math.random() * 100);
    const span = document.createElement("span");
    if (number % 6 == 0) {
      const angka = Math.floor(Math.random() * 10);
      span.innerText = angka;
    } else {
      span.innerText = "-";
    }
    const anak3 = belt.firstElementChild;
    belt.insertBefore(span, anak3);
    const anak4 = belt.lastElementChild;
    var rect = anak4.getBoundingClientRect();


    if (rect.right >= 180) {
      anak4.remove()
    }
  }, 1000);
}

const target = document.getElementById("target");
const rantarget = Math.floor(Math.random() * 100);
const anakt = document.createElement("span");
anakt.innerText = rantarget;
target.appendChild(anakt);

const nilai = document.getElementById("nilai");
const anilai = document.createElement("span");
anilai.innerText = 0;
nilai.appendChild(anilai);

const score = document.getElementById("score");
const ascore = document.createElement("span");
ascore.innerText = 0;
score.appendChild(ascore)

const plus = document.getElementById("plus")
const min = document.getElementById("min")
const kali = document.getElementById("kali")

plus.addEventListener("click", function () {
  const anak4 = belt1.lastElementChild;
  const posisianak4 = anak4.getBoundingClientRect();
  if (posisianak4.left >= 131 && anak4.innerText <= 10 && anak4.innerText >= 0) {
    const x = Number(anak4.innerText);
    let total = parseInt(anilai.innerText, 10);
    total += parseInt(x);
    anilai.innerText = total;
    if (anilai.innerText == anakt.innerText) {
      let poin = parseInt(ascore.innerText);
      poin++;
      ascore.innerText = poin;
      console.log(poin);
      anilai.innerText = 0;
      if(anilai.innerText == "0") {
        const random = Math.floor(Math.random() * 100);
        anakt.innerText = random;
      }
    }
  }

  //dapetin element terakhir dari belt
  //dapetin posisis element terakhir
  //buat kondisi kalau posisi elemenet terakhir lebih dari sisi kiri tombol dan isinya sebuah angka
  //maka lakukan pertabahan 
  //save isi nilai sekarang 
  //kalau nilai sekaranag = nilai target maka
  //nilai score bertambah 1
})

min.addEventListener("click", function () {
  const anak5 = belt2.lastElementChild;
  const posisianak5 = anak5.getBoundingClientRect();
  if (posisianak5.left >= 131 && anak5.innerText <= 10 && anak5.innerText >= 0) {
    const x = Number(anak5.innerText);
    let total = parseInt(anilai.innerText);
    total -= parseInt(x);
    console.log(total);
    anilai.innerText = total;
    if (anilai.innerText == anakt.innerText) {
      let poin = parseInt(ascore.innerText);
      poin++;
      ascore.innerText = poin;
      console.log(poin);
      anilai.innerText = 0;
      if(anilai.innerText == "0") {
        const random = Math.floor(Math.random() * 100);
        anakt.innerText = random;
      }
    }
  }
})

kali.addEventListener("click", function () {
  const anak6 = belt3.lastElementChild;
  const posisianak6 = anak6.getBoundingClientRect();
  if (posisianak6.left >= 131 && anak6.innerText <= 10 && anak6.innerText >= 0) {
    const x = Number(anak6.innerText);
    let total = parseInt(anilai.innerText);
    total *= parseInt(x);
    console.log(total);
    anilai.innerText = total;
    if (anilai.innerText == anakt.innerText) {
      let poin = parseInt(ascore.innerText);
      poin++;
      ascore.innerText = poin;
      console.log(poin);
      anilai.innerText = 0;
      if(anilai.innerText == "0") {
        const random = Math.floor(Math.random() * 100);
        anakt.innerText = random;
      }
    }
  }
})