import React, { useRef, useState, useEffect } from 'react';
import { Button, Carousel } from 'antd';
import { 
  CloseOutlined, 
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import SlideTemplate from '../components/SlideTemplate';
import { slideConfig, getLocalizedSlide, getStoredLanguage } from '../config/slidesConfig';

const PresentationPage = ({ onBack, t }) => {
  const carouselRef = useRef(null);
  const [currentLanguage, setCurrentLanguage] = useState(getStoredLanguage());
  
  // Отслеживание ориентации экрана
  const [isLandscapeMobile, setIsLandscapeMobile] = useState(() => {
    return window.innerWidth <= 1024 && window.innerHeight <= window.innerWidth;
  });

  useEffect(() => {
    const handleResize = () => {
      const landscapeMobile = window.innerWidth <= 1024 && window.innerHeight <= window.innerWidth;
      console.log('Orientation change:', { 
        width: window.innerWidth, 
        height: window.innerHeight, 
        isLandscape: landscapeMobile 
      });
      setIsLandscapeMobile(landscapeMobile);
    };

    // Добавляем небольшую задержку для orientationchange
    const handleOrientationChange = () => {
      setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      {/* Кнопка закрытия в верхнем левом углу */}
      <Button
        icon={<CloseOutlined />}
        onClick={onBack}
        shape="circle"
        style={{
          position: 'absolute',
          top: isLandscapeMobile ? '-2px' : (window.innerWidth <= 1024 ? '0px' : '15px'),
          left: isLandscapeMobile ? '-2px' : (window.innerWidth <= 1024 ? '0px' : '15px'),
          zIndex: 1000,
          width: window.innerWidth > 1024 ? '50px' : '40px',
          height: window.innerWidth > 1024 ? '50px' : '40px',
          background: 'rgba(255, 255, 255, 0.95)',
          border: '2px solid #1890ff',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: window.innerWidth > 1024 ? '28px' : '20px',
          color: '#1890ff'
        }}
      />

      {/* Карусель на весь экран */}
      <Carousel
        ref={carouselRef}
        arrows={false}
        infinite={true}
        dots={true}
        dotPosition="bottom"
        effect="scrollx"
        style={{
          height: '100vh'
        }}
      >
        {slideConfig
          .map(slide => getLocalizedSlide(slide, currentLanguage))
          .filter(Boolean)
          .map(localizedSlide => (
            <div key={localizedSlide.id}>
              <SlideTemplate slide={localizedSlide} t={t} />
            </div>
          ))}
      </Carousel>

      {/* Кастомные стрелки навигации */}
      <Button
        shape="circle"
        icon={<LeftOutlined />}
        onClick={handlePrev}
        style={{
          position: 'absolute',
          left: isLandscapeMobile ? '-5px' : 
                (window.innerWidth <= 1024 && window.innerHeight > window.innerWidth) ? '-5px' : // портретный мобильный - прижать к краю
                (window.innerWidth <= 1024 ? '20px' : '15px'),
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1000,
          width: window.innerWidth > 1024 ? '50px' : '40px',
          height: window.innerWidth > 1024 ? '50px' : '40px',
          background: 'rgba(255, 255, 255, 0.95)',
          border: '2px solid #1890ff',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: window.innerWidth > 1024 ? '28px' : '20px',
          color: '#1890ff'
        }}
      />

      <Button
        shape="circle"
        icon={<RightOutlined />}
        onClick={handleNext}
        style={{
          position: 'absolute',
          right: isLandscapeMobile ? '-5px' : 
                 (window.innerWidth <= 1024 && window.innerHeight > window.innerWidth) ? '-5px' : // портретный мобильный - прижать к краю
                 (window.innerWidth <= 1024 ? '20px' : '15px'),
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1000,
          width: window.innerWidth > 1024 ? '50px' : '40px',
          height: window.innerWidth > 1024 ? '50px' : '40px',
          background: 'rgba(255, 255, 255, 0.95)',
          border: '2px solid #1890ff',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: window.innerWidth > 1024 ? '28px' : '20px',
          color: '#1890ff'
        }}
      />
    </div>
  );
};

export default PresentationPage;
