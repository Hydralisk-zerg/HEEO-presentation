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
    { code: 'en', name: t.languages.en, flag: '🇺🇸' }
  ];

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
          maxWidth: 900,
          width: '100%',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8, flexDirection: window.innerWidth <= 768 ? 'column' : 'row' }}>
            <img 
              src={`${process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES ? '/HEEO-presentation' : ''}/images/a47f8-90.png`}
              alt="Hellmann Logo" 
              style={{ 
                height: window.innerWidth <= 768 ? '40px' : '60px', 
                marginRight: window.innerWidth <= 768 ? '0' : '16px',
                marginBottom: window.innerWidth <= 768 ? '8px' : '0',
                background: 'transparent',
                borderRadius: '50%',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }} 
            />
            <Title level={window.innerWidth <= 768 ? 3 : 1} style={{ color: '#004B97', margin: 0, fontWeight: 'bold', fontSize: window.innerWidth <= 768 ? '1.2rem' : undefined }}>
              {t.title}
            </Title>
          </div>
          {window.innerWidth > 768 && (
            <Paragraph style={{ fontSize: 18, color: '#666', marginBottom: 0 }}>
              {t.subtitle}
            </Paragraph>
          )}
        </div>

        <Row gutter={[16, 16]}>
          {/* Выбор языка */}
          <Col xs={24} md={8}>
            <Card
              hoverable
              style={{ height: '100%', textAlign: 'center' }}
              styles={{
                body: { padding: window.innerWidth <= 768 ? 16 : 24 }
              }}
            >
              <GlobalOutlined style={{ fontSize: window.innerWidth <= 768 ? 32 : 48, color: '#52c41a', marginBottom: 16 }} />
              <Title level={window.innerWidth <= 768 ? 5 : 3}>{t.selectLanguage}</Title>
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                {languages.map(lang => (
                  <Button
                    key={lang.code}
                    size={window.innerWidth <= 768 ? "middle" : "large"}
                    style={{ width: '100%', fontSize: window.innerWidth <= 768 ? '12px' : undefined }}
                    onClick={() => onLanguageSelect(lang.code)}
                    icon={<span style={{ fontSize: 12, marginRight: 4 }}>{lang.flag}</span>}
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
                body: { padding: window.innerWidth <= 768 ? 16 : 24 }
              }}
            >
              <PlayCircleOutlined 
                style={{ fontSize: window.innerWidth <= 768 ? 32 : 48, color: '#1890ff', marginBottom: 16 }} 
              />
              <Title level={window.innerWidth <= 768 ? 5 : 3}>{t.presentation}</Title>
              <Paragraph style={{ color: '#666', marginBottom: 24, fontSize: window.innerWidth <= 768 ? '12px' : undefined }}>
                {window.innerWidth <= 768 ? t.presentationDescription : t.presentationFullDescription}
              </Paragraph>
              <Button
                type="primary"
                size={window.innerWidth <= 768 ? "middle" : "large"}
                style={{ width: '100%', fontSize: window.innerWidth <= 768 ? '12px' : undefined }}
                onClick={onPresentationStart}
              >
                {t.presentation}
              </Button>
            </Card>
          </Col>

          {/* AI помощник */}
          <Col xs={24} md={8}>
            <Card
              hoverable
              style={{ height: '100%', textAlign: 'center' }}
              styles={{
                body: { padding: window.innerWidth <= 768 ? 16 : 24 }
              }}
            >
              <SoundOutlined style={{ fontSize: window.innerWidth <= 768 ? 32 : 48, color: '#fa8c16', marginBottom: 16 }} />
              <Title level={window.innerWidth <= 768 ? 5 : 3}>{t.voiceAssistant}</Title>
              <Paragraph style={{ color: '#666', marginBottom: 24, fontSize: window.innerWidth <= 768 ? '12px' : undefined }}>
                {window.innerWidth <= 768 ? t.voiceDescription : t.voiceFullDescription}
              </Paragraph>
              <Button
                size={window.innerWidth <= 768 ? "middle" : "large"}
                style={{ width: '100%', fontSize: window.innerWidth <= 768 ? '12px' : undefined }}
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
