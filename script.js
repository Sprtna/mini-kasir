let nomor = 1;
let total = 0;

function tambahBarang() {
    const namaInput = document.getElementById('namaBarang');
    const hargaInput = document.getElementById('hargaBarang');

    const nama = namaInput.value;
    const harga = parseInt(hargaInput.value);

    if (nama === '' || isNaN(harga)) {
        alert('Harap isi nama dan harga barang dengan benar!');
        return;
    }

    const tabel = document.getElementById('tabelKasir');
    const barisBaru = document.createElement('tr');

    // Tambahkan kolom tombol hapus di akhir baris
    barisBaru.innerHTML = `
        <td>${nomor++}</td>
        <td>${nama}</td>
        <td>Rp ${harga.toLocaleString('id-ID')}</td>
        <td><button onclick="hapusBarang(this, ${harga})" style="background-color: #dc3545;">Hapus</button></td>
    `;

    tabel.appendChild(barisBaru);

    // Update total
    total += harga;
    document.getElementById('totalHarga').innerText = `Rp ${total.toLocaleString('id-ID')}`;

    // Reset form
    namaInput.value = '';
    hargaInput.value = '';
}

function hapusBarang(tombol, hargaBarang) {
    // Hapus baris dari tabel
    const baris = tombol.parentElement.parentElement;
    baris.remove();

    // Kurangi total harga
    total -= hargaBarang;
    document.getElementById('totalHarga').innerText = `Rp ${total.toLocaleString('id-ID')}`;
}