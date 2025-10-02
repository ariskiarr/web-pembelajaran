import { LearningMaterial } from "./types";

export const variablesDataTypes: LearningMaterial = {
  id: "variables-datatypes",
  title: "Variabel dan Tipe Data",
  category: "Dasar",
  description:
    "Pelajari cara menyimpan data dalam variabel dan berbagai tipe data di Python",
  content: `
# Variabel dan Tipe Data

## Variabel

### Apa itu Variabel?
Variabel dalam pemrograman adalah lokasi penyimpanan data yang diberi nama simbolis. Variabel dapat diartikan sebagai **wadah yang menyimpan data** atau objek yang bisa diketahui atau tidak diketahui.

Jadi jika variabel dianalogikan sebagai sebuah **box** dan value/nilainya adalah sebuah **bola** dalam box tersebut.

Nah di bahasa Python, kamu **tidak perlu mendeklarasikan tipe data secara eksplisit**.

> "Secara sederhana deklarasi adalah kita memberi tahu komputer tipe data yang ada di dalam sebuah variabel"

### Aturan Penamaan Variabel
1. Dapat menggunakan huruf kapital atau huruf kecil atau underscore atau angka
2. **Wajib diawali dengan huruf atau underscore**
3. **Tidak boleh menggunakan reserved word** (syntax/Code dalam bahasa pemrograman)
4. **Tidak boleh diawali dengan angka**
5. **Tidak boleh ada spasi** diantaranya

### Contoh Pemakaian Variabel
\`\`\`python
# Camel Case (diawali dengan huruf kecil dan huruf kapital setiap kata yang berbeda)
namaLengkapMahasiswa = "Mulyono"

# Pascal Case (huruf kapital di setiap kata)
NamaLengkapMahasiswa = "Mulyono"

# Snake Case (menggunakan tanda _ sebagai pemisah)
nama_lengkap_mahasiswa = "Mulyono"
\`\`\`

### Deklarasi Variabel
**Rumusnya**: \`NamaVariabel = Value\`

\`\`\`python
nama = "Mulyono"
print(nama)

angka1 = 5
angka2 = angka1 + 5
print(angka2)  # akan muncul angka 10
\`\`\`

### Case Sensitive
Penamaan variabel itu termasuk **case sensitive** atau secara sederhana penulisan harus benar-benar sama.

\`\`\`python
TEMPAT = "Unej"
Tempat = "Stadion"
tempat = "Fasilkom"
print("sekarang di", tempat)  # output: sekarang di Fasilkom
\`\`\`

### Deklarasi Ulang
Jika kita mendeklarasikan ulang variabel dengan nama yang sama, nilai lama variabel tersebut akan digantikan dengan nilai baru.

\`\`\`python
nama = "Mulyono"
nama = "Fana"
print("nama saya sekarang", nama)  # output: nama saya sekarang Fana
\`\`\`

## Tipe Data

### Apa itu Tipe Data?
Tipe data adalah **atribut yang terkait dengan sepotong data** yang bisa memberi tahu sistem komputer cara untuk menafsirkan nilainya.

### Jenis-Jenis Tipe Data

#### 1. int (Integer / Bilangan Bulat)
Untuk angka bulat: positif, negatif, atau nol.
\`\`\`python
umur = 21
tahun = -2025
jumlah = 0
\`\`\`

#### 2. float (Bilangan Pecahan / Desimal)
Untuk angka dengan koma desimal.
\`\`\`python
pi = 3.14
suhu = -12.5
tinggi = 175.8
\`\`\`

#### 3. str (String / Teks)
Untuk menyimpan teks, karakter, kalimat.
\`\`\`python
nama = "Ariski"
pesan = 'Halo Dunia'
alamat = "Jl. Merdeka No. 123"
\`\`\`

#### 4. bool (Boolean / Logika)
Hanya punya 2 nilai: True atau False.
\`\`\`python
lulus = True
hujan = False
sudah_menikah = True
\`\`\`

#### 5. list (Daftar)
Menyimpan kumpulan data yang bisa berbeda tipe, dan bisa diubah.
\`\`\`python
angka = [1, 2, 3, 4]
campuran = [1, "teks", 3.5, True]
buah = ["apel", "pisang", "jeruk"]
\`\`\`

### Mengecek Tipe Data
\`\`\`python
nama = "Ariski"
umur = 21
tinggi = 175.8
lulus = True

print(type(nama))    # <class 'str'>
print(type(umur))    # <class 'int'>
print(type(tinggi))  # <class 'float'>
print(type(lulus))   # <class 'bool'>
\`\`\`

**"Yuk kita lanjut ke latihan untuk mempraktikkan variabel dan tipe data!"** - Ariski
  `,
  codeExample: `# Contoh Variabel dan Tipe Data

# 1. Deklarasi Variabel dengan berbagai tipe data
nama = "Ariski"           # string
umur = 21                # integer
tinggi = 175.8          # float
lulus = True            # boolean

# 2. Contoh penamaan variabel (Snake Case - yang direkomendasikan)
nama_lengkap = "Ariski Ardiansyah"
nilai_matematika = 85
sudah_lulus = True

# 3. Case Sensitive - variabel berbeda
NAMA = "BESAR"
Nama = "Kapital"
nama = "kecil"

print("Variabel NAMA:", NAMA)
print("Variabel Nama:", Nama)  
print("Variabel nama:", nama)

# 4. Deklarasi ulang variabel
status = "Mahasiswa"
print("Status awal:", status)

status = "Alumni"  # nilai lama diganti
print("Status sekarang:", status)

# 5. Berbagai tipe data
# Integer
jumlah_siswa = 30
tahun_lahir = 2002

# Float  
berat_badan = 65.5
suhu = 36.5

# String
alamat = "Jl. Merdeka No. 123"
hobi = 'Coding'

# Boolean
aktif = True
menikah = False

# List
buah_favorit = ["apel", "pisang", "jeruk"]
angka = [1, 2, 3, 4, 5]

# 6. Mengecek tipe data
print("\\nTipe Data:")
print("Type nama:", type(nama))
print("Type umur:", type(umur))
print("Type tinggi:", type(tinggi))
print("Type lulus:", type(lulus))
print("Type buah_favorit:", type(buah_favorit))`,
  keyPoints: [
    "Variabel adalah wadah untuk menyimpan data dengan nama simbolis",
    "Python tidak perlu deklarasi tipe data eksplisit (dynamic typing)",
    "Aturan penamaan: diawali huruf/underscore, tidak boleh spasi, case sensitive",
    "Deklarasi variabel: NamaVariabel = Value",
    "Deklarasi ulang akan mengganti nilai lama dengan nilai baru",
    "Tipe data utama: int, float, str, bool, list",
    "Gunakan type() untuk mengecek tipe data variabel",
  ],
  nextSteps: [
    "Praktikkan dengan latihan Variabel dan Tipe Data",
    "Pelajari operasi matematika dengan variabel",
    "Coba konversi antar tipe data (int, float, str)",
    "Pelajari cara input data dari user dengan input()",
  ],
  relatedExercises: ["2"],
};
