import { LearningMaterial } from "./types";

export const pythonBasics: LearningMaterial = {
  id: "python-basics",
  title: "Dasar-Dasar Python",
  category: "Dasar",
  description:
    "Pelajari syntax dasar Python, fungsi print(), komentar, dan konsep fundamental untuk memulai programming",
  content: `# Dasar-Dasar Python

Python adalah bahasa pemrograman yang mudah dipelajari dan sangat powerful. Python memiliki syntax yang sederhana dan mudah dibaca.

## Mengapa Python?

- **Mudah dipelajari:** Syntax yang sederhana dan mirip bahasa Inggris
- **Versatile:** Bisa digunakan untuk web development, data science, AI, dll
- **Community besar:** Banyak library dan dukungan komunitas
- **Open source:** Gratis dan dapat dimodifikasi

## 1. Fungsi Print()

Fungsi print() digunakan untuk menampilkan output (keluaran) ke layar. Ini adalah salah satu fungsi paling dasar dan sering digunakan dalam Python. Jadi kamu bisa menggunakan perintah print() untuk menampilkan output yang kamu inginkan.

### Sintaks Dasar
\`\`\`python
print("Halo, Dunia!")
\`\`\`
**Output:** Halo, Dunia!

### Contoh Penggunaan Print

### Menampilkan Teks:
\`\`\`python
print("Selamat datang di Python")
print('Python itu mudah!')
\`\`\`
**Output:**
\`\`\`
Selamat datang di Python
Python itu mudah!
\`\`\`

### Menampilkan Angka:
\`\`\`python
print(100)
print(3.14)
\`\`\`
**Output:**
\`\`\`
100
3.14
\`\`\`

### Menampilkan Beberapa Item:
\`\`\`python
print("Nama:", "Budi")
print("Umur:", 20, "tahun")
\`\`\`
**Output:**
\`\`\`
Nama: Budi
Umur: 20 tahun
\`\`\`

Jadi kamu bisa menampilkan beberapa item dengan pemisah tanda koma:
\`\`\`python
print("item1", "item2", "item3")
\`\`\`
Di Python untuk memisahkan item menggunakan tanda koma

### Print dengan Pemisah Kustom:
\`\`\`python
print("Apel", "Jeruk", "Mangga", sep=" - ")
\`\`\`
**Output:** Apel - Jeruk - Mangga

Kamu bisa mengubah pemisah dengan berbagai simbol:
\`\`\`python
print("A", "B", "C", sep=" | ") # Output: A | B | C
print("X", "Y", "Z", sep="->") # Output: X->Y->Z
\`\`\`

### Print Tanpa Baris Baru:
\`\`\`python
print("Baris 1", end=" ")
print("Baris 2")
\`\`\`
**Output:** Baris 1 Baris 2

Contoh lain:
\`\`\`python
print("Loading", end="")
print("...", end="")
print(" Selesai!")
\`\`\`
**Output:** Loading... Selesai!

## 2. Komentar dalam Python

Komentar adalah teks yang diabaikan oleh interpreter Python. Komentar digunakan untuk menjelaskan kode agar lebih mudah dipahami. Jadi komentar tidak akan tereksekusi oleh program atau secara sederhana komentar tidak akan terbaca oleh program. Tujuan dari komentar sama seperti kita memberi sebuah catatan kecil di buku catatan kita yang berguna untuk keterangan saja. Sama halnya di bahasa pemrograman khususnya Python, komentar digunakan untuk memberikan catatan atau keterangan pada codinganmu.

### A. Komentar Satu Baris
Menggunakan tanda pagar (#):

\`\`\`python
# Ini adalah komentar satu baris
print("Hello World") # Komentar juga bisa di akhir baris

# Komentar ini tidak akan dieksekusi
print("Ini tidak akan muncul")

# Komentar untuk menjelaskan kode
nama = "Python" # Menyimpan nama bahasa pemrograman
\`\`\`

### B. Komentar Multi-Baris
Menggunakan triple quotes (""" atau '''):

\`\`\`python
"""
Ini adalah komentar multi-baris
yang bisa menjelaskan program
secara detail dan panjang
"""
print("Program dimulai")

'''
Ini juga komentar multi-baris
Bisa menggunakan single quote
atau double quote sesuai kebutuhan
'''

"""
Fungsi ini akan menghitung luas persegi
Input: sisi (bilangan)
Output: luas (bilangan)
"""
def hitung_luas_persegi(sisi):
    return sisi * sisi
\`\`\`

## 3. Contoh Praktis

### Program menampilkan biodata
\`\`\`python
print("=== BIODATA ===")
print("Nama: Ahmad")
print("Umur: 18")
print("Hobi: Coding")

"""
Program di atas menampilkan biodata sederhana
menggunakan fungsi print()
"""
\`\`\`

### Menampilkan hasil perhitungan
\`\`\`python
print("10 + 5 =", 10 + 5)
print("20 - 8 =", 20 - 8)
\`\`\`

## 4. Tips Penting

- Gunakan komentar untuk menjelaskan kode yang kompleks
- Print berguna untuk debugging (mencari error)
- Tanda kutip tunggal ' dan ganda " bisa digunakan untuk string
- Komentar membuat kode lebih mudah dipahami orang lain

**"Kamu bisa mencoba nya di latihan yaahhh semangattt"** - Ariski`,
  codeExample: `# Dasar-Dasar Python

# 1. Contoh Fungsi Print()
print("Halo, Dunia!")
print("Selamat datang di Python")
print('Python itu mudah!')

# Menampilkan angka
print(100)
print(3.14)

# Menampilkan beberapa item
print("Nama:", "Budi")
print("Umur:", 20, "tahun")

# Print dengan pemisah kustom
print("Apel", "Jeruk", "Mangga", sep=" - ")

# Print tanpa baris baru
print("Baris 1", end=" ")
print("Baris 2")

# 2. Contoh Komentar

# Ini adalah komentar satu baris
print("Hello World")  # Komentar di akhir baris

"""
Ini adalah komentar multi-baris
yang bisa menjelaskan program
secara detail
"""

# 3. Program biodata sederhana
print("=== BIODATA ===")
print("Nama: Ahmad")
print("Umur: 18")
print("Hobi: Coding")

# Menampilkan hasil perhitungan
print("10 + 5 =", 10 + 5)
print("20 - 8 =", 20 - 8)`,
  keyPoints: [
    "Fungsi print() digunakan untuk menampilkan output ke layar",
    "Komentar (#) untuk satu baris, triple quotes untuk multi-baris",
    "Print dapat menampilkan teks, angka, dan beberapa item sekaligus",
    "Parameter sep mengatur pemisah, parameter end mengatur akhiran",
    "Komentar tidak tereksekusi oleh program, hanya untuk dokumentasi",
    "Tanda kutip tunggal (') dan ganda (\") sama-sama bisa untuk string",
    "Print berguna untuk debugging dan melihat hasil program",
    "Komentar membuat kode lebih mudah dipahami dan dipelihara",
  ],
  nextSteps: [
    "Praktikkan berbagai variasi fungsi print()",
    "Coba membuat komentar untuk menjelaskan kode kamu",
    "Buat program biodata sederhana dengan print()",
    "Pelajari variabel dan tipe data untuk materi selanjutnya",
  ],
  relatedExercises: ["1"],
};
