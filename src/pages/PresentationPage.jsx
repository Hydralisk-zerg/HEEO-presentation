import React, { useState, useEffect } from 'react';
import { Button, Progress, Layout, Typography, Space, message } from 'antd';
import { 
  LeftOutlined, 
  RightOutlined, 
  HomeOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

// Массив всех слайдов
const getImagePath = (filename) => {
  const basePath = process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES ? '/HEEO-presentation' : '';
  return `${basePath}/images/${filename}`;
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

const PresentationPage = ({ onBack, t }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Обработка клавиатуры
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          goToPreviousSlide();
          break;
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          goToNextSlide();
          break;
        case 'Home':
          setCurrentSlide(0);
          break;
        case 'End':
          setCurrentSlide(slides.length - 1);
          break;
        case 'f':
        case 'F11':
          event.preventDefault();
          toggleFullscreen();
          break;
        case 'Escape':
          if (isFullscreen) {
            toggleFullscreen();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isFullscreen]);

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      message.info(t.lastSlide);
    }
  };

  const goToPreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      message.info(t.firstSlide);
    }
  };

  const goToFirstSlide = () => {
    setCurrentSlide(0);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const progressPercent = ((currentSlide + 1) / slides.length) * 100;

  return (
    <Layout className="presentation-container">
      <Header style={{ 
        background: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(10px)',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '0 24px'
      }}>
        <Space>
          <Button 
            icon={<ArrowLeftOutlined />} 
            onClick={onBack}
            title={t.back}
          >
            {t.back}
          </Button>
          <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
            {t.title}
          </Title>
        </Space>
        <Space>
          <Button 
            icon={<HomeOutlined />} 
            onClick={goToFirstSlide}
            title={`${t.home} (Home)`}
          >
            {t.home}
          </Button>
          <Button 
            icon={isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
            onClick={toggleFullscreen}
            title={`${t.fullscreen} (F)`}
          >
            {isFullscreen ? t.exit : t.fullscreen}
          </Button>
        </Space>
      </Header>

      <Content className="slide-container">
        <img 
          src={slides[currentSlide].src} 
          alt={slides[currentSlide].alt}
          className="slide-image"
          onClick={goToNextSlide}
          title={t.next}
        />
      </Content>

      <Footer className="navigation-controls">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Space>
            <Button 
              icon={<LeftOutlined />} 
              onClick={goToPreviousSlide}
              disabled={currentSlide === 0}
              title={`${t.previous} (← или ↑)`}
            >
              {t.back}
            </Button>
            <Button 
              type="primary"
              icon={<RightOutlined />} 
              onClick={goToNextSlide}
              disabled={currentSlide === slides.length - 1}
              title={`${t.next} (→, ↓ или пробел)`}
            >
              {t.next}
            </Button>
          </Space>
          
          <div style={{ flex: 1, margin: '0 24px' }}>
            <Progress 
              percent={progressPercent} 
              showInfo={false}
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
            />
          </div>
          
          <span className="slide-counter">
            {currentSlide + 1} {t.slideCounter} {slides.length}
          </span>
        </div>
        
        <div style={{ 
          textAlign: 'center', 
          marginTop: '8px', 
          fontSize: '12px', 
          color: '#999' 
        }}>
          {t.navigation}
        </div>
      </Footer>
    </Layout>
  );
};

export default PresentationPage;
