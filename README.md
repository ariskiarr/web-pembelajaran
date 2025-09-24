# Python Learning Interactive

Platform pembelajaran Python interaktif dengan editor kode real-time dan eksekusi Python di browser menggunakan Pyodide.

## 🚀 Fitur Utama

### 1. **Landing Page**

- ✅ Daftar topik/soal latihan Python dengan filter kategori dan tingkat kesulitan
- ✅ Progress bar yang menunjukkan kemajuan belajar user
- ✅ Sistem level dan XP berdasarkan latihan yang diselesaikan
- ✅ Card untuk setiap exercise dengan informasi lengkap

### 2. **Halaman Latihan Interaktif**

- ✅ **Monaco Editor** dengan syntax highlighting Python
- ✅ Tombol **Run** untuk mengeksekusi kode Python
- ✅ Eksekusi kode di browser menggunakan **Pyodide** (tanpa backend)
- ✅ Console interaktif untuk menampilkan output dan error
- ✅ Panel instruksi dengan deskripsi latihan
- ✅ Sistem hints untuk membantu user
- ✅ Tombol show/hide solution

### 3. **Sistem Progress & Penyimpanan**

- ✅ Penyimpanan otomatis ke **localStorage**
- ✅ Tracking skor (benar/salah) dan histori percobaan
- ✅ Halaman riwayat belajar dengan detail attempt
- ✅ Sistem XP dan level progression

### 4. **UI/UX Modern**

- ✅ **Tailwind CSS** untuk styling responsif
- ✅ **Framer Motion** untuk animasi yang smooth
- ✅ **Lucide React** icons
- ✅ Design modern dengan gradient background
- ✅ Card-based layout dengan shadow dan hover effects

### 5. **Struktur Project Terorganisir**

- ✅ `/src/app/` - Pages dengan App Router Next.js
- ✅ `/src/components/` - Reusable components
- ✅ `/src/data/` - Data latihan dan konfigurasi
- ✅ `/src/utils/` - Utilities untuk localStorage management

## 📚 Materi Pembelajaran

Aplikasi ini menyediakan 10 latihan Python yang mencakup:

1. **Dasar** (Beginner):

   - Hello World
   - Variabel dan Tipe Data
   - Operasi Matematika

2. **Kontrol Alur** (Beginner):

   - Kondisi If-Else
   - Loop For

3. **Struktur Data** (Intermediate):

   - List dan Indexing
   - Dictionary

4. **Function** (Intermediate):

   - Membuat Function

5. **Advanced** (Advanced):
   - List Comprehension
   - Error Handling

## 🛠️ Teknologi yang Digunakan

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Code Editor**: Monaco Editor
- **Python Execution**: Pyodide
- **Icons**: Lucide React
- **Storage**: localStorage/IndexedDB

## 🔧 Instalasi dan Menjalankan

### Prerequisites

- Node.js 18+
- npm atau yarn

### Langkah-langkah

1. **Clone repository**

```bash
git clone <repository-url>
cd web-pembelajaran
```

2. **Install dependencies**

```bash
npm install
```

3. **Jalankan development server**

```bash
npm run dev
```

4. **Buka browser**

```
http://localhost:3000
```

### Build untuk Production

```bash
npm run build
npm start
```

## 📁 Struktur Project

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page dengan daftar exercises
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── exercise/[id]/     # Dynamic exercise pages
│   │   └── page.tsx       # Exercise detail page
│   └── history/           # History pages
│       └── page.tsx       # User progress history
├── components/            # Reusable components
│   ├── CodeEditor.tsx     # Monaco Editor dengan Pyodide
│   └── History.tsx        # History component
├── data/                  # Static data
│   └── exercises.ts       # Exercise definitions
└── utils/                 # Utilities
    └── userProgress.ts    # localStorage management
```

## 🎮 Cara Menggunakan

1. **Pilih Latihan**: Pilih exercise dari landing page berdasarkan kategori atau tingkat kesulitan
2. **Baca Instruksi**: Pahami deskripsi dan requirements di panel kiri
3. **Tulis Kode**: Gunakan Monaco Editor untuk menulis kode Python
4. **Run Kode**: Klik tombol "Run" untuk mengeksekusi kode
5. **Lihat Output**: Cek hasil di console panel
6. **Gunakan Hints**: Jika kesulitan, gunakan fitur hints
7. **Track Progress**: Lihat kemajuan di dashboard dan halaman history

## 🏆 Sistem Reward

- **XP Points**: Setiap exercise memberikan poin berdasarkan tingkat kesulitan
- **Level System**: Level naik setiap 100 XP
- **Progress Tracking**: Persentase completion dan statistik detil
- **History**: Record semua attempt dengan timestamp dan code

## 🐛 Troubleshooting

### Pyodide tidak loading

- Pastikan koneksi internet stabil
- Clear browser cache dan reload page
- Check browser console untuk error messages

### Code tidak berjalan

- Pastikan syntax Python benar
- Check indentation (Python sensitive terhadap spacing)
- Lihat error message di console output

### Progress tidak tersimpan

- Pastikan localStorage browser enabled
- Jangan gunakan incognito/private mode
- Check browser storage settings

## 🤝 Kontribusi

Untuk berkontribusi:

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License

Project ini menggunakan MIT License. Lihat file `LICENSE` untuk detail.

## 📧 Contact

Untuk pertanyaan atau saran, silakan buat issue di repository ini.

---

**Happy Learning! 🐍✨**
