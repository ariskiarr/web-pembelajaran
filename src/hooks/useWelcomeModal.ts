"use client";

import { useState, useEffect } from "react";

export function useWelcomeModal() {
  const [showSequence, setShowSequence] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Sequence selalu muncul setiap kali halaman di-load (tidak disimpan di localStorage)
    const timer = setTimeout(() => {
      setShowSequence(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSequenceComplete = () => {
    setShowSequence(false);

    // Cek apakah user sudah pernah melihat welcome modal utama
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");

    if (!hasSeenWelcome) {
      // Tampilkan welcome modal hanya jika belum pernah dilihat
      setTimeout(() => {
        setShowWelcome(true);
      }, 500);
    }
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
