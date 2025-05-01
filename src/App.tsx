import React from 'react';
import { useQuizStore } from './store/quizStore';
import CategorySelection from './components/CategorySelection';
import AvatarSelection from './components/AvatarSelection';
import QuestionDisplay from './components/QuestionDisplay';
import QuizResults from './components/QuizResults';

function App() {
  const currentScreen = useQuizStore(state => state.currentScreen);
  
  // Display the appropriate screen based on the current state
  const renderScreen = () => {
    switch (currentScreen) {
      case 'start':
        return <CategorySelection />;
      case 'avatar':
        return <AvatarSelection />;
      case 'question':
        return <QuestionDisplay />;
      case 'result':
        return <QuizResults />;
      default:
        return <CategorySelection />;
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-8">
      {renderScreen()}
    </div>
  );
}

export default App;