import { LearningMaterial } from "./types";

export const mathOperations: LearningMaterial = {
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

## Operator Perbandingan

- **==** : sama dengan
- **!=** : tidak sama dengan
- **>** : lebih besar dari
- **<** : lebih kecil dari
- **>=** : lebih besar sama dengan
- **<=** : lebih kecil sama dengan

\`\`\`python
a = 10
b = 5

print(a > b)    # True
print(a == b)   # False
print(a != b)   # True
\`\`\`

**"Mari kita hitung-hitung dengan Python!"** - Ariski
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
print("Dengan kurung:", result2)  # 20

# Assignment operators
x = 10
print("x awal:", x)

x += 5
print("x += 5:", x)  # 15

x *= 2
print("x *= 2:", x)  # 30

x //= 4
print("x //= 4:", x) # 7

# Operator perbandingan
print("\\nPerbandingan:")
print("10 > 5:", 10 > 5)   # True
print("10 == 10:", 10 == 10) # True
print("5 != 3:", 5 != 3)   # True`,
  keyPoints: [
    "Python mendukung semua operasi matematika dasar",
    "Operator // untuk pembagian yang menghasilkan bilangan bulat",
    "Operator % (modulus) memberikan sisa pembagian",
    "Operator ** untuk pangkat",
    "Gunakan kurung untuk mengubah urutan operasi",
    "Assignment operators (+=, -=, *=, /=) untuk operasi singkat",
    "Operator perbandingan menghasilkan nilai boolean (True/False)",
  ],
  nextSteps: [
    "Praktikkan dengan latihan operasi matematika",
    "Pelajari tentang pengkondisian (if-else)",
    "Coba buat kalkulator sederhana",
    "Pelajari tentang input() untuk mengambil data dari user",
  ],
  relatedExercises: ["11"],
};
