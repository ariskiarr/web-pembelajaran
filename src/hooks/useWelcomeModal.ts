"use client";

import { useState, useEffect } from "react";

export function useWelcomeModal() {
  const [showSequence, setShowSequence] = useState(false); // Tidak akan pernah true
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Langsung cek apakah user sudah pernah melihat welcome modal utama
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");

    if (!hasSeenWelcome) {
      // Tampilkan welcome modal langsung tanpa sequence
      const timer = setTimeout(() => {
        setShowWelcome(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSequenceComplete = () => {
    // Fungsi ini tidak akan dipanggil karena sequence dinonaktifkan
    setShowSequence(false);
  };

  const closeWelcome = () => {
    setShowWelcome(false);
    // Simpan ke localStorage bahwa user sudah melihat welcome modal utama
    localStorage.setItem("hasSeenWelcome", "true");
  };

  return {
    showSequence,
    showWelcome,
    handleSequenceComplete,
    closeWelcome,
  };
}
