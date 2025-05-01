import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // General Knowledge
  {
    id: 'gk1',
    text: 'What is the capital of France?',
    options: [
      { id: 'gk1-a', text: 'Berlin' },
      { id: 'gk1-b', text: 'Madrid' },
      { id: 'gk1-c', text: 'Paris' },
      { id: 'gk1-d', text: 'Rome' }
    ],
    correctOptionId: 'gk1-c',
    timeLimit: 20,
    explanation: 'Paris is the capital and most populous city of France.',
    category: 'general-knowledge',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'gk2',
    text: 'Who painted the Mona Lisa?',
    options: [
      { id: 'gk2-a', text: 'Vincent van Gogh' },
      { id: 'gk2-b', text: 'Leonardo da Vinci' },
      { id: 'gk2-c', text: 'Pablo Picasso' },
      { id: 'gk2-d', text: 'Michelangelo' }
    ],
    correctOptionId: 'gk2-b',
    timeLimit: 20,
    explanation: 'Leonardo da Vinci painted the Mona Lisa between 1503 and 1519.',
    category: 'general-knowledge',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'gk3',
    text: 'Which planet is known as the Red Planet?',
    options: [
      { id: 'gk3-a', text: 'Jupiter' },
      { id: 'gk3-b', text: 'Mars' },
      { id: 'gk3-c', text: 'Venus' },
      { id: 'gk3-d', text: 'Mercury' }
    ],
    correctOptionId: 'gk3-b',
    timeLimit: 15,
    explanation: 'Mars is often called the Red Planet due to its reddish appearance.',
    category: 'general-knowledge',
    difficulty: 'easy',
    points: 10
  },
  
  // Geography
  {
    id: 'geo1',
    text: 'Which is the largest ocean on Earth?',
    options: [
      { id: 'geo1-a', text: 'Atlantic Ocean' },
      { id: 'geo1-b', text: 'Indian Ocean' },
      { id: 'geo1-c', text: 'Arctic Ocean' },
      { id: 'geo1-d', text: 'Pacific Ocean' }
    ],
    correctOptionId: 'geo1-d',
    timeLimit: 20,
    explanation: 'The Pacific Ocean is the largest and deepest ocean on Earth.',
    category: 'geography',
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'geo2',
    text: 'Which desert is the largest in the world?',
    options: [
      { id: 'geo2-a', text: 'Gobi Desert' },
      { id: 'geo2-b', text: 'Sahara Desert' },
      { id: 'geo2-c', text: 'Antarctic Desert' },
      { id: 'geo2-d', text: 'Arabian Desert' }
    ],
    correctOptionId: 'geo2-c',
    timeLimit: 25,
    explanation: 'The Antarctic Desert is the largest desert in the world, covering the entire continent of Antarctica.',
    category: 'geography',
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'geo3',
    text: 'Which mountain is the tallest in the world?',
    options: [
      { id: 'geo3-a', text: 'K2' },
      { id: 'geo3-b', text: 'Mount Everest' },
      { id: 'geo3-c', text: 'Kangchenjunga' },
      { id: 'geo3-d', text: 'Makalu' }
    ],
    correctOptionId: 'geo3-b',
    timeLimit: 15,
    explanation: 'Mount Everest, located in the Himalayas, is the tallest mountain above sea level at 8,848.86 meters (29,031.7 ft).',
    category: 'geography',
    difficulty: 'medium',
    points: 15
  },
  
  // Mathematics
  {
    id: 'math1',
    text: 'What is the value of π (pi) to two decimal places?',
    options: [
      { id: 'math1-a', text: '3.14' },
      { id: 'math1-b', text: '3.15' },
      { id: 'math1-c', text: '3.16' },
      { id: 'math1-d', text: '3.12' }
    ],
    correctOptionId: 'math1-a',
    timeLimit: 15,
    explanation: 'The value of π (pi) to two decimal places is 3.14.',
    category: 'mathematics',
    difficulty: 'hard',
    points: 20
  },
  {
    id: 'math2',
    text: 'What is the square root of 144?',
    options: [
      { id: 'math2-a', text: '10' },
      { id: 'math2-b', text: '12' },
      { id: 'math2-c', text: '14' },
      { id: 'math2-d', text: '16' }
    ],
    correctOptionId: 'math2-b',
    timeLimit: 20,
    explanation: 'The square root of 144 is 12, because 12 × 12 = 144.',
    category: 'mathematics',
    difficulty: 'hard',
    points: 20
  },
  {
    id: 'math3',
    text: 'If a = 5 and b = 7, what is the value of 2a + 3b?',
    options: [
      { id: 'math3-a', text: '31' },
      { id: 'math3-b', text: '29' },
      { id: 'math3-c', text: '27' },
      { id: 'math3-d', text: '25' }
    ],
    correctOptionId: 'math3-b',
    timeLimit: 25,
    explanation: '2a + 3b = 2(5) + 3(7) = 10 + 21 = 31.',
    category: 'mathematics',
    difficulty: 'hard',
    points: 20
  },
  
  // Science
  {
    id: 'sci1',
    text: 'What is the chemical symbol for gold?',
    options: [
      { id: 'sci1-a', text: 'Go' },
      { id: 'sci1-b', text: 'Gd' },
      { id: 'sci1-c', text: 'Au' },
      { id: 'sci1-d', text: 'Ag' }
    ],
    correctOptionId: 'sci1-c',
    timeLimit: 15,
    explanation: 'The chemical symbol for gold is Au, from the Latin word "aurum".',
    category: 'science',
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'sci2',
    text: 'Which of these is NOT a state of matter?',
    options: [
      { id: 'sci2-a', text: 'Solid' },
      { id: 'sci2-b', text: 'Liquid' },
      { id: 'sci2-c', text: 'Gas' },
      { id: 'sci2-d', text: 'Mineral' }
    ],
    correctOptionId: 'sci2-d',
    timeLimit: 20,
    explanation: 'Mineral is not a state of matter. The four fundamental states of matter are solid, liquid, gas, and plasma.',
    category: 'science',
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'sci3',
    text: 'What is the closest planet to the Sun?',
    options: [
      { id: 'sci3-a', text: 'Venus' },
      { id: 'sci3-b', text: 'Earth' },
      { id: 'sci3-c', text: 'Mars' },
      { id: 'sci3-d', text: 'Mercury' }
    ],
    correctOptionId: 'sci3-d',
    timeLimit: 15,
    explanation: 'Mercury is the closest planet to the Sun in our solar system.',
    category: 'science',
    difficulty: 'medium',
    points: 15
  },
  
  // Gaming
  {
    id: 'game1',
    text: 'Which company created the game Minecraft?',
    options: [
      { id: 'game1-a', text: 'Mojang' },
      { id: 'game1-b', text: 'Epic Games' },
      { id: 'game1-c', text: 'Electronic Arts' },
      { id: 'game1-d', text: 'Ubisoft' }
    ],
    correctOptionId: 'game1-a',
    timeLimit: 20,
    explanation: 'Minecraft was created by Mojang Studios, which was founded by Markus "Notch" Persson.',
    category: 'gaming',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'game2',
    text: 'Which character is the mascot of Nintendo?',
    options: [
      { id: 'game2-a', text: 'Sonic' },
      { id: 'game2-b', text: 'Mario' },
      { id: 'game2-c', text: 'Pikachu' },
      { id: 'game2-d', text: 'Donkey Kong' }
    ],
    correctOptionId: 'game2-b',
    timeLimit: 15,
    explanation: 'Mario is the primary mascot of Nintendo and one of the most famous video game characters of all time.',
    category: 'gaming',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'game3',
    text: 'In what year was the first PlayStation console released?',
    options: [
      { id: 'game3-a', text: '1991' },
      { id: 'game3-b', text: '1994' },
      { id: 'game3-c', text: '1997' },
      { id: 'game3-d', text: '2000' }
    ],
    correctOptionId: 'game3-b',
    timeLimit: 20,
    explanation: 'The original PlayStation was released in Japan on December 3, 1994.',
    category: 'gaming',
    difficulty: 'easy',
    points: 10
  },
  
  // Music
  {
    id: 'music1',
    text: 'Who is known as the "King of Pop"?',
    options: [
      { id: 'music1-a', text: 'Elvis Presley' },
      { id: 'music1-b', text: 'Michael Jackson' },
      { id: 'music1-c', text: 'Prince' },
      { id: 'music1-d', text: 'Freddie Mercury' }
    ],
    correctOptionId: 'music1-b',
    timeLimit: 15,
    explanation: 'Michael Jackson is widely referred to as the "King of Pop".',
    category: 'music',
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'music2',
    text: 'Which band performed the hit song "Bohemian Rhapsody"?',
    options: [
      { id: 'music2-a', text: 'The Beatles' },
      { id: 'music2-b', text: 'Led Zeppelin' },
      { id: 'music2-c', text: 'Queen' },
      { id: 'music2-d', text: 'Pink Floyd' }
    ],
    correctOptionId: 'music2-c',
    timeLimit: 20,
    explanation: '"Bohemian Rhapsody" was written by Freddie Mercury for the British rock band Queen.',
    category: 'music',
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'music3',
    text: 'How many strings does a standard guitar have?',
    options: [
      { id: 'music3-a', text: '4' },
      { id: 'music3-b', text: '5' },
      { id: 'music3-c', text: '6' },
      { id: 'music3-d', text: '7' }
    ],
    correctOptionId: 'music3-c',
    timeLimit: 15,
    explanation: 'A standard guitar has six strings, usually tuned to E, A, D, G, B, and E (from lowest to highest).',
    category: 'music',
    difficulty: 'medium',
    points: 15
  }
];

export const getQuestionsByCategory = (categoryId: string): QuizQuestion[] => {
  return quizQuestions.filter(question => question.category === categoryId);
};