import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

import App from './App';
const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
            <App />
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}