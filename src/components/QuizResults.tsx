import React from 'react';
import { motion } from 'framer-motion';
import { useQuizStore } from '../store/quizStore';
import { Award, BarChart, RefreshCw, Check, X } from 'lucide-react';

const QuizResults: React.FC = () => {
  const { answers, questions, restartQuiz, selectedCategory, selectedAvatar } = useQuizStore();
  
  // Calculate results
  const totalQuestions = questions.length;
  const correctAnswers = answers.filter(answer => answer.isCorrect).length;
  const totalScore = answers.reduce((total, answer) => total + answer.pointsEarned, 0);
  const maxPossibleScore = questions.reduce((total, question) => total + question.points, 0);
  const scorePercentage = Math.round((totalScore / maxPossibleScore) * 100);
  
  // Calculate performance metrics
  const averageTimePerQuestion = answers.length > 0 
    ? Math.round(answers.reduce((total, answer) => total + answer.timeSpent, 0) / answers.length) 
    : 0;
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24
      }
    }
  };
  
  // Get performance message
  const getPerformanceMessage = () => {
    if (scorePercentage >= 90) return "Outstanding! You're a quiz master!";
    if (scorePercentage >= 70) return "Great job! You know your stuff!";
    if (scorePercentage >= 50) return "Not bad! Room for improvement.";
    return "Keep practicing! You'll get better.";
  };
  
  return (
    <div className="quiz-container">
      <motion.div 
        className="card mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className={`w-12 h-12 rounded-full overflow-hidden ${selectedAvatar?.color || 'bg-primary-500'} mr-3`}>
              <img
                src={selectedAvatar?.src}
                alt={selectedAvatar?.name || 'Avatar'}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium">{selectedAvatar?.name || 'Player'}</p>
              <p className="text-sm text-gray-500">{selectedCategory?.name || 'Quiz'}</p>
            </div>
          </div>
          
          <Award size={48} className="text-accent-500" />
        </div>
        
        <motion.div
          className="text-center mb-8"
          variants={itemVariants}
        >
          <h1 className="text-3xl font-bold mb-2">Quiz Completed!</h1>
          <p className="text-xl text-gray-700">{getPerformanceMessage()}</p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          variants={itemVariants}
        >
          <div className="bg-primary-50 p-4 rounded-lg text-center">
            <p className="text-primary-600 font-medium mb-1">Total Score</p>
            <p className="text-3xl font-bold text-primary-700">{totalScore} <span className="text-lg">/ {maxPossibleScore}</span></p>
          </div>
          <div className="bg-secondary-50 p-4 rounded-lg text-center">
            <p className="text-secondary-600 font-medium mb-1">Accuracy</p>
            <p className="text-3xl font-bold text-secondary-700">{correctAnswers} <span className="text-lg">/ {totalQuestions}</span></p>
          </div>
          <div className="bg-accent-50 p-4 rounded-lg text-center">
            <p className="text-accent-600 font-medium mb-1">Avg. Time</p>
            <p className="text-3xl font-bold text-accent-700">{averageTimePerQuestion}s</p>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-4">Question Summary</h2>
          <div className="bg-gray-50 rounded-lg p-4 max-h-60 overflow-y-auto">
            {questions.map((question, index) => {
              const answer = answers[index];
              const isCorrect = answer?.isCorrect;
              
              return (
                <div 
                  key={question.id} 
                  className="flex items-start mb-3 pb-3 border-b border-gray-200 last:border-0"
                >
                  {isCorrect ? (
                    <Check size={20} className="text-success-500 mr-2 mt-1 flex-shrink-0" />
                  ) : (
                    <X size={20} className="text-error-500 mr-2 mt-1 flex-shrink-0" />
                  )}
                  <div>
                    <p className="font-medium">{question.text}</p>
                    <p className="text-sm text-gray-600">
                      {isCorrect 
                        ? `Correct (+${answer.pointsEarned} pts)` 
                        : `Incorrect (0 pts) • Correct answer: ${
                            question.options.find(opt => opt.id === question.correctOptionId)?.text
                          }`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="flex justify-center"
        variants={itemVariants}
      >
        <button 
          onClick={restartQuiz}
          className="btn btn-primary flex items-center"
        >
          <RefreshCw size={18} className="mr-2" />
          Take Another Quiz
        </button>
      </motion.div>
    </div>
  );
};

export default QuizResults;