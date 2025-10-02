import { LearningMaterial } from "./types";

export const pythonIntro: LearningMaterial = {
  id: "python-intro",
  title: "Pengenalan Bahasa Python",
  category: "Dasar",
  description:
    "Pelajari sejarah, filosofi, dan karakteristik Python sebagai bahasa pemrograman untuk pemula",
  content: `
# Pengenalan Bahasa Python

## 1. Apa itu Python?

Python adalah bahasa pemrograman yang sangat populer dan mudah dipelajari. Nama "Python" tidak diambil dari ular piton, melainkan dari acara komedi Inggris "Monty Python's Flying Circus" yang disukai oleh penciptanya.

Python dikenal sebagai bahasa pemrograman yang:
- Mudah dibaca - kodenya mirip bahasa Inggris sehari-hari
- Sederhana - tidak ribet dengan sintaks yang rumit
- Powerful - bisa digunakan untuk berbagai keperluan
- Gratis dan open source - siapa saja bisa menggunakannya tanpa bayar

## 2. Sejarah Python

### Awal Mula (1989-1991)
Python diciptakan oleh Guido van Rossum, seorang programmer asal Belanda. Pada Desember 1989, Guido memulai proyek Python sebagai hobi saat liburan Natal. Ia ingin membuat bahasa pemrograman yang lebih mudah dan menyenangkan untuk digunakan.

Python pertama kali dirilis ke publik pada tahun 1991 sebagai Python 0.9.0.

### Filosofi Guido van Rossum
Guido menciptakan Python dengan filosofi:
- Kode harus mudah dibaca
- Programmer harus bisa mengekspresikan ide dengan kode yang sederhana
- Harus ada satu cara yang jelas untuk melakukan sesuatu

### Perkembangan Versi
- Python 1.0 (1994) - Versi stabil pertama
- Python 2.0 (2000) - Menambahkan banyak fitur baru
- Python 3.0 (2008) - Versi mayor yang memperbaiki banyak hal (tidak kompatibel dengan Python 2)
- Python 3.x (2008-sekarang) - Versi yang terus berkembang dan digunakan saat ini

Catatan Penting: Python 2 sudah tidak didukung lagi sejak 1 Januari 2020. Semua pemula sebaiknya belajar Python 3.

## 3. Mengapa Python Populer?

### Mudah Dipelajari
Python dirancang agar mudah dipahami, bahkan oleh orang yang belum pernah programming sama sekali. Sintaksnya bersih dan tidak membingungkan.

### Banyak Digunakan di Industri
Python digunakan oleh perusahaan-perusahaan besar seperti:
- Google (sistem internal, YouTube)
- Instagram (backend)
- Spotify (analisis data)
- Netflix (rekomendasi film)
- NASA (perhitungan ilmiah)
- Dropbox (aplikasi desktop)

### Komunitas yang Besar
Python memiliki komunitas pengguna yang sangat besar di seluruh dunia, termasuk Indonesia. Ini berarti:
- Banyak tutorial gratis di internet
- Mudah menemukan solusi jika ada masalah
- Banyak library (perpustakaan kode) yang bisa digunakan gratis

## 4. Untuk Apa Python Digunakan?

### Web Development
Membuat website dan aplikasi web. Framework populer: Django, Flask.

### Data Science & Analisis Data
Mengolah dan menganalisis data dalam jumlah besar. Library populer: Pandas, NumPy.

### Machine Learning & Artificial Intelligence
Membuat program yang bisa "belajar" dan membuat keputusan. Library populer: TensorFlow, Scikit-learn, PyTorch.

### Automation & Scripting
Membuat program untuk otomasi tugas-tugas berulang, seperti:
- Mengunduh file secara otomatis
- Mengirim email massal
- Mengolah dokumen Excel

### Game Development
Membuat game sederhana hingga menengah. Library populer: Pygame.

### Desktop Applications
Membuat aplikasi desktop dengan tampilan GUI (Graphical User Interface).

### Cybersecurity & Ethical Hacking
Membuat tools untuk keamanan siber dan penetration testing.

### Scientific Computing
Perhitungan ilmiah, simulasi, dan penelitian akademik.

## 5. Kelebihan Python

### Sintaks yang Sederhana
Kode Python mudah dibaca dan ditulis, bahkan untuk pemula.

### Cross-Platform
Python bisa dijalankan di Windows, Mac, Linux, dan sistem operasi lainnya.

### Library yang Melimpah
Ada ribuan library gratis yang siap pakai untuk berbagai keperluan.

### Versatile (Serbaguna)
Satu bahasa untuk banyak tujuan - dari web hingga AI.

### Permintaan Kerja Tinggi
Banyak perusahaan mencari programmer Python.

### Gratis dan Open Source
Tidak perlu membayar lisensi apapun.

## 6. Kekurangan Python

### Lebih Lambat dari Bahasa Lain
Python lebih lambat dibanding bahasa seperti C++ atau Java untuk komputasi berat.

### Konsumsi Memori Lebih Besar
Python menggunakan lebih banyak memori komputer.

### Tidak Ideal untuk Mobile Development
Python kurang populer untuk membuat aplikasi Android atau iOS.

### Ketergantungan pada Library
Kadang harus menginstall banyak library tambahan.

Catatan: Untuk pemula dan kebanyakan proyek, kekurangan ini tidak terlalu signifikan.

## 7. Perbandingan dengan Bahasa Lain

### Python vs JavaScript
Python: Lebih mudah untuk pemula, bagus untuk data science dan backend
JavaScript: Wajib untuk web development frontend

### Python vs Java
Python: Lebih sederhana, lebih cepat untuk prototyping
Java: Lebih cepat eksekusinya, banyak dipakai di enterprise

### Python vs C++
Python: Jauh lebih mudah dipelajari
C++: Lebih cepat dan powerful untuk aplikasi yang butuh performa tinggi

## 8. Filosofi Python: The Zen of Python

Python punya filosofi desain yang disebut "The Zen of Python". Beberapa prinsipnya:
- Beautiful is better than ugly - Kode yang indah lebih baik dari yang jelek
- Simple is better than complex - Sederhana lebih baik dari rumit
- Readability counts - Keterbacaan itu penting
- There should be one obvious way to do it - Harus ada satu cara jelas untuk melakukan sesuatu

## Kesimpulan

Python adalah bahasa pemrograman yang sempurna untuk pemula karena mudah dipelajari, sangat berguna, dan memiliki prospek karir yang cerah. Dengan komunitas yang besar dan library yang melimpah, Python memungkinkan kamu untuk membuat hampir semua jenis aplikasi yang kamu bayangkan.

Jangan takut untuk memulai! Setiap programmer profesional juga pernah menjadi pemula. Yang penting adalah konsistensi dalam belajar dan praktek.

*"The only way to learn a new programming language is by writing programs in it."* - Dennis Ritchie

*"Tidak ada yang tidak bisa selama kamu ingin mencoba"* - Ariski

Selamat memulai perjalanan belajar Python kamu! Semangat yaahhh!
  `,
  codeExample: `# Belajar Perintah Print di Python

# 1. Print sederhana - menampilkan teks
print("Hello, World!")
print("Selamat belajar Python!")

# 2. Print dengan tanda kutip berbeda
print('Halo, apa kabar?')
print("Python itu mudah!")

# 3. Print tanpa tanda kutip (untuk angka)
print(123)
print(45.67)

# 4. Print beberapa hal sekaligus
print("Nama:", "Budi")
print("Umur:", 20)
print("Tinggi:", 170.5)

# 5. Print dengan pemisah khusus
print("Apel", "Jeruk", "Pisang", sep=" - ")
print("Python", "itu", "mudah", sep=" ")

# Penjelasan:
# - print() adalah perintah untuk menampilkan sesuatu ke layar
# - Teks harus ditulis dalam tanda kutip " " atau ' '
# - Angka tidak perlu tanda kutip
# - sep=" " mengatur pemisah antar kata

# Kamu bisa mencobanya di latihan untuk pemahaman lebih lanjut`,
  keyPoints: [
    "Python diciptakan oleh Guido van Rossum pada tahun 1989, dirilis pertama kali 1991",
    "Nama Python berasal dari acara komedi 'Monty Python's Flying Circus'",
    "Python dikenal mudah dibaca, sederhana, powerful, dan gratis",
    "Digunakan oleh perusahaan besar seperti Google, Instagram, Netflix, NASA",
    "Python cocok untuk web development, data science, AI, automation, dan game",
    "Kelebihan: sintaks sederhana, cross-platform, library melimpah, permintaan kerja tinggi",
    "Kekurangan: lebih lambat dari C++/Java, konsumsi memori besar, kurang ideal untuk mobile",
    "Filosofi Python: Beautiful is better than ugly, Simple is better than complex",
  ],
  nextSteps: [
    "Pelajari cara install Python di komputer",
    "Coba perintah print() pertama kamu",
    "Praktikkan contoh code dengan berbagai variasi print",
    "Pelajari dasar-dasar syntax Python dan aturan penulisan",
  ],
  relatedExercises: [],
};
