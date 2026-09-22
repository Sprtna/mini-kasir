let daftarBarang = JSON.parse(localStorage.getItem('kasirBarang')) || [];

// Fungsi untuk menampilkan data dari storage saat halaman dibuka
document.addEventListener('DOMContentLoaded', () => {
    tampilkanData();
});

function tambahBarang() {
    const namaInput = document.getElementById('namaBarang');
    const hargaInput = document.getElementById('hargaBarang');

    const nama = namaInput.value;
    const harga = parseInt(hargaInput.value);

    if (nama === '' || isNaN(harga)) {
        alert('Harap isi nama dan harga barang dengan benar!');
        return;
    }

    // Masukkan data ke array
    const barangBaru = { id: Date.now(), nama: nama, harga: harga };
    daftarBarang.push(barangBaru);

    // Simpan ke LocalStorage dan perbarui tabel
    simpanDanTampilkan();

    // Reset form
    namaInput.value = '';
    hargaInput.value = '';
}

function hapusBarang(id) {
    // Filter barang berdasarkan ID
    daftarBarang = daftarBarang.filter(barang => barang.id !== id);

    // Simpan ke LocalStorage dan perbarui tabel
    simpanDanTampilkan();
}

function simpanDanTampilkan() {
    localStorage.setItem('kasirBarang', JSON.stringify(daftarBarang));
    tampilkanData();
}

function tampilkanData() {
    const tabel = document.getElementById('tabelKasir');
    tabel.innerHTML = '';

    let total = 0;

    daftarBarang.forEach((barang, index) => {
        total += barang.harga;
        const barisBaru = document.createElement('tr');
        barisBaru.innerHTML = `
            <td>${index + 1}</td>
            <td>${barang.nama}</td>
            <td>Rp ${barang.harga.toLocaleString('id-ID')}</td>
            <td><button onclick="hapusBarang(${barang.id})" style="background-color: #dc3545;">Hapus</button></td>
        `;
        tabel.appendChild(barisBaru);
    });

    document.getElementById('totalHarga').innerText = `Rp ${total.toLocaleString('id-ID')}`;
}