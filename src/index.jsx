import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import StartPage from './pages/StartPage.jsx';

const translations = {
  en: {
    languages: { en: 'English', uk: 'Українська' },
    title: 'Hellmann Project Logistics',
    selectLanguage: 'Select language',
    presentation: 'Presentation',
    presentationFullDescription: 'Start the slide presentation',
    voiceAssistant: 'AI Assistant',
    voiceFullDescription: 'Open Telegram assistant'
  },
  uk: {
    languages: { en: 'English', uk: 'Українська' },
    title: 'Hellmann Project Logistics',
    selectLanguage: 'Оберіть мову',
    presentation: 'Презентація',
    presentationFullDescription: 'Почати перегляд слайдів',
    voiceAssistant: 'AI помічник',
    voiceFullDescription: 'Відкрити Telegram помічника'
  }
};

function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang] || translations.en;
  return (
    <StartPage
      currentLanguage={lang}
      t={t}
      onLanguageSelect={(l) => setLang(l)}
      onPresentationStart={() => { /* no-op for now */ }}
    />
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
