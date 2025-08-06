import React, { useState } from 'react';
import { Button, Space, Typography } from 'antd';

const { Title } = Typography;

function SimpleApp() {
  const [page, setPage] = useState('start');

  if (page === 'presentation') {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <Button onClick={() => setPage('start')}>Назад</Button>
        <Title>Презентация загружается...</Title>
      </div>
    );
  }

  if (page === 'voice') {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <Button onClick={() => setPage('start')}>Назад</Button>
        <Title>Голосовой ассистент загружается...</Title>
      </div>
    );
  }

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
              <Button size="large">
                🇺🇦 Українська
              </Button>
              <Button size="large">
                🇺🇸 English
              </Button>
              <Button size="large">
                🇷🇺 Русский
              </Button>
            </Space>
          </div>
          
          <Button 
            type="primary" 
            size="large" 
            onClick={() => setPage('presentation')}
            style={{ width: '200px' }}
          >
            📊 Презентация
          </Button>
          
          <Button 
            size="large" 
            onClick={() => setPage('voice')}
            style={{ width: '200px' }}
          >
            🎙️ Голосовой ассистент
          </Button>
        </Space>
      </div>
    </div>
  );
}

export default SimpleApp;
