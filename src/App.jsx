import React, { useState, useEffect } from 'react';
import { ConfigProvider, Spin } from 'antd';
import { translations } from './utils/translations';
import StartPage from './pages/StartPage';
import PresentationPage from './pages/PresentationPage';
import VoiceAssistantPage from './pages/VoiceAssistantPage';

function App() {
  const [currentPage, setCurrentPage] = useState('start');
  const [language, setLanguage] = useState('uk');
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const t = translations[language];

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    localStorage.setItem('selectedLanguage', lang);
  };

  const handlePresentationStart = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage('presentation');
      setLoading(false);
    }, 500);
  };

  const handleVoiceAssistantStart = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage('voice');
      setLoading(false);
    }, 500);
  };

  const handleBackToStart = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage('start');
      setLoading(false);
    }, 300);
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
            onVoiceAssistantStart={handleVoiceAssistantStart}
            t={t}
          />
        );
      case 'presentation':
        return (
          <PresentationPage 
            onBack={handleBackToStart}
            t={t}
          />
        );
      case 'voice':
        return (
          <VoiceAssistantPage 
            onBack={handleBackToStart}
            t={t}
          />
        );
      default:
        return (
          <StartPage 
            onLanguageSelect={handleLanguageSelect}
            onPresentationStart={handlePresentationStart}
            onVoiceAssistantStart={handleVoiceAssistantStart}
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
