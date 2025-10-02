import { LearningMaterial } from "./types";

export const emptyTemplate: LearningMaterial = {
  id: "empty-template",
  title: "Halaman Kosong",
  category: "Template",
  description: "Template halaman kosong untuk konten baru",
  content: `# Halaman Kosong

Ini adalah halaman kosong yang siap untuk diisi dengan konten pembelajaran.

## Panduan Penggunaan

1. Ganti title dan id sesuai kebutuhan
2. Isi konten pembelajaran di bagian content
3. Tambahkan contoh kode di codeExample
4. Lengkapi keyPoints dan nextSteps
5. Hubungkan dengan exercises yang relevan

## Template Struktur

### Judul Utama
Penjelasan materi...

### Sub Judul
Penjelasan detail...

#### Sub-sub Judul
Contoh atau detail lebih lanjut...

### Contoh Kode
\`\`\`python
# Tulis kode contoh di sini
print("Hello World")
\`\`\`

### Tips
- Gunakan bullet points untuk tips
- Buat penjelasan yang mudah dipahami
- Sertakan contoh praktis

**Catatan:** Ganti semua konten ini dengan materi pembelajaran yang sesungguhnya.`,
  codeExample: `# Template Kode Contoh

# Contoh sederhana
print("Hello World")

# Contoh dengan variabel
nama = "Python"
print("Belajar", nama)

# Contoh dengan function
def salam():
    print("Selamat belajar!")

salam()`,
  keyPoints: [
    "Template ini siap untuk diisi dengan konten pembelajaran",
    "Ganti semua bagian template dengan materi yang sesuai",
    "Pastikan struktur markdown konsisten",
    "Sertakan contoh kode yang relevan",
    "Tambahkan tips dan catatan penting",
  ],
  nextSteps: [
    "Ganti title dan id dengan yang sesuai",
    "Isi content dengan materi pembelajaran",
    "Tambahkan contoh kode yang relevan",
    "Lengkapi keyPoints dan nextSteps",
    "Hubungkan dengan exercises terkait",
  ],
  relatedExercises: [],
};
