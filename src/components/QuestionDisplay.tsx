import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuizStore } from '../store/quizStore';
import Timer from './Timer';
import ProgressBar from './ProgressBar';
import FeedbackDisplay from './FeedbackDisplay';
import { CheckCircle, XCircle } from 'lucide-react';
import ReactCanvasConfetti from 'react-canvas-confetti';

const QuestionDisplay: React.FC = () => {
  const { 
    questions, 
    currentQuestionIndex, 
    selectedOptionId, 
    selectOption, 
    submitAnswer, 
    nextQuestion,
    showFeedback,
    isAnswerCorrect,
    selectedAvatar,
    selectedCategory
  } = useQuizStore();
  
  const currentQuestion = questions[currentQuestionIndex];
  const [animateOptions, setAnimateOptions] = useState(true);
  const [confetti, setConfetti] = useState(false);
  
  useEffect(() => {
    // Reset animation state when question changes
    setAnimateOptions(true);
    setConfetti(false);
  }, [currentQuestionIndex]);
  
  useEffect(() => {
    // Show confetti for correct answers
    if (showFeedback && isAnswerCorrect) {
      setConfetti(true);
    }
  }, [showFeedback, isAnswerCorrect]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };
  
  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24
      }
    }
  };
  
  const handleOptionClick = (optionId: string) => {
    if (!showFeedback) {
      selectOption(optionId);
    }
  };
  
  const handleNextClick = () => {
    setAnimateOptions(false);
    setTimeout(() => {
      nextQuestion();
    }, 300);
  };
  
  const getOptionClass = (optionId: string) => {
    let className = "answer-option";
    
    if (showFeedback) {
      if (optionId === currentQuestion.correctOptionId) {
        className += " correct";
      } else if (optionId === selectedOptionId && optionId !== currentQuestion.correctOptionId) {
        className += " incorrect";
      }
    } else if (optionId === selectedOptionId) {
      className += " selected";
    }
    
    return className;
  };
  
  // Confetti config
  const canvasStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 50
  } as React.CSSProperties;
  
  if (!currentQuestion) return null;
  
  return (
    <div className="quiz-container relative">
      {confetti && (
        <ReactCanvasConfetti
          style={canvasStyles}
          fire={confetti}
          colors={['#8B5CF6', '#EC4899', '#FBBF24', '#10B981']}
          origin={{ x: 0.5, y: 0.7 }}
        />
      )}
      
      <div className="card mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full overflow-hidden ${selectedAvatar?.color || 'bg-primary-500'} mr-3`}>
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
          
          <div className="text-right">
            <p className="text-xl font-bold">
              {useQuizStore(state => {
                return state.answers.reduce((total, answer) => total + answer.pointsEarned, 0);
              })} pts
            </p>
          </div>
        </div>
        
        <ProgressBar />
        <Timer />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h2 className="text-2xl font-bold mb-6">{currentQuestion.text}</h2>
            
            <div className="space-y-3 mb-6">
              {animateOptions && currentQuestion.options.map((option) => (
                <motion.div
                  key={option.id}
                  variants={itemVariants}
                  onClick={() => handleOptionClick(option.id)}
                  className={getOptionClass(option.id)}
                >
                  <div className="flex-1">
                    <p className="font-medium">{option.text}</p>
                  </div>
                  {showFeedback && option.id === currentQuestion.correctOptionId && (
                    <CheckCircle className="text-success-500 ml-2" size={24} />
                  )}
                  {showFeedback && option.id === selectedOptionId && option.id !== currentQuestion.correctOptionId && (
                    <XCircle className="text-error-500 ml-2" size={24} />
                  )}
                </motion.div>
              ))}
            </div>
            
            {showFeedback ? (
              <FeedbackDisplay />
            ) : (
              <div className="flex justify-center">
                <button 
                  onClick={submitAnswer}
                  disabled={!selectedOptionId}
                  className={`btn btn-primary w-full max-w-xs ${!selectedOptionId ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Submit Answer
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {showFeedback && (
        <div className="flex justify-center">
          <button 
            onClick={handleNextClick}
            className="btn btn-accent w-full max-w-xs"
          >
            {currentQuestionIndex === questions.length - 1 ? 'See Results' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionDisplay;