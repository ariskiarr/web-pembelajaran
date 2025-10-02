import { LearningMaterial } from "./types";

export const controlFlow: LearningMaterial = {
  id: "control-flow",
  title: "Kontrol Alur (If-Else)",
  category: "Kontrol Alur",
  description:
    "Pelajari cara mengontrol alur program dengan pengkondisian if-else",
  content: `
# Kontrol Alur (If-Else)

## Pengkondisian dalam Python

Pengkondisian memungkinkan program membuat keputusan berdasarkan kondisi tertentu.

## If Statement

### Syntax Dasar
\`\`\`python
if kondisi:
    # kode yang dijalankan jika kondisi True
    print("Kondisi benar")
\`\`\`

### Contoh Sederhana
\`\`\`python
umur = 18
if umur >= 18:
    print("Sudah dewasa")
\`\`\`

## If-Else Statement

\`\`\`python
umur = 16
if umur >= 18:
    print("Sudah dewasa")
else:
    print("Masih di bawah umur")
\`\`\`

## If-Elif-Else Statement

\`\`\`python
nilai = 85

if nilai >= 90:
    print("Grade A - Excellent!")
elif nilai >= 80:
    print("Grade B - Good!")
elif nilai >= 70:
    print("Grade C - Average")
elif nilai >= 60:
    print("Grade D - Below Average")
else:
    print("Grade F - Failed")
\`\`\`

## Operator Perbandingan

- **==** : sama dengan
- **!=** : tidak sama dengan
- **>** : lebih besar dari
- **<** : lebih kecil dari
- **>=** : lebih besar atau sama dengan
- **<=** : lebih kecil atau sama dengan

## Operator Logika

- **and** : kedua kondisi harus True
- **or** : salah satu kondisi True
- **not** : membalik nilai boolean

\`\`\`python
umur = 25
punya_sim = True

if umur >= 17 and punya_sim:
    print("Boleh mengemudi")
elif umur >= 17 and not punya_sim:
    print("Harus buat SIM dulu")
else:
    print("Belum cukup umur")
\`\`\`

## Nested If (If Bersarang)

\`\`\`python
cuaca = "hujan"
punya_payung = True

if cuaca == "hujan":
    if punya_payung:
        print("Bisa jalan keluar")
    else:
        print("Tunggu hujan reda")
else:
    print("Cuaca cerah, bebas keluar")
\`\`\`

## Ternary Operator (Conditional Expression)

\`\`\`python
# Syntax: nilai_jika_true if kondisi else nilai_jika_false
umur = 20
status = "Dewasa" if umur >= 18 else "Anak-anak"
print(status)

# Setara dengan:
# if umur >= 18:
#     status = "Dewasa"
# else:
#     status = "Anak-anak"
\`\`\`

**"Dengan if-else, program kamu bisa pintar membuat keputusan!"** - Ariski
  `,
  codeExample: `# Contoh Kontrol Alur (If-Else)

# 1. If sederhana
suhu = 30
if suhu > 25:
    print("Cuaca panas")

# 2. If-Else
jam = 14
if jam < 12:
    print("Selamat pagi")
else:
    print("Selamat siang/sore")

# 3. If-Elif-Else
nilai = int(input("Masukkan nilai: "))

if nilai >= 90:
    grade = "A"
elif nilai >= 80:
    grade = "B"
elif nilai >= 70:
    grade = "C"
elif nilai >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Grade kamu: {grade}")

# 4. Operator logika
username = input("Username: ")
password = input("Password: ")

if username == "admin" and password == "123456":
    print("Login berhasil!")
elif username == "admin" and password != "123456":
    print("Password salah!")
elif username != "admin":
    print("Username tidak ditemukan!")

# 5. Nested if
hari = "Sabtu"
cuaca = "cerah"

if hari in ["Sabtu", "Minggu"]:
    print("Hari libur!")
    if cuaca == "cerah":
        print("Cocok untuk jalan-jalan")
    else:
        print("Lebih baik di rumah")
else:
    print("Hari kerja")

# 6. Ternary operator
angka = 15
hasil = "Ganjil" if angka % 2 == 1 else "Genap"
print(f"{angka} adalah bilangan {hasil}")

# 7. Program cek bilangan
num = int(input("Masukkan angka: "))

if num > 0:
    print("Bilangan positif")
elif num < 0:
    print("Bilangan negatif")
else:
    print("Bilangan nol")`,
  keyPoints: [
    "If-else memungkinkan program membuat keputusan",
    "Indentasi (4 spasi) sangat penting dalam Python",
    "elif digunakan untuk multiple kondisi",
    "Operator logika: and, or, not",
    "Ternary operator untuk kondisi sederhana",
    "Nested if untuk kondisi berlapis",
    "Operator perbandingan: ==, !=, >, <, >=, <=",
  ],
  nextSteps: [
    "Praktikkan dengan latihan if-else",
    "Pelajari tentang perulangan (loops)",
    "Coba buat program quiz sederhana",
    "Pelajari kombinasi kondisi dengan operator logika",
  ],
  relatedExercises: ["4"],
};
