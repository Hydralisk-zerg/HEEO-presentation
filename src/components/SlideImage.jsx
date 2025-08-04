import React from 'react';

const SlideImage = ({ slide, onClick, title }) => {
  const isLogo = slide.alt.includes('Логотип') || slide.alt.includes('логотип');
  
  return (
    <img 
      src={slide.src} 
      alt={slide.alt}
      className={`slide-image ${isLogo ? 'logo-slide' : ''}`}
      onClick={onClick}
      title={title}
      style={isLogo ? {
        background: 'white',
        padding: '40px',
        maxHeight: '70vh',
        maxWidth: '80%',
        objectFit: 'contain',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
      } : {}}
    />
  );
};

export default SlideImage;
