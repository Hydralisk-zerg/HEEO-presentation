import React from 'react';
import { Button } from 'antd';
import { HomeOutlined, FullscreenOutlined, FullscreenExitOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';

const getImagePath = (filename) => {
  if (process.env.NODE_ENV === 'production') {
    return `/HEEO-presentation/images/${filename}`;
  }
  return `/images/${filename}`;
};

const slides = [
  { id: 1, src: getImagePath('HEEO 2025 -1.jpg'), alt: 'Слайд 1' },
  { id: 2, src: getImagePath('HEEO 2025 -2.jpg'), alt: 'Слайд 2' },
  { id: 3, src: getImagePath('HEEO 2025 -3.jpg'), alt: 'Слайд 3' },
  { id: 4, src: getImagePath('HEEO 2025 -4.jpg'), alt: 'Слайд 4' },
  { id: 5, src: getImagePath('HEEO 2025 -5.jpg'), alt: 'Слайд 5' },
  { id: 6, src: getImagePath('HEEO 2025 -6.jpg'), alt: 'Слайд 6' },
  { id: 7, src: getImagePath('HEEO 2025 -7.jpg'), alt: 'Слайд 7' },
  { id: 8, src: getImagePath('HEEO 2025 -8.jpg'), alt: 'Слайд 8' },
  { id: 9, src: getImagePath('HEEO 2025 -9.jpg'), alt: 'Слайд 9' },
  { id: 10, src: getImagePath('HEEO 2025 -10.jpg'), alt: 'Слайд 10' },
  { id: 11, src: getImagePath('HEEO 2025 -11.jpg'), alt: 'Слайд 11' },
  { id: 12, src: getImagePath('HEEO 2025 -12.jpg'), alt: 'Слайд 12' },
  { id: 13, src: getImagePath('HEEO 2025 -13.jpg'), alt: 'Слайд 13' },
  { id: 14, src: getImagePath('HEEO 2025 -14.jpg'), alt: 'Слайд 14' },
  { id: 15, src: getImagePath('HEEO 2025 -15.jpg'), alt: 'Слайд 15' },
  { id: 16, src: getImagePath('HEEO 2025 -16.jpg'), alt: 'Слайд 16' },
  { id: 17, src: getImagePath('HEEO 2025 -17.jpg'), alt: 'Слайд 17' },
  { id: 18, src: getImagePath('HEEO 2025 -18.jpg'), alt: 'Слайд 18' },
  { id: 19, src: getImagePath('HEEO 2025 -19.jpg'), alt: 'Слайд 19' },
  { id: 20, src: getImagePath('HEEO 2025 -20.jpg'), alt: 'Слайд 20' },
];

const PresentationPage = ({ onBack }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const [isFullscreen, setIsFullscreen] = useState(false);

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
        style={{ position: 'absolute', right: 32, top: 32, zIndex: 20, fontSize: 28, background: '#fff', border: 'none', borderRadius: '50%', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', fontWeight: 'bold', cursor: 'pointer', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={handleFullscreen}
        title={isFullscreen ? 'Выйти из полного экрана' : 'Полный экран'}
      >
        {isFullscreen ? <FullscreenExitOutlined style={{ fontSize: 48, fontWeight: 'bold' }} /> : <FullscreenOutlined style={{ fontSize: 48, fontWeight: 'bold' }} />}
      </button>

      {/* Левая галочка */}
      <button
        className="presentation-arrow presentation-arrow-left"
        style={{ position: 'absolute', left: 32, top: '50%', transform: 'translateY(-50%)', zIndex: 10, fontSize: 48, background: '#fff', border: 'none', borderRadius: '50%', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', fontWeight: 'bold', cursor: 'pointer', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={() => setCurrentSlide(Math.max(currentSlide - 1, 0))}
        disabled={currentSlide === 0}
        aria-label="Предыдущий слайд"
      >
        <LeftOutlined style={{ fontSize: 48, fontWeight: 'bold', margin: 'auto' }} />
      </button>

      <div style={{ height: 'calc(100vh - 20px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={slides[currentSlide].src}
          alt={slides[currentSlide].alt}
          className="presentation-slide-image"
          style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
          onClick={() => setCurrentSlide(Math.min(currentSlide + 1, slides.length - 1))}
        />
      </div>

      {/* Домик */}
      <button
        className="presentation-home-btn"
        style={{ position: 'absolute', right: 32, bottom: 32, zIndex: 10, fontSize: 28, background: '#fff', border: 'none', borderRadius: '50%', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', fontWeight: 'bold', cursor: 'pointer', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={onBack}
        title="Домой"
      >
        <HomeOutlined style={{ fontSize: 48, fontWeight: 'bold' }} />
      </button>

      {/* Правая галочка */}
      <button
        className="presentation-arrow presentation-arrow-right"
        style={{
          position: 'absolute',
          right: 32,
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
          width: 64,
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={() => setCurrentSlide(Math.min(currentSlide + 1, slides.length - 1))}
        disabled={currentSlide === slides.length - 1}
        aria-label="Следующий слайд"
      >
        <RightOutlined style={{ fontSize: 48, fontWeight: 'bold', margin: 'auto' }} />
      </button>
    </div>
  );
};

export default PresentationPage;
