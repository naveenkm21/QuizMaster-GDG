import React from 'react';
import { motion } from 'framer-motion';
import { avatars } from '../data/avatars';
import { useQuizStore } from '../store/quizStore';
import { ArrowLeft, UserCheck } from 'lucide-react';

const AvatarSelection: React.FC = () => {
  const { selectAvatar, selectedCategory, setScreen } = useQuizStore();
  
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
  
  return (
    <div className="quiz-container">
      <button
        onClick={() => setScreen('start')}
        className="flex items-center text-gray-600 hover:text-primary-600 mb-6 transition-colors"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Categories
      </button>
      
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Choose Your Avatar</h1>
        <p className="text-gray-600">
          Selected Category: <span className="font-medium">{selectedCategory?.name}</span>
        </p>
      </div>
      
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {avatars.map((avatar) => (
          <motion.div
            key={avatar.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="card hover:shadow-xl cursor-pointer"
            onClick={() => selectAvatar(avatar)}
          >
            <div className={`w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden ${avatar.color} flex justify-center items-center`}>
              <img 
                src={avatar.src} 
                alt={avatar.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-center">{avatar.name}</h3>
            <div className="flex justify-center mt-4">
              <button className="btn btn-primary flex items-center justify-center">
                <UserCheck size={18} className="mr-2" />
                Select
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AvatarSelection;