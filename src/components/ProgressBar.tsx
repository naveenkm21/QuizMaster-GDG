import React from 'react';
import { useQuizStore } from '../store/quizStore';

const ProgressBar: React.FC = () => {
  const { currentQuestionIndex, questions } = useQuizStore();
  
  // Calculate progress percentage
  const progress = questions.length > 0 
    ? Math.floor(((currentQuestionIndex) / questions.length) * 100) 
    : 0;
  
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">
          Question {currentQuestionIndex + 1} of {questions.length}
        </span>
        <span className="text-sm font-medium">{progress}% Complete</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary-600 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;