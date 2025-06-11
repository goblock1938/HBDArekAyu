const body = document.body;
const html1 = `<h3>isi nama kamu dulu yah💕</h3>
    <input type="text" id="text-nama" placeholder="nama panggilan aja..." />
    <button type="button" id="submit-1">Submit</button>
    <div id="birthday-message" style="margin-top: 20px"></div>`;

let container = document.createElement("div");
container.classList.add("container");
container.innerHTML = html1;

body.append(container);

// Fungsi untuk menampilkan ucapan ulang tahun
function showBirthdayMessage(namaValue) {
  const nickName = ["ratu", "bilqis", "agustin", "putri", "nahar"];
  if (!nickName.includes(namaValue.trim().toLowerCase())) {
    const html2 = `
  <h3>ini web bukan buat lu KOCAK!</h3>
  <img src="https://media.giphy.com/media/OOezqqxPB8aJ2/giphy.gif" alt="Not For You" style="width: 75%; max-width: 400px; margin-bottom: 20px;">
  <p>ini web buat orang yang special, bukan buat lu yang cuma numpang lewat</p>
  <button id="back">BALEK LU SONO!</button>
  `;
    container.innerHTML = html2;

    // Event tombol kembali: redirect
    document.getElementById("back").addEventListener("click", function () {
      window.location.href = "https://www.google.com";
    });

    // Timeout: redirect saja, tanpa window.close()
    setTimeout(() => {
      window.close();
    }, 7500); // 7.5 detik biar pesan sempat tampil
  } else {
    const html2 = `
  <h3>Selamat Ulang Tahun, ${namaValue}!</h3>
  <img src="https://media.giphy.com/media/rkPsgps6o8HTkwC9vy/giphy.gif" alt="Happy Birthday" style="width: 75%; max-width: 400px; margin-bottom: 20px;">
  <p>Semoga hari kamu menyenangkan dan penuh kebahagiaan 🎉</p>
  <button id="lanjut">lanjut</button>
  `;
    container.innerHTML = html2;

    // Event tombol lanjut
    document.getElementById("lanjut").addEventListener("click", function () {
      const html3 = `
      <h3>Terima kasih sudah pernah mengisi hari-hariku, ${namaValue}!</h3>
      <img src="https://media.giphy.com/media/KztT2c4u8mYYUiMKdJ/giphy.gif" alt="maacih" style="width: 50%; max-width: 400px; margin-bottom: 20px;">
      <p>ini adalah projek kecil yang pernah aku singgung di komunitasku, ini udah aku rencanain dari awal kelas 12 dan gk nyangka bisa terealisasi</p>
      <button id="lanjut-2">lanjut</button>
      `;
      container.innerHTML = html3;
      // Event tombol lanjut-2
      document
        .getElementById("lanjut-2")
        .addEventListener("click", function () {
          const html4 = `
        <h3>makasih ya, semoga kita dipertemukan kembali, ${namaValue}!</h3>
        <img src="https://media.giphy.com/media/yc2pHdAoxVOrJ2m5Ha/giphy.gif" alt="Thank You" style="width: 50%; max-width: 400px; margin-bottom: 20px;">
        <p>aku disini memang rindu sama kamu, tapi setidaknya aku sudah tidak mencarimu karena aku takut mengganggu kamu<br>semangat kuliahnya😇</p>
        <button id='kado'>terakhir nich</button>
        `;
          container.innerHTML = html4;
          document
            .getElementById("kado")
            .addEventListener("click", function () {
              const html5 = `
          <h3>sebetulnya aku udah nyiapin kado buat kamu ${namaValue}!</h3>
          <img src="https://media.giphy.com/media/yc2pHdAoxVOrJ2m5Ha/giphy.gif" alt="Kado" style="width: 50%; max-width: 400px; margin-bottom: 20px;">
          <p>boleh gk aku kasih kado ke kamu😇</p>
          <div>
            <button id='terima'>MAU😊❤️</button>
            <button id='tolak'>gk mau💔</button>
          </div>
          `;
              container.innerHTML = html5;
              const acak = document.getElementById("tolak");
              document
                .getElementById("terima")
                .addEventListener("click", function () {
                  const html6 = `
            <h2>YAY! makasih ya ${namaValue} udah mau terima kado aku!</h2>
            <img src="https://media.giphy.com/media/yc2pHdAoxVOrJ2m5Ha/giphy.gif" alt="Terima Kado" style="width: 50%; max-width: 400px; margin-bottom: 20px;">
            <p>kalo kerumah kamu pastinya kamu ngelarang sih, jadi aku maunya ketemuan, btw ketemuan dimana nih hehe<br>
            semoga kamu suka</p>
            `;
                  container.innerHTML = html6;
                  setTimeout(() => {
                    window.close();
                  }, 5000);
                });
              acak.addEventListener("click", function () {
                acak.style.position = "absolute";
                acak.style.right = `calc(${10 + Math.random() * 40}vw - 40px)`;
                acak.style.bottom = `calc(${10 + math.random() * 40}vh - 40px)`;
              });
            });
        });
    });
  }
}

// Event submit
document.getElementById("submit-1").addEventListener("click", function () {
  const namaInput = document.getElementById("text-nama");
  if (!namaInput.value) {
    alert("kan udah dibilang isi nama dulu😑");
    return;
  } else {
    showBirthdayMessage(namaInput.value);
  }
});

// Sakura falling effect
function createSakura() {
  const sakura = document.createElement("div");
  sakura.classList.add("sakura");
  sakura.style.right = Math.random() * 100 + "vw"; // random posisi kanan
  sakura.style.left = "auto";
  sakura.style.animationDuration = 3 + Math.random() * 7 + "s";

  const rand = Math.random();
  sakura.style.fontSize = 10 + (1 - rand) * 30 + "px";
  sakura.style.opacity = 1 - rand;
  sakura.style.filter = `blur(${rand * 7.5}px)`;

  sakura.innerText = "🌸";
  document.body.appendChild(sakura);

  setTimeout(() => {
    sakura.remove();
  }, 15000);
}

setInterval(createSakura, 450);
