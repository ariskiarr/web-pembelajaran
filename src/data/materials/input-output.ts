import { LearningMaterial } from "./types";

export const inputOutput: LearningMaterial = {
  id: "input-output",
  title: "Input dan Output",
  category: "Dasar",
  description: "Pelajari cara mengambil input dari user dan menampilkan output",
  content: `
# Input dan Output

## Fungsi input()

Fungsi **input()** digunakan untuk mengambil data dari user (keyboard).

### Cara Menggunakan input()
\`\`\`python
nama = input("Masukkan nama kamu: ")
print("Halo,", nama)
\`\`\`

### Input Selalu String
Semua input dari user adalah **string**, bahkan jika user mengetik angka.

\`\`\`python
umur = input("Masukkan umur: ")
print("Tipe data:", type(umur))  # <class 'str'>
\`\`\`

## Konversi Tipe Data

### String ke Integer
\`\`\`python
umur_str = input("Masukkan umur: ")
umur_int = int(umur_str)
print("Umur kamu:", umur_int, "tahun")
\`\`\`

### String ke Float
\`\`\`python
tinggi_str = input("Masukkan tinggi (cm): ")
tinggi_float = float(tinggi_str)
print("Tinggi kamu:", tinggi_float, "cm")
\`\`\`

### Konversi Langsung
\`\`\`python
# Langsung konversi saat input
umur = int(input("Masukkan umur: "))
berat = float(input("Masukkan berat (kg): "))
\`\`\`

## Program Interaktif

\`\`\`python
print("=== KALKULATOR SEDERHANA ===")
angka1 = float(input("Masukkan angka pertama: "))
angka2 = float(input("Masukkan angka kedua: "))

print("Hasil penjumlahan:", angka1 + angka2)
print("Hasil pengurangan:", angka1 - angka2)
print("Hasil perkalian:", angka1 * angka2)
print("Hasil pembagian:", angka1 / angka2)
\`\`\`

## Format Output

### f-string (Recommended)
\`\`\`python
nama = "Budi"
umur = 20
print(f"Nama: {nama}, Umur: {umur} tahun")
\`\`\`

### format()
\`\`\`python
print("Nama: {}, Umur: {} tahun".format(nama, umur))
\`\`\`

### % formatting (Lama)
\`\`\`python
print("Nama: %s, Umur: %d tahun" % (nama, umur))
\`\`\`

## Tips Error Handling

\`\`\`python
try:
    angka = int(input("Masukkan angka: "))
    print("Angka kamu:", angka)
except ValueError:
    print("Error: Harap masukkan angka yang valid!")
\`\`\`

**"Sekarang program kamu bisa berinteraksi dengan user!"** - Ariski
  `,
  codeExample: `# Program Input dan Output

# 1. Input dasar
nama = input("Siapa nama kamu? ")
print(f"Halo, {nama}! Selamat datang!")

# 2. Input dengan konversi tipe data
print("\\n=== BIODATA ===")
umur = int(input("Berapa umur kamu? "))
tinggi = float(input("Berapa tinggi kamu (cm)? "))

print(f"Nama: {nama}")
print(f"Umur: {umur} tahun")
print(f"Tinggi: {tinggi} cm")

# 3. Kalkulator sederhana
print("\\n=== KALKULATOR ===")
angka1 = float(input("Masukkan angka pertama: "))
operasi = input("Pilih operasi (+, -, *, /): ")
angka2 = float(input("Masukkan angka kedua: "))

if operasi == "+":
    hasil = angka1 + angka2
elif operasi == "-":
    hasil = angka1 - angka2
elif operasi == "*":
    hasil = angka1 * angka2
elif operasi == "/":
    hasil = angka1 / angka2
else:
    hasil = "Operasi tidak valid"

print(f"Hasil: {angka1} {operasi} {angka2} = {hasil}")

# 4. Format output yang cantik
print("\\n=== LAPORAN ===")
print(f"{'Item':<15} {'Harga':<10} {'Jumlah':<8}")
print("-" * 35)
print(f"{'Buku':<15} {'Rp 25000':<10} {'3':<8}")
print(f"{'Pensil':<15} {'Rp 5000':<10} {'5':<8}")

# 5. Input multiple values dalam satu baris
data = input("Masukkan nama, umur, kota (pisah dengan koma): ")
nama, umur, kota = data.split(", ")
print(f"Data: {nama} ({umur} tahun) dari {kota}")`,
  keyPoints: [
    "input() selalu mengembalikan string, perlu konversi untuk tipe lain",
    "Gunakan int() untuk konversi ke integer, float() untuk decimal",
    "f-string adalah cara terbaik untuk format output di Python modern",
    "Gunakan try-except untuk menangani error input yang tidak valid",
    "Program interaktif membuat aplikasi lebih user-friendly",
    "split() berguna untuk memisah input multiple values",
  ],
  nextSteps: [
    "Praktikkan membuat program interaktif",
    "Pelajari pengkondisian (if-else) untuk logika program",
    "Coba buat quiz atau game sederhana",
    "Pelajari cara validasi input user",
  ],
  relatedExercises: ["12"],
};
