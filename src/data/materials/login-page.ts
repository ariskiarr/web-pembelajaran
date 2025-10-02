import { LearningMaterial } from "./types";

export const loginPage: LearningMaterial = {
  id: "login-page",
  title: "Halaman Login",
  category: "System",
  description: "Halaman login untuk akses sistem pembelajaran",
  content: `# Sistem Login

Silakan masukkan username dan password untuk mengakses sistem pembelajaran Python.

## Informasi Login
- Username dan password diperlukan untuk akses
- Pastikan memasukkan kredensial yang benar
- Sistem akan memverifikasi otomatis

## Keamanan
- Password disimpan dengan aman
- Session akan aktif selama browser terbuka
- Logout otomatis saat browser ditutup`,
  codeExample: `# Contoh sistem autentikasi sederhana
username = input("Masukkan username: ")
password = input("Masukkan password: ")

if username == "lutvianurjannah" and password == "GqRwEw$EwE98":
    print("Login berhasil!")
else:
    print("Username atau password salah!")`,
  keyPoints: [
    "Login diperlukan untuk akses sistem",
    "Username: lutvianurjannah", 
    "Password sudah ditentukan sistem",
    "Autentikasi otomatis setelah input benar"
  ],
  nextSteps: [
    "Masukkan username yang benar",
    "Masukkan password yang benar", 
    "Akses sistem pembelajaran",
    "Mulai belajar Python"
  ],
  relatedExercises: []
};