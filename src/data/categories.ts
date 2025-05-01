import { QuizCategory } from '../types';
import { Brain, Globe, Calculator, FlaskRound as Flask, Gamepad2, Music } from 'lucide-react';

export const categories: QuizCategory[] = [
  {
    id: 'general-knowledge',
    name: 'General Knowledge',
    description: 'Test your knowledge on a variety of topics',
    icon: 'Brain',
    color: 'bg-primary-500',
    difficulty: 'easy',
    questionsCount: 10
  },
  {
    id: 'geography',
    name: 'Geography',
    description: 'Explore countries, capitals, and landmarks',
    icon: 'Globe',
    color: 'bg-secondary-500',
    difficulty: 'medium',
    questionsCount: 10
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    description: 'Challenge yourself with math problems',
    icon: 'Calculator',
    color: 'bg-accent-500',
    difficulty: 'hard',
    questionsCount: 10
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Discover scientific facts and theories',
    icon: 'Flask',
    color: 'bg-success-500',
    difficulty: 'medium',
    questionsCount: 10
  },
  {
    id: 'gaming',
    name: 'Gaming',
    description: 'Test your knowledge of video games',
    icon: 'Gamepad2',
    color: 'bg-warning-500',
    difficulty: 'easy',
    questionsCount: 10
  },
  {
    id: 'music',
    name: 'Music',
    description: 'From classical to pop, test your musical knowledge',
    icon: 'Music',
    color: 'bg-error-500',
    difficulty: 'medium',
    questionsCount: 10
  }
];