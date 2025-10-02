import { LearningMaterial } from "./types";

export const listComprehension: LearningMaterial = {
  id: "list-comprehension",
  title: "List Comprehension",
  category: "Advanced",
  description:
    "Pelajari cara membuat list dengan syntax yang elegant dan powerful",
  content: `
# List Comprehension

List comprehension adalah cara elegant untuk membuat list baru berdasarkan list yang sudah ada.

## Mengapa List Comprehension?

- **Lebih singkat** dari loop biasa
- **Lebih cepat** eksekusinya
- **Lebih pythonic** (sesuai gaya Python)
- **Lebih readable** untuk operasi sederhana

## Syntax Dasar

\`\`\`python
# Syntax umum
[expression for item in iterable]

# Dengan kondisi
[expression for item in iterable if condition]
\`\`\`

## List Comprehension Sederhana

### Membuat List dari Range
\`\`\`python
# Cara lama dengan loop
squares = []
for x in range(5):
    squares.append(x ** 2)

# Dengan list comprehension
squares = [x ** 2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]
\`\`\`

### Operasi pada List
\`\`\`python
numbers = [1, 2, 3, 4, 5]

# Kuadrat semua angka
squares = [x ** 2 for x in numbers]
print(squares)  # [1, 4, 9, 16, 25]

# Kali 2 semua angka
doubled = [x * 2 for x in numbers]
print(doubled)  # [2, 4, 6, 8, 10]
\`\`\`

### Operasi pada String
\`\`\`python
names = ["alice", "bob", "charlie"]

# Capitalize semua nama
capitalized = [name.capitalize() for name in names]
print(capitalized)  # ['Alice', 'Bob', 'Charlie']

# Panjang setiap nama
lengths = [len(name) for name in names]
print(lengths)  # [5, 3, 7]
\`\`\`

## List Comprehension dengan Kondisi

### Filter dengan If
\`\`\`python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Hanya angka genap
evens = [x for x in numbers if x % 2 == 0]
print(evens)  # [2, 4, 6, 8, 10]

# Kuadrat angka ganjil saja
odd_squares = [x ** 2 for x in numbers if x % 2 == 1]
print(odd_squares)  # [1, 9, 25, 49, 81]
\`\`\`

### Conditional Expression
\`\`\`python
numbers = [1, 2, 3, 4, 5]

# "even" untuk genap, "odd" untuk ganjil
labels = ["even" if x % 2 == 0 else "odd" for x in numbers]
print(labels)  # ['odd', 'even', 'odd', 'even', 'odd']

# Kuadrat jika positif, 0 jika negatif
result = [x ** 2 if x > 0 else 0 for x in [-2, -1, 0, 1, 2]]
print(result)  # [0, 0, 0, 1, 4]
\`\`\`

## Nested List Comprehension

### List 2D
\`\`\`python
# Buat matrix 3x3
matrix = [[i + j for j in range(3)] for i in range(3)]
print(matrix)  # [[0, 1, 2], [1, 2, 3], [2, 3, 4]]

# Flatten matrix
flat = [item for row in matrix for item in row]
print(flat)  # [0, 1, 2, 1, 2, 3, 2, 3, 4]
\`\`\`

### Kombinasi dari Multiple Lists
\`\`\`python
colors = ["red", "green", "blue"]
sizes = ["S", "M", "L"]

# Semua kombinasi warna dan ukuran
combinations = [f"{color}-{size}" for color in colors for size in sizes]
print(combinations)
# ['red-S', 'red-M', 'red-L', 'green-S', 'green-M', 'green-L', 'blue-S', 'blue-M', 'blue-L']
\`\`\`

## Dictionary Comprehension

\`\`\`python
# Dictionary comprehension syntax
{key_expression: value_expression for item in iterable}

# Contoh
numbers = [1, 2, 3, 4, 5]
squares_dict = {x: x ** 2 for x in numbers}
print(squares_dict)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Dengan kondisi
even_squares = {x: x ** 2 for x in numbers if x % 2 == 0}
print(even_squares)  # {2: 4, 4: 16}
\`\`\`

## Set Comprehension

\`\`\`python
# Set comprehension syntax
{expression for item in iterable}

# Contoh
text = "hello world"
unique_chars = {char.upper() for char in text if char.isalpha()}
print(unique_chars)  # {'H', 'E', 'L', 'O', 'W', 'R', 'D'}
\`\`\`

## Contoh Praktis

### Data Processing
\`\`\`python
# Data siswa
students = [
    {"name": "Alice", "score": 85},
    {"name": "Bob", "score": 92},
    {"name": "Charlie", "score": 78},
    {"name": "Diana", "score": 96}
]

# Nama siswa yang lulus (score >= 80)
passed = [student["name"] for student in students if student["score"] >= 80]
print(f"Yang lulus: {passed}")

# Grade untuk setiap siswa
grades = [
    {
        "name": student["name"], 
        "grade": "A" if student["score"] >= 90 else "B" if student["score"] >= 80 else "C"
    } 
    for student in students
]
print(grades)
\`\`\`

### String Processing
\`\`\`python
# Cleanup data
messy_data = [" Alice ", "BOB", "charlie ", " DIANA"]

# Clean dan format
clean_data = [name.strip().title() for name in messy_data]
print(clean_data)  # ['Alice', 'Bob', 'Charlie', 'Diana']

# Filter email valid
emails = ["alice@gmail.com", "invalid-email", "bob@yahoo.com", "test"]
valid_emails = [email for email in emails if "@" in email and "." in email]
print(valid_emails)  # ['alice@gmail.com', 'bob@yahoo.com']
\`\`\`

## Performance Comparison

\`\`\`python
import time

# Test dengan data besar
data = range(1000000)

# Loop biasa
start = time.time()
result1 = []
for x in data:
    result1.append(x ** 2)
time1 = time.time() - start

# List comprehension
start = time.time()
result2 = [x ** 2 for x in data]
time2 = time.time() - start

print(f"Loop biasa: {time1:.4f} detik")
print(f"List comprehension: {time2:.4f} detik")
print(f"List comprehension {time1/time2:.2f}x lebih cepat")
\`\`\`

## Kapan Menggunakan List Comprehension?

### ✅ Gunakan Jika:
- Operasi sederhana pada setiap element
- Membuat list baru dari list lama
- Filter dengan kondisi sederhana
- Code menjadi lebih readable

### ❌ Hindari Jika:
- Logic terlalu kompleks
- Nested terlalu dalam (>2 level)
- Side effects (print, file write, dll)
- Code menjadi sulit dibaca

**"List comprehension: cara Python untuk membuat kode yang powerful dan elegant!"** - Ariski
  `,
  codeExample: `# Contoh List Comprehension

print("=== BASIC LIST COMPREHENSION ===")

# 1. Dasar - kuadrat angka
numbers = [1, 2, 3, 4, 5]
squares = [x ** 2 for x in numbers]
print(f"Numbers: {numbers}")
print(f"Squares: {squares}")

# 2. String operations
words = ["python", "java", "javascript", "go"]
lengths = [len(word) for word in words]
uppercase = [word.upper() for word in words]

print(f"\\nWords: {words}")
print(f"Lengths: {lengths}")
print(f"Uppercase: {uppercase}")

print("\\n=== WITH CONDITIONS ===")

# 3. Filter dengan kondisi
all_numbers = range(1, 21)
evens = [x for x in all_numbers if x % 2 == 0]
odds = [x for x in all_numbers if x % 2 == 1]
big_evens = [x for x in all_numbers if x % 2 == 0 and x > 10]

print(f"All numbers: {list(all_numbers)}")
print(f"Evens: {evens}")
print(f"Odds: {odds}")
print(f"Big evens: {big_evens}")

# 4. Conditional expression
grades = [85, 92, 78, 96, 88, 76, 94]
status = ["PASS" if grade >= 80 else "FAIL" for grade in grades]
letter_grades = [
    "A" if g >= 90 else "B" if g >= 80 else "C" if g >= 70 else "D"
    for g in grades
]

print(f"\\nGrades: {grades}")
print(f"Status: {status}")
print(f"Letter grades: {letter_grades}")

print("\\n=== NESTED COMPREHENSIONS ===")

# 5. Matrix operations
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [item for row in matrix for item in row]
transposed = [[row[i] for row in matrix] for i in range(len(matrix[0]))]

print(f"Original matrix: {matrix}")
print(f"Flattened: {flattened}")
print(f"Transposed: {transposed}")

# 6. Cartesian product
colors = ["red", "blue", "green"]
sizes = ["S", "M", "L"]
products = [f"{color}-{size}" for color in colors for size in sizes]

print(f"\\nColors: {colors}")
print(f"Sizes: {sizes}")
print(f"Products: {products}")

print("\\n=== DICTIONARY & SET COMPREHENSION ===")

# 7. Dictionary comprehension
student_scores = [("Alice", 85), ("Bob", 92), ("Charlie", 78), ("Diana", 96)]

# Score dictionary
score_dict = {name: score for name, score in student_scores}
print(f"Score dictionary: {score_dict}")

# Grade dictionary
grade_dict = {
    name: "A" if score >= 90 else "B" if score >= 80 else "C"
    for name, score in student_scores
}
print(f"Grade dictionary: {grade_dict}")

# 8. Set comprehension
sentence = "hello world python programming"
unique_chars = {char.upper() for char in sentence if char.isalpha()}
word_lengths = {len(word) for word in sentence.split()}

print(f"\\nSentence: '{sentence}'")
print(f"Unique chars: {unique_chars}")
print(f"Word lengths: {word_lengths}")

print("\\n=== PRACTICAL EXAMPLES ===")

# 9. Data cleaning
messy_emails = [" alice@gmail.com ", "BOB@YAHOO.COM", " charlie@hotmail.com"]
clean_emails = [email.strip().lower() for email in messy_emails]
print(f"Messy emails: {messy_emails}")
print(f"Clean emails: {clean_emails}")

# 10. Processing complex data
employees = [
    {"name": "Alice", "department": "IT", "salary": 75000},
    {"name": "Bob", "department": "HR", "salary": 65000},
    {"name": "Charlie", "department": "IT", "salary": 80000},
    {"name": "Diana", "department": "Finance", "salary": 70000}
]

# IT employees only
it_employees = [emp["name"] for emp in employees if emp["department"] == "IT"]
print(f"\\nIT Employees: {it_employees}")

# High earners (>70k)
high_earners = [
    f"{emp['name']} ($\{emp['salary']:,})"
    for emp in employees 
    if emp['salary'] > 70000
]
print(f"High earners: {high_earners}")

# Department summary
departments = {emp["department"] for emp in employees}
dept_summary = {
    dept: [emp["name"] for emp in employees if emp["department"] == dept]
    for dept in departments
}
print(f"Department summary: {dept_summary}")

print("\\n=== NESTED DATA PROCESSING ===")

# 11. Complex nested structure
sales_data = [
    {"month": "Jan", "products": [{"name": "A", "sales": 100}, {"name": "B", "sales": 150}]},
    {"month": "Feb", "products": [{"name": "A", "sales": 120}, {"name": "B", "sales": 180}]},
    {"month": "Mar", "products": [{"name": "A", "sales": 110}, {"name": "B", "sales": 160}]}
]

# Total sales per month
monthly_totals = [
    {
        "month": data["month"],
        "total": sum(product["sales"] for product in data["products"])
    }
    for data in sales_data
]

print("Monthly totals:")
for total in monthly_totals:
    print(f"  {total['month']}: {total['total']}")

# Product A sales across all months
product_a_sales = [
    product["sales"] 
    for data in sales_data 
    for product in data["products"] 
    if product["name"] == "A"
]
print(f"\\nProduct A sales: {product_a_sales}")

print("\\n=== PERFORMANCE EXAMPLE ===")

# 12. Compare performance (small demo)
import time

# Generate test data
test_data = range(10000)

# Method 1: Regular loop
start_time = time.time()
result1 = []
for x in test_data:
    if x % 2 == 0:
        result1.append(x ** 2)
loop_time = time.time() - start_time

# Method 2: List comprehension
start_time = time.time()
result2 = [x ** 2 for x in test_data if x % 2 == 0]
comp_time = time.time() - start_time

print(f"Regular loop: {loop_time:.6f} seconds")
print(f"List comprehension: {comp_time:.6f} seconds")
print(f"Speedup: {loop_time/comp_time:.2f}x faster")
print(f"Results match: {result1 == result2}")`,
  keyPoints: [
    "List comprehension adalah cara pythonic untuk membuat list",
    "Syntax: [expression for item in iterable if condition]",
    "Lebih cepat dan readable untuk operasi sederhana",
    "Dapat digunakan untuk list, dictionary, dan set",
    "Conditional expression: value_if_true if condition else value_if_false",
    "Nested comprehension untuk data struktur kompleks",
    "Hindari jika logic terlalu kompleks atau nested terlalu dalam",
    "Dictionary comprehension: {key: value for item in iterable}",
    "Set comprehension: {expression for item in iterable}",
  ],
  nextSteps: [
    "Praktikkan dengan latihan list comprehension",
    "Pelajari generator expressions untuk memory efficiency",
    "Coba error handling untuk comprehension yang robust",
    "Pelajari itertools untuk advanced iteration patterns",
  ],
  relatedExercises: ["9", "10"],
};
