"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { exercises, categories } from "@/data/exercises";
import { materials, materialCategories } from "@/data/materials";
import { userProgressManager } from "@/utils/userProgress";
import {
  BookOpen,
  Trophy,
  Target,
  Filter,
  ChevronRight,
  Star,
  Clock,
  ArrowLeft,
  PlayCircle,
  FileText,
  Book,
  CheckCircle,
  Code,
} from "lucide-react";

export default function MaterialsPage() {
  const [activeSection, setActiveSection] = useState<"materials" | "exercises">(
    "materials"
  );
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [progress, setProgress] = useState({
    totalExercises: 0,
    completedExercises: 0,
    totalXP: 0,
    level: 1,
    percentage: 0,
  });
  const [exerciseStatuses, setExerciseStatuses] = useState<
    Record<string, { completed: boolean; attempts: number; score: number }>
  >({});
  const [completedMaterials, setCompletedMaterials] = useState<string[]>([]);

  useEffect(() => {
    const progressData = userProgressManager.getOverallProgress();
    setProgress(progressData);

    // Get status for each exercise
    const statuses: Record<
      string,
      { completed: boolean; attempts: number; score: number }
    > = {};
    exercises.forEach((exercise) => {
      statuses[exercise.id] = userProgressManager.getExerciseStatus(
        exercise.id
      );
    });
    setExerciseStatuses(statuses);

    // Load completed materials
    const stored = localStorage.getItem("completedMaterials");
    if (stored) {
      setCompletedMaterials(JSON.parse(stored));
    }
  }, []);

  const filteredExercises = exercises.filter((exercise) => {
    const categoryMatch =
      selectedCategory === "Semua" || exercise.category === selectedCategory;
    const difficultyMatch =
      selectedDifficulty === "all" ||
      exercise.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const filteredMaterials = materials.filter((material) => {
    return (
      selectedCategory === "Semua" || material.category === selectedCategory
    );
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "text-green-600 bg-green-100";
      case "intermediate":
        return "text-yellow-600 bg-yellow-100";
      case "advanced":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "Pemula";
      case "intermediate":
        return "Menengah";
      case "advanced":
        return "Lanjutan";
      default:
        return difficulty;
    }
  };

  // Calculate totals for progress display
  const totalCount = exercises.length + materials.length;
  const completedCount =
    progress.completedExercises + completedMaterials.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium shadow-md text-sm sm:text-base"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="hidden xs:inline">Home</span>
                </motion.button>
              </Link>

              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 flex items-center gap-1 sm:gap-2 lg:gap-3">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 text-blue-600 flex-shrink-0" />
                  <span className="truncate text-sm sm:text-lg lg:text-xl xl:text-2xl">
                    <span className="hidden sm:inline">
                      Materi Pembelajaran{" "}
                    </span>
                    Python
                  </span>
                </h1>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mt-1 hidden sm:block">
                  Pelajari teori dan kerjakan latihan interaktif
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <Link href="/history">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors font-medium shadow-md text-sm sm:text-base"
                >
                  <Clock className="h-4 w-4" />
                  <span className="hidden xs:inline">Riwayat</span>
                </motion.button>
              </Link>

              <div className="text-right min-w-0">
                <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                  <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 flex-shrink-0" />
                  <span className="hidden xs:inline">Progress:</span>
                  <span className="font-medium">
                    {completedCount}/{totalCount}
                  </span>
                </div>
                <div className="w-16 sm:w-20 bg-gray-200 rounded-full h-1.5 sm:h-2 mt-1">
                  <div
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-1.5 sm:h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(completedCount / totalCount) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Progress Belajar
            </h2>
            <span className="text-2xl font-bold text-blue-600">
              {progress.completedExercises}/{progress.totalExercises}
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress.percentage}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {progress.totalXP}
              </div>
              <div className="text-sm text-gray-600">Total XP</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {progress.level}
              </div>
              <div className="text-sm text-gray-600">Level</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {progress.percentage.toFixed(0)}%
              </div>
              <div className="text-sm text-gray-600">Latihan Selesai</div>
            </div>
            <div className="text-center p-3 bg-indigo-50 rounded-lg">
              <div className="text-2xl font-bold text-indigo-600">
                {completedMaterials.length}/{materials.length}
              </div>
              <div className="text-sm text-gray-600">Materi Selesai</div>
            </div>
          </div>
        </motion.div>

        {/* Section Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <div className="bg-gray-100 rounded-2xl p-1.5 sm:p-2 shadow-inner w-full max-w-md sm:max-w-none sm:w-auto">
            <div className="grid grid-cols-2 sm:flex sm:space-x-2 gap-1 sm:gap-0">
              <button
                onClick={() => setActiveSection("materials")}
                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base ${
                  activeSection === "materials"
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
                }`}
              >
                <Book className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden xs:inline">Materi </span>Teori
              </button>
              <button
                onClick={() => setActiveSection("exercises")}
                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base ${
                  activeSection === "exercises"
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
                }`}
              >
                <Code className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden xs:inline">Latihan </span>Praktik
              </button>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 lg:p-10 mb-8 overflow-hidden relative"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100/20 to-transparent rounded-full translate-y-12 -translate-x-12"></div>

          {/* Header */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl shadow-lg">
                  <Filter className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Filter & Pencarian
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {activeSection === "materials"
                    ? "Temukan materi pembelajaran"
                    : "Pilih latihan yang tepat"}
                </p>
              </div>
            </div>

            {/* Results Counter */}
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full border border-blue-100">
              <span className="text-sm font-medium text-gray-700">
                {
                  (activeSection === "materials"
                    ? filteredMaterials
                    : filteredExercises
                  ).length
                }{" "}
                item ditemukan
              </span>
            </div>
          </div>

          {/* Category Filter */}
          <div className="relative z-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <label className="text-lg font-bold text-gray-800">
                  Kategori
                </label>
              </div>
              <div className="h-px bg-gradient-to-r from-gray-200 to-transparent flex-1"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {(activeSection === "materials"
                ? materialCategories
                : categories
              ).map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className={`group relative px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ease-out overflow-hidden ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:text-blue-600 border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md"
                  }`}
                >
                  {/* Active Background Animation */}
                  {selectedCategory === category && (
                    <motion.div
                      layoutId="categoryActiveBackground"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"
                      initial={false}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}

                  {/* Hover Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      selectedCategory === category ? "hidden" : ""
                    }`}
                  ></div>

                  <span className="relative z-10 block truncate">
                    {category}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Difficulty Filter for Exercises */}
          {activeSection === "exercises" && (
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <label className="text-lg font-bold text-gray-800">
                    Tingkat Kesulitan
                  </label>
                </div>
                <div className="h-px bg-gradient-to-r from-gray-200 to-transparent flex-1"></div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  {
                    value: "all",
                    label: "Semua Tingkat",
                    icon: "🎯",
                    color: "from-slate-500 to-slate-600",
                    hoverColor: "from-slate-50 to-slate-100",
                    description: "Tampilkan semua level",
                  },
                  {
                    value: "beginner",
                    label: "Pemula",
                    icon: "🌱",
                    color: "from-green-500 to-emerald-600",
                    hoverColor: "from-green-50 to-emerald-50",
                    description: "Dasar & mudah dipahami",
                  },
                  {
                    value: "intermediate",
                    label: "Menengah",
                    icon: "⚡",
                    color: "from-yellow-500 to-orange-500",
                    hoverColor: "from-yellow-50 to-orange-50",
                    description: "Tantangan sedang",
                  },
                  {
                    value: "advanced",
                    label: "Lanjutan",
                    icon: "🚀",
                    color: "from-red-500 to-pink-600",
                    hoverColor: "from-red-50 to-pink-50",
                    description: "Kompleks & menantang",
                  },
                ].map((difficulty, index) => (
                  <motion.button
                    key={difficulty.value}
                    onClick={() => setSelectedDifficulty(difficulty.value)}
                    whileHover={{
                      scale: 1.03,
                      y: -3,
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className={`group relative px-4 py-6 rounded-3xl text-sm font-semibold transition-all duration-500 ease-out overflow-hidden ${
                      selectedDifficulty === difficulty.value
                        ? `bg-gradient-to-br ${difficulty.color} text-white shadow-xl border-2 border-white/20`
                        : `bg-white text-gray-700 hover:text-gray-800 border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl`
                    }`}
                  >
                    {/* Active Background Animation */}
                    {selectedDifficulty === difficulty.value && (
                      <motion.div
                        layoutId="difficultyActiveBackground"
                        className={`absolute inset-0 bg-gradient-to-br ${difficulty.color}`}
                        initial={false}
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}

                    {/* Hover Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        difficulty.hoverColor
                      } opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                        selectedDifficulty === difficulty.value ? "hidden" : ""
                      }`}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      {/* Icon with Animation */}
                      <motion.div
                        className="text-3xl"
                        animate={{
                          scale:
                            selectedDifficulty === difficulty.value
                              ? [1, 1.2, 1]
                              : 1,
                          rotate:
                            selectedDifficulty === difficulty.value
                              ? [0, 10, -10, 0]
                              : 0,
                        }}
                        transition={{
                          duration:
                            selectedDifficulty === difficulty.value ? 0.6 : 0.3,
                          ease: "easeOut",
                        }}
                      >
                        {difficulty.icon}
                      </motion.div>

                      {/* Label */}
                      <div className="text-center">
                        <div className="font-bold text-base mb-1">
                          {difficulty.label}
                        </div>
                        <div
                          className={`text-xs opacity-80 ${
                            selectedDifficulty === difficulty.value
                              ? "text-white/80"
                              : "text-gray-500"
                          }`}
                        >
                          {difficulty.description}
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div
                      className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                        difficulty.color
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        selectedDifficulty === difficulty.value
                          ? "opacity-100"
                          : ""
                      }`}
                    ></div>
                  </motion.button>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.1,
          }}
        >
          {activeSection === "materials" ? (
            // Materials Grid
            <div className="grid gap-4 sm:gap-6">
              {filteredMaterials.map((material, index) => {
                const isCompleted = completedMaterials.includes(material.id);

                return (
                  <motion.div
                    key={material.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{
                      y: -4,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden ${
                      isCompleted ? "ring-2 ring-green-500 ring-opacity-50" : ""
                    }`}
                  >
                    <div className="p-4 sm:p-6">
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                              {material.category}
                            </span>
                            {isCompleted && (
                              <div className="flex items-center gap-1">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-xs text-green-600 font-medium">
                                  Selesai
                                </span>
                              </div>
                            )}
                          </div>

                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                            {material.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                            {material.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
                              <span className="hidden xs:inline">Materi </span>
                              Teori
                            </div>
                            <div className="flex items-center gap-1">
                              <Target className="h-3 w-3 sm:h-4 sm:w-4" />
                              {material.keyPoints.length} Poin
                            </div>
                            {material.relatedExercises.length > 0 && (
                              <div className="flex items-center gap-1">
                                <Code className="h-3 w-3 sm:h-4 sm:w-4" />
                                {material.relatedExercises.length}{" "}
                                <span className="hidden xs:inline">
                                  Latihan
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        <Link href={`/material/${material.id}`}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium flex items-center gap-1 sm:gap-2 transition-colors text-sm sm:text-base ${
                              isCompleted
                                ? "bg-green-100 text-green-700 hover:bg-green-200"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                            }`}
                          >
                            <Book className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="hidden xs:inline">
                              {isCompleted ? "Baca Ulang" : "Pelajari"}
                            </span>
                            <span className="xs:hidden">
                              {isCompleted ? "Ulang" : "Baca"}
                            </span>
                            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            // Exercise List
            <div className="grid gap-4 sm:gap-6">
              {filteredExercises.map((exercise, index) => {
                const status = exerciseStatuses[exercise.id] || {
                  completed: false,
                  attempts: 0,
                  score: 0,
                };

                return (
                  <motion.div
                    key={exercise.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{
                      y: -4,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden ${
                      status.completed
                        ? "ring-2 ring-green-500 ring-opacity-50"
                        : ""
                    }`}
                  >
                    <div className="p-4 sm:p-6">
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                            <span className="text-xs sm:text-sm font-medium text-gray-500">
                              #{exercise.id}
                            </span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                                exercise.difficulty
                              )}`}
                            >
                              {getDifficultyText(exercise.difficulty)}
                            </span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                              {exercise.category}
                            </span>
                            {status.completed && (
                              <div className="flex items-center gap-1">
                                <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                                <span className="text-xs text-green-600 font-medium">
                                  Selesai
                                </span>
                              </div>
                            )}
                          </div>

                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                            {exercise.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                            {exercise.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 sm:h-4 sm:w-4" />
                              {exercise.points} XP
                            </div>
                            {status.attempts > 0 && (
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span className="hidden xs:inline">
                                  {status.attempts} percobaan
                                </span>
                                <span className="xs:hidden">
                                  {status.attempts}x
                                </span>
                              </div>
                            )}
                            {status.completed && (
                              <div className="flex items-center gap-1">
                                <Target className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                                {status.score} XP
                              </div>
                            )}
                          </div>
                        </div>

                        <Link href={`/exercise/${exercise.id}`}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium flex items-center gap-1 sm:gap-2 transition-colors text-sm sm:text-base ${
                              status.completed
                                ? "bg-green-100 text-green-700 hover:bg-green-200"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                            }`}
                          >
                            <PlayCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="hidden xs:inline">
                              {status.completed ? "Ulangi" : "Mulai Latihan"}
                            </span>
                            <span className="xs:hidden">
                              {status.completed ? "Ulang" : "Mulai"}
                            </span>
                            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* Empty State */}
        {((activeSection === "materials" && filteredMaterials.length === 0) ||
          (activeSection === "exercises" &&
            filteredExercises.length === 0)) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-xl mb-2">
              Tidak ada {activeSection === "materials" ? "materi" : "latihan"}{" "}
              yang ditemukan
            </div>
            <div className="text-gray-500">
              Coba ubah filter untuk melihat{" "}
              {activeSection === "materials" ? "materi" : "latihan"} lainnya
            </div>
          </motion.div>
        )}

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6"
        >
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">
            💡 Tips Belajar Efektif
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-700">
            <div>• Baca materi teori terlebih dahulu sebelum latihan</div>
            <div>• Praktikkan setiap konsep dengan menulis kode</div>
            <div>• Gunakan fitur hints jika mengalami kesulitan</div>
            <div>• Ulangi materi dan latihan untuk memperkuat pemahaman</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
