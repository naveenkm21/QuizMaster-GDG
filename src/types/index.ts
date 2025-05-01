export interface QuizCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  difficulty: 'easy' | 'medium' | 'hard';
  questionsCount: number;
  achievements?: Achievement[];
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
  correctOptionId: string;
  timeLimit: number;
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  hint?: string;
}

export interface QuizOption {
  id: string;
  text: string;
}

export interface Avatar {
  id: string;
  src: string;
  name: string;
  color: string;
  specialPower?: {
    name: string;
    description: string;
    effect: 'extraTime' | 'pointBoost' | 'hintReveal';
  };
}

export interface AnswerResult {
  questionId: string;
  selectedOptionId: string | null;
  isCorrect: boolean;
  timeSpent: number;
  pointsEarned: number;
  bonusPoints: number;
  powerUsed?: boolean;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: {
    type: 'score' | 'speed' | 'streak';
    value: number;
  };
  reward: {
    type: 'points' | 'power';
    value: number;
  };
  unlocked: boolean;
}

export interface Analytics {
  averageTimePerQuestion: number;
  correctAnswerStreak: number;
  powerUpsUsed: number;
  achievementsUnlocked: number;
  totalBonusPoints: number;
}

export interface QuizState {
  currentScreen: 'start' | 'avatar' | 'question' | 'result';
  selectedCategory: QuizCategory | null;
  selectedAvatar: Avatar | null;
  currentQuestionIndex: number;
  questions: QuizQuestion[];
  selectedOptionId: string | null;
  answers: AnswerResult[];
  timeRemaining: number;
  showFeedback: boolean;
  isAnswerCorrect: boolean | null;
  achievements: Achievement[];
  analytics: Analytics;
  streak: number;
  powerAvailable: boolean;
  
  // Actions
  setScreen: (screen: 'start' | 'avatar' | 'question' | 'result') => void;
  selectCategory: (category: QuizCategory) => void;
  selectAvatar: (avatar: Avatar) => void;
  loadQuestions: (questions: QuizQuestion[]) => void;
  selectOption: (optionId: string) => void;
  submitAnswer: () => void;
  nextQuestion: () => void;
  updateTimeRemaining: (time: number) => void;
  restartQuiz: () => void;
  usePower: () => void;
  checkAchievements: () => void;
  updateAnalytics: () => void;
}