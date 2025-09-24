export interface UserProgress {
  completedExercises: string[];
  scores: Record<string, number>; // exerciseId -> score
  attempts: Record<string, number>; // exerciseId -> attempt count
  totalXP: number;
  level: number;
  history: UserAttempt[];
}

export interface UserAttempt {
  id: string;
  exerciseId: string;
  exerciseTitle: string;
  code: string;
  output: string;
  success: boolean;
  timestamp: number;
  score: number;
}

class UserProgressManager {
  private readonly STORAGE_KEY = "python-learning-progress";

  getProgress(): UserProgress {
    if (typeof window === "undefined") {
      return this.getDefaultProgress();
    }

    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error("Error loading user progress:", error);
    }

    return this.getDefaultProgress();
  }

  saveProgress(progress: UserProgress): void {
    if (typeof window === "undefined") return;

    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error("Error saving user progress:", error);
    }
  }

  private getDefaultProgress(): UserProgress {
    return {
      completedExercises: [],
      scores: {},
      attempts: {},
      totalXP: 0,
      level: 1,
      history: [],
    };
  }

  addAttempt(
    exerciseId: string,
    exerciseTitle: string,
    code: string,
    output: string,
    success: boolean,
    points: number
  ): void {
    const progress = this.getProgress();

    const attempt: UserAttempt = {
      id: Date.now().toString(),
      exerciseId,
      exerciseTitle,
      code,
      output,
      success,
      timestamp: Date.now(),
      score: success ? points : 0,
    };

    progress.history.unshift(attempt); // Add to beginning
    progress.attempts[exerciseId] = (progress.attempts[exerciseId] || 0) + 1;

    if (success) {
      if (!progress.completedExercises.includes(exerciseId)) {
        progress.completedExercises.push(exerciseId);
        progress.totalXP += points;
        progress.scores[exerciseId] = points;

        // Calculate level based on XP
        progress.level = Math.floor(progress.totalXP / 100) + 1;
      }
    }

    // Keep only last 50 attempts
    if (progress.history.length > 50) {
      progress.history = progress.history.slice(0, 50);
    }

    this.saveProgress(progress);
  }

  getExerciseStatus(exerciseId: string): {
    completed: boolean;
    attempts: number;
    score: number;
  } {
    const progress = this.getProgress();
    return {
      completed: progress.completedExercises.includes(exerciseId),
      attempts: progress.attempts[exerciseId] || 0,
      score: progress.scores[exerciseId] || 0,
    };
  }

  getOverallProgress(): {
    totalExercises: number;
    completedExercises: number;
    totalXP: number;
    level: number;
    percentage: number;
  } {
    const progress = this.getProgress();
    const totalExercises = 10; // Update this based on actual number of exercises

    return {
      totalExercises,
      completedExercises: progress.completedExercises.length,
      totalXP: progress.totalXP,
      level: progress.level,
      percentage: (progress.completedExercises.length / totalExercises) * 100,
    };
  }

  resetProgress(): void {
    if (typeof window === "undefined") return;
    localStorage.removeItem(this.STORAGE_KEY);
  }

  getRecentHistory(limit: number = 10): UserAttempt[] {
    const progress = this.getProgress();
    return progress.history.slice(0, limit);
  }
}

export const userProgressManager = new UserProgressManager();
