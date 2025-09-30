"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen } from "lucide-react";
import HistoryComponent from "@/components/History";

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium shadow-md text-sm sm:text-base"
              >
                <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">Kembali</span>
              </motion.button>
            </Link>

            <div className="min-w-0 flex-1">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-2 sm:gap-3">
                <BookOpen className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-blue-600 flex-shrink-0" />
                <span className="truncate">Riwayat Belajar</span>
              </h1>
              <p className="text-xs sm:text-base text-gray-600 mt-1 hidden sm:block">
                Lihat progress dan riwayat latihan kamu
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <HistoryComponent />
      </div>
    </div>
  );
}
