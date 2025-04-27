import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { AuthProvider } from './src/contexts/auth/AuthContext';
import { NotificationProvider } from './src/contexts/notifications/NotificationContext';
import { ErrorBoundary } from './src/components/ErrorBoundary';
import AppNavigator from './src/navigation/AppNavigator';
import { PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { OfflineIndicator } from './src/components/OfflineIndicator';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <PaperProvider>
            <ThemeProvider>
              <AuthProvider>
                <NotificationProvider>
                  <ErrorBoundary>
                    <OfflineIndicator />
                    <AppNavigator />
                  </ErrorBoundary>
                </NotificationProvider>
              </AuthProvider>
            </ThemeProvider>
          </PaperProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App; 