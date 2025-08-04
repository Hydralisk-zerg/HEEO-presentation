import React from 'react';
import { Button, Space, Typography } from 'antd';

const { Title } = Typography;

const SimpleStartPage = ({ onLanguageSelect, onPresentationStart, onVoiceAssistantStart, t }) => {
  return (
    <div style={{ 
      padding: '50px',
      textAlign: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{ 
        background: 'white', 
        padding: '40px', 
        borderRadius: '16px',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <Title level={1} style={{ color: '#1890ff' }}>
          HEEO 2025
        </Title>
        
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Title level={3}>Выберите язык:</Title>
            <Space>
              <Button size="large" onClick={() => onLanguageSelect('uk')}>
                🇺🇦 Українська
              </Button>
              <Button size="large" onClick={() => onLanguageSelect('en')}>
                🇺🇸 English
              </Button>
              <Button size="large" onClick={() => onLanguageSelect('ru')}>
                🇷🇺 Русский
              </Button>
            </Space>
          </div>
          
          <Button 
            type="primary" 
            size="large" 
            onClick={onPresentationStart}
            style={{ width: '200px' }}
          >
            📊 Презентация
          </Button>
          
          <Button 
            size="large" 
            onClick={onVoiceAssistantStart}
            style={{ width: '200px' }}
          >
            🎙️ Голосовой ассистент
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default SimpleStartPage;
