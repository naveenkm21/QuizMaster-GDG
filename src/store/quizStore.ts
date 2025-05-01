import { create } from 'zustand';
import { QuizState, QuizCategory, Avatar, QuizQuestion, AnswerResult, Achievement } from '../types';
import { getQuestionsByCategory } from '../data/quizQuestions';
import { playSound, stopSound } from '../utils/sound';

const STREAK_MULTIPLIER = 0.2; // 20% bonus per streak
const TIME_BONUS_THRESHOLD = 0.7; // 70% of time remaining for bonus
const POWER_BONUS_MULTIPLIER = 1.5;

export const useQuizStore = create<QuizState>((set, get) => ({
  currentScreen: 'start',
  selectedCategory: null,
  selectedAvatar: null,
  currentQuestionIndex: 0,
  questions: [],
  selectedOptionId: null,
  answers: [],
  timeRemaining: 0,
  showFeedback: false,
  isAnswerCorrect: null,
  achievements: [],
  analytics: {
    averageTimePerQuestion: 0,
    correctAnswerStreak: 0,
    powerUpsUsed: 0,
    achievementsUnlocked: 0,
    totalBonusPoints: 0
  },
  streak: 0,
  powerAvailable: true,
  
  setScreen: (screen) => set({ currentScreen: screen }),
  
  selectCategory: (category) => {
    set({ 
      selectedCategory: category,
      currentScreen: 'avatar',
      achievements: (category.achievements || []).map(a => ({ ...a, unlocked: false }))
    });
  },
  
  selectAvatar: (avatar) => {
    const { selectedCategory } = get();
    
    if (selectedCategory) {
      const questions = getQuestionsByCategory(selectedCategory.id);
      set({ 
        selectedAvatar: avatar,
        questions,
        currentScreen: 'question',
        timeRemaining: questions[0]?.timeLimit || 0,
      });
      playSound('tick');
    }
  },
  
  loadQuestions: (questions) => {
    set({ 
      questions,
      currentQuestionIndex: 0,
      answers: [],
      timeRemaining: questions[0]?.timeLimit || 0,
    });
  },
  
  selectOption: (optionId) => {
    set({ selectedOptionId: optionId });
  },
  
  submitAnswer: () => {
    const { 
      questions, 
      currentQuestionIndex, 
      selectedOptionId, 
      timeRemaining,
      streak,
      selectedAvatar,
      powerAvailable 
    } = get();
    
    const currentQuestion = questions[currentQuestionIndex];
    stopSound('tick');
    
    if (!currentQuestion) return;
    
    const timeSpent = currentQuestion.timeLimit - timeRemaining;
    const isCorrect = selectedOptionId === currentQuestion.correctOptionId;
    
    let pointsEarned = 0;
    let bonusPoints = 0;
    
    if (isCorrect) {
      // Base points
      pointsEarned = currentQuestion.points;
      
      // Streak bonus
      if (streak > 0) {
        bonusPoints += Math.round(pointsEarned * (streak * STREAK_MULTIPLIER));
      }
      
      // Time bonus
      const timeRatio = timeRemaining / currentQuestion.timeLimit;
      if (timeRatio >= TIME_BONUS_THRESHOLD) {
        bonusPoints += Math.round(pointsEarned * 0.3); // 30% time bonus
      }
      
      // Power bonus
      if (selectedAvatar?.specialPower && powerAvailable) {
        bonusPoints += Math.round(pointsEarned * POWER_BONUS_MULTIPLIER);
      }
      
      playSound('correct');
    } else {
      playSound('incorrect');
    }
    
    const answerResult: AnswerResult = {
      questionId: currentQuestion.id,
      selectedOptionId,
      isCorrect,
      timeSpent,
      pointsEarned,
      bonusPoints,
      powerUsed: powerAvailable
    };
    
    set(state => ({ 
      answers: [...state.answers, answerResult],
      showFeedback: true,
      isAnswerCorrect: isCorrect,
      streak: isCorrect ? state.streak + 1 : 0,
      powerAvailable: false
    }));
    
    get().checkAchievements();
    get().updateAnalytics();
  },
  
  nextQuestion: () => {
    const { currentQuestionIndex, questions } = get();
    const nextIndex = currentQuestionIndex + 1;
    
    if (nextIndex < questions.length) {
      set({ 
        currentQuestionIndex: nextIndex,
        selectedOptionId: null,
        showFeedback: false,
        isAnswerCorrect: null,
        timeRemaining: questions[nextIndex].timeLimit,
        powerAvailable: true
      });
      playSound('tick');
    } else {
      // Quiz completed
      set({ 
        currentScreen: 'result',
        showFeedback: false,
        isAnswerCorrect: null,
      });
      stopSound('tick');
    }
  },
  
  updateTimeRemaining: (time) => {
    set({ timeRemaining: time });
    
    // Auto-submit if time runs out
    if (time <= 0) {
      stopSound('tick');
      const { selectedOptionId } = get();
      if (selectedOptionId === null) {
        set({ selectedOptionId: 'timeout' });
      }
      get().submitAnswer();
    }
  },
  
  restartQuiz: () => {
    stopSound('tick');
    set({
      currentScreen: 'start',
      selectedCategory: null,
      selectedAvatar: null,
      currentQuestionIndex: 0,
      questions: [],
      selectedOptionId: null,
      answers: [],
      timeRemaining: 0,
      showFeedback: false,
      isAnswerCorrect: null,
      streak: 0,
      powerAvailable: true,
      analytics: {
        averageTimePerQuestion: 0,
        correctAnswerStreak: 0,
        powerUpsUsed: 0,
        achievementsUnlocked: 0,
        totalBonusPoints: 0
      }
    });
  },
  
  usePower: () => {
    const { selectedAvatar, timeRemaining, currentQuestion } = get();
    
    if (selectedAvatar?.specialPower && get().powerAvailable) {
      switch (selectedAvatar.specialPower.effect) {
        case 'extraTime':
          set({ timeRemaining: timeRemaining + 10 });
          break;
        case 'pointBoost':
          // Handled in submitAnswer
          break;
        case 'hintReveal':
          // Show hint if available
          break;
      }
      
      set(state => ({
        analytics: {
          ...state.analytics,
          powerUpsUsed: state.analytics.powerUpsUsed + 1
        }
      }));
    }
  },
  
  checkAchievements: () => {
    const { achievements, answers, analytics } = get();
    
    achievements.forEach(achievement => {
      if (!achievement.unlocked) {
        let shouldUnlock = false;
        
        switch (achievement.condition.type) {
          case 'score':
            const totalScore = answers.reduce((sum, answer) => 
              sum + answer.pointsEarned + answer.bonusPoints, 0);
            shouldUnlock = totalScore >= achievement.condition.value;
            break;
          case 'speed':
            shouldUnlock = analytics.averageTimePerQuestion <= achievement.condition.value;
            break;
          case 'streak':
            shouldUnlock = analytics.correctAnswerStreak >= achievement.condition.value;
            break;
        }
        
        if (shouldUnlock) {
          achievement.unlocked = true;
          playSound('achievement');
          set(state => ({
            analytics: {
              ...state.analytics,
              achievementsUnlocked: state.analytics.achievementsUnlocked + 1
            }
          }));
        }
      }
    });
  },
  
  updateAnalytics: () => {
    const { answers, streak } = get();
    
    const totalTime = answers.reduce((sum, answer) => sum + answer.timeSpent, 0);
    const averageTime = answers.length > 0 ? totalTime / answers.length : 0;
    const totalBonusPoints = answers.reduce((sum, answer) => sum + answer.bonusPoints, 0);
    
    set(state => ({
      analytics: {
        ...state.analytics,
        averageTimePerQuestion: averageTime,
        correctAnswerStreak: Math.max(state.analytics.correctAnswerStreak, streak),
        totalBonusPoints
      }
    }));
  }
}));