import React from 'react';
import { Button } from 'antd';
import { HomeOutlined, FullscreenOutlined, FullscreenExitOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';

const getImagePath = (filename, language = 'en') => {
  const timestamp = Date.now(); // Cache busting
  if (process.env.NODE_ENV === 'production') {
    return `/HEEO-presentation/images/${language}/${filename}?v=${timestamp}`;
  }
  return `/images/${language}/${filename}?v=${timestamp}`;
};

const getSlides = (language = 'en') => {
  const slideFileNames = language === 'uk' ? {
    1: 'HEEO UKR-1-20_page-0001.jpg',
    2: 'HEEO UKR-1-20_page-0002.jpg',
    3: 'HEEO UKR-1-20_page-0004.jpg',
    4: 'HEEO UKR-1-20_page-0005.jpg',
    5: 'HEEO UKR-1-20_page-0006.jpg',
    6: 'HEEO UKR-1-20_page-0007.jpg',
    7: 'HEEO UKR-1-20_page-0008.jpg',
    8: 'HEEO UKR-1-20_page-0009.jpg',
    9: 'HEEO UKR-1-20_page-0010.jpg',
    10: 'HEEO UKR-1-20_page-0011.jpg',
    11: 'HEEO UKR-1-20_page-0012.jpg',
    12: 'HEEO UKR-1-20_page-0013.jpg',
    13: 'HEEO UKR-1-20_page-0014.jpg',
    14: 'HEEO UKR-1-20_page-0015.jpg',
    15: 'HEEO UKR-1-20_page-0016.jpg',
    16: 'HEEO UKR-1-20_page-0017.jpg',
    17: 'HEEO UKR-1-20_page-0018.jpg',
    18: 'HEEO UKR-1-20_page-0019.jpg',
    19: 'HEEO UKR-1-20_page-0020.jpg',
  } : {
    1: 'HEEO 2025 -1.jpg',
    2: 'HEEO 2025 -2.jpg',
    3: 'HEEO 2025 -4.jpg',
    4: 'HEEO 2025 -5.jpg',
    5: 'HEEO 2025 -6.jpg',
    6: 'HEEO 2025 -7.jpg',
    7: 'HEEO 2025 -8.jpg',
    8: 'HEEO 2025 -9.jpg',
    9: 'HEEO 2025 -10.jpg',
    10: 'HEEO 2025 -11.jpg',
    11: 'HEEO 2025 -12.jpg',
    12: 'HEEO 2025 -13.jpg',
    13: 'HEEO 2025 -14.jpg',
    14: 'HEEO 2025 -15.jpg',
    15: 'HEEO 2025 -16.jpg',
    16: 'HEEO 2025 -17.jpg',
    17: 'HEEO 2025 -18.jpg',
    18: 'HEEO 2025 -19.jpg',
    19: 'HEEO 2025 -20.jpg',
  };

  return [
    { id: 1, src: getImagePath(slideFileNames[1], language), alt: 'Слайд 1' },
    { id: 2, src: getImagePath(slideFileNames[2], language), alt: 'Слайд 2' },
    { id: 3, src: getImagePath(slideFileNames[3], language), alt: 'Слайд 3' },
    { id: 4, src: getImagePath(slideFileNames[4], language), alt: 'Слайд 4' },
    { id: 5, src: getImagePath(slideFileNames[5], language), alt: 'Слайд 5' },
    { id: 6, src: getImagePath(slideFileNames[6], language), alt: 'Слайд 6' },
    { id: 7, src: getImagePath(slideFileNames[7], language), alt: 'Слайд 7' },
    { id: 8, src: getImagePath(slideFileNames[8], language), alt: 'Слайд 8' },
    { id: 9, src: getImagePath(slideFileNames[9], language), alt: 'Слайд 9' },
    { id: 10, src: getImagePath(slideFileNames[10], language), alt: 'Слайд 10' },
    { id: 11, src: getImagePath(slideFileNames[11], language), alt: 'Слайд 11' },
    { id: 12, src: getImagePath(slideFileNames[12], language), alt: 'Слайд 12' },
    { id: 13, src: getImagePath(slideFileNames[13], language), alt: 'Слайд 13' },
    { id: 14, src: getImagePath(slideFileNames[14], language), alt: 'Слайд 14' },
    { id: 15, src: getImagePath(slideFileNames[15], language), alt: 'Слайд 15' },
    { id: 16, src: getImagePath(slideFileNames[16], language), alt: 'Слайд 16' },
    { id: 17, src: getImagePath(slideFileNames[17], language), alt: 'Слайд 17' },
    { id: 18, src: getImagePath(slideFileNames[18], language), alt: 'Слайд 18' },
    { id: 19, src: getImagePath(slideFileNames[19], language), alt: 'Слайд 19' },
  ];
};

const PresentationPage = ({ onBack, language = 'en' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const slides = getSlides(language);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === ' ') {
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Автоматически включаем полноэкранный режим на мобильных устройствах
  useEffect(() => {
    if (isMobile && !document.fullscreenElement) {
      // Добавляем обработчик клика для запуска fullscreen
      const enableFullscreen = () => {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen().then(() => {
            setIsFullscreen(true);
          }).catch((err) => {
            console.log('Fullscreen request failed:', err);
          });
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen();
          setIsFullscreen(true);
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
          setIsFullscreen(true);
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
          setIsFullscreen(true);
        }
        document.removeEventListener('touchstart', enableFullscreen);
        document.removeEventListener('click', enableFullscreen);
      };

      // Небольшая задержка и попытка автоматического включения
      setTimeout(() => {
        enableFullscreen();
        // Если не получилось, добавляем слушатель на первое взаимодействие
        document.addEventListener('touchstart', enableFullscreen, { once: true });
        document.addEventListener('click', enableFullscreen, { once: true });
      }, 300);
    }
  }, [isMobile]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="presentation-fullscreen" style={{ paddingTop: 10, paddingBottom: 10, position: 'relative', width: '100vw', height: '100vh', boxSizing: 'border-box' }}>
      {/* Фулскрин кнопка */}
      <button
        className="presentation-fullscreen-btn"
        style={{ 
          position: 'absolute', 
          right: isMobile ? 8 : 32, 
          top: isMobile ? 8 : 32, 
          zIndex: 20, 
          fontSize: 28, 
          background: '#fff', 
          border: 'none', 
          borderRadius: '50%', 
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)', 
          fontWeight: 'bold', 
          cursor: 'pointer', 
          width: isMobile ? 48 : 64, 
          height: isMobile ? 48 : 64, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
        onClick={handleFullscreen}
        title={isFullscreen ? 'Выйти из полного экрана' : 'Полный экран'}
      >
        {isFullscreen ? <FullscreenExitOutlined style={{ fontSize: isMobile ? 32 : 48, fontWeight: 'bold' }} /> : <FullscreenOutlined style={{ fontSize: isMobile ? 32 : 48, fontWeight: 'bold' }} />}
      </button>

      {/* Левая галочка */}
      <button
        className="presentation-arrow presentation-arrow-left"
        style={{ 
          position: 'absolute', 
          left: isMobile ? 8 : 32, 
          top: '50%', 
          transform: 'translateY(-50%)', 
          zIndex: 10, 
          fontSize: 48, 
          background: '#fff', 
          border: 'none', 
          borderRadius: '50%', 
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)', 
          fontWeight: 'bold', 
          cursor: 'pointer', 
          width: isMobile ? 48 : 64, 
          height: isMobile ? 48 : 64, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
        onClick={() => setCurrentSlide(Math.max(currentSlide - 1, 0))}
        disabled={currentSlide === 0}
        aria-label="Предыдущий слайд"
      >
        <LeftOutlined style={{ fontSize: isMobile ? 32 : 48, fontWeight: 'bold', margin: 'auto' }} />
      </button>

      <div style={{ 
        height: 'calc(100vh - 20px)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
      }}>
        <img
          src={slides[currentSlide].src}
          alt={slides[currentSlide].alt}
          className="presentation-slide-image"
          style={{ 
            maxHeight: '100%', 
            maxWidth: '100%', 
            objectFit: 'contain',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)'
          }}
          onClick={() => setCurrentSlide(Math.min(currentSlide + 1, slides.length - 1))}
        />
      </div>

      {/* Домик */}
      <button
        className="presentation-home-btn"
        style={{ 
          position: 'absolute', 
          right: isMobile ? 8 : 32, 
          bottom: isMobile ? 8 : 32, 
          zIndex: 10, 
          fontSize: 28, 
          background: '#fff', 
          border: 'none', 
          borderRadius: '50%', 
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)', 
          fontWeight: 'bold', 
          cursor: 'pointer', 
          width: isMobile ? 48 : 64, 
          height: isMobile ? 48 : 64, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
        onClick={onBack}
        title="Домой"
      >
        <HomeOutlined style={{ fontSize: isMobile ? 32 : 48, fontWeight: 'bold' }} />
      </button>

      {/* Правая галочка */}
      <button
        className="presentation-arrow presentation-arrow-right"
        style={{
          position: 'absolute',
          right: isMobile ? 8 : 32,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          fontSize: 48,
          background: '#fff',
          border: 'none',
          borderRadius: '50%',
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          fontWeight: 'bold',
          cursor: 'pointer',
          width: isMobile ? 48 : 64,
          height: isMobile ? 48 : 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={() => setCurrentSlide(Math.min(currentSlide + 1, slides.length - 1))}
        disabled={currentSlide === slides.length - 1}
        aria-label="Следующий слайд"
      >
        <RightOutlined style={{ fontSize: isMobile ? 32 : 48, fontWeight: 'bold', margin: 'auto' }} />
      </button>
    </div>
  );
};

export default PresentationPage;
