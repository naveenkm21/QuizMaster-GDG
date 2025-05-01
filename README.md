# QuizMaster 🎯

An interactive, feature-rich quiz application built with React and TypeScript that offers an engaging learning experience through gamified quizzes.

![QuizMaster Screenshot](https://images.pexels.com/photos/3184658/pexels-photo-3184658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)

## ✨ Features

- 🎮 **Interactive Quiz Experience**
  - Multiple categories with varying difficulty levels
  - Real-time scoring and feedback
  - Timer-based questions for added challenge
  - Streak bonuses and power-ups

- 👤 **Personalized Avatars**
  - Choose from unique avatar characters
  - Each avatar has special powers
  - Custom color themes per avatar

- 🎯 **Advanced Scoring System**
  - Base points for correct answers
  - Time bonuses for quick responses
  - Streak multipliers
  - Power-up bonuses

- 🏆 **Achievements System**
  - Unlock achievements based on performance
  - Track progress and statistics
  - Compete for high scores

- 🎨 **Modern UI/UX**
  - Smooth animations with Framer Motion
  - Responsive design for all devices
  - Clean, intuitive interface
  - Real-time visual feedback

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/quizmaster.git
cd quizmaster
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Sound Effects**: Howler.js
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/         # React components
├── data/              # Quiz questions and categories
├── store/             # Zustand store
├── types/             # TypeScript interfaces
├── utils/             # Utility functions
└── App.tsx            # Root component
```

## 🎮 Game Features

### Categories
- General Knowledge
- Geography
- Mathematics
- Science
- Gaming
- Music

### Scoring System
- Base points per question
- Time bonus (up to 30%)
- Streak multiplier (20% per streak)
- Power-up bonus (50%)

### Avatar Powers
- Extra Time
- Point Boost
- Hint Reveal

## 🎨 UI Components

- Category Selection
- Avatar Selection
- Question Display
- Progress Bar
- Timer
- Feedback Display
- Results Screen

## 🔧 Configuration

The game can be customized by modifying:

- `src/data/categories.ts`: Add or modify quiz categories
- `src/data/quizQuestions.ts`: Add or modify questions
- `src/data/avatars.ts`: Customize avatars and powers
- `tailwind.config.js`: Adjust theme and styling

## 📈 Performance

- Optimized with React.memo where beneficial
- Efficient state management with Zustand
- Lazy-loaded components for better initial load
- Smooth animations with hardware acceleration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Images from [Pexels](https://www.pexels.com)
- Sound effects from [Mixkit](https://mixkit.co)
- Icons from [Lucide](https://lucide.dev)

## 🚀 Future Enhancements

- Multiplayer mode
- Custom quiz creation
- Social sharing
- Leaderboards
- More categories and questions
- Additional avatar powers
- Progressive Web App (PWA) support

---

Made with ❤️ by [Your Name]
