import { LearningMaterial } from "./types";

export const programmingHistory: LearningMaterial = {
  id: "programming-history",
  title: "Pengenalan Bahasa Pemrograman",
  category: "Dasar",
  description:
    "Pelajari dasar-dasar bahasa pemrograman untuk pemula, dari konsep hingga jenis-jenis bahasa populer",
  content: `
# Pengenalan Bahasa Pemrograman

## 1. Apa itu Bahasa Pemrograman?

Bahasa pemrograman adalah bahasa khusus yang digunakan manusia untuk memberi instruksi kepada komputer agar komputer dapat melakukan suatu tugas.

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

Contoh: user mengetik angka lewat keyboard.

### Proses
Bagian logika/program yang mengolah data.

Contoh: menghitung hasil penjumlahan dari dua angka.

### Output
Hasil yang ditampilkan setelah data diproses.

Contoh: menampilkan hasil penjumlahan ke layar.

### Analogi Sederhana:
Bayangkan Kamu ingin membuat jus alpukat maka input itu adalah alpukatnya dan proses adalah saat kita memasukkannya ke dalam mesin blender dan output adalah hasil dari jus tersebut bisa di tambahkan es biar dingin hehe tapi intinya adalah: input (buah) → proses (diblender) → output (jus)

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
Dekat dengan bahasa mesin (0 dan 1)
Sulit dipahami manusia, tapi sangat cepat dijalankan komputer

**Contoh:**
- **Bahasa Mesin (Machine Language)** → langsung berupa 0 dan 1
- **Assembly** → menggunakan simbol (MOV, ADD, SUB) yang lebih mudah dari biner, tapi tetap dekat dengan mesin

**Kelebihan:** cepat dan efisien
**Kekurangan:** susah dipelajari, tidak portabel (bergantung pada hardware)

### Bahasa Tingkat Menengah (Middle-Level Language)
Masih berhubungan dengan hardware, tapi sudah lebih mudah dipahami manusia
Bisa digunakan untuk pemrograman sistem operasi, driver, atau aplikasi yang butuh performa tinggi

**Contoh:** C, C++

**Kelebihan:** seimbang antara performa dan keterbacaan
**Kekurangan:** tetap butuh pemahaman teknis yang cukup dalam

### Bahasa Tingkat Tinggi (High-Level Language)
Paling dekat dengan bahasa manusia
Mudah dipelajari, syntax lebih sederhana
Tidak bergantung pada hardware (portabel)

**Contoh:** Python, Java, C#, JavaScript, PHP

**Kelebihan:** mudah dipahami, cocok untuk pemula
**Kekurangan:** butuh penerjemah (compiler/interpreter) agar bisa dijalankan oleh komputer

## 6. Perbedaan Compiler dan Interpreter

Komputer hanya bisa mengerti bahasa mesin (biner), jadi kode program yang kita tulis perlu diterjemahkan. Proses penerjemahan inilah yang menggunakan Compiler atau Interpreter.

### Compiler
Menerjemahkan seluruh kode program sekaligus menjadi file bahasa mesin sebelum dijalankan. Hasilnya adalah file executable (.exe, .out, dll). Jika ada error, biasanya ditampilkan setelah proses kompilasi selesai.

#### Analogi Sederhana Compiler:
Bayangkan kita mau menampilkan sebuah drama teater:
- **Naskah Drama** → ini adalah kode program yang kita tulis
- **Penerjemah** → sebelum drama dimulai, penerjemah membaca seluruh naskah dan menerjemahkannya ke bahasa yang dipahami aktor (bahasa mesin)
- **Drama Dimulai** → setelah semua sudah diterjemahkan, barulah pertunjukan bisa dijalankan dari awal sampai akhir tanpa perlu berhenti

Jadi, compiler = penerjemah yang bekerja di awal, menerjemahkan semua naskah dulu baru pertunjukan dimulai.

**Contoh bahasa yang menggunakan Compiler:** C, C++, Java (dengan bytecode)
**Ilustrasi:** Program → Compiler → File EXE → Jalankan

### Interpreter
Menerjemahkan baris demi baris kode program dan langsung menjalankannya. Tidak menghasilkan file executable, jadi setiap kali menjalankan program, interpreter harus ikut bekerja. Jika ada error, langsung berhenti di baris tersebut.

#### Analogi Sederhana Interpreter:
Interpreter itu seperti penerjemah langsung di sebuah pidato:
- Setiap kalimat yang diucapkan pembicara langsung diterjemahkan saat itu juga
- Jadi program bisa langsung dijalankan baris demi baris, tapi biasanya lebih lambat dibanding compiler

**Contoh bahasa yang menggunakan Interpreter:** Python, JavaScript, PHP
**Ilustrasi:** Program → Interpreter → Hasil langsung tampil

#### Kesimpulan:
- **Compiler** itu seperti menerjemahkan seluruh buku dulu sebelum dibaca
- **Interpreter** itu seperti menerjemahkan kalimat demi kalimat saat dibacakan

**"Selamat datang di dunia pemrograman! Mari kita mulai perjalanan coding kamu dengan Python 🚀"** - Ariski
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
    "Programming terdiri dari Input → Process → Output",
    "Ada tingkatan bahasa: Low-level, Middle-level, High-level",
    "Compiler menerjemahkan seluruh kode sekaligus, Interpreter baris demi baris",
    "Python termasuk bahasa tingkat tinggi yang mudah dipelajari",
    "Setiap bahasa pemrograman punya kelebihan untuk keperluan tertentu",
  ],
  nextSteps: [
    "Pelajari sejarah dan karakteristik Python lebih dalam",
    "Pahami mengapa Python cocok untuk pemula",
    "Install Python dan IDE/editor di komputer",
    "Coba contoh program sederhana Input-Process-Output",
  ],
  relatedExercises: [],
};
