import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ui/ErrorFallback';

const enableMocking = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  // @ts-expect-error: No description is provided because it's for mocking purposes in development environment
  const { worker } = await import('./mocks/browser.js');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
};

// Call enableMocking and handle the promise properly
enableMocking()
  .then(() => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.replace('/')}>
          <App />
        </ErrorBoundary>
      </React.StrictMode>,
    );
  })
  .catch((error) => {
    console.error('Error enabling mocking:', error);
  });
