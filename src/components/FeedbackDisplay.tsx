import React from 'react';
import { motion } from 'framer-motion';
import { useQuizStore } from '../store/quizStore';
import { CheckCircle, XCircle } from 'lucide-react';

const FeedbackDisplay: React.FC = () => {
  const { questions, currentQuestionIndex, isAnswerCorrect, answers } = useQuizStore();
  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = answers[answers.length - 1];
  
  if (!currentQuestion || !currentAnswer) return null;
  
  const feedbackVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
        duration: 0.5
      }
    }
  };
  
  return (
    <motion.div 
      className="bg-gray-50 rounded-lg p-4 mb-4"
      variants={feedbackVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center mb-3">
        {isAnswerCorrect ? (
          <>
            <CheckCircle className="text-success-500 mr-2" size={24} />
            <h3 className="text-xl font-bold text-success-600">Correct!</h3>
          </>
        ) : (
          <>
            <XCircle className="text-error-500 mr-2" size={24} />
            <h3 className="text-xl font-bold text-error-600">Incorrect</h3>
          </>
        )}
      </div>
      
      <div className="mb-2">
        <p className="font-medium">Explanation:</p>
        <p className="text-gray-700">{currentQuestion.explanation}</p>
      </div>
      
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-gray-600">Time spent: <span className="font-medium">{currentAnswer.timeSpent}s</span></p>
        </div>
        <div>
          <p className="text-sm font-medium">
            {isAnswerCorrect ? `+${currentAnswer.pointsEarned} points` : '+0 points'}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackDisplay;