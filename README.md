# Project-hacktive
final project ibm x hacktiv8
# Kalkulator Sederhana

Proyek ini adalah aplikasi kalkulator berbasis web yang dibuat menggunakan HTML, CSS, dan JavaScript. Aplikasi ini dapat melakukan operasi aritmatika dasar seperti penjumlahan, pengurangan, perkalian, dan pembagian.

## Struktur File

- `index.html`  
  File utama yang menyusun tampilan kalkulator di browser. Menyusun elemen-elemen seperti layar kalkulator (`display`) dan tombol-tombol angka/operator.

- `app.css`  
  Mengatur tampilan dan gaya visual kalkulator. Menggunakan Flexbox untuk layout dan Grid untuk tata letak tombol. Menyediakan efek hover dan klik pada tombol.

- `hitung.js`  
  Berisi logika interaksi kalkulator. Fungsi utama:
  - `appendToDisplay(input)`: Menambahkan input ke tampilan.
  - `clearDisplay()`: Menghapus seluruh tampilan.
  - `calculate()`: Mengevaluasi ekspresi matematika menggunakan `eval()`.

## Fitur

- Tampilan responsif di tengah layar
- Input hanya dari tombol (keyboard tidak didukung)
- Operasi dasar: `+`, `-`, `*`, `/`
- Tombol `C` untuk menghapus
- Tombol `=` untuk menghitung hasil

## Catatan Keamanan

Fungsi `eval()` digunakan untuk menghitung ekspresi. Dalam aplikasi produksi, penggunaan `eval()` tidak direkomendasikan karena potensi risiko keamanan.

## Cara Menjalankan

1. Simpan semua file (`index.html`, `app.css`, `hitung.js`) dalam satu folder.
2. Buka `index.html` menggunakan browser modern.
