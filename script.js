let nomor = 1;
let total = 0; // Variabel untuk menyimpan total belanja

function tambahBarang() {
    const nama = document.getElementById('namaBarang').value;
    const hargaInput = document.getElementById('hargaBarang').value;

    if (nama === '' || hargaInput === '') {
        alert('Harap isi nama dan harga barang!');
        return;
    }

    const harga = parseInt(hargaInput);
    const tabel = document.getElementById('tabelKasir');

    // Buat baris baru
    const barisBaru = document.createElement('tr');
    barisBaru.innerHTML = `
        <td>${nomor++}</td>
        <td>${nama}</td>
        <td>Rp ${harga.toLocaleString('id-ID')}</td>
    `;
    tabel.appendChild(barisBaru);

    // Update total harga
    total += harga;
    document.getElementById('totalHarga').innerText = `Rp ${total.toLocaleString('id-ID')}`;

    // Bersihkan input
    document.getElementById('namaBarang').value = '';
    document.getElementById('hargaBarang').value = '';
}