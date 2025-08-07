import React, { useState, useEffect } from 'react';
import { ConfigProvider, Spin } from 'antd';
import { translations } from './utils/translations';
import StartPage from './pages/StartPage';
import PresentationPage from './pages/PresentationPage';

function App() {
  const [currentPage, setCurrentPage] = useState('start');
  const [language, setLanguage] = useState('uk');
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && savedLanguage !== 'ru' && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    } else {
      setLanguage('uk');
      localStorage.setItem('selectedLanguage', 'uk');
    }
    // Всегда стартуем с главной страницы
    setCurrentPage('start');
  }, []);

  const t = translations[language];

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    localStorage.setItem('selectedLanguage', lang);
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
