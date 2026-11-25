document.addEventListener("DOMContentLoaded", function () {
    // 1. Tampilkan notifikasi selamat datang
    const notif = document.getElementById("notif-sambutan");
    setTimeout(() => {
        notif.classList.add("tampil");
    }, 300);

    setTimeout(() => {
        notif.classList.remove("tampil");
    }, 4000);

    // 2. Render daftar mapel dari data-mapel.js ke halaman
    const wadahMapel = document.getElementById("grid-mapel");
    if (wadahMapel && typeof daftarMapel !== "undefined") {
        daftarMapel.forEach((item) => {
            const kartu = document.createElement("div");
            kartu.className = "kartu";
            kartu.innerHTML = `
                <div class="ikon">${item.ikon}</div>
                <h2>${item.nama}</h2>
                <p>${item.deskripsi}</p>
            `;
            wadahMapel.appendChild(kartu);
        });
    }
});
