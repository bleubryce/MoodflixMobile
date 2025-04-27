# MoodflixMobile 🎬

A React Native mobile application that recommends movies based on your mood and preferences. Built with Expo, TypeScript, and Supabase.

## Features ✨

- **Mood-Based Recommendations**: Get personalized movie suggestions based on your current mood
- **Offline Support**: Access your favorite movies and recommendations even without internet connection
- **Watch Parties**: Watch movies together with friends in real-time
- **Biometric Authentication**: Secure login using Face ID or Touch ID
- **Push Notifications**: Stay updated with movie recommendations and watch party invites
- **Personalized Recommendations**: Get movie suggestions based on your watch history and preferences

## Tech Stack 🛠️

- **Frontend**: React Native, Expo
- **Language**: TypeScript
- **State Management**: React Context
- **Backend**: Supabase
- **Authentication**: Supabase Auth
- **Offline Storage**: AsyncStorage
- **Testing**: Jest, React Native Testing Library
- **Notifications**: Expo Notifications
- **Biometrics**: Expo Local Authentication

## Getting Started 🚀

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bleubryce/MoodflixMobile.git
cd MoodflixMobile
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory with your Supabase credentials:
```env
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

## Project Structure 📁

```
src/
├── components/         # Reusable UI components
├── contexts/          # React Context providers
├── hooks/             # Custom React hooks
├── navigation/        # Navigation configuration
├── screens/           # App screens
├── services/          # API and business logic
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## Testing 🧪

Run tests:
```bash
npm test
# or
yarn test
```

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Security 🔒

Please refer to our [SECURITY.md](SECURITY.md) file for security-related information.

## License 📄

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

## Acknowledgments 🙏

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for movie data
- [Expo](https://expo.dev/) for the amazing React Native development platform
- [Supabase](https://supabase.io/) for the backend services

## Support 💬

If you encounter any issues or have questions, please open an issue in the GitHub repository.
