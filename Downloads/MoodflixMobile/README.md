# MoodFlix Mobile

A React Native mobile application for movie recommendations based on mood. This is the mobile version of the MoodFlix web application.

## Features

- User authentication (login/register)
- Movie browsing and search
- Mood-based movie recommendations
- Watch history tracking
- User profile management
- Dark/Light theme support
- Responsive design for various screen sizes

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/moodflixmobile.git
cd moodflixmobile
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory with your Supabase credentials:
```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

5. Run on iOS:
```bash
npm run ios
# or
yarn ios
```

6. Run on Android:
```bash
npm run android
# or
yarn android
```

## Project Structure

```
src/
├── assets/          # Images, fonts, and other static assets
├── components/      # Reusable UI components
├── contexts/        # React contexts (auth, theme, etc.)
├── hooks/           # Custom React hooks
├── navigation/      # Navigation configuration
├── screens/         # Screen components
├── services/        # API and other services
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## Technologies Used

- React Native
- TypeScript
- Expo
- React Navigation
- React Native Paper
- Supabase
- AsyncStorage
- Expo Image

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- The Movie Database (TMDB) API for movie data
- Supabase for backend services
- React Native community for amazing tools and libraries
