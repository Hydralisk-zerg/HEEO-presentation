import React, { useState, useEffect } from 'react';
import { ConfigProvider, Spin } from 'antd';
import { translations } from './utils/translations';
import { getStoredLanguage, setStoredLanguage } from './config/slidesConfig';
import StartPage from './pages/StartPage';
import PresentationPage from './pages/PresentationPage';

function App() {
  const [currentPage, setCurrentPage] = useState('start');
  const [language, setLanguage] = useState(getStoredLanguage());
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    // Загружаем сохраненный язык при запуске
    const savedLanguage = getStoredLanguage();
    setLanguage(savedLanguage);
    // Всегда стартуем с главной страницы
    setCurrentPage('start');
  }, []);

  const t = translations[language] || translations['uk'];

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    setStoredLanguage(lang);
  };


  const handlePresentationStart = () => {
    setCurrentPage('presentation');
    localStorage.setItem('currentPage', 'presentation');
  };

  const handleBackToStart = () => {
    setCurrentPage('start');
    localStorage.setItem('currentPage', 'start');
  };

  const theme = {
    token: {
      colorPrimary: '#1890ff',
      borderRadius: 8,
    },
  };

  const renderCurrentPage = () => {
    if (loading) {
      return (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}>
          <Spin size="large" />
        </div>
      );
    }

    switch (currentPage) {
      case 'start':
        return (
          <StartPage 
            onLanguageSelect={handleLanguageSelect}
            onPresentationStart={handlePresentationStart}
            t={t}
            currentLanguage={language}
          />
        );
      case 'presentation':
        return (
          <PresentationPage 
            onBack={handleBackToStart}
            language={language}
            t={t}
          />
        );
      default:
        return (
          <StartPage 
            onLanguageSelect={handleLanguageSelect}
            onPresentationStart={handlePresentationStart}
            t={t}
          />
        );
    }
  };

  return (
    <ConfigProvider theme={theme}>
      {renderCurrentPage()}
    </ConfigProvider>
  );
}

export default App;
