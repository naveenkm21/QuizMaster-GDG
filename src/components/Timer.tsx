import React, { useEffect, useState } from 'react';
import { useQuizStore } from '../store/quizStore';

const Timer: React.FC = () => {
  const { timeRemaining, updateTimeRemaining, showFeedback } = useQuizStore();
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Don't count down during feedback display
    if (showFeedback) return;
    
    const timer = setInterval(() => {
      updateTimeRemaining(Math.max(0, timeRemaining - 1));
      
      // Warning animation when time is running low
      if (timeRemaining <= 5 && timeRemaining > 0) {
        setIsAnimating(true);
      } else {
        setIsAnimating(false);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeRemaining, updateTimeRemaining, showFeedback]);
  
  // Calculate percentage for progress bar
  const currentQuestion = useQuizStore(state => 
    state.questions[state.currentQuestionIndex]
  );
  
  const maxTime = currentQuestion?.timeLimit || 30;
  const percentage = Math.floor((timeRemaining / maxTime) * 100);
  
  // Determine color based on time remaining
  let colorClass = 'bg-success-500';
  if (percentage < 50 && percentage >= 25) {
    colorClass = 'bg-warning-500';
  } else if (percentage < 25) {
    colorClass = 'bg-error-500';
  }
  
  return (
    <div className="w-full mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">Time Remaining</span>
        <span className={`text-lg font-bold ${isAnimating ? 'animate-pulse text-error-600' : ''}`}>
          {timeRemaining}s
        </span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ${colorClass}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Timer;