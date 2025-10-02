import { LearningMaterial } from "./types";

export const loops: LearningMaterial = {
  id: "loops",
  title: "Perulangan (Loops)",
  category: "Kontrol Alur",
  description:
    "Pelajari cara mengulang eksekusi kode dengan for loop dan while loop",
  content: `
# Perulangan (Loops)

Perulangan memungkinkan kita menjalankan blok kode berulang-ulang tanpa menulis kode yang sama berkali-kali.

## For Loop

### For Loop dengan range()

\`\`\`python
# Mencetak angka 0 sampai 4
for i in range(5):
    print(i)

# Mencetak angka 1 sampai 5
for i in range(1, 6):
    print(i)

# Mencetak angka 1, 3, 5 (step 2)
for i in range(1, 6, 2):
    print(i)
\`\`\`

### For Loop dengan List

\`\`\`python
buah = ["apel", "pisang", "jeruk", "mangga"]

for item in buah:
    print(f"Saya suka {item}")

# Dengan index
for i, item in enumerate(buah):
    print(f"{i+1}. {item}")
\`\`\`

### For Loop dengan String

\`\`\`python
nama = "Python"
for huruf in nama:
    print(huruf)
\`\`\`

## While Loop

### While Loop Dasar

\`\`\`python
# Hitung mundur
count = 5
while count > 0:
    print(count)
    count -= 1
print("Selesai!")
\`\`\`

### While Loop dengan Input

\`\`\`python
password = ""
while password != "python123":
    password = input("Masukkan password: ")
    if password != "python123":
        print("Password salah, coba lagi!")
print("Login berhasil!")
\`\`\`

## Break dan Continue

### Break - Keluar dari Loop

\`\`\`python
for i in range(10):
    if i == 5:
        break
    print(i)
# Output: 0, 1, 2, 3, 4
\`\`\`

### Continue - Skip Iterasi

\`\`\`python
for i in range(10):
    if i % 2 == 0:  # Skip angka genap
        continue
    print(i)
# Output: 1, 3, 5, 7, 9
\`\`\`

## Nested Loops

\`\`\`python
# Tabel perkalian
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} x {j} = {i*j}")
    print("---")
\`\`\`

## Loop dengan Else

\`\`\`python
# Else dijalankan jika loop selesai normal (tanpa break)
for i in range(5):
    if i == 10:  # Tidak pernah True
        break
    print(i)
else:
    print("Loop selesai tanpa break")
\`\`\`

## Infinite Loop (Hati-hati!)

\`\`\`python
# JANGAN jalankan ini tanpa break!
# while True:
#     print("Loop tak terbatas")

# Contoh yang aman:
while True:
    user_input = input("Ketik 'quit' untuk keluar: ")
    if user_input == "quit":
        break
    print(f"Kamu mengetik: {user_input}")
\`\`\`

**"Loop membuat program kamu lebih efisien dan powerful!"** - Ariski
  `,
  codeExample: `# Contoh Perulangan (Loops)

print("=== FOR LOOP ===")

# 1. For loop dengan range
print("Angka 1-5:")
for i in range(1, 6):
    print(f"Angka: {i}")

# 2. For loop dengan list
print("\\nDaftar hobi:")
hobi = ["coding", "gaming", "reading", "music"]
for i, h in enumerate(hobi, 1):
    print(f"{i}. {h}")

# 3. For loop dengan string
print("\\nHuruf dalam nama:")
nama = "Python"
for huruf in nama:
    print(f"'{huruf}'", end=" ")
print()

print("\\n=== WHILE LOOP ===")

# 4. While loop sederhana
print("Hitung mundur:")
count = 5
while count > 0:
    print(f"{count}...")
    count -= 1
print("🚀 Launch!")

# 5. While loop dengan kondisi
print("\\nCari angka genap:")
num = 1
while num <= 10:
    if num % 2 == 0:
        print(f"{num} adalah genap")
    num += 1

print("\\n=== BREAK & CONTINUE ===")

# 6. Break - keluar dari loop
print("Cari angka 7:")
for i in range(1, 11):
    if i == 7:
        print(f"Ketemu! Angka {i}")
        break
    print(f"Mencari... {i}")

# 7. Continue - skip iterasi
print("\\nAngka ganjil 1-10:")
for i in range(1, 11):
    if i % 2 == 0:  # Skip genap
        continue
    print(i, end=" ")
print()

print("\\n=== NESTED LOOPS ===")

# 8. Nested loop - pola bintang
print("Pola segitiga:")
for i in range(1, 6):
    for j in range(i):
        print("*", end="")
    print()

# 9. Tabel perkalian mini
print("\\nTabel perkalian 3x3:")
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i}x{j}={i*j}", end="  ")
    print()

print("\\n=== LOOP PRAKTIS ===")

# 10. Menu sederhana
while True:
    print("\\n=== MENU ===")
    print("1. Sapa")
    print("2. Hitung")
    print("3. Keluar")
    
    pilihan = input("Pilih (1-3): ")
    
    if pilihan == "1":
        nama = input("Nama kamu: ")
        print(f"Halo, {nama}!")
    elif pilihan == "2":
        a = int(input("Angka 1: "))
        b = int(input("Angka 2: "))
        print(f"Hasil: {a + b}")
    elif pilihan == "3":
        print("Bye bye! 👋")
        break
    else:
        print("Pilihan tidak valid!")`,
  keyPoints: [
    "For loop cocok untuk iterasi dengan jumlah yang sudah diketahui",
    "While loop cocok untuk iterasi dengan kondisi yang belum pasti",
    "range(start, stop, step) untuk menghasilkan urutan angka",
    "enumerate() untuk mendapat index dan value bersamaan",
    "break untuk keluar dari loop sebelum waktunya",
    "continue untuk skip iterasi saat ini",
    "Nested loops untuk pola atau tabel",
    "Hati-hati dengan infinite loop",
  ],
  nextSteps: [
    "Praktikkan dengan latihan loops",
    "Pelajari tentang list dan struktur data",
    "Coba buat pola dengan nested loops",
    "Pelajari list comprehension sebagai alternatif loop",
  ],
  relatedExercises: ["5", "6"],
};
