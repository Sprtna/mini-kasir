let nomor = 1;

function tambahBarang() {
    // Ambil nilai dari input
    const nama = document.getElementById('namaBarang').value;
    const harga = document.getElementById('hargaBarang').value;

    // Validasi: pastikan input tidak kosong
    if (nama === '' || harga === '') {
        alert('Harap isi nama dan harga barang!');
        return;
    }

    // Ambil elemen tabel
    const tabel = document.getElementById('tabelKasir');

    // Buat baris baru di tabel
    const barisBaru = document.createElement('tr');
    barisBaru.innerHTML = `
        <td>${nomor++}</td>
        <td>${nama}</td>
        <td>Rp ${parseInt(harga).toLocaleString('id-ID')}</td>
    `;

    // Masukkan baris ke dalam tabel
    tabel.appendChild(barisBaru);

    // Bersihkan input setelah ditambah
    document.getElementById('namaBarang').value = '';
    document.getElementById('hargaBarang').value = '';
}