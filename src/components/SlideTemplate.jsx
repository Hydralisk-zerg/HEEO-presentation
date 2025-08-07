import React, { useState, useEffect } from 'react';
import { Typography, Image } from 'antd';

const { Title, Paragraph } = Typography;

const SlideTemplate = ({ slide, t }) => {
  // Более точное определение мобильного устройства
  const [isMobile, setIsMobile] = useState(() => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
  });

  useEffect(() => {
    const handleResize = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isPortrait = isMobile && window.innerHeight > window.innerWidth;

  const containerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'stretch' : 'center',
    justifyContent: 'center',
    height: '100%',
    padding: isMobile ? (isPortrait ? '6px' : '10px') : '20px',
    gap: isMobile ? (isPortrait ? '6px' : '10px') : '30px',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: isMobile ? '100%' : '75%',
    height: isMobile ? (isPortrait ? '35vh' : '45vh') : '70vh',
    objectFit: 'cover',
    borderRadius: isMobile ? '10px' : '14px',
    flexShrink: 0,
    boxShadow: isMobile ? '0 2px 8px rgba(0,0,0,0.10)' : '0 4px 16px rgba(0,0,0,0.10)',
  };

  const textStyle = {
    width: isMobile ? '100%' : '25%',
    fontSize: isMobile ? (isPortrait ? '15px' : '13px') : '20px',
    lineHeight: isMobile ? '1.5' : '1.6',
    color: '#004C99',
    fontWeight: '600',
    margin: 0,
    textAlign: isMobile ? 'center' : 'left',
    padding: isMobile ? (isPortrait ? '8px 2px' : '6px 2px') : '0',
  };

  const footerStyle = {
    fontSize: isMobile ? '12px' : '16px',
    height: isMobile ? '36px' : '50px',
    textAlign: 'center',
    backgroundColor: '#004C99',
    color: '#FFFFFF',
    borderRadius: isMobile ? '0 0 10px 10px' : '0 0 12px 12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: isMobile ? '0 10px' : '0 30px',
  };

  const getSlideContent = () => {
    switch (slide.type) {
      case 1: // Только заголовок + изображение
        return (
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: window.innerWidth <= 768 ? '10px' : '20px', // уменьшаем padding на мобильных
            overflow: 'hidden'
          }}>
            <div style={{ 
              width: '95%', // четкая фиксированная ширина
              height: window.innerWidth <= 768 ? '50vh' : '70vh', // пропорционально уменьшаем высоту на мобильных
              overflow: 'hidden', // обрезаем все что не влезает
              borderRadius: window.innerWidth <= 768 ? '8px' : '12px', // уменьшаем радиус на мобильных
              position: 'relative'
            }}>
              {slide.imagePath?.endsWith('.pdf') ? (
                <iframe
                  src={slide.imagePath}
                  style={{ 
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: window.innerWidth <= 768 ? '8px' : '10px'
                  }}
                  title={slide.title}
                />
              ) : (
                <Image
                  src={slide.imagePath}
                  alt={slide.title}
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', // подрезаем что не влезает
                    borderRadius: window.innerWidth <= 768 ? '8px' : '10px'
                  }}
                  preview={false}
                />
              )}
            </div>
          </div>
        );

      case 2: // 60% изображение слева + 30% текст справа + 10% для кнопок (5% слева + 5% справа)
        return (
          <div style={{ 
            display: 'flex',
            height: '100%',
            padding: window.innerWidth <= 1024 ? '5px' : '20px',
            overflow: 'hidden',
            gap: window.innerWidth <= 1024 ? '8px' : '30px',
            flexDirection: (window.innerWidth <= 1024 && window.innerHeight > window.innerWidth) ? 'column' : 'row',
            // Добавляем отступы для кнопок в горизонтальном мобильном режиме
            marginLeft: (window.innerWidth <= 1024 && window.innerHeight <= window.innerWidth) ? '5%' : '0',
            marginRight: (window.innerWidth <= 1024 && window.innerHeight <= window.innerWidth) ? '5%' : '0'
          }}>
            {/* Изображение для 2 шаблона */}
            <div style={{ 
              width: window.innerWidth <= 1024 ? 
                ((window.innerHeight > window.innerWidth) ? '100%' : '66.67%') : // 60/90 = 66.67% от доступной ширины
                '75%', // десктоп: 75%
              height: window.innerWidth <= 1024 ? '60%' : '70vh',
              overflow: 'hidden',
              borderRadius: window.innerWidth <= 1024 ? '6px' : '12px',
              position: 'relative',
              flexShrink: 0,
              order: (window.innerWidth <= 1024 && window.innerHeight > window.innerWidth) ? '1' : '1'
            }}>
              {slide.imagePath?.endsWith('.pdf') ? (
                <iframe
                  src={slide.imagePath}
                  style={{ 
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: window.innerWidth <= 768 ? '6px' : '12px'
                  }}
                  title={slide.title}
                />
              ) : (
                <Image
                  src={slide.imagePath}
                  alt={slide.title}
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: window.innerWidth <= 768 ? '6px' : '12px'
                  }}
                  preview={false}
                />
              )}
            </div>
            {/* Текст для 2 шаблона */}
            <div style={{ 
              width: window.innerWidth <= 1024 ? 
                ((window.innerHeight > window.innerWidth) ? '100%' : '33.33%') : // 30/90 = 33.33% от доступной ширины
                '25%', // десктоп: 25%
              flex: window.innerWidth <= 1024 ? '1' : 'none',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              padding: window.innerWidth <= 1024 ? 
                ((window.innerHeight > window.innerWidth) ? '5px 10px' : '5px 10px') : // горизонтальный: без больших отступов
                '20px 0',
              order: (window.innerWidth <= 1024 && window.innerHeight > window.innerWidth) ? '2' : '2'
            }}>
              <Paragraph 
                style={{ 
                  fontSize: (window.innerWidth <= 768 && window.innerHeight > window.innerWidth) ? '16px' : (window.innerWidth <= 768 ? '12px' : '18px'), // увеличен для вертикального экрана
                  lineHeight: (window.innerWidth <= 768 && window.innerHeight > window.innerWidth) ? '1.4' : (window.innerWidth <= 768 ? '1.3' : '1.5'),
                  color: '#004C99',
                  margin: 0,
                  fontWeight: '600'
                }}
              >
                {slide.text}
              </Paragraph>
            </div>
          </div>
        );

      case 3: // 30% текст слева + 60% изображение справа + 10% для кнопок (5% слева + 5% справа)
        return (
          <div style={{ 
            display: 'flex',
            height: '100%',
            padding: window.innerWidth <= 1024 ? '5px' : '20px',
            overflow: 'hidden',
            gap: window.innerWidth <= 1024 ? '8px' : '30px',
            flexDirection: (window.innerWidth <= 1024 && window.innerHeight > window.innerWidth) ? 'column' : 'row',
            // Добавляем отступы для кнопок в горизонтальном мобильном режиме
            marginLeft: (window.innerWidth <= 1024 && window.innerHeight <= window.innerWidth) ? '5%' : '0',
            marginRight: (window.innerWidth <= 1024 && window.innerHeight <= window.innerWidth) ? '5%' : '0'
          }}>
            {/* Текст для 3 шаблона */}
            <div style={{ 
              width: window.innerWidth <= 1024 ? 
                ((window.innerHeight > window.innerWidth) ? '100%' : '33.33%') : // 30/90 = 33.33% от доступной ширины
                '25%', // десктоп: 25%
              order: (window.innerWidth <= 1024 && window.innerHeight > window.innerWidth) ? '2' : '1',
              flex: window.innerWidth <= 1024 ? '1' : 'none',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              padding: window.innerWidth <= 1024 ? 
                ((window.innerHeight > window.innerWidth) ? '5px 10px' : '5px 10px') : // горизонтальный: без больших отступов
                '20px 0'
            }}>
              <Paragraph 
                style={{ 
                  fontSize: (window.innerWidth <= 768 && window.innerHeight > window.innerWidth) ? '16px' : (window.innerWidth <= 768 ? '12px' : '18px'), // увеличен для вертикального экрана
                  lineHeight: (window.innerWidth <= 768 && window.innerHeight > window.innerWidth) ? '1.4' : (window.innerWidth <= 768 ? '1.3' : '1.5'),
                  color: '#004C99',
                  margin: 0,
                  fontWeight: '600'
                }}
              >
                {slide.text}
              </Paragraph>
            </div>
            {/* Изображение для 3 шаблона */}
            <div style={{ 
              width: window.innerWidth <= 1024 ? 
                ((window.innerHeight > window.innerWidth) ? '100%' : '66.67%') : // 60/90 = 66.67% от доступной ширины
                '75%', // десктоп: 75%
              height: window.innerWidth <= 1024 ? '60%' : '70vh',
              order: (window.innerWidth <= 1024 && window.innerHeight > window.innerWidth) ? '1' : '2',
              overflow: 'hidden',
              borderRadius: window.innerWidth <= 1024 ? '6px' : '12px',
              position: 'relative',
              flexShrink: 0
            }}>
              {slide.imagePath?.endsWith('.pdf') ? (
                <iframe
                  src={slide.imagePath}
                  style={{ 
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: window.innerWidth <= 768 ? '6px' : '12px'
                  }}
                  title={slide.title}
                />
              ) : (
                <Image
                  src={slide.imagePath}
                  alt={slide.title}
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: window.innerWidth <= 768 ? '6px' : '12px'
                  }}
                  preview={false}
                />
              )}
            </div>
          </div>
        );

      default:
        return <div>Неизвестный тип слайда</div>;
    }
  };

  return (
    <div style={{
      height: isMobile ? '100vh' : 'calc(100vh - 60px)',
      background: '#fff',
      margin: isMobile ? '2px' : '30px',
      borderRadius: isMobile ? '8px' : '16px',
      boxSizing: 'border-box',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: isMobile ? '0 1px 6px rgba(0,0,0,0.08)' : '0 8px 32px rgba(0,0,0,0.12)',
      padding: isMobile ? '2px' : '10px',
      maxWidth: isMobile ? '100vw' : '95vw', // увеличено для полного экрана
      width: '100%',
      minHeight: isMobile ? '220px' : 'auto',
    }}>
      {/* Большой логотип компании */}
      <div style={{
      position: 'absolute',
      top: isMobile ? '-2px' : '-25px',
      right: isMobile ? '2px' : '30px',
      zIndex: 100
    }}>
        <Image
          src="/images/Logo_Hellmann_Worldwide_Logistics.png"
          alt="Hellmann Worldwide Logistics"
          style={{ 
            width: isMobile ? '70px' : '460px',
            height: isMobile ? '32px' : '230px',
            objectFit: 'contain',
            background: 'transparent',
            padding: '0',
            border: 'none',
            borderRadius: '0',
            boxShadow: 'none'
          }}
          preview={false}
        />
      </div>

      {/* Заголовок на уровне логотипа */}
      <div style={{
      position: 'absolute',
      top: isMobile ? '2px' : '30px',
      left: isMobile ? '2px' : '30px',
      right: isMobile ? '75px' : '510px',
      zIndex: 101
    }}>
        <Title 
          level={1}
          style={{ 
            color: '#004C99', 
            margin: 0,
            textAlign: (isMobile && isPortrait) ? 'center' : (isMobile && !isPortrait ? 'center' : 'left'),
            fontSize: (isMobile && isPortrait) ? '14px' : (isMobile ? '16px' : '32px'),
            fontWeight: '600',
            lineHeight: (isMobile && isPortrait) ? '1.3' : (isMobile ? '1.2' : '1.4')
          }}
        >
          {slide.title}
        </Title>
      </div>

      {/* Основной контент */}
      <div style={{ 
        flex: 1,
        paddingTop: (isMobile && isPortrait) ? '40px' : (isMobile && !isPortrait ? '17px' : '130px'), // добавили 5px для горизонтального
        paddingBottom: isMobile ? '8px' : '70px'
      }}>
        {getSlideContent()}
      </div>

      {/* Колонтитул */}
      <div style={{
        position: 'absolute',
        bottom: '2px',
        left: '2px',
        right: '2px',
        height: isMobile ? '18px' : '50px',
        background: '#004C99',
        borderBottomLeftRadius: isMobile ? '6px' : '16px',
        borderBottomRightRadius: isMobile ? '6px' : '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: isMobile ? '0 6px' : '0 30px'
      }}>
        <Paragraph style={{ 
          color: '#fff', 
          margin: 0,
          fontSize: isMobile ? '8px' : '16px',
          fontWeight: '600',
          letterSpacing: isMobile ? '0.3px' : '2.5px'
        }}>
          THINK IT'S DONE
        </Paragraph>
      </div>
    </div>
  );
};

export default SlideTemplate;
