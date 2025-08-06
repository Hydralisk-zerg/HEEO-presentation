import React, { useState } from 'react';
import { Card, Button, Typography, Space, Alert, Modal } from 'antd';
import { ArrowLeftOutlined, SoundOutlined } from '@ant-design/icons';

const { Title } = Typography;

const VoiceAssistantPage = ({ onBack, t }) => {
  const [showTelegramModal, setShowTelegramModal] = useState(false);

  const getLogoPath = () => {
    const timestamp = Date.now(); // Cache busting
    if (process.env.NODE_ENV === 'production') {
      return `/HEEO-presentation/images/logo_assistant.jpg?v=${timestamp}`;
    }
    return `/images/logo_assistant.jpg?v=${timestamp}`;
  };

  const handleLogoClick = () => {
    setShowTelegramModal(true);
  };

  const handleTelegramYes = () => {
    setShowTelegramModal(false);
    // Открываем Telegram бот с токеном 1919338656:AAEtvQyoaNBo5mBy9mA4AOR5eHU8LfnuEq0
    window.open('https://t.me/Hellmann_LLC_bot', '_blank');
  };

  const handleTelegramNo = () => {
    setShowTelegramModal(false);
    // Остаемся на странице AI помощника
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: window.innerWidth <= 768 ? '10px' : '20px'
    }}>
      <Card
        style={{
          maxWidth: window.innerWidth <= 768 ? '100%' : 600,
          width: '100%',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          <Button 
            icon={<ArrowLeftOutlined />} 
            onClick={onBack}
            style={{ marginBottom: 20 }}
          >
            {t.back}
          </Button>
          
          <div style={{ textAlign: 'center' }}>
            {/* Логотип AI помощника */}
            <div 
              onClick={handleLogoClick}
              style={{ 
                cursor: 'pointer',
                marginBottom: 24,
                display: 'inline-block',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid #fa8c16',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 4px 20px rgba(250, 140, 22, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <img 
                src={getLogoPath()}
                alt="AI Assistant Logo"
                style={{
                  width: window.innerWidth <= 768 ? 100 : 150,
                  height: window.innerWidth <= 768 ? 100 : 150,
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            {/* Иконка звука
            <SoundOutlined style={{ 
              fontSize: window.innerWidth <= 768 ? 32 : 48, 
              color: '#fa8c16', 
              marginBottom: 16 
            }} />
             */}
            {/* <Title level={window.innerWidth <= 768 ? 3 : 2}>
              {t.voiceAssistant}
            </Title> */}
            
            <Alert
              message={t.comingSoon}
              type="warning"
              showIcon
              style={{ 
                marginTop: 20,
                fontSize: window.innerWidth <= 768 ? '14px' : '16px',
                background: '#fffbe6',
                border: '1px solid #ffe58f',
                color: '#d48806'
              }}
            />
          </div>
        </Space>
      </Card>

      {/* Модальное окно для подключения к Telegram боту */}
      <Modal
        title={t.connectToTelegram || "Подключиться к AI Telegram боту?"}
        open={showTelegramModal}
        onCancel={handleTelegramNo}
        footer={
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '16px',
            padding: '0 24px'
          }}>
            <Button 
              key="no" 
              onClick={handleTelegramNo}
              style={{ 
                width: '33%',
                minWidth: '100px'
              }}
            >
              {t.no || "Нет"}
            </Button>
            <Button 
              key="yes" 
              type="primary" 
              onClick={handleTelegramYes}
              style={{ 
                width: '33%',
                minWidth: '100px'
              }}
            >
              {t.yes || "Да"}
            </Button>
          </div>
        }
        centered
        style={{ textAlign: 'center' }}
      >
        <div style={{ padding: '20px 0' }}>
          <p style={{ fontSize: '16px', marginBottom: '16px' }}>
            {t.telegramBotDescription || 
              "Хотите подключиться к нашему AI помощнику в Telegram для получения персонализированной поддержки?"}
          </p>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🤖</div>
          <p style={{ color: '#666', fontSize: '14px' }}>
            {t.telegramBotNote || 
              "Примечание: Бот находится в стадии разработки"}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default VoiceAssistantPage;
