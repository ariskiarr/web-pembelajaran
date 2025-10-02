export interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  category: string;
  initialCode: string;
  expectedOutput?: string;
  hints: string[];
  solution: string;
  points: number;
}

export const exercises: Exercise[] = [
  {
    id: "1",
    title: "Hello World",
    description:
      "Tulis program Python pertama kamu yang mencetak 'Hello, World!' dan berikan komentar mengapa kamu tertarik belajar Python",
    difficulty: "beginner",
    category: "Dasar",
    initialCode:
      "# Tulis komentar di sini: Mengapa kamu tertarik belajar Python?\n# \n\n# Tulis kode kamu di sini untuk mencetak 'Hello, World!'\n",
    expectedOutput: "Hello, World!",
    hints: [
      "Gunakan fungsi print() untuk mencetak teks",
      "Jangan lupa menggunakan tanda petik untuk string",
      "Berikan komentar dengan tanda # tentang alasan kamu belajar Python",
      "Komentar tidak akan mempengaruhi output program",
    ],
    solution:
      "# Saya tertarik belajar Python karena mudah dipahami dan banyak digunakan\n# untuk berbagai bidang seperti AI, data science, dan web development\n\nprint('Hello, World!')",
    points: 10,
  },
  {
    id: "2",
    title: "Variabel dan Tipe Data",
    description: "Buat variabel dengan berbagai tipe data dan cetak nilainya",
    difficulty: "beginner",
    category: "Dasar",
    initialCode:
      "# Buat variabel dengan tipe data berbeda\n# name = ?\n# age = ?\n# height = ?\n# is_student = ?\n\n# Cetak semua variabel",
    expectedOutput: "Nama: John\nUmur: 20\nTinggi: 175.5\nMahasiswa: True",
    hints: [
      "String menggunakan tanda petik",
      "Integer adalah angka bulat",
      "Float adalah angka desimal",
      "Boolean adalah True atau False",
    ],
    solution:
      "name = 'John'\nage = 20\nheight = 175.5\nis_student = True\n\nprint(f'Nama: {name}')\nprint(f'Umur: {age}')\nprint(f'Tinggi: {height}')\nprint(f'Mahasiswa: {is_student}')",
    points: 15,
  },
  {
    id: "3",
    title: "Operasi Matematika",
    description: "Lakukan operasi matematika dasar dan tampilkan hasilnya",
    difficulty: "beginner",
    category: "Dasar",
    initialCode:
      "# Buat dua variabel angka\na = 10\nb = 3\n\n# Lakukan operasi matematika dan cetak hasilnya\n# Penjumlahan, pengurangan, perkalian, pembagian, modulus, pangkat",
    expectedOutput:
      "10 + 3 = 13\n10 - 3 = 7\n10 * 3 = 30\n10 / 3 = 3.3333333333333335\n10 % 3 = 1\n10 ** 3 = 1000",
    hints: [
      "Gunakan operator +, -, *, /, %, **",
      "Format string dengan f-string untuk output yang rapi",
    ],
    solution:
      "a = 10\nb = 3\n\nprint(f'{a} + {b} = {a + b}')\nprint(f'{a} - {b} = {a - b}')\nprint(f'{a} * {b} = {a * b}')\nprint(f'{a} / {b} = {a / b}')\nprint(f'{a} % {b} = {a % b}')\nprint(f'{a} ** {b} = {a ** b}')",
    points: 15,
  },
  {
    id: "4",
    title: "Kondisi If-Else",
    description:
      "Buat program yang mengecek apakah suatu angka positif, negatif, atau nol",
    difficulty: "beginner",
    category: "Kontrol Alur",
    initialCode:
      "# Buat variabel angka\nnumber = 5\n\n# Cek apakah angka positif, negatif, atau nol\n# dan cetak hasilnya",
    expectedOutput: "5 adalah angka positif",
    hints: [
      "Gunakan if, elif, else",
      "Operator perbandingan: >, <, ==, !=",
      "Pastikan indentasi benar",
    ],
    solution:
      "number = 5\n\nif number > 0:\n    print(f'{number} adalah angka positif')\nelif number < 0:\n    print(f'{number} adalah angka negatif')\nelse:\n    print(f'{number} adalah nol')",
    points: 20,
  },
  {
    id: "5",
    title: "Loop For",
    description: "Gunakan loop for untuk mencetak angka 1 sampai 10",
    difficulty: "beginner",
    category: "Kontrol Alur",
    initialCode: "# Gunakan loop for untuk mencetak angka 1 sampai 10\n",
    expectedOutput: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10",
    hints: [
      "Gunakan range() function",
      "range(1, 11) untuk angka 1-10",
      "Gunakan print() di dalam loop",
    ],
    solution: "for i in range(1, 11):\n    print(i)",
    points: 20,
  },
  {
    id: "6",
    title: "List dan Indexing",
    description: "Buat list buah-buahan dan akses elemen tertentu",
    difficulty: "intermediate",
    category: "Struktur Data",
    initialCode:
      "# Buat list buah-buahan\nfruits = ['apel', 'pisang', 'jeruk', 'mangga', 'anggur']\n\n# Cetak buah pertama, terakhir, dan tengah\n# Cetak jumlah buah\n# Tambahkan buah baru dan cetak list yang diperbarui",
    expectedOutput:
      "Buah pertama: apel\nBuah terakhir: anggur\nBuah tengah: jeruk\nJumlah buah: 5\nSetelah menambah strawberry: ['apel', 'pisang', 'jeruk', 'mangga', 'anggur', 'strawberry']",
    hints: [
      "Index dimulai dari 0",
      "Index negatif untuk akses dari belakang",
      "len() untuk menghitung panjang list",
      "append() untuk menambah elemen",
    ],
    solution:
      "fruits = ['apel', 'pisang', 'jeruk', 'mangga', 'anggur']\n\nprint(f'Buah pertama: {fruits[0]}')\nprint(f'Buah terakhir: {fruits[-1]}')\nprint(f'Buah tengah: {fruits[2]}')\nprint(f'Jumlah buah: {len(fruits)}')\nfruits.append('strawberry')\nprint(f'Setelah menambah strawberry: {fruits}')",
    points: 25,
  },
  {
    id: "7",
    title: "Dictionary",
    description: "Buat dictionary data mahasiswa dan akses informasinya",
    difficulty: "intermediate",
    category: "Struktur Data",
    initialCode:
      "# Buat dictionary mahasiswa dengan key: nama, umur, jurusan, ipk\n# Cetak semua informasi mahasiswa\n# Update IPK dan tambahkan key baru 'semester'",
    expectedOutput:
      "Nama: Budi\nUmur: 20\nJurusan: Informatika\nIPK: 3.75\nSetelah update:\nNama: Budi\nUmur: 20\nJurusan: Informatika\nIPK: 3.85\nSemester: 5",
    hints: [
      "Dictionary menggunakan kurung kurawal {}",
      "Format: {'key': 'value'}",
      "Akses value dengan dict[key]",
      "Update dengan assignment dict[key] = new_value",
    ],
    solution:
      "student = {\n    'nama': 'Budi',\n    'umur': 20,\n    'jurusan': 'Informatika',\n    'ipk': 3.75\n}\n\nprint(f\"Nama: {student['nama']}\")\nprint(f\"Umur: {student['umur']}\")\nprint(f\"Jurusan: {student['jurusan']}\")\nprint(f\"IPK: {student['ipk']}\")\n\nstudent['ipk'] = 3.85\nstudent['semester'] = 5\n\nprint('Setelah update:')\nprint(f\"Nama: {student['nama']}\")\nprint(f\"Umur: {student['umur']}\")\nprint(f\"Jurusan: {student['jurusan']}\")\nprint(f\"IPK: {student['ipk']}\")\nprint(f\"Semester: {student['semester']}\")",
    points: 30,
  },
  {
    id: "8",
    title: "Function",
    description: "Buat function untuk menghitung luas lingkaran",
    difficulty: "intermediate",
    category: "Function",
    initialCode:
      "# Buat function untuk menghitung luas lingkaran\n# Parameter: radius\n# Return: luas lingkaran (π * r²)\n# Gunakan π = 3.14159\n\n# Test function dengan radius 5 dan 10",
    expectedOutput:
      "Luas lingkaran dengan radius 5: 78.53975\nLuas lingkaran dengan radius 10: 314.159",
    hints: [
      "Gunakan keyword def untuk membuat function",
      "Function membutuhkan parameter radius",
      "Gunakan return untuk mengembalikan nilai",
      "π (pi) ≈ 3.14159",
    ],
    solution:
      "def hitung_luas_lingkaran(radius):\n    pi = 3.14159\n    luas = pi * radius * radius\n    return luas\n\n# Test function\nradius1 = 5\nradius2 = 10\n\nluas1 = hitung_luas_lingkaran(radius1)\nluas2 = hitung_luas_lingkaran(radius2)\n\nprint(f'Luas lingkaran dengan radius {radius1}: {luas1}')\nprint(f'Luas lingkaran dengan radius {radius2}: {luas2}')",
    points: 35,
  },
  {
    id: "9",
    title: "List Comprehension",
    description: "Gunakan list comprehension untuk membuat list angka kuadrat",
    difficulty: "advanced",
    category: "Advanced",
    initialCode:
      "# Buat list berisi kuadrat dari angka 1-10 menggunakan list comprehension\n# Buat juga list berisi angka genap dari 1-20 menggunakan list comprehension\n\n# Cetak kedua list tersebut",
    expectedOutput:
      "Kuadrat 1-10: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]\nAngka genap 1-20: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]",
    hints: [
      "List comprehension: [expression for item in iterable]",
      "Untuk kondisi: [expression for item in iterable if condition]",
      "x**2 untuk pangkat dua",
      "x % 2 == 0 untuk cek angka genap",
    ],
    solution:
      "# List kuadrat dari 1-10\nkuadrat = [x**2 for x in range(1, 11)]\n\n# List angka genap dari 1-20\ngenap = [x for x in range(1, 21) if x % 2 == 0]\n\nprint(f'Kuadrat 1-10: {kuadrat}')\nprint(f'Angka genap 1-20: {genap}')",
    points: 40,
  },
  {
    id: "10",
    title: "Error Handling",
    description:
      "Buat program yang menangani error saat konversi string ke integer",
    difficulty: "advanced",
    category: "Advanced",
    initialCode:
      "# Buat function yang mencoba mengkonversi input ke integer\n# Jika berhasil, return integer tersebut\n# Jika gagal, return 0 dan cetak pesan error\n\n# Test dengan input: '123', 'abc', '45.67'\n\ndef safe_int_convert(value):\n    # Tulis kode di sini\n    pass\n\n# Test function\ntest_values = ['123', 'abc', '45.67']\nfor value in test_values:\n    result = safe_int_convert(value)\n    print(f\"Input: '{value}' -> Output: {result}\")",
    expectedOutput:
      "Input: '123' -> Output: 123\nError: Cannot convert 'abc' to integer\nInput: 'abc' -> Output: 0\nError: Cannot convert '45.67' to integer\nInput: '45.67' -> Output: 0",
    hints: [
      "Gunakan try-except block",
      "int() function untuk konversi",
      "ValueError exception untuk error konversi",
      "Return 0 jika terjadi error",
    ],
    solution:
      "def safe_int_convert(value):\n    try:\n        return int(value)\n    except ValueError:\n        print(f\"Error: Cannot convert '{value}' to integer\")\n        return 0\n\n# Test function\ntest_values = ['123', 'abc', '45.67']\nfor value in test_values:\n    result = safe_int_convert(value)\n    print(f\"Input: '{value}' -> Output: {result}\")",
    points: 45,
  },
  {
    id: "11",
    title: "Kalkulator Sederhana",
    description:
      "Buat kalkulator sederhana yang dapat melakukan operasi matematika dasar",
    difficulty: "beginner",
    category: "Dasar",
    initialCode:
      "# Buat kalkulator sederhana\n# Minta user memasukkan dua angka\n# Tampilkan hasil operasi: +, -, *, /, //, %, **\n\n# Contoh output:\n# Angka pertama: 10\n# Angka kedua: 3\n# Penjumlahan: 10 + 3 = 13\n# dst...\n",
    expectedOutput:
      "Penjumlahan: 10 + 3 = 13\nPengurangan: 10 - 3 = 7\nPerkalian: 10 * 3 = 30\nPembagian: 10 / 3 = 3.333...\nPembagian bulat: 10 // 3 = 3\nModulus: 10 % 3 = 1\nPangkat: 10 ** 3 = 1000",
    hints: [
      "Gunakan input() untuk mengambil data dari user",
      "Konversi string ke number menggunakan float() atau int()",
      "Gunakan f-string untuk format output yang rapi",
      "Jangan lupa semua operator matematika: +, -, *, /, //, %, **",
    ],
    solution:
      '# Input dari user\nangka1 = float(input("Masukkan angka pertama: "))\nangka2 = float(input("Masukkan angka kedua: "))\n\n# Operasi matematika\nprint(f"Penjumlahan: {angka1} + {angka2} = {angka1 + angka2}")\nprint(f"Pengurangan: {angka1} - {angka2} = {angka1 - angka2}")\nprint(f"Perkalian: {angka1} * {angka2} = {angka1 * angka2}")\nprint(f"Pembagian: {angka1} / {angka2} = {angka1 / angka2}")\nprint(f"Pembagian bulat: {angka1} // {angka2} = {angka1 // angka2}")\nprint(f"Modulus: {angka1} % {angka2} = {angka1 % angka2}")\nprint(f"Pangkat: {angka1} ** {angka2} = {angka1 ** angka2}")',
    points: 15,
  },
  {
    id: "12",
    title: "Program Biodata Interaktif",
    description:
      "Buat program yang meminta biodata user dan menampilkannya dengan format yang rapi",
    difficulty: "beginner",
    category: "Dasar",
    initialCode:
      "# Program biodata interaktif\n# Minta user memasukkan:\n# - Nama lengkap\n# - Umur\n# - Tinggi badan (cm)\n# - Berat badan (kg)\n# - Apakah mahasiswa (ya/tidak)\n\n# Tampilkan dalam format yang rapi dan hitung BMI\n",
    expectedOutput:
      "=== BIODATA LENGKAP ===\nNama: Ahmad Fauzi\nUmur: 20 tahun\nTinggi: 170 cm\nBerat: 65 kg\nStatus: Mahasiswa\nBMI: 22.49 (Normal)",
    hints: [
      "Gunakan input() untuk setiap data yang diminta",
      "Konversi umur ke int(), tinggi dan berat ke float()",
      "BMI = berat / (tinggi_meter ** 2)",
      "Tinggi dalam meter = tinggi_cm / 100",
      "Gunakan f-string untuk format output yang rapi",
      "Tambahkan logika untuk status mahasiswa",
    ],
    solution:
      '# Input biodata dari user\nnama = input("Masukkan nama lengkap: ")\numur = int(input("Masukkan umur: "))\ntinggi_cm = float(input("Masukkan tinggi badan (cm): "))\nberat = float(input("Masukkan berat badan (kg): "))\nmahasiswa = input("Apakah kamu mahasiswa? (ya/tidak): ")\n\n# Konversi tinggi ke meter untuk hitung BMI\ntinggi_m = tinggi_cm / 100\nbmi = berat / (tinggi_m ** 2)\n\n# Tentukan status BMI\nif bmi < 18.5:\n    status_bmi = "Kurus"\nelif bmi < 25:\n    status_bmi = "Normal"\nelif bmi < 30:\n    status_bmi = "Gemuk"\nelse:\n    status_bmi = "Obesitas"\n\n# Tentukan status mahasiswa\nstatus = "Mahasiswa" if mahasiswa.lower() == "ya" else "Bukan Mahasiswa"\n\n# Tampilkan biodata\nprint("\\n=== BIODATA LENGKAP ===")\nprint(f"Nama: {nama}")\nprint(f"Umur: {umur} tahun")\nprint(f"Tinggi: {tinggi_cm} cm")\nprint(f"Berat: {berat} kg")\nprint(f"Status: {status}")\nprint(f"BMI: {bmi:.2f} ({status_bmi})")',
    points: 20,
  },
  {
    id: "13",
    title: "Basic Error Handling",
    description:
      "Buat program yang aman untuk konversi input user menjadi angka dengan error handling",
    difficulty: "intermediate",
    category: "Advanced",
    initialCode:
      '# Buat fungsi safe_input yang:\n# 1. Meminta input dari user\n# 2. Mencoba konversi ke int\n# 3. Handle error jika input bukan angka\n# 4. Berikan pesan error yang informatif\n# 5. Return None jika konversi gagal\n\ndef safe_input(prompt):\n    # Tulis kode di sini\n    pass\n\n# Test fungsi\nresult = safe_input("Masukkan angka: ")\nif result is not None:\n    print(f"Angka yang dimasukkan: {result}")\nelse:\n    print("Input tidak valid")',
    expectedOutput:
      "Masukkan angka: abc\nError: Input 'abc' bukan angka valid!\nInput tidak valid",
    hints: [
      "Gunakan try-except untuk handle ValueError",
      "int() akan raise ValueError jika input bukan angka",
      "Return None jika konversi gagal",
      "Berikan pesan error yang informatif",
    ],
    solution:
      'def safe_input(prompt):\n    try:\n        user_input = input(prompt)\n        number = int(user_input)\n        return number\n    except ValueError:\n        print(f"Error: Input \'{user_input}\' bukan angka valid!")\n        return None\n\n# Test fungsi\nresult = safe_input("Masukkan angka: ")\nif result is not None:\n    print(f"Angka yang dimasukkan: {result}")\nelse:\n    print("Input tidak valid")',
    points: 30,
  },
  {
    id: "14",
    title: "Calculator dengan Error Handling",
    description:
      "Buat kalkulator yang aman dengan error handling untuk berbagai jenis error",
    difficulty: "intermediate",
    category: "Advanced",
    initialCode:
      '# Buat kalkulator aman yang handle:\n# 1. ValueError - input bukan angka\n# 2. ZeroDivisionError - pembagian dengan nol\n# 3. Invalid operator\n\ndef safe_calculator():\n    try:\n        # Ambil input\n        num1 = float(input("Angka pertama: "))\n        operator = input("Operator (+, -, *, /): ")\n        num2 = float(input("Angka kedua: "))\n        \n        # Tulis kode operasi di sini\n        \n    except:\n        # Handle berbagai jenis error\n        pass\n\nsafe_calculator()',
    expectedOutput:
      "Angka pertama: 10\nOperator (+, -, *, /): /\nAngka kedua: 0\nError: Tidak bisa membagi dengan nol!",
    hints: [
      "Gunakan multiple except blocks untuk different error types",
      "Check operator validity sebelum operasi",
      "ZeroDivisionError untuk pembagian dengan nol",
      "ValueError untuk input non-numeric",
    ],
    solution:
      'def safe_calculator():\n    try:\n        # Ambil input\n        num1 = float(input("Angka pertama: "))\n        operator = input("Operator (+, -, *, /): ")\n        num2 = float(input("Angka kedua: "))\n        \n        # Validasi operator\n        if operator not in [\'+\', \'-\', \'*\', \'/\']:\n            raise ValueError(f"Operator \'{operator}\' tidak valid")\n        \n        # Operasi matematika\n        if operator == \'+\':\n            result = num1 + num2\n        elif operator == \'-\':\n            result = num1 - num2\n        elif operator == \'*\':\n            result = num1 * num2\n        elif operator == \'/\':\n            result = num1 / num2\n        \n        print(f"Hasil: {num1} {operator} {num2} = {result}")\n        \n    except ValueError as e:\n        if "could not convert" in str(e):\n            print("Error: Input harus berupa angka!")\n        else:\n            print(f"Error: {e}")\n    except ZeroDivisionError:\n        print("Error: Tidak bisa membagi dengan nol!")\n    except Exception as e:\n        print(f"Error tidak terduga: {e}")\n\nsafe_calculator()',
    points: 40,
  },
];

export const categories = [
  "Semua",
  "Dasar",
  "Kontrol Alur",
  "Struktur Data",
  "Function",
  "Advanced",
];

export const difficulties = ["beginner", "intermediate", "advanced"] as const;
