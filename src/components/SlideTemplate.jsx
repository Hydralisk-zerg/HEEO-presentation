import React, { useState, useEffect } from 'react';
import { Typography, Image } from 'antd';

const { Title, Paragraph } = Typography;

const SlideTemplate = ({ slide, t }) => {
  // Хук для хранения objectFit для картинок
  const [imageObjectFit, setImageObjectFit] = useState('cover');

  // Функция для проверки, помещается ли изображение в контейнер
  const checkImageFit = (img, container) => {
    if (!img || !container) return 'cover';
    // Если хотя бы одна сторона изображения больше контейнера — используем contain
    if (img.naturalWidth > container.clientWidth || img.naturalHeight > container.clientHeight) {
      return 'contain';
    }
    return 'cover';
  };

  // Эффект для установки objectFit после загрузки изображения
  useEffect(() => {
    // Для каждого изображения на слайде
    const imgs = document.querySelectorAll('.slide-image-auto-fit');
    imgs.forEach(img => {
      img.onload = () => {
        const container = img.parentElement;
        const fit = checkImageFit(img, container);
        setImageObjectFit(fit);
      };
      // Если уже загружено
      if (img.complete) {
        const container = img.parentElement;
        const fit = checkImageFit(img, container);
        setImageObjectFit(fit);
      }
    });
  }, [slide.image, isMobile, isPortrait]);
  // Функция для выделения специальных слов в тексте
  const renderFormattedText = (text, textStyles) => {
    if (!textStyles || !textStyles.highlightWords) {
      return text;
    }

    let formattedText = text;
    const parts = [];
    let lastIndex = 0;

    // Создаем регулярное выражение для поиска всех выделяемых слов
    const wordsPattern = textStyles.highlightWords.map(word => 
      word.replace(/\s+/g, '\\s+') // заменяем пробелы на гибкие пробелы
    ).join('|');
    const regex = new RegExp(`(${wordsPattern})`, 'g');

    text.split('\n').forEach((line, lineIndex) => {
      if (lineIndex > 0) {
        parts.push(<br key={`br-${lineIndex}`} />);
      }

      let lineLastIndex = 0;
      let match;

      while ((match = regex.exec(line)) !== null) {
        // Добавляем обычный текст перед выделенным словом
        if (match.index > lineLastIndex) {
          parts.push(line.substring(lineLastIndex, match.index));
        }

        // Добавляем выделенное слово
        parts.push(
          <span 
            key={`highlight-${lineIndex}-${match.index}`}
            style={textStyles.numbers}
          >
            {match[0]}
          </span>
        );

        lineLastIndex = match.index + match[0].length;
      }

      // Добавляем оставшийся текст в строке
      if (lineLastIndex < line.length) {
        parts.push(line.substring(lineLastIndex));
      }

      regex.lastIndex = 0; // сбрасываем индекс для следующей строки
    });

    return parts;
  };

  // Более точное определение мобильного устройства
  const [isMobile, setIsMobile] = useState(() => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 1024;
  });

  useEffect(() => {
    const handleResize = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 1024;
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
            paddingLeft: window.innerWidth <= 1024 ? '5px' : '20px',
            paddingRight: window.innerWidth <= 1024 ? '5px' : '20px',
            paddingBottom: window.innerWidth <= 1024 ? '5px' : '20px',
            paddingTop: (window.innerWidth <= 1024 && window.innerHeight > window.innerWidth) ? '0px' : (window.innerWidth <= 1024 ? '10px' : '20px'),
            overflow: 'hidden',
          }}>
            <div style={{
              width: '100%',
              height: window.innerWidth <= 1024 ?
                ((window.innerHeight > window.innerWidth) ? '60vh' : '80vh') : '100%',
              minHeight: 0,
              minWidth: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              borderRadius: window.innerWidth <= 1024 ? '8px' : '12px',
              position: 'relative',
              background: '#fff',
            }}>
              {slide.image?.endsWith('.pdf') ? (
                <iframe
                  src={slide.image}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: window.innerWidth <= 1024 ? '8px' : '10px',
                  }}
                  title={slide.title}
                />
              ) : (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="slide-image-auto-fit"
                  style={{
                    maxWidth: window.innerWidth > 1024 ? '90vw' : '100%',
                    maxHeight: window.innerWidth > 1024 ? '70vh' : '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: window.innerWidth <= 1024 ? '8px' : '10px',
                    background: '#fff',
                    display: 'block',
                    margin: '0 auto',
                  }}
                  draggable={false}
                />
              )}
            </div>
          </div>
        );

      case 2: // 60% изображение слева + 30% текст справа + 10% для кнопок (5% слева + 5% справа)
        // Вычисляем ширину текстового блока для шаблона 2
        const textBlockWidth = window.innerWidth > 1024
          ? '28%'
          : (window.innerHeight > window.innerWidth ? '95%' : '33.33%');
        return (
          <div
            style={{
              display: 'flex',
              height: '100%',
              padding: window.innerWidth <= 1024
                ? ((window.innerHeight > window.innerWidth) ? '0px' : '5px')
                : '0',
              overflow: 'hidden',
              gap: window.innerWidth <= 1024 ? '8px' : '0',
              flexDirection:
                window.innerWidth <= 1024 && window.innerHeight > window.innerWidth
                  ? 'column'
                  : 'row',
              alignItems:
                window.innerWidth <= 1024 && window.innerHeight > window.innerWidth
                  ? 'stretch'
                  : 'flex-start',
              justifyContent:
                window.innerWidth <= 1024 && window.innerHeight > window.innerWidth
                  ? 'space-between'
                  : 'flex-start',
            }}
          >
            {/* Изображение для 2 шаблона */}
            <div
              style={{
                width:
                  window.innerWidth <= 1024
                    ? window.innerHeight > window.innerWidth
                      ? '95%'
                      : '66.67%'
                    : '70%',
                height:
                  window.innerWidth <= 1024
                    ? window.innerHeight > window.innerWidth
                      ? 'calc(50vh - 60px)'
                      : '90%'
                    : '105%',
                maxHeight: window.innerWidth > 1024 ? '100%' : undefined,
                overflow: 'hidden',
                borderRadius: window.innerWidth <= 1024 ? '6px' : '12px',
                position: 'relative',
                flexShrink: 0,
                order:
                  window.innerWidth <= 1024 && window.innerHeight > window.innerWidth
                    ? '1'
                    : '1',
                marginBottom:
                  window.innerWidth <= 1024 && window.innerHeight > window.innerWidth
                    ? '5px'
                    : '0',
                marginLeft: window.innerWidth > 1024 ? '-25px' : '0',
                display: 'flex',
                alignItems: 'flex-start', // прижать вверх
                justifyContent: 'flex-start', // прижать влево
                background: '#fff',
                boxSizing: 'border-box',
                padding: 0,
              }}
            >
              {slide.image?.endsWith('.pdf') ? (
                <iframe
                  src={slide.image}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: window.innerWidth <= 1024 ? '6px' : '12px',
                  }}
                  title={slide.title}
                />
              ) : (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="slide-image-auto-fit"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: window.innerWidth <= 1024 ? '6px' : '12px',
                    background: '#fff',
                    display: 'block',
                    margin: '0 auto',
                  }}
                  draggable={false}
                />
              )}
            </div>
            {/* Текстовый блок для 2 шаблона */}
            <div
              style={{
                width: textBlockWidth,
                flex:
                  window.innerWidth <= 1024
                    ? window.innerHeight > window.innerWidth
                      ? 'none'
                      : '1'
                    : 'none',
                height:
                  window.innerWidth <= 1024 && window.innerHeight > window.innerWidth
                    ? 'calc(50vh - 55px)'
                    : 'auto',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                padding:
                  window.innerWidth <= 1024
                    ? window.innerHeight > window.innerWidth
                      ? '5px 5px'
                      : '5px 10px'
                    : '20px 0',
                order:
                  window.innerWidth <= 1024 && window.innerHeight > window.innerWidth
                    ? '2'
                    : '2',
                marginTop:
                  window.innerWidth <= 1024 && window.innerHeight > window.innerWidth
                    ? '5px'
                    : '0',
              }}
            >
              <Paragraph
                style={{
                  fontSize:
                    window.innerWidth <= 1024 && window.innerHeight > window.innerWidth
                      ? '18px'
                      : window.innerWidth <= 1024 && window.innerHeight <= window.innerWidth
                      ? '16px'
                      : '20px',
                  lineHeight:
                    window.innerWidth <= 1024 && window.innerHeight > window.innerWidth
                      ? '1.5'
                      : window.innerWidth <= 1024 && window.innerHeight <= window.innerWidth
                      ? '1.2'
                      : '1.5',
                  color: '#004C99',
                  margin: 0,
                  fontWeight: window.innerWidth > 1024 ? 'bold' : '600',
                  textAlign:
                    window.innerWidth <= 1024 && window.innerHeight > window.innerWidth
                      ? 'center'
                      : 'left',
                }}
              >
                {renderFormattedText(slide.text, slide.textStyles)}
              </Paragraph>
            </div>
            {/* 5% отступ справа (только десктоп) */}
            {window.innerWidth > 1024 && <div style={{ width: '5%' }} />}
          </div>
        );

      case 3: // 30% текст слева + 60% изображение справа + 10% для кнопок (5% слева + 5% справа)
        return (
          <div style={{ 
            display: 'flex',
            height: '100%',
            padding: window.innerWidth <= 1024 ? 
              ((window.innerHeight > window.innerWidth) ? '0px' : '5px') : '20px', // убираем padding для портретного режима
            overflow: 'hidden',
            gap: window.innerWidth <= 1024 ? '8px' : '30px',
            flexDirection: (window.innerWidth <= 1024 && window.innerHeight > window.innerWidth) ? 'column' : 'row',
            // Добавляем отступы для кнопок в горизонтальном мобильном режиме
            marginLeft: (window.innerWidth <= 1024 && window.innerHeight <= window.innerWidth) ? '5%' : '0',
            marginRight: (window.innerWidth <= 1024 && window.innerHeight <= window.innerWidth) ? '5%' : '0',
            // Убираем центрирование для портретного режима
            alignItems: (window.innerWidth <= 1024 && window.innerHeight > window.innerWidth) ? 'stretch' : 'flex-start',
            justifyContent: (window.innerWidth <= 1024 && window.innerHeight > window.innerWidth) ? 'space-between' : 'flex-start'
          }}>
            {/* Текст для 3 шаблона */}
            <div style={{ 
              width: window.innerWidth <= 1024 ? 
                ((window.innerHeight > window.innerWidth) ? '95%' : '33.33%') : // увеличиваем ширину для портретного режима
                '25%', // десктоп: 25%
              order: (window.innerWidth <= 1024 && window.innerHeight > window.innerWidth) ? '2' : '1', // текст снизу для портретного
              flex: window.innerWidth <= 1024 ? 
                ((window.innerHeight > window.innerWidth) ? 'none' : '1') : 'none', // убираем flex для портретного
              height: window.innerWidth <= 1024 && window.innerHeight > window.innerWidth ? 'calc(50vh - 55px)' : 'auto', // высота от кнопок вниз
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center', // центрируем текст
              padding: window.innerWidth <= 1024 ? 
                ((window.innerHeight > window.innerWidth) ? '5px 5px' : '5px 10px') : // отступ от кнопок
                '20px 0',
              marginTop: (window.innerWidth <= 1024 && window.innerHeight > window.innerWidth) ? '5px' : '0' // отступ от кнопок
            }}>
              <Paragraph 
                style={{ 
                  fontSize: (window.innerWidth <= 1024 && window.innerHeight > window.innerWidth) ? '18px' : 
                           (window.innerWidth <= 1024 && window.innerHeight <= window.innerWidth) ? '14px' : '18px',
                  lineHeight: (window.innerWidth <= 1024 && window.innerHeight > window.innerWidth) ? '1.5' : 
                             (window.innerWidth <= 1024 && window.innerHeight <= window.innerWidth) ? '1.2' : '1.5',
                  color: '#004C99',
                  margin: 0,
                  fontWeight: '600',
                  textAlign: (window.innerWidth <= 1024 && window.innerHeight > window.innerWidth) ? 'center' : 'left' // центрируем текст для портретного
                }}
              >
                {renderFormattedText(slide.text, slide.textStyles)}
              </Paragraph>
            </div>
            {/* Изображение для 3 шаблона */}
            <div style={{ 
              width: window.innerWidth <= 1024 ? 
                ((window.innerHeight > window.innerWidth) ? '95%' : '66.67%') : // увеличиваем ширину для портретного режима
                '75%', // десктоп: 75%
              height: window.innerWidth <= 1024 ? 
                ((window.innerHeight > window.innerWidth) ? 'calc(50vh - 60px)' : '60%') : '70vh', // уменьшаем высоту еще больше для отступа
              order: (window.innerWidth <= 1024 && window.innerHeight > window.innerWidth) ? '1' : '2', // изображение сверху для портретного
              overflow: 'hidden',
              borderRadius: window.innerWidth <= 1024 ? '6px' : '12px',
              position: 'relative',
              flexShrink: 0,
              marginBottom: (window.innerWidth <= 1024 && window.innerHeight > window.innerWidth) ? '-15px' : '0' // уменьшаем отступ между картинкой и текстом
            }}>
              {slide.image?.endsWith('.pdf') ? (
                <iframe
                  src={slide.image}
                  style={{ 
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: window.innerWidth <= 1024 ? '6px' : '12px'
                  }}
                  title={slide.title}
                />
              ) : (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="slide-image-auto-fit"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: imageObjectFit,
                    borderRadius: window.innerWidth <= 1024 ? '6px' : '12px',
                    background: '#fff',
                    display: 'block'
                  }}
                  draggable={false}
                />
              )}
              {slide.image?.endsWith('.pdf') ? (
                <iframe
                  src={slide.image}
                  style={{ 
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: window.innerWidth <= 1024 ? '6px' : '12px'
                  }}
                  title={slide.title}
                />
              ) : (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="slide-image-auto-fit"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: imageObjectFit,
                    borderRadius: window.innerWidth <= 1024 ? '6px' : '12px',
                    background: '#fff',
                    display: 'block'
                  }}
                  draggable={false}
                />
              )}
              {slide.image?.endsWith('.pdf') ? (
                <iframe
                  src={slide.image}
                  style={{ 
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: window.innerWidth <= 1024 ? '6px' : '12px'
                  }}
                  title={slide.title}
                />
              ) : (
                <Image
                  src={slide.image}
                  alt={slide.title}
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: window.innerWidth <= 1024 ? '6px' : '12px',
                    background: '#fff'
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
      margin: isMobile ? '2px' : '35px 35px 35px 35px',
      borderRadius: isMobile ? '8px' : '16px',
      boxSizing: 'border-box',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: isMobile ? '0 1px 6px rgba(0,0,0,0.08)' : '0 8px 32px rgba(0,0,0,0.12)',
      padding: isMobile ? '2px' : '10px',
      maxWidth: isMobile ? '100vw' : 'calc(100% - 75px)',
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
      <div
        style={{
          position: 'absolute',
          top: isMobile ? (isPortrait ? '42px' : '2px') : '30px',
          left: isMobile ? '2px' : 'calc(30px + 10px)', // увеличиваем отступ слева на десктопе
          right: isMobile ? '75px' : 'calc(510px + 10px)', // увеличиваем отступ справа на десктопе
          zIndex: 101,
          width: isMobile ? 'auto' : 'calc(100% - 540px)', // ширина с учетом логотипа и отступов
          display: 'flex',
          justifyContent: isMobile ? 'center' : 'center',
          alignItems: 'center',
          pointerEvents: 'none', // чтобы не мешать кликам
        }}
      >
        <Title
          level={1}
          style={{
            color: '#004C99',
            margin: 0,
            textAlign: 'center',
            fontSize: (isMobile && isPortrait) ? '20px' : (isMobile ? '17px' : '32px'),
            fontWeight: ([1,2,3].includes(slide.type) ? 'bold' : '600'),
            lineHeight: (isMobile && isPortrait) ? '1.4' : (isMobile ? '1.2' : '1.4'),
            wordBreak: 'break-word',
            whiteSpace: 'pre-line',
            paddingLeft: isMobile ? 0 : 10,
            paddingRight: isMobile ? 0 : 10,
            maxWidth: isMobile ? '100%' : '100%',
            overflowWrap: 'break-word',
            // Для шаблонов 1,2,3 на десктопе — центрируем
            ...(window.innerWidth > 1024 && [1,2,3].includes(slide.type)
              ? { textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex', width: '100%' }
              : {})
          }}
        >
          {slide.title}
        </Title>
      </div>

      {/* Основной контент */}
      <div style={{ 
        flex: 1,
        paddingTop: (isMobile && isPortrait) ? '120px' : (isMobile && !isPortrait ? '17px' : '130px'), // увеличен с 70px до 85px для добавления 15px отступа между заголовком и картинкой в портретном режиме
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
