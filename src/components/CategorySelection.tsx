import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../data/categories';
import { useQuizStore } from '../store/quizStore';
import { Brain, Globe, Calculator, FlaskRound as Flask, Gamepad2, Music, BarChart2 } from 'lucide-react';

const CategorySelection: React.FC = () => {
  const { selectCategory } = useQuizStore();
  
  // Map category icons to Lucide components
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain size={40} />;
      case 'Globe': return <Globe size={40} />;
      case 'Calculator': return <Calculator size={40} />;
      case 'Flask': return <Flask size={40} />;
      case 'Gamepad2': return <Gamepad2 size={40} />;
      case 'Music': return <Music size={40} />;
      default: return <BarChart2 size={40} />;
    }
  };
  
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
  
  // Difficulty badges
  const getDifficultyBadge = (difficulty: string) => {
    let bgColor = 'bg-success-100 text-success-800';
    if (difficulty === 'medium') {
      bgColor = 'bg-warning-100 text-warning-800';
    } else if (difficulty === 'hard') {
      bgColor = 'bg-error-100 text-error-800';
    }
    
    return (
      <span className={`text-xs font-medium px-2 py-1 rounded-full ${bgColor}`}>
        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
      </span>
    );
  };
  
  return (
    <div className="quiz-container">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to QuizMaster!</h1>
        <p className="text-gray-600">Choose a category to start your quiz adventure</p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {categories.map((category) => (
          <motion.div
            key={category.id}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="card hover:shadow-xl cursor-pointer"
            onClick={() => selectCategory(category)}
          >
            <div className="flex items-start">
              <div className={`p-3 rounded-lg mr-4 ${category.color} text-white`}>
                {getIconComponent(category.icon)}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  {getDifficultyBadge(category.difficulty)}
                </div>
                <p className="text-gray-600 mb-2">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{category.questionsCount} questions</span>
                  <button className="btn btn-primary">Start Quiz</button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CategorySelection;