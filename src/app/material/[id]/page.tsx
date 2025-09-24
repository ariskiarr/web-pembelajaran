"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Book,
  CheckCircle,
  Target,
  Clock,
  BookOpen,
  Code,
  Trophy,
  Menu,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { materials, LearningMaterial } from "@/data/materials";
import { exercises } from "@/data/exercises";

export default function MaterialPage() {
  const params = useParams();
  const router = useRouter();
  const [material, setMaterial] = useState<LearningMaterial | null>(null);
  const [completedMaterials, setCompletedMaterials] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (params.id) {
      const foundMaterial = materials.find((m) => m.id === params.id);
      setMaterial(foundMaterial || null);

      // Load completed materials from localStorage
      const stored = localStorage.getItem("completedMaterials");
      if (stored) {
        setCompletedMaterials(JSON.parse(stored));
      }
    }
  }, [params.id]);

  const markAsCompleted = () => {
    if (!material) return;

    const updated = [...completedMaterials, material.id];
    setCompletedMaterials(updated);
    localStorage.setItem("completedMaterials", JSON.stringify(updated));
  };

  const isCompleted = material
    ? completedMaterials.includes(material.id)
    : false;

  // Get related exercises
  const relatedExercises = material
    ? exercises.filter((exercise) =>
        material.relatedExercises.includes(exercise.id)
      )
    : [];

  if (!material) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Book className="w-8 h-8 text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Material Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The material you&apos;re looking for doesn&apos;t exist.
          </p>
          <button
            onClick={() => router.push("/materials")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Materials
          </button>
        </div>
      </div>
    );
  }

  const formatTextWithMarkdown = (text: string) => {
    // Simple approach: find and replace patterns one by one
    const processText = (inputText: string): (string | React.ReactElement)[] => {
      const result: (string | React.ReactElement)[] = [];
      let remaining = inputText;
      let elementKey = 0;

      while (remaining.length > 0) {
        // Look for **bold** pattern (non-greedy)
        const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
        if (boldMatch && boldMatch.index !== undefined) {
          // Add text before the match
          if (boldMatch.index > 0) {
            result.push(remaining.substring(0, boldMatch.index));
          }
          
          // Add bold element
          result.push(
            <strong key={`bold-${elementKey++}`} className="font-bold text-gray-900">
              {boldMatch[1]}
            </strong>
          );
          
          // Continue with remaining text
          remaining = remaining.substring(boldMatch.index + boldMatch[0].length);
          continue;
        }

        // Look for `code` pattern
        const codeMatch = remaining.match(/`(.+?)`/);
        if (codeMatch && codeMatch.index !== undefined) {
          // Add text before the match
          if (codeMatch.index > 0) {
            result.push(remaining.substring(0, codeMatch.index));
          }
          
          // Add code element
          result.push(
            <code key={`code-${elementKey++}`} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
              {codeMatch[1]}
            </code>
          );
          
          // Continue with remaining text
          remaining = remaining.substring(codeMatch.index + codeMatch[0].length);
          continue;
        }

        // No more patterns found, add remaining text
        result.push(remaining);
        break;
      }

      return result;
    };

    return processText(text);
  };

  const formatContent = (content: string) => {
    return content.split("\n").map((line, index) => {
      // Handle headers
      if (line.startsWith("# ")) {
        return (
          <h1
            key={index}
            className="text-3xl font-bold text-gray-900 mb-6 mt-8 first:mt-0"
          >
            {formatTextWithMarkdown(line.slice(2))}
          </h1>
        );
      }
      if (line.startsWith("## ")) {
        return (
          <h2
            key={index}
            className="text-2xl font-bold text-gray-800 mb-4 mt-6"
          >
            {formatTextWithMarkdown(line.slice(3))}
          </h2>
        );
      }
      if (line.startsWith("### ")) {
        return (
          <h3
            key={index}
            className="text-xl font-semibold text-gray-800 mb-3 mt-5"
          >
            {formatTextWithMarkdown(line.slice(4))}
          </h3>
        );
      }

      // Handle code blocks
      if (line.startsWith("```")) {
        return null; // Handle in a separate function
      }

      // Handle bullet points
      if (line.startsWith("- ")) {
        return (
          <li
            key={index}
            className="text-gray-700 leading-relaxed mb-2 ml-4 list-disc"
          >
            {formatTextWithMarkdown(line.slice(2))}
          </li>
        );
      }

      // Handle numbered lists
      if (/^\d+\./.test(line.trim())) {
        return (
          <li
            key={index}
            className="text-gray-700 leading-relaxed mb-2 ml-4 list-decimal"
          >
            {formatTextWithMarkdown(line.replace(/^\d+\.\s*/, ""))}
          </li>
        );
      }

      // Regular paragraphs
      if (line.trim()) {
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {formatTextWithMarkdown(line)}
          </p>
        );
      }

      return <br key={index} />;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push("/materials")}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <div className="hidden sm:block w-px h-6 bg-gray-300" />

              <div>
                <h1 className="text-lg font-semibold text-gray-900 truncate">
                  {material.title}
                </h1>
                <p className="text-sm text-gray-500">{material.category}</p>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-3">
              {/* Progress indicator */}
              <div className="hidden sm:flex items-center space-x-2">
                {isCompleted ? (
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Completed</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm">In Progress</span>
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="sm:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        {(isSidebarOpen ||
          (typeof window !== "undefined" && window.innerWidth >= 768)) && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="fixed sm:sticky top-16 left-0 w-80 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 z-30 overflow-y-auto"
          >
            <div className="p-6">
              {/* Material overview */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Overview
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Key Points
                      </h4>
                      <p className="text-sm text-gray-600">
                        {material.keyPoints.length} important concepts
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Practice
                      </h4>
                      <p className="text-sm text-gray-600">
                        {relatedExercises.length} related exercises
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Points */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Points
                </h3>
                <ul className="space-y-3">
                  {material.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-blue-600">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Next Steps */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Next Steps
                </h3>
                <ul className="space-y-3">
                  {material.nextSteps.map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {step}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Exercises */}
              {relatedExercises.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Practice Exercises
                  </h3>
                  <div className="space-y-2">
                    {relatedExercises.map((exercise) => (
                      <button
                        key={exercise.id}
                        onClick={() => router.push(`/exercise/${exercise.id}`)}
                        className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600">
                              {exercise.title}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {exercise.difficulty}
                            </p>
                          </div>
                          <Target className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.aside>
        )}

        {/* Main Content */}
        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
          >
            {/* Article Header */}
            <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                    <BookOpen className="w-4 h-4 mr-2" />
                    {material.category}
                  </div>
                  <h1 className="text-3xl font-bold mb-4">{material.title}</h1>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    {material.description}
                  </p>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                {formatContent(material.content)}
              </div>

              {/* Code Example */}
              {material.codeExample && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-gray-600" />
                    Code Example
                  </h3>
                  <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      <code>{material.codeExample}</code>
                    </pre>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-200">
                {!isCompleted ? (
                  <button
                    onClick={markAsCompleted}
                    className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Mark as Completed</span>
                  </button>
                ) : (
                  <div className="flex-1 bg-green-50 border-2 border-green-200 text-green-800 py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Completed</span>
                  </div>
                )}

                {relatedExercises.length > 0 && (
                  <button
                    onClick={() =>
                      router.push(`/exercise/${relatedExercises[0].id}`)
                    }
                    className="flex-1 bg-gray-100 text-gray-800 py-4 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Trophy className="w-5 h-5" />
                    <span>Practice Now</span>
                  </button>
                )}
              </div>
            </div>
          </motion.article>
        </main>
      </div>

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 sm:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
