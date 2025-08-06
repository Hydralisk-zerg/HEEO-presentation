import React from 'react';
import { Card, Button, Space, Typography, Row, Col } from 'antd';
import { 
  GlobalOutlined, 
  SoundOutlined, 
  PlayCircleOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const FixedStartPage = ({ onLanguageSelect, onPresentationStart, onVoiceAssistantStart, t }) => {
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
          maxWidth: 800,
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
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }} 
            />
            <Title level={1} style={{ color: '#E31E24', margin: 0 }}>
              {t.title}
            </Title>
          </div>
          <Paragraph style={{ fontSize: 18, color: '#666', marginBottom: 0 }}>
            {t.subtitle}
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          <Col xs={24} md={8}>
            <Card
              hoverable
              style={{
                textAlign: 'center',
                borderRadius: 12,
                border: '2px solid transparent',
                transition: 'all 0.3s ease'
              }}
              styles={{
                body: { padding: '24px 16px' }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#1890ff';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <GlobalOutlined style={{ fontSize: 48, color: '#1890ff', marginBottom: 16 }} />
              <Title level={4} style={{ marginBottom: 12 }}>
                {t.selectLanguage}
              </Title>
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                {languages.map(lang => (
                  <Button 
                    key={lang.code}
                    type="default"
                    size="large"
                    style={{ width: '100%' }}
                    onClick={() => onLanguageSelect(lang.code)}
                  >
                    {lang.flag} {lang.name}
                  </Button>
                ))}
              </Space>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card
              hoverable
              style={{
                textAlign: 'center',
                borderRadius: 12,
                border: '2px solid transparent',
                transition: 'all 0.3s ease'
              }}
              styles={{
                body: { padding: '24px 16px' }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#52c41a';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <PlayCircleOutlined style={{ fontSize: 48, color: '#52c41a', marginBottom: 16 }} />
              <Title level={4} style={{ marginBottom: 16 }}>
                {t.presentation}
              </Title>
              <Button 
                type="primary" 
                size="large"
                style={{ width: '100%', background: '#52c41a', borderColor: '#52c41a' }}
                onClick={onPresentationStart}
              >
                {t.presentation}
              </Button>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card
              hoverable
              style={{
                textAlign: 'center',
                borderRadius: 12,
                border: '2px solid transparent',
                transition: 'all 0.3s ease'
              }}
              styles={{
                body: { padding: '24px 16px' }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#722ed1';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <SoundOutlined style={{ fontSize: 48, color: '#722ed1', marginBottom: 16 }} />
              <Title level={4} style={{ marginBottom: 16 }}>
                {t.voiceAssistant}
              </Title>
              <Button 
                type="primary" 
                size="large"
                style={{ width: '100%', background: '#722ed1', borderColor: '#722ed1' }}
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

export default FixedStartPage;
