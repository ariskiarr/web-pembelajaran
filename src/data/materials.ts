export interface LearningMaterial {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  codeExample: string;
  keyPoints: string[];
  nextSteps: string[];
  relatedExercises: string[];
}

export const materials: LearningMaterial[] = [
  {
    id: "programming-history",
    title: "Pengenalan Bahasa Pemrograman",
    category: "Pengenalan",
    description:
      "Pelajari dasar-dasar bahasa pemrograman untuk pemula, dari konsep hingga jenis-jenis bahasa populer",
    content: `
# Pengenalan Bahasa Pemrograman

## 1. Apa itu Bahasa Pemrograman?

Bahasa pemrograman adalah **bahasa khusus** yang digunakan manusia untuk memberi instruksi kepada komputer agar komputer dapat melakukan suatu tugas.

Komputer hanya mengerti angka biner (0 dan 1). Agar lebih mudah, manusia membuat bahasa pemrograman supaya instruksi bisa ditulis dengan kata, simbol, dan aturan (syntax) yang lebih dimengerti.

### Analogi Sederhana:
Bayangkan Kamu ingin memesan makanan di restoran asing yang tidak mengerti bahasa Indonesia. Kamu memerlukan penerjemah atau menu bergambar untuk menyampaikan pesanan. Komputer seperti pelayan di restoran asing tersebut - ia hanya mengerti "bahasa"nya sendiri (bilangan biner: 0 dan 1). Bahasa pemrograman adalah "penerjemah" yang membantu kita berkomunikasi dengan komputer menggunakan kata dan struktur yang lebih mudah kita pahami.

Pada dasarnya, komputer hanya dapat memproses informasi dalam bentuk bilangan biner, yaitu kombinasi angka 0 dan 1. Namun, menulis program langsung dalam format biner sangat sulit dan tidak efisien bagi manusia. Oleh karena itu, diciptakanlah bahasa pemrograman yang memungkinkan programmer menulis instruksi menggunakan kata, simbol, dan struktur yang lebih mudah dipahami.

## 2. Kenapa Kita Perlu Bahasa Pemrograman?

- Untuk membuat aplikasi (desktop, mobile, web)
- Untuk mengolah data (misalnya data sains, AI, big data)
- Untuk membuat game
- Untuk mengontrol perangkat keras (robot, IoT, sistem embedded)
- Untuk otomatisasi pekerjaan (misalnya mengolah file, membuat laporan otomatis)

## 3. Komponen Dasar dalam Pemrograman

Sama seperti belajar bahasa manusia, dalam pemrograman juga ada "kosakata" dan "tata bahasa" yang perlu dipahami.

### Input
Data atau informasi yang dimasukkan ke dalam program.
**Contoh**: user mengetik angka lewat keyboard.

### Proses
Bagian logika/program yang mengolah data.
**Contoh**: menghitung hasil penjumlahan dari dua angka.

### Output
Hasil yang ditampilkan setelah data diproses.
**Contoh**: menampilkan hasil penjumlahan ke layar.

### Analogi Sederhana:
Bayangkan Kamu ingin membuat jus alpukat maka input itu adalah alpukatnya dan proses adalah saat kita memasukkannya ke dalam mesin blender dan output adalah hasil dari jus tersebut bisa di tambahkan es biar dingin hehe tapi intinya adalah: **input (buah) -> proses (diblender) -> output (jus)**

## 4. Contoh Bahasa Pemrograman Populer

- **Python** → mudah dipelajari, banyak dipakai untuk AI, data science, dan pemula
- **JavaScript** → bahasa utama untuk website interaktif
- **Java** → banyak digunakan di aplikasi Android dan sistem besar
- **C#** → populer untuk aplikasi desktop, game (Unity), dan sistem enterprise
- **C / C++** → digunakan untuk sistem operasi, game performa tinggi, dan perangkat keras
- **PHP** → banyak dipakai di website dan sistem manajemen konten

## 5. Tingkatan Level Bahasa Pemrograman

Bahasa pemrograman dibagi menjadi beberapa level berdasarkan seberapa dekat bahasa itu dengan bahasa mesin (0 dan 1) atau bahasa manusia.

### Bahasa Tingkat Rendah (Low-Level Language)
- Dekat dengan bahasa mesin (0 dan 1)
- Sulit dipahami manusia, tapi sangat cepat dijalankan komputer

**Contoh**:
- **Bahasa Mesin (Machine Language)** → langsung berupa 0 dan 1
- **Assembly** → menggunakan simbol (MOV, ADD, SUB) yang lebih mudah dari biner, tapi tetap dekat dengan mesin

**Kelebihan**: cepat dan efisien  
**Kekurangan**: susah dipelajari, tidak portabel (bergantung pada hardware)

### Bahasa Tingkat Menengah (Middle-Level Language)
- Masih berhubungan dengan hardware, tapi sudah lebih mudah dipahami manusia
- Bisa digunakan untuk pemrograman sistem operasi, driver, atau aplikasi yang butuh performa tinggi

**Contoh**: C, C++

**Kelebihan**: seimbang antara performa dan keterbacaan  
**Kekurangan**: tetap butuh pemahaman teknis yang cukup dalam

### Bahasa Tingkat Tinggi (High-Level Language)
- Paling dekat dengan bahasa manusia
- Mudah dipelajari, syntax lebih sederhana
- Tidak bergantung pada hardware (portabel)

**Contoh**: Python, Java, C#, JavaScript, PHP

**Kelebihan**: mudah dipahami, cocok untuk pemula  
**Kekurangan**: butuh penerjemah (compiler/interpreter) agar bisa dijalankan oleh komputer

## 6. Perbedaan Compiler dan Interpreter

Komputer hanya bisa mengerti bahasa mesin (biner), jadi kode program yang kita tulis perlu diterjemahkan. Proses penerjemahan inilah yang menggunakan **Compiler** atau **Interpreter**.

### Compiler
Menerjemahkan seluruh kode program sekaligus menjadi file bahasa mesin sebelum dijalankan. Hasilnya adalah file executable (.exe, .out, dll). Jika ada error, biasanya ditampilkan setelah proses kompilasi selesai.

**Analogi Sederhana Compiler**:
Bayangkan kita mau menampilkan sebuah drama teater:
- **Naskah Drama** → ini adalah kode program yang kita tulis
- **Penerjemah** → sebelum drama dimulai, penerjemah membaca seluruh naskah dan menerjemahkannya ke bahasa yang dipahami aktor (bahasa mesin)
- **Drama Dimulai** → setelah semua sudah diterjemahkan, barulah pertunjukan bisa dijalankan dari awal sampai akhir tanpa perlu berhenti

Jadi, compiler = penerjemah yang bekerja di awal, menerjemahkan semua naskah dulu baru pertunjukan dimulai.

**Contoh bahasa yang menggunakan Compiler**: C, C++, Java (dengan bytecode)

**Ilustrasi**: Program -> Compiler -> File EXE -> Jalankan

### Interpreter
Menerjemahkan baris demi baris kode program dan langsung menjalankannya. Tidak menghasilkan file executable, jadi setiap kali menjalankan program, interpreter harus ikut bekerja. Jika ada error, langsung berhenti di baris tersebut.

**Analogi Sederhana Interpreter**:
Interpreter itu seperti penerjemah langsung di sebuah pidato:
- Setiap kalimat yang diucapkan pembicara langsung diterjemahkan saat itu juga
- Jadi program bisa langsung dijalankan baris demi baris, tapi biasanya lebih lambat dibanding compiler

**Contoh bahasa yang menggunakan Interpreter**: Python, JavaScript, PHP

**Ilustrasi**: Program -> Interpreter -> Hasil langsung tampil

### Kesimpulan:
- **Compiler** itu seperti menerjemahkan seluruh buku dulu sebelum dibaca
- **Interpreter** itu seperti menerjemahkan kalimat demi kalimat saat dibacakan
    `,
    codeExample: `# Contoh sederhana Input-Process-Output

# Python - Sangat mudah dipahami
nama = input("Siapa nama kamu? ")  # Input
pesan = "Halo, " + nama + "!"     # Process
print(pesan)                      # Output

# Java - Lebih formal
import java.util.Scanner;
public class HelloWorld {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Siapa nama kamu? ");
        String nama = input.nextLine();           // Input
        String pesan = "Halo, " + nama + "!";     // Process
        System.out.println(pesan);               // Output
    }
}

# JavaScript - Untuk web
let nama = prompt("Siapa nama kamu?");      // Input
let pesan = "Halo, " + nama + "!";          // Process
alert(pesan);                               // Output`,
    keyPoints: [
      "Bahasa pemrograman adalah penerjemah antara manusia dan komputer",
      "Komputer hanya mengerti bilangan biner (0 dan 1)",
      "Ada tiga tingkatan bahasa: rendah, menengah, dan tinggi",
      "Compiler menerjemahkan semua kode sekaligus, interpreter baris per baris",
      "Setiap program mengikuti pola Input-Process-Output",
    ],
    nextSteps: [
      "Pahami perbedaan antara compiler dan interpreter",
      "Pilih bahasa pemrograman yang sesuai dengan tujuan kamu",
      "Pelajari sintaks dasar dari bahasa yang dipilih",
      "Praktikkan konsep Input-Process-Output dengan program sederhana",
      "Mulai dengan bahasa tingkat tinggi seperti Python untuk pemula",
    ],
    relatedExercises: [],
  },
  {
    id: "python-history",
    title: "Pengenalan Bahasa Python",
    category: "Pengenalan",
    description:
      "Memahami apa itu Python, sejarah singkat, kelebihan dan kekurangan, serta penggunaannya di industri",
    content: `
# Pengenalan Bahasa Python

## 1. Apa itu Python?

Python adalah bahasa pemrograman yang sangat populer dan mudah dipelajari. Nama "Python" tidak diambil dari ular piton, melainkan dari acara komedi Inggris "Monty Python's Flying Circus" yang disukai oleh penciptanya.

Python dikenal sebagai bahasa pemrograman yang:
- **Mudah dibaca** - kodenya mirip bahasa Inggris sehari-hari
- **Sederhana** - tidak ribet dengan sintaks yang rumit
- **Powerful** - bisa digunakan untuk berbagai keperluan
- **Gratis dan open source** - siapa saja bisa menggunakannya tanpa bayar

## 2. Sejarah Python

### Awal Mula (1989-1991)
Python diciptakan oleh **Guido van Rossum**, seorang programmer asal Belanda. Pada Desember 1989, Guido memulai proyek Python sebagai hobi saat liburan Natal. Ia ingin membuat bahasa pemrograman yang lebih mudah dan menyenangkan untuk digunakan.

Python pertama kali dirilis ke publik pada tahun 1991 sebagai Python 0.9.0.

### Filosofi Guido van Rossum
Guido menciptakan Python dengan filosofi:
- Kode harus mudah dibaca
- Programmer harus bisa mengekspresikan ide dengan kode yang sederhana
- Harus ada satu cara yang jelas untuk melakukan sesuatu

### Perkembangan Versi
- **Python 1.0 (1994)** - Versi stabil pertama
- **Python 2.0 (2000)** - Menambahkan banyak fitur baru
- **Python 3.0 (2008)** - Versi mayor yang memperbaiki banyak hal (tidak kompatibel dengan Python 2)
- **Python 3.x (2008-sekarang)** - Versi yang terus berkembang dan digunakan saat ini

**Catatan Penting**: Python 2 sudah tidak didukung lagi sejak 1 Januari 2020. Semua pemula sebaiknya belajar Python 3.

## 3. Mengapa Python Populer?

### Mudah Dipelajari
Python dirancang agar mudah dipahami, bahkan oleh orang yang belum pernah programming sama sekali. Sintaksnya bersih dan tidak membingungkan.

### Banyak Digunakan di Industri
Python digunakan oleh perusahaan-perusahaan besar seperti:
- **Google** (sistem internal, YouTube)
- **Instagram** (backend)
- **Spotify** (analisis data)
- **Netflix** (rekomendasi film)
- **NASA** (perhitungan ilmiah)
- **Dropbox** (aplikasi desktop)

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

**Catatan**: Untuk pemula dan kebanyakan proyek, kekurangan ini tidak terlalu signifikan.

## 7. Perbandingan dengan Bahasa Lain

### Python vs JavaScript
- **Python**: Lebih mudah untuk pemula, bagus untuk data science dan backend
- **JavaScript**: Wajib untuk web development frontend

### Python vs Java
- **Python**: Lebih sederhana, lebih cepat untuk prototyping
- **Java**: Lebih cepat eksekusinya, banyak dipakai di enterprise

### Python vs C++
- **Python**: Jauh lebih mudah dipelajari
- **C++**: Lebih cepat dan powerful untuk aplikasi yang butuh performa tinggi

## 8. Filosofi Python: The Zen of Python

Python punya filosofi desain yang disebut "The Zen of Python". Beberapa prinsipnya:
- **Beautiful is better than ugly** - Kode yang indah lebih baik dari yang jelek
- **Simple is better than complex** - Sederhana lebih baik dari rumit
- **Readability counts** - Keterbacaan itu penting
- **There should be one obvious way to do it** - Harus ada satu cara jelas untuk melakukan sesuatu

## Kesimpulan

Python adalah bahasa pemrograman yang sempurna untuk pemula karena mudah dipelajari, sangat berguna, dan memiliki prospek karir yang cerah. Dengan komunitas yang besar dan library yang melimpah, Python memungkinkan kamu untuk membuat hampir semua jenis aplikasi yang kamu bayangkan.

Jangan takut untuk memulai! Setiap programmer profesional juga pernah menjadi pemula. Yang penting adalah konsistensi dalam belajar dan praktek.

*"The only way to learn a new programming language is by writing programs in it."* - Dennis Ritchie

*"Tidak ada yang tidak bisa selama kamu ingin mencoba"* - Ariski

**Selamat memulai perjalanan belajar Python kamu! Semangat yaahhh!**
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
      "Python mudah dipelajari dengan sintaks yang mirip bahasa Inggris",
      "Dibuat oleh Guido van Rossum dan dinamai dari Monty Python",
      "Python 3 adalah versi yang harus dipelajari (Python 2 sudah tidak didukung)",
      "Digunakan untuk web, data science, AI, automation, dan banyak lagi",
      "Memiliki komunitas besar dan library yang melimpah",
    ],
    nextSteps: [
      "Install Python 3 di komputer kamu",
      "Pelajari cara menjalankan program Python pertama",
      "Pahami sintaks dasar Python (variabel, input, output)",
      "Eksplorasi library populer sesuai minat kamu",
      "Bergabung dengan komunitas Python Indonesia",
    ],
    relatedExercises: ["1"],
  },
  {
    id: "python-basics",
    title: "Dasar-Dasar Python",
    category: "Dasar",
    description:
      "Pelajari syntax dasar Python, cara menulis kode pertama, dan konsep fundamental",
    content: `
# Pengenalan Python

Python adalah bahasa pemrograman yang mudah dipelajari dan sangat powerful. Python memiliki syntax yang sederhana dan mudah dibaca.

## Mengapa Python?

1. **Mudah dipelajari**: Syntax yang sederhana dan mirip bahasa Inggris
2. **Versatile**: Bisa digunakan untuk web development, data science, AI, dll
3. **Community besar**: Banyak library dan dukungan komunitas
4. **Open source**: Gratis dan dapat dimodifikasi

## Hello World

Program pertama dalam Python sangat sederhana:

\`\`\`python
print("Hello, World!")
\`\`\`

## Komentar

Gunakan tanda # untuk membuat komentar:

\`\`\`python
# Ini adalah komentar
print("Hello!")  # Komentar di akhir baris
\`\`\`
    `,
    codeExample: `# Program Python pertama
print("Hello, World!")
print("Selamat datang di dunia Python!")

# Komentar digunakan untuk menjelaskan kode
# Ini tidak akan dieksekusi`,
    keyPoints: [
      "Python menggunakan indentasi untuk mengelompokkan kode",
      "Tidak perlu semicolon (;) di akhir statement",
      "Case sensitive - 'Print' berbeda dengan 'print'",
      "Gunakan # untuk komentar",
      "print() digunakan untuk menampilkan output",
    ],
    nextSteps: [
      "Pelajari tentang variabel dan tipe data",
      "Praktikkan dengan latihan Hello World",
      "Coba buat program sederhana dengan print()",
    ],
    relatedExercises: ["1"],
  },
  {
    id: "variables-datatypes",
    title: "Variabel dan Tipe Data",
    category: "Dasar",
    description:
      "Pelajari cara menyimpan data dalam variabel dan berbagai tipe data di Python",
    content: `
# Variabel dan Tipe Data

Variabel adalah tempat untuk menyimpan data. Di Python, kamu tidak perlu mendeklarasikan tipe data secara eksplisit.

## Membuat Variabel

\`\`\`python
name = "Alice"
age = 25
height = 165.5
is_student = True
\`\`\`

## Tipe Data Dasar

### 1. String (str)
Untuk menyimpan teks:
\`\`\`python
name = "John Doe"
message = 'Hello, World!'
\`\`\`

### 2. Integer (int)
Untuk angka bulat:
\`\`\`python
age = 25
year = 2024
\`\`\`

### 3. Float
Untuk angka desimal:
\`\`\`python
height = 175.5
pi = 3.14159
\`\`\`

### 4. Boolean (bool)
Untuk nilai True/False:
\`\`\`python
is_active = True
is_completed = False
\`\`\`

## Mengecek Tipe Data

\`\`\`python
print(type(name))      # <class 'str'>
print(type(age))       # <class 'int'>
print(type(height))    # <class 'float'>
print(type(is_active)) # <class 'bool'>
\`\`\`
    `,
    codeExample: `# Membuat variabel dengan berbagai tipe data
name = "Alice"
age = 25
height = 165.5
is_student = True

# Menampilkan variabel
print("Nama:", name)
print("Umur:", age)
print("Tinggi:", height)
print("Status mahasiswa:", is_student)

# Mengecek tipe data
print("Tipe data name:", type(name))
print("Tipe data age:", type(age))`,
    keyPoints: [
      "Variabel dibuat dengan assignment operator (=)",
      "Python menentukan tipe data secara otomatis",
      "String bisa menggunakan petik tunggal atau ganda",
      "Boolean hanya memiliki nilai True atau False",
      "Gunakan type() untuk mengecek tipe data",
    ],
    nextSteps: [
      "Pelajari operasi matematika dengan variabel",
      "Praktikkan dengan latihan variabel dan tipe data",
      "Coba konversi antar tipe data",
    ],
    relatedExercises: ["2"],
  },
  {
    id: "math-operations",
    title: "Operasi Matematika",
    category: "Dasar",
    description: "Pelajari berbagai operasi matematika dalam Python",
    content: `
# Operasi Matematika

Python menyediakan berbagai operator untuk melakukan operasi matematika.

## Operator Aritmatika

### Operasi Dasar
- **Penjumlahan (+)**: \`5 + 3 = 8\`
- **Pengurangan (-)**: \`5 - 3 = 2\`
- **Perkalian (*)**: \`5 * 3 = 15\`
- **Pembagian (/)**: \`5 / 3 = 1.6666...\`

### Operasi Khusus
- **Pembagian bulat (//)**: \`5 // 3 = 1\`
- **Modulus (%)**: \`5 % 3 = 2\`
- **Pangkat (**)**: \`5 ** 3 = 125\`

## Urutan Operasi (PEMDAS)

Python mengikuti urutan operasi matematika:
1. **P**arentheses (kurung)
2. **E**xponents (pangkat)
3. **M**ultiplication & **D**ivision (kiri ke kanan)
4. **A**ddition & **S**ubtraction (kiri ke kanan)

\`\`\`python
result = 2 + 3 * 4    # = 2 + 12 = 14
result = (2 + 3) * 4  # = 5 * 4 = 20
\`\`\`

## Assignment Operators

\`\`\`python
x = 10
x += 5   # x = x + 5 = 15
x -= 3   # x = x - 3 = 12
x *= 2   # x = x * 2 = 24
x /= 4   # x = x / 4 = 6.0
\`\`\`
    `,
    codeExample: `# Operasi matematika dasar
a = 10
b = 3

print("Penjumlahan:", a + b)      # 13
print("Pengurangan:", a - b)      # 7
print("Perkalian:", a * b)        # 30
print("Pembagian:", a / b)        # 3.333...
print("Pembagian bulat:", a // b) # 3
print("Modulus:", a % b)          # 1
print("Pangkat:", a ** b)         # 1000

# Menggunakan kurung untuk urutan operasi
result1 = 2 + 3 * 4
result2 = (2 + 3) * 4
print("Tanpa kurung:", result1)   # 14
print("Dengan kurung:", result2)  # 20`,
    keyPoints: [
      "Python mendukung semua operasi matematika dasar",
      "Operator // untuk pembagian yang menghasilkan bilangan bulat",
      "Operator % (modulus) memberikan sisa pembagian",
      "Operator ** untuk pangkat",
      "Gunakan kurung untuk mengubah urutan operasi",
    ],
    nextSteps: [
      "Praktikkan dengan latihan operasi matematika",
      "Pelajari tentang pengkondisian (if-else)",
      "Coba buat kalkulator sederhana",
    ],
    relatedExercises: ["3"],
  },
  {
    id: "control-flow",
    title: "Kontrol Alur Program",
    category: "Kontrol Alur",
    description:
      "Pelajari cara mengontrol alur program dengan pengkondisian dan perulangan",
    content: `
# Kontrol Alur Program

Kontrol alur memungkinkan program membuat keputusan dan mengulang tindakan.

## Pengkondisian (if-elif-else)

### If Statement
\`\`\`python
age = 18
if age >= 18:
    print("Sudah dewasa")
\`\`\`

### If-Else
\`\`\`python
age = 16
if age >= 18:
    print("Sudah dewasa")
else:
    print("Masih di bawah umur")
\`\`\`

### If-Elif-Else
\`\`\`python
score = 85
if score >= 90:
    print("Grade A")
elif score >= 80:
    print("Grade B")
elif score >= 70:
    print("Grade C")
else:
    print("Grade D")
\`\`\`

## Operator Perbandingan

- **==** : sama dengan
- **!=** : tidak sama dengan
- **>** : lebih besar dari
- **<** : lebih kecil dari
- **>=** : lebih besar atau sama dengan
- **<=** : lebih kecil atau sama dengan

## Operator Logika

- **and** : kedua kondisi harus benar
- **or** : salah satu kondisi benar
- **not** : membalik nilai boolean

\`\`\`python
age = 25
has_license = True

if age >= 18 and has_license:
    print("Boleh menyetir")
\`\`\`
    `,
    codeExample: `# Contoh pengkondisian
number = 5

# Mengecek apakah angka positif, negatif, atau nol
if number > 0:
    print(f"{number} adalah angka positif")
elif number < 0:
    print(f"{number} adalah angka negatif")
else:
    print("Angka adalah nol")

# Contoh dengan operator logika
age = 20
has_license = True

if age >= 18 and has_license:
    print("Boleh menyetir mobil")
elif age >= 18 and not has_license:
    print("Sudah cukup umur, tapi belum punya SIM")
else:
    print("Belum cukup umur untuk menyetir")`,
    keyPoints: [
      "Indentasi sangat penting dalam Python",
      "elif digunakan untuk kondisi tambahan",
      "Operator and, or, not untuk logika boolean",
      "Kondisi dievaluasi dari atas ke bawah",
      "Gunakan : (titik dua) setelah kondisi",
    ],
    nextSteps: [
      "Praktikkan dengan latihan if-else",
      "Pelajari tentang perulangan (for loop)",
      "Coba buat program dengan multiple conditions",
    ],
    relatedExercises: ["4"],
  },
  {
    id: "loops",
    title: "Perulangan (Loops)",
    category: "Kontrol Alur",
    description: "Pelajari cara mengulang kode dengan for loop dan while loop",
    content: `
# Perulangan (Loops)

Perulangan memungkinkan kita menjalankan kode yang sama berulang kali.

## For Loop

### Range Function
\`\`\`python
# Mengulang 5 kali (0 sampai 4)
for i in range(5):
    print(i)

# Dari 1 sampai 10
for i in range(1, 11):
    print(i)

# Dengan step
for i in range(0, 11, 2):  # 0, 2, 4, 6, 8, 10
    print(i)
\`\`\`

### Iterasi List
\`\`\`python
fruits = ["apel", "pisang", "jeruk"]
for fruit in fruits:
    print(fruit)
\`\`\`

### Enumerate
\`\`\`python
fruits = ["apel", "pisang", "jeruk"]
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")
\`\`\`

## While Loop

\`\`\`python
count = 0
while count < 5:
    print(count)
    count += 1  # Penting: update counter
\`\`\`

## Break dan Continue

### Break (keluar dari loop)
\`\`\`python
for i in range(10):
    if i == 5:
        break
    print(i)  # Cetak 0, 1, 2, 3, 4
\`\`\`

### Continue (skip iterasi)
\`\`\`python
for i in range(5):
    if i == 2:
        continue
    print(i)  # Cetak 0, 1, 3, 4
\`\`\`
    `,
    codeExample: `# For loop dengan range
print("Angka 1 sampai 10:")
for i in range(1, 11):
    print(i)

print("\\nAngka genap dari 0 sampai 10:")
for i in range(0, 11, 2):
    print(i)

# For loop dengan list
fruits = ["apel", "pisang", "jeruk", "mangga"]
print("\\nDaftar buah:")
for index, fruit in enumerate(fruits, 1):
    print(f"{index}. {fruit}")

# While loop
print("\\nCountdown:")
count = 5
while count > 0:
    print(count)
    count -= 1
print("Blast off!")`,
    keyPoints: [
      "range() menghasilkan urutan angka",
      "for loop bagus untuk iterasi yang sudah diketahui jumlahnya",
      "while loop untuk iterasi berdasarkan kondisi",
      "enumerate() memberikan index dan value",
      "break untuk keluar, continue untuk skip",
    ],
    nextSteps: [
      "Praktikkan dengan latihan for loop",
      "Pelajari tentang struktur data (list, dictionary)",
      "Coba nested loops (loop dalam loop)",
    ],
    relatedExercises: ["5"],
  },
  {
    id: "data-structures",
    title: "Struktur Data",
    category: "Struktur Data",
    description: "Pelajari list, dictionary, tuple, dan set dalam Python",
    content: `
# Struktur Data Python

Python menyediakan beberapa struktur data built-in yang sangat berguna.

## List

List adalah koleksi item yang ordered dan mutable (bisa diubah).

\`\`\`python
# Membuat list
fruits = ["apel", "pisang", "jeruk"]
numbers = [1, 2, 3, 4, 5]
mixed = ["Alice", 25, True, 3.14]

# Mengakses item
print(fruits[0])    # "apel"
print(fruits[-1])   # "jeruk" (dari belakang)

# Mengubah item
fruits[1] = "mangga"

# Menambah item
fruits.append("anggur")
fruits.insert(1, "kiwi")

# Menghapus item
fruits.remove("jeruk")
last_fruit = fruits.pop()  # Menghapus dan return item terakhir
\`\`\`

## Dictionary

Dictionary menyimpan data dalam pasangan key-value.

\`\`\`python
# Membuat dictionary
person = {
    "nama": "Alice",
    "umur": 25,
    "kota": "Jakarta"
}

# Mengakses value
print(person["nama"])        # "Alice"
print(person.get("umur"))    # 25

# Menambah/mengubah
person["pekerjaan"] = "Developer"
person["umur"] = 26

# Menghapus
del person["kota"]

# Iterasi
for key, value in person.items():
    print(f"{key}: {value}")
\`\`\`

## Tuple

Tuple seperti list tetapi immutable (tidak bisa diubah).

\`\`\`python
coordinates = (10, 20)
rgb = (255, 128, 0)

# Unpacking
x, y = coordinates
red, green, blue = rgb
\`\`\`

## Set

Set adalah koleksi item yang unik dan unordered.

\`\`\`python
numbers = {1, 2, 3, 4, 5}
unique_letters = set("hello")  # {'h', 'e', 'l', 'o'}
\`\`\`
    `,
    codeExample: `# Contoh penggunaan List
fruits = ["apel", "pisang", "jeruk"]
print("List awal:", fruits)

# Mengakses dan mengubah
print("Buah pertama:", fruits[0])
print("Buah terakhir:", fruits[-1])

fruits.append("mangga")
print("Setelah append:", fruits)

# Contoh Dictionary
student = {
    "nama": "Budi",
    "umur": 20,
    "jurusan": "Informatika",
    "ipk": 3.75
}

print("\\nInformasi mahasiswa:")
for key, value in student.items():
    print(f"{key.capitalize()}: {value}")

# Menambah data baru
student["semester"] = 5
print("Setelah menambah semester:", student)`,
    keyPoints: [
      "List menggunakan kurung siku [], bisa diubah",
      "Dictionary menggunakan kurung kurawal {}, key-value pairs",
      "Tuple menggunakan kurung (), tidak bisa diubah",
      "Set menggunakan kurung kurawal {}, item unik",
      "Index dimulai dari 0, index negatif dari belakang",
    ],
    nextSteps: [
      "Praktikkan dengan latihan list dan dictionary",
      "Pelajari list comprehension",
      "Coba nested data structures",
    ],
    relatedExercises: ["6", "7"],
  },
  {
    id: "functions",
    title: "Functions",
    category: "Function",
    description: "Pelajari cara membuat dan menggunakan function dalam Python",
    content: `
# Functions

Function adalah blok kode yang dapat digunakan ulang untuk melakukan tugas tertentu.

## Membuat Function

\`\`\`python
def greet():
    print("Hello, World!")

# Memanggil function
greet()
\`\`\`

## Function dengan Parameter

\`\`\`python
def greet_person(name):
    print(f"Hello, {name}!")

def add_numbers(a, b):
    result = a + b
    print(f"{a} + {b} = {result}")

greet_person("Alice")
add_numbers(5, 3)
\`\`\`

## Function dengan Return Value

\`\`\`python
def calculate_area(radius):
    pi = 3.14159
    area = pi * radius ** 2
    return area

# Menyimpan hasil return
circle_area = calculate_area(5)
print(f"Luas lingkaran: {circle_area}")
\`\`\`

## Default Parameters

\`\`\`python
def greet_person(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet_person("Alice")              # Hello, Alice!
greet_person("Bob", "Hi")          # Hi, Bob!
\`\`\`

## Multiple Return Values

\`\`\`python
def get_name_age():
    name = "Alice"
    age = 25
    return name, age

person_name, person_age = get_name_age()
\`\`\`

## Lambda Functions (Anonymous Functions)

\`\`\`python
# Function biasa
def square(x):
    return x ** 2

# Lambda function
square_lambda = lambda x: x ** 2

print(square(5))        # 25
print(square_lambda(5)) # 25
\`\`\`
    `,
    codeExample: `# Function tanpa parameter
def say_hello():
    print("Hello dari function!")

# Function dengan parameter
def introduce(name, age):
    print(f"Nama saya {name}, umur {age} tahun")

# Function dengan return value
def calculate_rectangle_area(length, width):
    area = length * width
    return area

# Function dengan default parameter
def power(base, exponent=2):
    return base ** exponent

# Memanggil functions
say_hello()
introduce("Alice", 25)

area = calculate_rectangle_area(10, 5)
print(f"Luas persegi panjang: {area}")

print(f"2^3 = {power(2, 3)}")  # exponent = 3
print(f"5^2 = {power(5)}")     # exponent = 2 (default)`,
    keyPoints: [
      "def keyword untuk mendefinisikan function",
      "Function dapat menerima parameter dan mengembalikan nilai",
      "return mengembalikan nilai dan mengakhiri function",
      "Default parameter memberikan nilai bawaan",
      "Function membantu membuat kode lebih modular dan reusable",
    ],
    nextSteps: [
      "Praktikkan dengan latihan function",
      "Pelajari tentang scope variabel",
      "Coba buat function yang kompleks",
    ],
    relatedExercises: ["8"],
  },
];

export const materialCategories = [
  "Semua",
  "Dasar",
  "Kontrol Alur",
  "Struktur Data",
  "Function",
  "Advanced",
];
