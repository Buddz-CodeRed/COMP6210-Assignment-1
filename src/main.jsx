import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/Home.module.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
window.addEventListener('orientationchange', () => {
  // Briefly disabling user scaling forces the browser to reset the zoom level
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0';
    setTimeout(() => {
      viewport.content = 'width=device-width, initial-scale=1.0';
    }, 300);
  }
});
