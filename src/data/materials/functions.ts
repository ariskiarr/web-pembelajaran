import { LearningMaterial } from "./types";

export const functions: LearningMaterial = {
  id: "functions",
  title: "Functions (Fungsi)",
  category: "Function",
  description:
    "Pelajari cara membuat dan menggunakan fungsi untuk mengorganisir kode",
  content: `
# Functions (Fungsi)

Fungsi adalah blok kode yang dapat digunakan berulang kali dengan memberikan nama padanya.

## Mengapa Menggunakan Fungsi?

- **DRY (Don't Repeat Yourself)** - Hindari kode yang berulang
- **Modular** - Pecah program besar menjadi bagian kecil
- **Reusable** - Bisa digunakan berkali-kali
- **Maintainable** - Mudah diperbaiki dan diupdate

## Membuat Fungsi Sederhana

### Syntax Dasar
\`\`\`python
def nama_fungsi():
    # kode yang akan dijalankan
    print("Hello dari fungsi!")

# Memanggil fungsi
nama_fungsi()
\`\`\`

### Contoh Fungsi Sederhana
\`\`\`python
def sapa():
    print("Halo! Selamat datang!")
    print("Semoga harimu menyenangkan!")

# Panggil fungsi
sapa()
\`\`\`

## Fungsi dengan Parameter

### Parameter Tunggal
\`\`\`python
def sapa_nama(nama):
    print(f"Halo, {nama}!")
    print("Semoga harimu menyenangkan!")

# Memanggil dengan argumen
sapa_nama("Alice")
sapa_nama("Bob")
\`\`\`

### Multiple Parameter
\`\`\`python
def perkenalan(nama, umur, kota):
    print(f"Nama saya {nama}")
    print(f"Umur saya {umur} tahun")
    print(f"Saya tinggal di {kota}")

perkenalan("Charlie", 25, "Jakarta")
\`\`\`

### Default Parameter
\`\`\`python
def sapa_waktu(nama, waktu="pagi"):
    print(f"Selamat {waktu}, {nama}!")

sapa_waktu("Alice")           # Selamat pagi, Alice!
sapa_waktu("Bob", "sore")     # Selamat sore, Bob!
\`\`\`

## Fungsi dengan Return Value

### Return Sederhana
\`\`\`python
def tambah(a, b):
    hasil = a + b
    return hasil

# Menggunakan return value
result = tambah(5, 3)
print(f"5 + 3 = {result}")
\`\`\`

### Multiple Return Values
\`\`\`python
def operasi_matematika(a, b):
    tambah = a + b
    kurang = a - b
    kali = a * b
    bagi = a / b
    return tambah, kurang, kali, bagi

# Unpacking return values
add, sub, mul, div = operasi_matematika(10, 2)
print(f"10 + 2 = {add}")
print(f"10 - 2 = {sub}")
\`\`\`

## Types of Arguments

### Positional Arguments
\`\`\`python
def biodata(nama, umur, kota):
    return f"{nama} ({umur}) dari {kota}"

print(biodata("Alice", 25, "Jakarta"))
\`\`\`

### Keyword Arguments
\`\`\`python
print(biodata(umur=30, nama="Bob", kota="Bandung"))
\`\`\`

### *args - Variable Positional Arguments
\`\`\`python
def jumlahkan(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(jumlahkan(1, 2, 3))        # 6
print(jumlahkan(1, 2, 3, 4, 5))  # 15
\`\`\`

### **kwargs - Variable Keyword Arguments
\`\`\`python
def profil(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

profil(nama="Alice", umur=25, hobi="coding")
\`\`\`

## Scope Variabel

### Local vs Global
\`\`\`python
# Global variable
counter = 0

def increment():
    global counter  # Akses global variable
    counter += 1
    return counter

def local_example():
    local_var = "Hanya ada di dalam fungsi"
    return local_var

print(increment())  # 1
print(increment())  # 2
\`\`\`

## Lambda Functions

### Syntax Lambda
\`\`\`python
# Regular function
def kuadrat(x):
    return x ** 2

# Lambda equivalent
kuadrat_lambda = lambda x: x ** 2

print(kuadrat(5))        # 25
print(kuadrat_lambda(5)) # 25
\`\`\`

### Lambda dengan Built-in Functions
\`\`\`python
numbers = [1, 2, 3, 4, 5]

# map() dengan lambda
squares = list(map(lambda x: x**2, numbers))
print(squares)  # [1, 4, 9, 16, 25]

# filter() dengan lambda
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)    # [2, 4]
\`\`\`

## Docstrings

\`\`\`python
def kalkulator(a, b, operasi):
    """
    Melakukan operasi matematika dasar.
    
    Args:
        a (float): Angka pertama
        b (float): Angka kedua
        operasi (str): Operasi yang diinginkan (+, -, *, /)
    
    Returns:
        float: Hasil operasi matematika
    
    Raises:
        ValueError: Jika operasi tidak valid
    """
    if operasi == "+":
        return a + b
    elif operasi == "-":
        return a - b
    elif operasi == "*":
        return a * b
    elif operasi == "/":
        return a / b
    else:
        raise ValueError("Operasi tidak valid")

# Akses docstring
print(kalkulator.__doc__)
\`\`\`

**"Fungsi membuat kode kamu lebih rapi dan mudah dikelola!"** - Ariski
  `,
  codeExample: `# Contoh Functions (Fungsi)

print("=== FUNGSI DASAR ===")

# 1. Fungsi sederhana tanpa parameter
def greet():
    print("Hello, World!")
    print("Selamat belajar Python!")

greet()

# 2. Fungsi dengan parameter
def say_hello(name):
    print(f"Hello, {name}!")

say_hello("Alice")
say_hello("Bob")

print("\\n=== FUNGSI DENGAN RETURN ===")

# 3. Fungsi matematika
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

def calculate_area(length, width):
    area = length * width
    return area

result1 = add(5, 3)
result2 = multiply(4, 6)
area = calculate_area(10, 5)

print(f"5 + 3 = {result1}")
print(f"4 × 6 = {result2}")
print(f"Area: {area}")

print("\\n=== DEFAULT PARAMETERS ===")

# 4. Default parameters
def introduce(name, age=25, city="Jakarta"):
    return f"Halo, saya {name}, umur {age} tahun, dari {city}"

print(introduce("Alice"))
print(introduce("Bob", 30))
print(introduce("Charlie", 28, "Bandung"))

print("\\n=== MULTIPLE RETURNS ===")

# 5. Fungsi dengan multiple return
def get_stats(numbers):
    total = sum(numbers)
    avg = total / len(numbers)
    maximum = max(numbers)
    minimum = min(numbers)
    return total, avg, maximum, minimum

data = [10, 20, 30, 40, 50]
sum_val, avg_val, max_val, min_val = get_stats(data)

print(f"Data: {data}")
print(f"Total: {sum_val}")
print(f"Rata-rata: {avg_val}")
print(f"Maksimum: {max_val}")
print(f"Minimum: {min_val}")

print("\\n=== VARIABLE ARGUMENTS ===")

# 6. *args - variable positional arguments
def sum_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(f"Sum of 1,2,3: {sum_all(1, 2, 3)}")
print(f"Sum of 1,2,3,4,5: {sum_all(1, 2, 3, 4, 5)}")

# 7. **kwargs - variable keyword arguments
def create_profile(**info):
    profile = "=== PROFIL ==="
    for key, value in info.items():
        profile += f"\\n{key.title()}: {value}"
    return profile

profile1 = create_profile(nama="Alice", umur=25, hobi="coding")
profile2 = create_profile(nama="Bob", kota="Jakarta", pekerjaan="engineer")

print(profile1)
print(profile2)

print("\\n=== LAMBDA FUNCTIONS ===")

# 8. Lambda functions
square = lambda x: x ** 2
add_lambda = lambda a, b: a + b

print(f"Square of 5: {square(5)}")
print(f"3 + 7: {add_lambda(3, 7)}")

# 9. Lambda dengan built-in functions
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

squares = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))

print(f"Numbers: {numbers}")
print(f"Squares: {squares}")
print(f"Even numbers: {evens}")

print("\\n=== PRACTICAL EXAMPLE ===")

# 10. Aplikasi praktis - Grade Calculator
def calculate_grade(scores):
    """Calculate final grade from list of scores"""
    if not scores:
        return "No scores provided"
    
    average = sum(scores) / len(scores)
    
    if average >= 90:
        grade = "A"
    elif average >= 80:
        grade = "B"
    elif average >= 70:
        grade = "C"
    elif average >= 60:
        grade = "D"
    else:
        grade = "F"
    
    return {
        'average': round(average, 2),
        'grade': grade,
        'status': 'PASS' if average >= 60 else 'FAIL'
    }

def format_result(name, result):
    """Format grade result for display"""
    return f"""
=== HASIL NILAI ===
Nama: {name}
Rata-rata: {result['average']}
Grade: {result['grade']}
Status: {result['status']}
"""

# Test grade calculator
student_scores = [85, 92, 78, 88, 95]
result = calculate_grade(student_scores)
formatted = format_result("Alice", result)

print(formatted)

# 11. Menu calculator dengan functions
def calculator_menu():
    """Simple calculator using functions"""
    
    def add(a, b): return a + b
    def subtract(a, b): return a - b
    def multiply(a, b): return a * b
    def divide(a, b): return a / b if b != 0 else "Error: Division by zero"
    
    operations = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide
    }
    
    print("\\n=== KALKULATOR ===")
    print("Operations: +, -, *, /")
    
    a = float(input("Angka pertama: "))
    op = input("Operasi: ")
    b = float(input("Angka kedua: "))
    
    if op in operations:
        result = operations[op](a, b)
        print(f"Hasil: {a} {op} {b} = {result}")
    else:
        print("Operasi tidak valid!")

# Uncomment untuk menjalankan calculator
# calculator_menu()`,
  keyPoints: [
    "Fungsi membantu mengorganisir kode menjadi blok yang reusable",
    "def keyword untuk mendefinisikan fungsi",
    "Parameter vs argument: parameter di definisi, argument saat pemanggilan",
    "return statement untuk mengembalikan nilai",
    "Default parameters untuk nilai opsional",
    "*args untuk variable positional arguments",
    "**kwargs untuk variable keyword arguments",
    "Lambda functions untuk fungsi sederhana satu baris",
    "Docstrings untuk dokumentasi fungsi",
    "Scope: local variable hanya ada di dalam fungsi",
  ],
  nextSteps: [
    "Praktikkan dengan latihan functions",
    "Pelajari list comprehension",
    "Coba buat module dengan functions",
    "Pelajari error handling untuk fungsi yang robust",
  ],
  relatedExercises: ["8", "9"],
};
