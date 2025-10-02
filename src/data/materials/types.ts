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

export const materialCategories = [
  "Semua",
  "Dasar",
  "Kontrol Alur",
  "Struktur Data",
  "Function",
  "Advanced",
];
