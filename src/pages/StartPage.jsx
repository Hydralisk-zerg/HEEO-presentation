import React from 'react';
import { Card, Button, Space, Typography, Row, Col } from 'antd';
import { 
  GlobalOutlined, 
  SoundOutlined, 
  PlayCircleOutlined,
  FileImageOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const StartPage = ({ onLanguageSelect, onPresentationStart, onVoiceAssistantStart, t }) => {
  const languages = [
    { code: 'uk', name: t.languages.uk, flag: '🇺🇦' },
    { code: 'en', name: t.languages.en, flag: '🇺🇸' },
    { code: 'ru', name: t.languages.ru, flag: '🇷🇺' }
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <Card
        style={{
          maxWidth: 900,
          width: '100%',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
            <img 
              src="images/a47f8-90.png" 
              alt="Hellmann Logo" 
              style={{ 
                height: '60px', 
                marginRight: '16px',
                background: 'transparent',
                borderRadius: '50%',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }} 
            />
            <Title level={1} style={{ color: '#004B97', margin: 0, fontWeight: 'bold' }}>
              {t.title}
            </Title>
          </div>
          <Paragraph style={{ fontSize: 18, color: '#666', marginBottom: 0 }}>
            {t.subtitle}
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {/* Выбор языка */}
          <Col xs={24} md={8}>
            <Card
              hoverable
              style={{ height: '100%', textAlign: 'center' }}
              styles={{
                body: { padding: 24 }
              }}
            >
              <GlobalOutlined style={{ fontSize: 48, color: '#52c41a', marginBottom: 16 }} />
              <Title level={3}>{t.selectLanguage}</Title>
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                {languages.map(lang => (
                  <Button
                    key={lang.code}
                    size="large"
                    style={{ width: '100%' }}
                    onClick={() => onLanguageSelect(lang.code)}
                    icon={<span style={{ fontSize: 16, marginRight: 8 }}>{lang.flag}</span>}
                  >
                    {lang.name}
                  </Button>
                ))}
              </Space>
            </Card>
          </Col>

          {/* Презентация */}
          <Col xs={24} md={8}>
            <Card
              hoverable
              style={{ height: '100%', textAlign: 'center' }}
              styles={{
                body: { padding: 24 }
              }}
            >
              <PlayCircleOutlined 
                style={{ fontSize: 48, color: '#1890ff', marginBottom: 16 }} 
              />
              <Title level={3}>{t.presentation}</Title>
              <Paragraph style={{ color: '#666', marginBottom: 24 }}>
                Просмотр интерактивной презентации с 20 слайдами
              </Paragraph>
              <Button
                type="primary"
                size="large"
                style={{ width: '100%' }}
                onClick={onPresentationStart}
              >
                {t.presentation}
              </Button>
            </Card>
          </Col>

          {/* Голосовой ассистент */}
          <Col xs={24} md={8}>
            <Card
              hoverable
              style={{ height: '100%', textAlign: 'center' }}
              styles={{
                body: { padding: 24 }
              }}
            >
              <SoundOutlined style={{ fontSize: 48, color: '#fa8c16', marginBottom: 16 }} />
              <Title level={3}>{t.voiceAssistant}</Title>
              <Paragraph style={{ color: '#666', marginBottom: 24 }}>
                Управление презентацией голосовыми командами
              </Paragraph>
              <Button
                size="large"
                style={{ width: '100%' }}
                onClick={onVoiceAssistantStart}
              >
                {t.voiceAssistant}
              </Button>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default StartPage;
