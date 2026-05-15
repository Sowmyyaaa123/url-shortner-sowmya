import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import { GoogleOAuthProvider } from '@react-oauth/google';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { store, persistor } from './redux/store';

import App from './App';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

const queryClient = new QueryClient();

// GOOGLE CLIENT ID FROM .env
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

// OPTIONAL DEBUG
console.log("Google Client ID:", googleClientId);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>
      <MantineProvider>
        <Notifications zIndex={9999} />

        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <App />
            </PersistGate>
          </Provider>
        </QueryClientProvider>

      </MantineProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);