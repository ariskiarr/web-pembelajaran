export interface LearningMaterial {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  codeExample: string;
  keyPoints: string[];
  nextSteps: string[];
  relatedExercises: string[];
}

export const materials: LearningMaterial[] = [
  {
    id: "programming-history",
    title: "Sejarah Bahasa Pemrograman",
    category: "Pengenalan",
    description: "Pelajari perjalanan evolusi bahasa pemrograman dari masa ke masa hingga era modern",
    content: `
# Sejarah Bahasa Pemrograman

Bahasa pemrograman telah berkembang pesat sejak komputer pertama diciptakan. Mari kita jelajahi perjalanan menarik ini dari awal hingga sekarang.

## Era Awal Komputasi (1940-1950an)

### Machine Language (Bahasa Mesin)
- **Tahun 1940an**: Komputer pertama diprogram menggunakan **bahasa mesin**
- Programmer harus menulis kode dalam bentuk **angka biner** (0 dan 1)
- Sangat sulit dipahami dan rawan error
- Contoh: \`10110000 01100001\` untuk memindahkan data

### Assembly Language
- **Tahun 1947**: Dikembangkan untuk mempermudah programming
- Menggunakan **mnemonics** (kata singkat) seperti \`MOV\`, \`ADD\`, \`JMP\`
- Masih sangat dekat dengan hardware
- Contoh: \`MOV AX, 5\` untuk memindahkan nilai 5 ke register AX

## Era Bahasa Tingkat Tinggi (1950-1960an)

### FORTRAN (1957)
- **Formula Translation**: Bahasa pemrograman tingkat tinggi pertama
- Dikembangkan oleh **IBM** untuk komputasi ilmiah
- Revolusioner karena mirip dengan notasi matematika
- Masih digunakan untuk **high-performance computing**

### COBOL (1959)
- **Common Business-Oriented Language**
- Dirancang untuk aplikasi bisnis dan administrasi
- Menggunakan syntax yang mirip **bahasa Inggris**
- Banyak sistem perbankan masih menggunakannya

### LISP (1958)
- **List Processing**: Fokus pada pemrosesan data simbolik
- Menjadi dasar untuk **Artificial Intelligence**
- Memperkenalkan konsep **functional programming**

## Era Struktural dan Modular (1960-1970an)

### ALGOL (1960)
- **Algorithmic Language**: Mempengaruhi banyak bahasa modern
- Memperkenalkan konsep **block structure**
- Menjadi dasar untuk Pascal, C, dan bahasa lainnya

### BASIC (1964)
- **Beginner's All-purpose Symbolic Instruction Code**
- Dirancang untuk **pemula** dan pendidikan
- Mudah dipelajari dengan syntax sederhana
- Populer di komputer personal awal

### Pascal (1970)
- Dikembangkan oleh **Niklaus Wirth**
- Menekankan **structured programming**
- Banyak digunakan untuk mengajar programming

### C (1972)
- Dikembangkan oleh **Dennis Ritchie** di Bell Labs
- Kombinasi fleksibilitas assembly dengan kemudahan high-level language
- Menjadi **fondasi** banyak sistem operasi (UNIX, Linux)
- Mempengaruhi hampir semua bahasa modern

## Era Object-Oriented (1980-1990an)

### Smalltalk (1980)
- Bahasa **object-oriented** murni pertama
- Memperkenalkan konsep **GUI** dan **IDE** modern
- Mempengaruhi Java, C#, dan bahasa OOP lainnya

### C++ (1985)
- **C with Classes**: Menambahkan OOP ke bahasa C
- Dikembangkan oleh **Bjarne Stroustrup**
- Memungkinkan **low-level** dan **high-level** programming
- Populer untuk game development dan sistem

### Java (1995)
- **Write Once, Run Anywhere**: Platform independent
- Dikembangkan oleh **Sun Microsystems**
- Memperkenalkan **Virtual Machine** concept
- Sangat populer untuk **enterprise applications**

## Era Modern dan Web (1990an-2000an)

### JavaScript (1995)
- Awalnya untuk **web interactivity**
- Sekarang digunakan di **frontend**, **backend**, dan **mobile**
- Salah satu bahasa paling populer saat ini

### PHP (1995)
- **PHP: Hypertext Preprocessor**
- Dominan untuk **web development**
- Mudah dipelajari dan deploy

### Python (1991)
- Dikembangkan oleh **Guido van Rossum**
- Fokus pada **readability** dan **simplicity**
- Sekarang sangat populer untuk **AI**, **data science**, dan **web**

## Era Kontemporer (2000an-Sekarang)

### C# (2000)
- Dikembangkan oleh **Microsoft**
- Kombinasi kekuatan C++ dengan kemudahan Java
- Populer untuk aplikasi Windows dan web

### Go (2009)
- Dikembangkan oleh **Google**
- Fokus pada **concurrency** dan **performance**
- Populer untuk **cloud computing** dan **microservices**

### Rust (2010)
- Fokus pada **memory safety** tanpa garbage collection
- Alternatif modern untuk C/C++
- Populer untuk **system programming**

### Swift (2014)
- Dikembangkan oleh **Apple**
- Menggantikan Objective-C untuk iOS development
- Modern, aman, dan performant

## Tren Modern

### Bahasa Fungsional
- **Haskell**, **Erlang**, **Elixir**: Immutability dan concurrency
- **Clojure**, **F#**: Functional programming di platform populer

### Domain-Specific Languages
- **SQL**: Database queries
- **HTML/CSS**: Web markup dan styling
- **R**: Statistical computing
- **MATLAB**: Mathematical computing

### Low-Code/No-Code
- Platform visual untuk development
- Democratisasi programming
- Contoh: Scratch, Blockly, berbagai visual builders

## Evolusi Paradigma Programming

1. **Imperative Programming**: Langkah demi langkah (Assembly, C)
2. **Structured Programming**: Kontrol flow terstruktur (Pascal)
3. **Object-Oriented Programming**: Encapsulation, Inheritance (Java, C++)
4. **Functional Programming**: Immutability, Pure functions (Lisp, Haskell)
5. **Multi-paradigm**: Kombinasi berbagai paradigma (Python, JavaScript)

## Dampak pada Industri

### Produktivitas Developer
- Bahasa tingkat tinggi meningkatkan **produktivitas**
- Framework dan library mempercepat development
- IDE modern dengan **code completion** dan **debugging**

### Aksesibilitas
- Programming menjadi lebih **mudah dipelajari**
- Komunitas besar dan **dokumentasi** lengkap
- Platform online untuk **belajar coding**

### Spesialisasi
- Bahasa khusus untuk domain tertentu
- **Python** untuk AI/ML, **JavaScript** untuk web
- **Swift** untuk iOS, **Kotlin** untuk Android
    `,
    codeExample: `# Contoh evolusi Hello World

# Assembly (kompleks)
section .data
    msg db 'Hello World!',0

section .text
    global _start
_start:
    mov rax, 1
    mov rdi, 1
    mov rsi, msg
    mov rdx, 12
    syscall

# C (structured)
#include <stdio.h>
int main() {
    printf("Hello World!\\n");
    return 0;
}

# Java (object-oriented)
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}

# Python (modern, simple)
print("Hello World!")`,
    keyPoints: [
      "Evolusi dari machine language ke high-level languages",
      "Setiap era memperkenalkan paradigma baru",
      "Bahasa modern fokus pada produktivitas dan readability",
      "Spesialisasi bahasa untuk domain tertentu",
      "Komunitas dan ekosistem menjadi faktor penting"
    ],
    nextSteps: [
      "Pelajari sejarah Python secara spesifik",
      "Pahami paradigma pemrograman yang berbeda",
      "Eksplorasi bahasa modern seperti Rust atau Go",
      "Pelajari tentang compiler vs interpreter"
    ],
    relatedExercises: []
  },
  {
    id: "python-history",
    title: "Sejarah Bahasa Python",
    category: "Pengenalan",
    description: "Mengenal asal usul Python, filosofi desain, dan perkembangannya menjadi bahasa populer",
    content: `
# Sejarah Bahasa Python

Python telah menjadi salah satu bahasa pemrograman paling populer di dunia. Mari kita telusuri perjalanan menarik dari ide sederhana hingga menjadi bahasa yang mengubah industri teknologi.

## Awal Mula Python (1989-1991)

### Latar Belakang
- **Desember 1989**: **Guido van Rossum** mulai mengembangkan Python
- Bekerja di **Centrum Wiskunde & Informatica (CWI)** di Belanda
- Terinspirasi dari bahasa **ABC** yang juga dikembangkan di CWI
- Ingin membuat bahasa yang **mudah dibaca** dan **powerful**

### Mengapa Dinamai "Python"?
- **Bukan** dari ular python! 🐍
- Diambil dari acara komedi **"Monty Python's Flying Circus"**
- Guido van Rossum adalah penggemar berat acara tersebut
- Ingin nama yang **pendek**, **unik**, dan **sedikit misterius**

### Filosofi Awal
- **Readability counts**: Kode harus mudah dibaca
- **Simple is better than complex**: Kesederhanaan lebih baik
- **There should be one obvious way to do it**: Harus ada cara yang jelas

## Era Awal dan Pengembangan (1991-2000)

### Python 0.9.0 (Februari 1991)
- **Rilis publik pertama** di newsgroup alt.sources
- Sudah memiliki **classes**, **exception handling**, **functions**
- **Module system** untuk organisasi kode
- Sudah mendukung **string operations** dan **list comprehensions**

### Python 1.0 (Januari 1994)
- Rilis **stabil pertama**
- Memperkenalkan **functional programming tools**: map, filter, reduce
- **Lambda expressions** untuk anonymous functions
- Sistem **documentation string** (docstrings)

### Python 1.5 (1997)
- Memperkenalkan **keyword arguments**
- **Assert statement** untuk debugging
- Perbaikan signifikan pada **performance**

### Python 1.6 (2000)
- **Unicode support** untuk internasionalisasi
- **List comprehensions** yang lebih powerful
- Transisi menuju era modern Python

## Era Modern Python (2000-2008)

### Python 2.0 (Oktober 2000)
- **Garbage collection** untuk memory management otomatis
- **List comprehensions** dengan syntax modern
- **Augmented assignment**: +=, -=, *=, dll
- **String methods** yang lebih rich

### Python 2.1 (2001)
- **Nested scopes** untuk closure functions
- **Iterators** protocol
- **Generators** dengan yield keyword
- Warning system untuk deprecated features

### Python 2.2 (2001)
- **New-style classes** dengan inheritance modern
- **Property decorators**
- **Static methods** dan **class methods**
- Unifikasi **types** dan **classes**

### Python 2.3 (2003)
- **Boolean type** (True/False)
- **Enumerate() function**
- **Set datatype**
- Import system improvements

### Python 2.4 (2004)
- **Generator expressions**
- **Decorator syntax** (@decorator)
- **Built-in set() type**
- **Subprocess module**

### Python 2.5 (2006)
- **Context managers** (with statement)
- **Conditional expressions** (ternary operator)
- **Try/except/finally** improvements
- **Partial function application**

### Python 2.6 dan 2.7
- **Python 2.6 (2008)**: Transisi menuju Python 3
- **Python 2.7 (2010)**: Versi terakhir Python 2 series
- **Long-term support** hingga 2020

## Revolusi Python 3 (2008-Sekarang)

### Python 3.0 "Python 3000" (Desember 2008)
- **Breaking changes** untuk membersihkan bahasa
- **Unicode by default**: String adalah Unicode
- **Print function** bukan statement: \`print("hello")\`
- **Integer division** behavior change: \`5/2 = 2.5\`
- **Iterator** everywhere: range(), dict.keys(), dll

### Mengapa Python 3?
- **Clean up inconsistencies** dari Python 2
- **Better Unicode support** untuk aplikasi global
- **Remove redundant features** dan deprecated syntax
- **Future-proof** the language

### Migrasi Challenges
- **Incompatibility** dengan Python 2
- **Library ecosystem** butuh waktu untuk migrate
- **Learning curve** untuk developer existing
- **"Python 2 vs 3"** debate berlangsung bertahun-tahun

### Python 3 Evolution

#### Python 3.1-3.3 (2009-2012)
- **Performance improvements**
- **OrderedDict**, **Counter** classes
- **Improved I/O** system

#### Python 3.4-3.5 (2014-2015)
- **Asyncio** for asynchronous programming
- **Type hints** (PEP 484)
- **Matrix multiplication** operator (@)
- **Async/await** syntax

#### Python 3.6 (2016)
- **F-strings** untuk string formatting: \`f"Hello {name}"\`
- **Variable annotations**
- **Secrets module** untuk cryptography
- **Performance improvements**

#### Python 3.7 (2018)
- **Dataclasses** decorator
- **Context variables**
- **Built-in breakpoint()** function
- **Ordered dict** as default

#### Python 3.8 (2019)
- **Walrus operator** (:=) - assignment expressions
- **Positional-only parameters**
- **f-string** debugging support
- **Performance** and **security** improvements

#### Python 3.9 (2020)
- **Dictionary union operators** (| and |=)
- **Type hinting generics** improvements
- **String methods**: removeprefix(), removesuffix()
- **New parser** (PEG-based)

#### Python 3.10 (2021)
- **Structural Pattern Matching** (match/case)
- **Better error messages**
- **Union types** syntax: X | Y
- **Parameter specification variables**

#### Python 3.11 (2022)
- **Significant performance improvements** (10-60% faster)
- **Better error messages** dengan location info
- **Exception groups**
- **Task groups** untuk asyncio

#### Python 3.12 (2023)
- **Improved f-string** parsing
- **Type parameter syntax**
- **Override decorator**
- **Performance** dan **memory** optimizations

## Komunitas dan Ekosistem

### Python Software Foundation (PSF)
- **Didirikan 2001**: Non-profit untuk mendukung Python
- **Mengelola trademark** dan **intellectual property**
- **Funding** untuk development dan community events
- **Code of Conduct** untuk inclusive community

### PEP (Python Enhancement Proposals)
- **Proses demokratis** untuk mengusulkan changes
- **PEP 8**: Style guide yang famous
- **PEP 20**: The Zen of Python
- **Community-driven** decision making

### Package Ecosystem
- **PyPI (Python Package Index)**: 400,000+ packages
- **pip**: Package installer yang mudah
- **virtual environments**: Isolated dependencies
- **Rich ecosystem**: NumPy, Django, Flask, TensorFlow, dll

## Dampak dan Adopsi

### Domain Aplikasi

#### Web Development
- **Django (2005)**: High-level web framework
- **Flask (2010)**: Micro-framework yang fleksibel
- **FastAPI (2018)**: Modern API framework

#### Data Science & AI
- **NumPy (2006)**: Numerical computing
- **Pandas (2008)**: Data manipulation
- **Matplotlib (2003)**: Data visualization
- **Scikit-learn (2007)**: Machine learning
- **TensorFlow** dan **PyTorch**: Deep learning

#### Scientific Computing
- **SciPy**: Scientific algorithms
- **Jupyter Notebook**: Interactive computing
- **Research** dan **academia** adoption

#### Automation & DevOps
- **System administration** scripts
- **Build tools** dan **CI/CD**
- **Infrastructure as Code**

### Industri Adoption
- **Google**: Extensive Python usage
- **Netflix**: Recommendation systems
- **Instagram**: Backend services
- **Spotify**: Data analysis
- **NASA**: Scientific computing

## Filosofi Python: The Zen of Python

\`\`\`python
import this
\`\`\`

**Tim Peters** menulis "The Zen of Python" (PEP 20):

- **Beautiful is better than ugly**
- **Explicit is better than implicit**
- **Simple is better than complex**
- **Complex is better than complicated**
- **Readability counts**
- **If the implementation is hard to explain, it's a bad idea**

## Python Hari Ini dan Masa Depan

### Statistik Popularitas
- **#1 di TIOBE Index** (2023)
- **Most wanted language** di Stack Overflow
- **Fastest growing** major programming language
- **10+ million developers** worldwide

### Tren Modern
- **AI/ML boom**: Python sebagai lingua franca
- **Data science explosion**: Pandas, Jupyter ecosystem
- **Cloud computing**: Serverless, containers
- **Education**: Python sebagai first language

### Challenges dan Future
- **Performance**: GIL (Global Interpreter Lock) limitations
- **Mobile development**: Tidak sekuat native languages
- **Enterprise adoption**: Competing dengan Java/C#
- **Python 4?**: Kemungkinan breaking changes di masa depan

### Innovation Continues
- **CPython optimizations**: Faster interpreter
- **Alternative implementations**: PyPy, Jython, IronPython
- **Type system evolution**: Static typing optional
- **Async programming**: Better concurrency support

## Legacy Guido van Rossum

### "Benevolent Dictator for Life" (BDFL)
- **Leadership style**: Final decision maker
- **Stepped down 2018**: After 30 years leading Python
- **Python Steering Council**: Collective leadership model
- **Continues contributing**: Still active in development

### Impact on Programming
- **Readability focus**: Influenced language design globally
- **Community building**: Inclusive, welcoming culture
- **Open source leadership**: Model untuk other projects
- **Programming education**: Made coding accessible

Python telah berkembang dari eksperimen pribadi menjadi salah satu bahasa paling berpengaruh di dunia, mengubah cara kita berpikir tentang programming dan membuat coding lebih accessible untuk semua orang.
    `,
    codeExample: `# Evolusi Python syntax dari masa ke masa

# Python 0.9 (1991) - Basic concepts
def factorial(n):
    if n <= 1:
        return 1
    else:
        return n * factorial(n-1)

# Python 1.0 (1994) - Lambda dan functional
squares = map(lambda x: x**2, [1, 2, 3, 4, 5])

# Python 2.0 (2000) - List comprehensions
squares = [x**2 for x in range(1, 6)]

# Python 2.4 (2004) - Decorators
@staticmethod
def greet():
    print("Hello World!")

# Python 2.5 (2006) - Context managers
with open('file.txt', 'r') as f:
    content = f.read()

# Python 3.0 (2008) - Print function
print("Hello", "World", sep=", ")

# Python 3.6 (2016) - F-strings
name = "Python"
age = 32
print(f"Hello {name}, you are {age} years old!")

# Python 3.8 (2019) - Walrus operator
if (n := len(data)) > 10:
    print(f"List is too long ({n} elements)")

# Python 3.10 (2021) - Pattern matching
match status:
    case "success":
        print("Operation successful")
    case "error":
        print("Something went wrong")
    case _:
        print("Unknown status")`,
    keyPoints: [
      "Python diciptakan Guido van Rossum pada 1989, nama dari Monty Python",
      "Filosofi 'readability counts' dan 'simple is better than complex'",
      "Python 3 memperkenalkan breaking changes untuk membersihkan bahasa",
      "Ekosistem kaya dengan PyPI dan 400,000+ packages",
      "Dominant dalam AI, data science, dan web development",
      "Komunitas yang inklusif dengan Python Software Foundation"
    ],
    nextSteps: [
      "Pahami filosofi Python dan PEP 20 (The Zen of Python)",
      "Pelajari perbedaan Python 2 vs Python 3",
      "Eksplorasi ekosistem Python dan PyPI",
      "Mulai dengan syntax dasar Python"
    ],
    relatedExercises: ["1"]
  },
  {
    id: "python-basics",
    title: "Dasar-Dasar Python",
    category: "Dasar",
    description:
      "Pelajari syntax dasar Python, cara menulis kode pertama, dan konsep fundamental",
    content: `
# Pengenalan Python

Python adalah bahasa pemrograman yang mudah dipelajari dan sangat powerful. Python memiliki syntax yang sederhana dan mudah dibaca.

## Mengapa Python?

1. **Mudah dipelajari**: Syntax yang sederhana dan mirip bahasa Inggris
2. **Versatile**: Bisa digunakan untuk web development, data science, AI, dll
3. **Community besar**: Banyak library dan dukungan komunitas
4. **Open source**: Gratis dan dapat dimodifikasi

## Hello World

Program pertama dalam Python sangat sederhana:

\`\`\`python
print("Hello, World!")
\`\`\`

## Komentar

Gunakan tanda # untuk membuat komentar:

\`\`\`python
# Ini adalah komentar
print("Hello!")  # Komentar di akhir baris
\`\`\`
    `,
    codeExample: `# Program Python pertama
print("Hello, World!")
print("Selamat datang di dunia Python!")

# Komentar digunakan untuk menjelaskan kode
# Ini tidak akan dieksekusi`,
    keyPoints: [
      "Python menggunakan indentasi untuk mengelompokkan kode",
      "Tidak perlu semicolon (;) di akhir statement",
      "Case sensitive - 'Print' berbeda dengan 'print'",
      "Gunakan # untuk komentar",
      "print() digunakan untuk menampilkan output",
    ],
    nextSteps: [
      "Pelajari tentang variabel dan tipe data",
      "Praktikkan dengan latihan Hello World",
      "Coba buat program sederhana dengan print()",
    ],
    relatedExercises: ["1"],
  },
  {
    id: "variables-datatypes",
    title: "Variabel dan Tipe Data",
    category: "Dasar",
    description:
      "Pelajari cara menyimpan data dalam variabel dan berbagai tipe data di Python",
    content: `
# Variabel dan Tipe Data

Variabel adalah tempat untuk menyimpan data. Di Python, Anda tidak perlu mendeklarasikan tipe data secara eksplisit.

## Membuat Variabel

\`\`\`python
name = "Alice"
age = 25
height = 165.5
is_student = True
\`\`\`

## Tipe Data Dasar

### 1. String (str)
Untuk menyimpan teks:
\`\`\`python
name = "John Doe"
message = 'Hello, World!'
\`\`\`

### 2. Integer (int)
Untuk angka bulat:
\`\`\`python
age = 25
year = 2024
\`\`\`

### 3. Float
Untuk angka desimal:
\`\`\`python
height = 175.5
pi = 3.14159
\`\`\`

### 4. Boolean (bool)
Untuk nilai True/False:
\`\`\`python
is_active = True
is_completed = False
\`\`\`

## Mengecek Tipe Data

\`\`\`python
print(type(name))      # <class 'str'>
print(type(age))       # <class 'int'>
print(type(height))    # <class 'float'>
print(type(is_active)) # <class 'bool'>
\`\`\`
    `,
    codeExample: `# Membuat variabel dengan berbagai tipe data
name = "Alice"
age = 25
height = 165.5
is_student = True

# Menampilkan variabel
print("Nama:", name)
print("Umur:", age)
print("Tinggi:", height)
print("Status mahasiswa:", is_student)

# Mengecek tipe data
print("Tipe data name:", type(name))
print("Tipe data age:", type(age))`,
    keyPoints: [
      "Variabel dibuat dengan assignment operator (=)",
      "Python menentukan tipe data secara otomatis",
      "String bisa menggunakan petik tunggal atau ganda",
      "Boolean hanya memiliki nilai True atau False",
      "Gunakan type() untuk mengecek tipe data",
    ],
    nextSteps: [
      "Pelajari operasi matematika dengan variabel",
      "Praktikkan dengan latihan variabel dan tipe data",
      "Coba konversi antar tipe data",
    ],
    relatedExercises: ["2"],
  },
  {
    id: "math-operations",
    title: "Operasi Matematika",
    category: "Dasar",
    description: "Pelajari berbagai operasi matematika dalam Python",
    content: `
# Operasi Matematika

Python menyediakan berbagai operator untuk melakukan operasi matematika.

## Operator Aritmatika

### Operasi Dasar
- **Penjumlahan (+)**: \`5 + 3 = 8\`
- **Pengurangan (-)**: \`5 - 3 = 2\`
- **Perkalian (*)**: \`5 * 3 = 15\`
- **Pembagian (/)**: \`5 / 3 = 1.6666...\`

### Operasi Khusus
- **Pembagian bulat (//)**: \`5 // 3 = 1\`
- **Modulus (%)**: \`5 % 3 = 2\`
- **Pangkat (**)**: \`5 ** 3 = 125\`

## Urutan Operasi (PEMDAS)

Python mengikuti urutan operasi matematika:
1. **P**arentheses (kurung)
2. **E**xponents (pangkat)
3. **M**ultiplication & **D**ivision (kiri ke kanan)
4. **A**ddition & **S**ubtraction (kiri ke kanan)

\`\`\`python
result = 2 + 3 * 4    # = 2 + 12 = 14
result = (2 + 3) * 4  # = 5 * 4 = 20
\`\`\`

## Assignment Operators

\`\`\`python
x = 10
x += 5   # x = x + 5 = 15
x -= 3   # x = x - 3 = 12
x *= 2   # x = x * 2 = 24
x /= 4   # x = x / 4 = 6.0
\`\`\`
    `,
    codeExample: `# Operasi matematika dasar
a = 10
b = 3

print("Penjumlahan:", a + b)      # 13
print("Pengurangan:", a - b)      # 7
print("Perkalian:", a * b)        # 30
print("Pembagian:", a / b)        # 3.333...
print("Pembagian bulat:", a // b) # 3
print("Modulus:", a % b)          # 1
print("Pangkat:", a ** b)         # 1000

# Menggunakan kurung untuk urutan operasi
result1 = 2 + 3 * 4
result2 = (2 + 3) * 4
print("Tanpa kurung:", result1)   # 14
print("Dengan kurung:", result2)  # 20`,
    keyPoints: [
      "Python mendukung semua operasi matematika dasar",
      "Operator // untuk pembagian yang menghasilkan bilangan bulat",
      "Operator % (modulus) memberikan sisa pembagian",
      "Operator ** untuk pangkat",
      "Gunakan kurung untuk mengubah urutan operasi",
    ],
    nextSteps: [
      "Praktikkan dengan latihan operasi matematika",
      "Pelajari tentang pengkondisian (if-else)",
      "Coba buat kalkulator sederhana",
    ],
    relatedExercises: ["3"],
  },
  {
    id: "control-flow",
    title: "Kontrol Alur Program",
    category: "Kontrol Alur",
    description:
      "Pelajari cara mengontrol alur program dengan pengkondisian dan perulangan",
    content: `
# Kontrol Alur Program

Kontrol alur memungkinkan program membuat keputusan dan mengulang tindakan.

## Pengkondisian (if-elif-else)

### If Statement
\`\`\`python
age = 18
if age >= 18:
    print("Sudah dewasa")
\`\`\`

### If-Else
\`\`\`python
age = 16
if age >= 18:
    print("Sudah dewasa")
else:
    print("Masih di bawah umur")
\`\`\`

### If-Elif-Else
\`\`\`python
score = 85
if score >= 90:
    print("Grade A")
elif score >= 80:
    print("Grade B")
elif score >= 70:
    print("Grade C")
else:
    print("Grade D")
\`\`\`

## Operator Perbandingan

- **==** : sama dengan
- **!=** : tidak sama dengan
- **>** : lebih besar dari
- **<** : lebih kecil dari
- **>=** : lebih besar atau sama dengan
- **<=** : lebih kecil atau sama dengan

## Operator Logika

- **and** : kedua kondisi harus benar
- **or** : salah satu kondisi benar
- **not** : membalik nilai boolean

\`\`\`python
age = 25
has_license = True

if age >= 18 and has_license:
    print("Boleh menyetir")
\`\`\`
    `,
    codeExample: `# Contoh pengkondisian
number = 5

# Mengecek apakah angka positif, negatif, atau nol
if number > 0:
    print(f"{number} adalah angka positif")
elif number < 0:
    print(f"{number} adalah angka negatif")
else:
    print("Angka adalah nol")

# Contoh dengan operator logika
age = 20
has_license = True

if age >= 18 and has_license:
    print("Boleh menyetir mobil")
elif age >= 18 and not has_license:
    print("Sudah cukup umur, tapi belum punya SIM")
else:
    print("Belum cukup umur untuk menyetir")`,
    keyPoints: [
      "Indentasi sangat penting dalam Python",
      "elif digunakan untuk kondisi tambahan",
      "Operator and, or, not untuk logika boolean",
      "Kondisi dievaluasi dari atas ke bawah",
      "Gunakan : (titik dua) setelah kondisi",
    ],
    nextSteps: [
      "Praktikkan dengan latihan if-else",
      "Pelajari tentang perulangan (for loop)",
      "Coba buat program dengan multiple conditions",
    ],
    relatedExercises: ["4"],
  },
  {
    id: "loops",
    title: "Perulangan (Loops)",
    category: "Kontrol Alur",
    description: "Pelajari cara mengulang kode dengan for loop dan while loop",
    content: `
# Perulangan (Loops)

Perulangan memungkinkan kita menjalankan kode yang sama berulang kali.

## For Loop

### Range Function
\`\`\`python
# Mengulang 5 kali (0 sampai 4)
for i in range(5):
    print(i)

# Dari 1 sampai 10
for i in range(1, 11):
    print(i)

# Dengan step
for i in range(0, 11, 2):  # 0, 2, 4, 6, 8, 10
    print(i)
\`\`\`

### Iterasi List
\`\`\`python
fruits = ["apel", "pisang", "jeruk"]
for fruit in fruits:
    print(fruit)
\`\`\`

### Enumerate
\`\`\`python
fruits = ["apel", "pisang", "jeruk"]
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")
\`\`\`

## While Loop

\`\`\`python
count = 0
while count < 5:
    print(count)
    count += 1  # Penting: update counter
\`\`\`

## Break dan Continue

### Break (keluar dari loop)
\`\`\`python
for i in range(10):
    if i == 5:
        break
    print(i)  # Cetak 0, 1, 2, 3, 4
\`\`\`

### Continue (skip iterasi)
\`\`\`python
for i in range(5):
    if i == 2:
        continue
    print(i)  # Cetak 0, 1, 3, 4
\`\`\`
    `,
    codeExample: `# For loop dengan range
print("Angka 1 sampai 10:")
for i in range(1, 11):
    print(i)

print("\\nAngka genap dari 0 sampai 10:")
for i in range(0, 11, 2):
    print(i)

# For loop dengan list
fruits = ["apel", "pisang", "jeruk", "mangga"]
print("\\nDaftar buah:")
for index, fruit in enumerate(fruits, 1):
    print(f"{index}. {fruit}")

# While loop
print("\\nCountdown:")
count = 5
while count > 0:
    print(count)
    count -= 1
print("Blast off!")`,
    keyPoints: [
      "range() menghasilkan urutan angka",
      "for loop bagus untuk iterasi yang sudah diketahui jumlahnya",
      "while loop untuk iterasi berdasarkan kondisi",
      "enumerate() memberikan index dan value",
      "break untuk keluar, continue untuk skip",
    ],
    nextSteps: [
      "Praktikkan dengan latihan for loop",
      "Pelajari tentang struktur data (list, dictionary)",
      "Coba nested loops (loop dalam loop)",
    ],
    relatedExercises: ["5"],
  },
  {
    id: "data-structures",
    title: "Struktur Data",
    category: "Struktur Data",
    description: "Pelajari list, dictionary, tuple, dan set dalam Python",
    content: `
# Struktur Data Python

Python menyediakan beberapa struktur data built-in yang sangat berguna.

## List

List adalah koleksi item yang ordered dan mutable (bisa diubah).

\`\`\`python
# Membuat list
fruits = ["apel", "pisang", "jeruk"]
numbers = [1, 2, 3, 4, 5]
mixed = ["Alice", 25, True, 3.14]

# Mengakses item
print(fruits[0])    # "apel"
print(fruits[-1])   # "jeruk" (dari belakang)

# Mengubah item
fruits[1] = "mangga"

# Menambah item
fruits.append("anggur")
fruits.insert(1, "kiwi")

# Menghapus item
fruits.remove("jeruk")
last_fruit = fruits.pop()  # Menghapus dan return item terakhir
\`\`\`

## Dictionary

Dictionary menyimpan data dalam pasangan key-value.

\`\`\`python
# Membuat dictionary
person = {
    "nama": "Alice",
    "umur": 25,
    "kota": "Jakarta"
}

# Mengakses value
print(person["nama"])        # "Alice"
print(person.get("umur"))    # 25

# Menambah/mengubah
person["pekerjaan"] = "Developer"
person["umur"] = 26

# Menghapus
del person["kota"]

# Iterasi
for key, value in person.items():
    print(f"{key}: {value}")
\`\`\`

## Tuple

Tuple seperti list tetapi immutable (tidak bisa diubah).

\`\`\`python
coordinates = (10, 20)
rgb = (255, 128, 0)

# Unpacking
x, y = coordinates
red, green, blue = rgb
\`\`\`

## Set

Set adalah koleksi item yang unik dan unordered.

\`\`\`python
numbers = {1, 2, 3, 4, 5}
unique_letters = set("hello")  # {'h', 'e', 'l', 'o'}
\`\`\`
    `,
    codeExample: `# Contoh penggunaan List
fruits = ["apel", "pisang", "jeruk"]
print("List awal:", fruits)

# Mengakses dan mengubah
print("Buah pertama:", fruits[0])
print("Buah terakhir:", fruits[-1])

fruits.append("mangga")
print("Setelah append:", fruits)

# Contoh Dictionary
student = {
    "nama": "Budi",
    "umur": 20,
    "jurusan": "Informatika",
    "ipk": 3.75
}

print("\\nInformasi mahasiswa:")
for key, value in student.items():
    print(f"{key.capitalize()}: {value}")

# Menambah data baru
student["semester"] = 5
print("Setelah menambah semester:", student)`,
    keyPoints: [
      "List menggunakan kurung siku [], bisa diubah",
      "Dictionary menggunakan kurung kurawal {}, key-value pairs",
      "Tuple menggunakan kurung (), tidak bisa diubah",
      "Set menggunakan kurung kurawal {}, item unik",
      "Index dimulai dari 0, index negatif dari belakang",
    ],
    nextSteps: [
      "Praktikkan dengan latihan list dan dictionary",
      "Pelajari list comprehension",
      "Coba nested data structures",
    ],
    relatedExercises: ["6", "7"],
  },
  {
    id: "functions",
    title: "Functions",
    category: "Function",
    description: "Pelajari cara membuat dan menggunakan function dalam Python",
    content: `
# Functions

Function adalah blok kode yang dapat digunakan ulang untuk melakukan tugas tertentu.

## Membuat Function

\`\`\`python
def greet():
    print("Hello, World!")

# Memanggil function
greet()
\`\`\`

## Function dengan Parameter

\`\`\`python
def greet_person(name):
    print(f"Hello, {name}!")

def add_numbers(a, b):
    result = a + b
    print(f"{a} + {b} = {result}")

greet_person("Alice")
add_numbers(5, 3)
\`\`\`

## Function dengan Return Value

\`\`\`python
def calculate_area(radius):
    pi = 3.14159
    area = pi * radius ** 2
    return area

# Menyimpan hasil return
circle_area = calculate_area(5)
print(f"Luas lingkaran: {circle_area}")
\`\`\`

## Default Parameters

\`\`\`python
def greet_person(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet_person("Alice")              # Hello, Alice!
greet_person("Bob", "Hi")          # Hi, Bob!
\`\`\`

## Multiple Return Values

\`\`\`python
def get_name_age():
    name = "Alice"
    age = 25
    return name, age

person_name, person_age = get_name_age()
\`\`\`

## Lambda Functions (Anonymous Functions)

\`\`\`python
# Function biasa
def square(x):
    return x ** 2

# Lambda function
square_lambda = lambda x: x ** 2

print(square(5))        # 25
print(square_lambda(5)) # 25
\`\`\`
    `,
    codeExample: `# Function tanpa parameter
def say_hello():
    print("Hello dari function!")

# Function dengan parameter
def introduce(name, age):
    print(f"Nama saya {name}, umur {age} tahun")

# Function dengan return value
def calculate_rectangle_area(length, width):
    area = length * width
    return area

# Function dengan default parameter
def power(base, exponent=2):
    return base ** exponent

# Memanggil functions
say_hello()
introduce("Alice", 25)

area = calculate_rectangle_area(10, 5)
print(f"Luas persegi panjang: {area}")

print(f"2^3 = {power(2, 3)}")  # exponent = 3
print(f"5^2 = {power(5)}")     # exponent = 2 (default)`,
    keyPoints: [
      "def keyword untuk mendefinisikan function",
      "Function dapat menerima parameter dan mengembalikan nilai",
      "return mengembalikan nilai dan mengakhiri function",
      "Default parameter memberikan nilai bawaan",
      "Function membantu membuat kode lebih modular dan reusable",
    ],
    nextSteps: [
      "Praktikkan dengan latihan function",
      "Pelajari tentang scope variabel",
      "Coba buat function yang kompleks",
    ],
    relatedExercises: ["8"],
  },
];

export const materialCategories = [
  "Semua",
  "Dasar",
  "Kontrol Alur",
  "Struktur Data",
  "Function",
  "Advanced",
];
