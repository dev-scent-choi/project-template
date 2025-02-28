import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './routes';
import { ThemeProvider } from './theme/theme-provider';

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <HelmetProvider>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </HelmetProvider>
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}