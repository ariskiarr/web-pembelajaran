import { LearningMaterial } from "./types";

export const variablesDataTypes: LearningMaterial = {
  id: "variables-datatypes",
  title: "Variabel dan Tipe Data",
  category: "Dasar",
  description: "Pelajari cara menyimpan data dalam variabel dan berbagai tipe data di Python",
  content: `# Variabel dan Tipe Data

## Apa itu Variable ?

Variabel dalam pemrograman adalah lokasi penyimpanan data yang diberi nama simbolis. Variabel dapat diartikan sebagai wadah yang menyimpan data atau objek yang bisa diketahui atau tidak diketahui.

![Variabel](../../../public/images/variabel.png)

Jadi jika variabel dianalogikan sebagai sebuah box dan value/nilainya adalah sebuah bola dalam box tersebut

Nah di bahasa Python, kamu tidak perlu mendeklarasikan tipe data secara eksplisit.

**"Secara sederhana deklarasi adalah kita memberi tahu komputer tipe data yang ada di dalam sebuah variabel"**

## Aturan Penamaan Variabel

1. Dapat menggunakan huruf kapital atau huruf kecil atau underscore atau angka
2. Wajib diawali dengan huruf atau underscore
3. Tidak boleh menggunakan reserved word (syntax/Code dalam bahasa pemrograman)
4. Tidak boleh diawali dengan angka
5. Tidak boleh ada spasi diantaranya

## Contoh pemakaian variabel

\`\`\`python
# Camel Case (di awalai dengan huruf kecil dan huruf kapital setiap kata yang berbeda)
namaLengkapMahasiswa = "Mulyono"

# Pascal Case (huruf kapital di setiap kata)
NamaLengkapMahasiswa = "Mulyono"

# Snake Case (menggunakan tanda _ sebagai pemisah)
nama_lengkap_mahasiswa = "Mulyono"
\`\`\`

## Deklarasi Variabel

**Rumusnya = NamaVariabel = Value**

Contoh:

\`\`\`python
nama = "Mulyono"
print(nama)

angka1 = 5
angka2 = angka1 + 5
print(angka2) # akan muncul angka 10 karena angka1 = 5 dan variabel angka 2 menyimpan operator angka1 + 5 maka sama dengan 10
\`\`\`

Penamaan variabel itu termasuk case sensitive atau secara sederhana penulisan hanya harus benar benar sama beda satu huruf atau karakter saja sudah menandakan bahwa variabel tersebut berbeda contoh nama variabel peka terhadap huruf besar dan kecil

\`\`\`python
TEMPAT = "Unej"
Tempat = "Stadion"
tempat = "Fasilkom"
print("sekarang di", tempat)  # output : sekarang di Fasilkom
\`\`\`

Maka yang akan muncul adalah Fasilkom, dapat di lihat walau arti dalam variabel tersebut sama namun perbedaan huruf kapital dan huruf kecil sangat mempengaruhi pemanggilann variabel tersebut

## Deklarasi Ulang

Jika kita mendeklarasikan ulang variabel dengan nama yang sama, nilai lama variabel tersebut akan digantikan dengan nilai baru. Python tidak memberikan peringatan atau error ketika hal ini terjadi.

Contoh:
\`\`\`python
nama = "Mulyono"
nama = "Fana"
print("nama saya sekarang", nama)
\`\`\`

**Penjelasan:** yang awalnya value dari variabel nama yaitu Mulyono namun variabel nama di deklarasi ulang dengan value Fana maka nilai variabel yang terbaru(sekarang) yaitu Fana nah kondisi ini di sebut deklarasi ulang

## Tipe Data

### Apa itu Tipe Data ?

Tipe data adalah atribut yang terkait dengan sepotong data yang bisa memberi tahu sistem komputer cara untuk menafsirkan nilainya.
Dalam Pemrograman kita pastinya tidak lepas dari yang namanya pengolahan data. Data - Data yang kita olah tentunya memiliki beragam jenis dengan fungsi dan tujuan masing - masing.

![Tipe Data](../../../public/images/tipedata.png)

Gambar di atas merupakan jenis jenis tipe data yang akan kita pelajari

Jadi jika dianalogikan tipe data itu adalah seperti barang barang yang ada di sekitar kita sebagai contoh:
- botol = menyimpan air
- tas = menyimpan buku dan alat tulis
- lemari = menyimpan pakaian

Nah tipe data juga seperti itu:

### 1. int (integer / bilangan bulat)
Untuk angka bulat: positif, negatif, atau nol.

Contoh code:
\`\`\`python
umur = 21
tahun = -2025
\`\`\`

### 2. float (bilangan pecahan / desimal)
Untuk angka dengan koma desimal.

Contoh code:
\`\`\`python
pi = 3.14
suhu = -12.5
\`\`\`

### 3. complex
Untuk angka yang punya bagian real dan imajiner.

Contoh code:
\`\`\`python
z = 3 + 5j
\`\`\`

### 4. str (string / teks)
Untuk menyimpan teks, karakter, kalimat

Contoh code:
\`\`\`python
nama = "Ariski"
pesan = 'Halo Dunia'
\`\`\`

### 5. bool (boolean / logika)
Hanya punya 2 nilai: True atau False.

Contoh code:
\`\`\`python
lulus = True
hujan = False
\`\`\`

### 6. list
Menyimpan kumpulan data yang bisa berbeda tipe, dan bisa diubah (mutable).

Contoh code:
\`\`\`python
angka = [1, 2, 3, 4]
campuran = [1, "teks", 3.5, True]
\`\`\`

### 7. tuple
Mirip list, tapi tidak bisa diubah (immutable).

Contoh code:
\`\`\`python
koordinat = (10, 20)
hari = ("Senin", "Selasa", "Rabu")
\`\`\`

### 8. set
Menyimpan kumpulan data unik (tidak ada duplikat), urutannya tidak terjamin.

Contoh code:
\`\`\`python
bilangan = {1, 2, 3, 3, 4}  # hasilnya {1, 2, 3, 4}
\`\`\`

### 9. dict (dictionary)
Menyimpan data dalam bentuk key : value (seperti kamus).

Contoh code:
\`\`\`python
mahasiswa = {
    "nama": "Ariski",
    "umur": 21,
    "jurusan": "Sistem Informasi"
}
\`\`\`

**Catatan:** untuk variabel nomor 4,6,7,8 dan 9 akan dijelaskan pada materi selanjutnya yaitu tipe data sequential

## Intinya
- **Angka** → int, float, complex
- **Teks** → str
- **Logika** → bool
- **Kumpulan data** → list, tuple, set, dict`,
  codeExample: `# Contoh Variabel dan Tipe Data

# 1. Contoh penamaan variabel
# Camel Case
namaLengkapMahasiswa = "Mulyono"

# Pascal Case
NamaLengkapMahasiswa = "Mulyono"

# Snake Case
nama_lengkap_mahasiswa = "Mulyono"

# 2. Deklarasi Variabel
nama = "Mulyono"
print(nama)

angka1 = 5
angka2 = angka1 + 5
print(angka2) # akan muncul angka 10

# 3. Case Sensitive
TEMPAT = "Unej"
Tempat = "Stadion"
tempat = "Fasilkom"
print("sekarang di", tempat)  # output: sekarang di Fasilkom

# 4. Deklarasi Ulang
nama = "Mulyono"
nama = "Fana"
print("nama saya sekarang", nama)

# 5. Contoh berbagai tipe data
# Integer
umur = 21
tahun = -2025

# Float
pi = 3.14
suhu = -12.5

# Complex
z = 3 + 5j

# String
nama = "Ariski"
pesan = 'Halo Dunia'

# Boolean
lulus = True
hujan = False

# List
angka = [1, 2, 3, 4]
campuran = [1, "teks", 3.5, True]

# Tuple
koordinat = (10, 20)
hari = ("Senin", "Selasa", "Rabu")

# Set
bilangan = {1, 2, 3, 3, 4}  # hasilnya {1, 2, 3, 4}

# Dictionary
mahasiswa = {
    "nama": "Ariski",
    "umur": 21,
    "jurusan": "Sistem Informasi"
}

# Mengecek tipe data
print(type(nama))    # <class 'str'>
print(type(umur))    # <class 'int'>
print(type(pi))      # <class 'float'>
print(type(lulus))   # <class 'bool'>`,
  keyPoints: [
    "Variabel adalah wadah untuk menyimpan data dengan nama simbolis",
    "Python tidak perlu deklarasi tipe data eksplisit (dynamic typing)",
    "Aturan penamaan: diawali huruf/underscore, tidak boleh spasi, case sensitive",
    "Tipe data dasar: int, float, complex, str, bool",
    "Tipe data koleksi: list, tuple, set, dict",
    "Deklarasi ulang variabel akan mengganti nilai lama dengan nilai baru",
    "Gunakan function type() untuk mengecek tipe data suatu variabel",
    "Penamaan variabel menggunakan camelCase, PascalCase, atau snake_case"
  ],
  nextSteps: [
    "Praktikkan dengan latihan Variabel dan Tipe Data",
    "Pelajari operasi matematika dengan variabel",
    "Coba konversi antar tipe data (int, float, str)",
    "Pelajari cara menggunakan input() untuk menerima data dari user"
  ],
  relatedExercises: ["2"]
};
