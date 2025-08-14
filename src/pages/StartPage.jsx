import React, { useState, useEffect } from 'react';
import { Card, Button, Space, Typography, Row, Col } from 'antd';
import { 
  GlobalOutlined, 
  SoundOutlined,
  PlayCircleOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const StartPage = ({ onLanguageSelect, onPresentationStart, t, currentLanguage }) => {
  // Функция для определения мобильного устройства
  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  const [isMobile, setIsMobile] = useState(() => {
    return isMobileDevice() || window.innerWidth <= 768;
  });

  useEffect(() => {
    const handleResize = () => {
      // Если это мобильное устройство, всегда используем мобильные стили
      const mobile = isMobileDevice() || window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const languages = [
    { code: 'uk', name: t.languages.uk, flag: '🇺🇦' },
    { code: 'en', name: t.languages.en, flag: '🇺🇸' }
  ];

  // Стили для мобильной версии
  const mobileStyles = {
    containerPadding: '20px',
    cardMaxWidth: '85vw',
    cardWidth: '85vw',
    cardMinHeight: '70vh',
    cardBorderRadius: 8,
    cardBoxShadow: '0 1px 6px rgba(0,0,0,0.08)',
    cardPadding: '8px',
    headerMarginBottom: 2,
    logoHeight: '80px',
    logoMarginBottom: '1px',
    titleFontSize: '2.2rem',
    titleTextAlign: 'center',
    titleMarginBottom: 1,
    gutter: 3,
    featureCardMinHeight: '90px', // еще больше уменьшено
    featureCardBorderRadius: 8,
    featureCardBoxShadow: '0 1px 6px rgba(0,0,0,0.08)',
    featureCardPadding: '4px 3px',
    iconFontSize: 48,
    iconMarginBottom: 2,
    titleCardFontSize: '18px',
    paragraphFontSize: '15px',
    paragraphMarginBottom: 2,
    buttonFontSize: '15px',
    buttonWidth: '100%', // возвращено к 100% ширине
    flagFontSize: 16
  };

  // Стили для десктопной версии
  const desktopStyles = {
    containerPadding: '20px',
    cardMaxWidth: 900,
    cardWidth: '100%',
    cardMinHeight: 'auto',
    cardBorderRadius: 16,
    cardBoxShadow: '0 8px 32px rgba(0,0,0,0.3)',
    cardPadding: '24px',
    headerMarginBottom: 40,
    logoHeight: '60px',
    logoMarginRight: '12px',
    logoMarginBottom: '0',
    titleTextAlign: 'left',
    titleMarginBottom: 24,
    gutter: 16,
    featureCardMinHeight: '180px',
    featureCardBorderRadius: 16,
    featureCardBoxShadow: '0 2px 12px rgba(0,0,0,0.10)',
    featureCardPadding: '24px',
    iconFontSize: 48,
    iconMarginBottom: 10,
    paragraphMarginBottom: 12
  };

  const styles = isMobile ? mobileStyles : desktopStyles;

  return (
    <div
      style={{
        minHeight: '100vh',
        height: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        overflow: 'hidden',
        padding: styles.containerPadding
      }}
    >
      <Card
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: styles.cardMaxWidth,
          width: styles.cardWidth,
          minHeight: styles.cardMinHeight,
          borderRadius: styles.cardBorderRadius,
          boxShadow: styles.cardBoxShadow,
          padding: styles.cardPadding
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: styles.headerMarginBottom }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            marginBottom: styles.titleMarginBottom,
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            <img 
              src="/images/a47f8-90.png"
              alt="Hellmann Logo" 
              style={{
                background: 'transparent',
                borderRadius: '50%',
                height: styles.logoHeight,
                marginRight: isMobile ? '0' : styles.logoMarginRight,
                marginBottom: styles.logoMarginBottom,
                boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
              }}
            />
            <Title 
              level={isMobile ? 4 : 1} 
              style={{
                color: '#004B97',
                margin: 0,
                fontWeight: 'bold',
                fontSize: styles.titleFontSize,
                textAlign: styles.titleTextAlign,
                width: '100%'
              }}
            >
              {t.title}
            </Title>
          </div>
        </div>
        
        <Row gutter={[styles.gutter, styles.gutter]} style={{ width: '100%' }}>
          {/* Выбор языка */}
          <Col xs={24} md={8} style={{ textAlign: 'center' }}>
            <Card
              hoverable
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: styles.featureCardMinHeight,
                borderRadius: styles.featureCardBorderRadius,
                boxShadow: styles.featureCardBoxShadow
              }}
              styles={{ body: { padding: styles.featureCardPadding } }}
            >
              <GlobalOutlined 
                style={{
                  fontSize: styles.iconFontSize,
                  color: '#52c41a',
                  marginBottom: styles.iconMarginBottom
                }} 
              />
              <Title 
                level={isMobile ? 5 : 3} 
                style={isMobile ? { fontSize: styles.titleCardFontSize } : undefined}
              >
                {t.selectLanguage}
              </Title>
              {!isMobile && (
                <Row gutter={[0, 0]} style={{ width: '100%' }}>
                  <Col span={24}>
                    <Paragraph 
                      style={{
                        color: '#666',
                        marginBottom: styles.paragraphMarginBottom,
                        fontSize: isMobile ? styles.paragraphFontSize : undefined
                      }}
                    >
                      {t.selectLanguage === 'Оберіть мову' ? 'Оберіть мову для презентації та розпочніть перегляд' : 'Choose language for presentation and start viewing'}
                    </Paragraph>
                  </Col>
                </Row>
              )}
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <Row gutter={[0, 4]} style={{ width: '100%' }}>
                  {languages.map(lang => (
                    <Col span={24} key={lang.code}>
                      <Button
                        size={isMobile ? "small" : "large"}
                        style={{ 
                          width: '100%',
                          fontSize: isMobile ? styles.buttonFontSize : undefined
                        }}
                        onClick={() => onLanguageSelect(lang.code)}
                        icon={
                          <span style={{ 
                            fontSize: isMobile ? styles.flagFontSize : undefined, 
                            marginRight: 4 
                          }}>
                            {lang.flag}
                          </span>
                        }
                      >
                        {lang.name}
                      </Button>
                    </Col>
                  ))}
                </Row>
              </div>
            </Card>
          </Col>
          
          {/* Презентация */}
          <Col xs={24} md={8} style={{ textAlign: 'center' }}>
            <Card
              hoverable
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: styles.featureCardMinHeight,
                borderRadius: styles.featureCardBorderRadius,
                boxShadow: styles.featureCardBoxShadow
              }}
              styles={{ body: { padding: styles.featureCardPadding } }}
            >
              <PlayCircleOutlined 
                style={{
                  fontSize: styles.iconFontSize,
                  color: '#1890ff',
                  marginBottom: styles.iconMarginBottom
                }} 
              />
              <Title 
                level={isMobile ? 5 : 3} 
                style={isMobile ? { fontSize: styles.titleCardFontSize } : undefined}
              >
                {t.presentation}
              </Title>
              {!isMobile && (
                <Row gutter={[0, 0]} style={{ width: '100%' }}>
                  <Col span={24}>
                    <Paragraph 
                      style={{
                        color: '#666',
                        marginBottom: styles.paragraphMarginBottom,
                        fontSize: isMobile ? styles.paragraphFontSize : undefined
                      }}
                    >
                      {t.presentationFullDescription}
                    </Paragraph>
                  </Col>
                </Row>
              )}
              <div style={{ width: '100%' }}>
                <Row gutter={[0, 0]} style={{ width: '100%' }}>
                  <Col span={24}>
                    <Button
                      type="primary"
                      size={isMobile ? "small" : "large"}
                      style={{ 
                        width: '100%',
                        fontSize: isMobile ? styles.buttonFontSize : undefined
                      }}
                      onClick={onPresentationStart}
                    >
                      {t.presentation}
                    </Button>
                  </Col>
                </Row>
                {/* Отступ для выравнивания с карточкой выбора языка */}
                <div style={{ height: isMobile ? '28px' : '40px' }}></div>
              </div>
            </Card>
          </Col>
          
          {/* AI помощник */}
          <Col xs={24} md={8} style={{ textAlign: 'center' }}>
            <Card
              hoverable
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: styles.featureCardMinHeight,
                borderRadius: styles.featureCardBorderRadius,
                boxShadow: styles.featureCardBoxShadow
              }}
              styles={{ body: { padding: styles.featureCardPadding } }}
            >
              <SoundOutlined 
                style={{
                  fontSize: styles.iconFontSize,
                  color: '#fa8c16',
                  marginBottom: styles.iconMarginBottom
                }} 
              />
              <Title 
                level={isMobile ? 5 : 3} 
                style={isMobile ? { fontSize: styles.titleCardFontSize } : undefined}
              >
                {t.voiceAssistant}
              </Title>
              {!isMobile && (
                <Row gutter={[0, 0]} style={{ width: '100%' }}>
                  <Col span={24}>
                    <Paragraph 
                      style={{
                        color: '#666',
                        marginBottom: styles.paragraphMarginBottom,
                        fontSize: isMobile ? styles.paragraphFontSize : undefined
                      }}
                    >
                      {t.voiceFullDescription}
                    </Paragraph>
                  </Col>
                </Row>
              )}
              <div style={{ width: '100%' }}>
                <Row gutter={[0, 0]} style={{ width: '100%' }}>
                  <Col span={24}>
                    <Button
                      type="primary"
                      size={isMobile ? "small" : "large"}
                      style={{ 
                        width: '100%',
                        fontSize: isMobile ? styles.buttonFontSize : undefined
                      }}
                      onClick={() => window.open('https://t.me/Iris_log_bot', '_blank')}
                    >
                      {t.voiceAssistant}
                    </Button>
                  </Col>
                </Row>
                {/* Отступ для выравнивания с карточкой выбора языка */}
                <div style={{ height: isMobile ? '28px' : '40px' }}></div>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default StartPage;
