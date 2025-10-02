import { LearningMaterial } from "./types";

export const dataStructures: LearningMaterial = {
  id: "data-structures",
  title: "Struktur Data Sequential",
  category: "Struktur Data",
  description:
    "Pelajari list, tuple, set, dan dictionary - struktur data penting dalam Python",
  content: `
# Struktur Data Sequential

Python menyediakan beberapa tipe data untuk menyimpan kumpulan data dengan karakteristik berbeda.

## List - Daftar yang Bisa Diubah

### Membuat List
\`\`\`python
# List kosong
numbers = []
buah = list()

# List dengan data
angka = [1, 2, 3, 4, 5]
nama = ["Ali", "Budi", "Citra"]
campuran = [1, "hello", 3.14, True]
\`\`\`

### Operasi List
\`\`\`python
buah = ["apel", "pisang", "jeruk"]

# Akses elemen
print(buah[0])        # apel
print(buah[-1])       # jeruk (dari belakang)

# Slice
print(buah[0:2])      # ['apel', 'pisang']
print(buah[1:])       # ['pisang', 'jeruk']

# Menambah elemen
buah.append("mangga")           # Tambah di akhir
buah.insert(1, "durian")       # Insert di index 1

# Menghapus elemen
buah.remove("pisang")          # Hapus berdasarkan nilai
deleted = buah.pop()           # Hapus dan return elemen terakhir
del buah[0]                    # Hapus berdasarkan index

# Mengubah elemen
buah[0] = "kelapa"

print(len(buah))               # Panjang list
\`\`\`

## Tuple - Daftar yang Tidak Bisa Diubah

### Membuat Tuple
\`\`\`python
# Tuple kosong
empty_tuple = ()

# Tuple dengan data
koordinat = (10, 20)
rgb = (255, 128, 0)
data = ("John", 25, "Engineer")

# Tuple dengan satu elemen (perlu koma)
single = (42,)
\`\`\`

### Operasi Tuple
\`\`\`python
person = ("Alice", 30, "Doctor")

# Akses elemen (sama seperti list)
print(person[0])      # Alice
print(person[-1])     # Doctor

# Unpacking
name, age, job = person
print(f"{name} umur {age} profesi {job}")

# Tuple tidak bisa diubah
# person[0] = "Bob"  # ERROR!
\`\`\`

## Set - Himpunan Unik

### Membuat Set
\`\`\`python
# Set kosong
empty_set = set()

# Set dengan data
numbers = {1, 2, 3, 4, 5}
colors = {"red", "green", "blue"}

# Dari list (duplikasi otomatis dihapus)
list_with_duplicates = [1, 2, 2, 3, 3, 3]
unique_numbers = set(list_with_duplicates)  # {1, 2, 3}
\`\`\`

### Operasi Set
\`\`\`python
fruits = {"apel", "pisang", "jeruk"}

# Menambah elemen
fruits.add("mangga")
fruits.update(["durian", "kelapa"])

# Menghapus elemen
fruits.remove("pisang")    # Error jika tidak ada
fruits.discard("anggur")   # Tidak error jika tidak ada

# Operasi himpunan
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

print(set1 | set2)  # Union: {1, 2, 3, 4, 5, 6}
print(set1 & set2)  # Intersection: {3, 4}
print(set1 - set2)  # Difference: {1, 2}
\`\`\`

## Dictionary - Kamus Key-Value

### Membuat Dictionary
\`\`\`python
# Dict kosong
empty_dict = {}

# Dict dengan data
student = {
    "name": "John",
    "age": 20,
    "grade": "A",
    "subjects": ["Math", "Physics"]
}

# Dengan dict()
person = dict(name="Alice", age=25)
\`\`\`

### Operasi Dictionary
\`\`\`python
student = {"name": "John", "age": 20, "grade": "A"}

# Akses nilai
print(student["name"])           # John
print(student.get("age"))        # 20
print(student.get("height", 0))  # 0 (default jika tidak ada)

# Menambah/mengubah
student["age"] = 21              # Ubah
student["city"] = "Jakarta"      # Tambah

# Menghapus
del student["grade"]
removed = student.pop("city")

# Iterasi
for key in student:
    print(f"{key}: {student[key]}")

for key, value in student.items():
    print(f"{key}: {value}")

# Methods berguna
print(student.keys())    # dict_keys(['name', 'age'])
print(student.values())  # dict_values(['John', 21])
\`\`\`

## Kapan Menggunakan Apa?

### List
- ✅ Data berurutan yang bisa diubah
- ✅ Boleh ada duplikasi
- ✅ Perlu akses berdasarkan index
- 📝 Contoh: daftar nilai, riwayat transaksi

### Tuple
- ✅ Data berurutan yang tidak berubah
- ✅ Lebih cepat dari list
- ✅ Bisa jadi key dictionary
- 📝 Contoh: koordinat, tanggal, konfigurasi

### Set
- ✅ Data unik (tidak ada duplikasi)
- ✅ Operasi himpunan
- ✅ Cek membership cepat
- 📝 Contoh: tag unik, hak akses

### Dictionary
- ✅ Data dengan label/key
- ✅ Akses cepat berdasarkan key
- ✅ Struktur data kompleks
- 📝 Contoh: profil user, konfigurasi, cache

**"Pilih struktur data yang tepat untuk masalah yang tepat!"** - Ariski
  `,
  codeExample: `# Contoh Struktur Data Sequential

print("=== LIST ===")

# 1. Operasi list dasar
shopping_list = ["roti", "susu", "telur"]
print(f"List belanja: {shopping_list}")

shopping_list.append("keju")
shopping_list.insert(1, "mentega")
print(f"Setelah ditambah: {shopping_list}")

# 2. List comprehension preview
numbers = [1, 2, 3, 4, 5]
squares = [x**2 for x in numbers]
print(f"Kuadrat: {squares}")

print("\\n=== TUPLE ===")

# 3. Tuple untuk data tetap
person = ("Alice", 25, "Engineer", "Jakarta")
name, age, job, city = person
print(f"Data: {name}, {age} tahun, {job} di {city}")

# 4. Tuple sebagai koordinat
points = [(0, 0), (1, 2), (3, 4)]
for x, y in points:
    print(f"Point: ({x}, {y})")

print("\\n=== SET ===")

# 5. Set untuk data unik
hobbies = {"reading", "coding", "gaming", "reading", "music"}
print(f"Hobi unik: {hobbies}")

# 6. Operasi set
fruits_a = {"apel", "pisang", "jeruk"}
fruits_b = {"pisang", "mangga", "durian"}

print(f"Gabungan: {fruits_a | fruits_b}")
print(f"Irisan: {fruits_a & fruits_b}")
print(f"Beda A-B: {fruits_a - fruits_b}")

print("\\n=== DICTIONARY ===")

# 7. Dictionary untuk data kompleks
student = {
    "name": "John Doe",
    "student_id": "2024001",
    "subjects": {
        "Math": 85,
        "Physics": 92,
        "Chemistry": 78
    },
    "active": True
}

print(f"Nama: {student['name']}")
print(f"Nilai Fisika: {student['subjects']['Physics']}")

# 8. Iterasi dictionary
print("\\nDaftar nilai:")
for subject, score in student["subjects"].items():
    print(f"  {subject}: {score}")

# 9. Dictionary methods
print(f"\\nMata kuliah: {list(student['subjects'].keys())}")
print(f"Rata-rata: {sum(student['subjects'].values()) / len(student['subjects'])}")

print("\\n=== NESTED STRUCTURES ===")

# 10. Struktur data kompleks
classroom = {
    "class_name": "Python Beginner",
    "students": [
        {"name": "Alice", "scores": [85, 90, 88]},
        {"name": "Bob", "scores": [78, 85, 92]},
        {"name": "Charlie", "scores": [92, 88, 90]}
    ],
    "assignments": ("Quiz 1", "Midterm", "Final")
}

print(f"Kelas: {classroom['class_name']}")
print("Daftar siswa dan rata-rata nilai:")
for student in classroom["students"]:
    avg = sum(student["scores"]) / len(student["scores"])
    print(f"  {student['name']}: {avg:.1f}")

print("\\n=== PRACTICAL EXAMPLES ===")

# 11. Menu makanan dengan harga
menu = {
    "nasi goreng": 15000,
    "mie ayam": 12000,
    "es teh": 5000,
    "jus jeruk": 8000
}

print("=== MENU RESTORAN ===")
for item, price in menu.items():
    print(f"{item.title()}: Rp {price:,}")

# 12. Keranjang belanja
cart = []
cart.append(("nasi goreng", 2))  # (item, quantity)
cart.append(("es teh", 3))

total = 0
print("\\n=== KERANJANG ===")
for item, qty in cart:
    price = menu[item] * qty
    total += price
    print(f"{qty}x {item.title()}: Rp {price:,}")

print(f"\\nTotal: Rp {total:,}")`,
  keyPoints: [
    "List: mutable, ordered, allows duplicates - gunakan untuk data yang berubah",
    "Tuple: immutable, ordered, allows duplicates - gunakan untuk data tetap",
    "Set: mutable, unordered, unique elements - gunakan untuk data unik",
    "Dictionary: mutable, key-value pairs - gunakan untuk data berlabel",
    "Indexing dimulai dari 0, negative indexing dari akhir",
    "Slicing dengan syntax [start:stop:step]",
    "Nested structures untuk data kompleks",
    "Pilih struktur data sesuai kebutuhan program",
  ],
  nextSteps: [
    "Praktikkan dengan latihan struktur data",
    "Pelajari list comprehension untuk operasi advanced",
    "Coba buat program inventory dengan dictionary",
    "Pelajari functions untuk mengorganisir kode",
  ],
  relatedExercises: ["7", "8"],
};
