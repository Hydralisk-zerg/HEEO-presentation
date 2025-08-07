// Конфигурация слайдов - объект-конструктор
export const slideConfig = [
  {
    id: 1,
    type: 1, // Тип 1: Только заголовок + изображение
    title: {
      uk: "",
      en: ""
    },
    text: {
      uk: "",
      en: ""
    },
    image: {
      uk: "/images/first_page.jpg",
      en: "/images/first_page.jpg"
    }
  },
  {
    id: 2,
    type: 2, // Тип 2: 75% изображение слева + 25% текст справа
    title: {
      uk: "Наша мережа",
      en: "Our Network"
    },
    text: {
      uk: `150  років досвіду та спеціальних регіональних знань

64 789 відправлень на день

263  філії в 56 країнах

10 743              співробітників 
по всьому світу`,
      en: `150  years of experience and special regional knowledge

64 789 shipments per day

263  Brunch offices  in 56 countries

10 743              employees 
all over the world`
    },
    image: {
      uk: "/images/Our Network.jpg",
      en: "/images/Our Network.jpg"
    },
    textStyles: {
      // Стили для выделения чисел
      numbers: {
        color: '#FF6B35', // оранжевый цвет для чисел
        fontWeight: 'bold',
        fontSize: '1.2em' // на 20% больше базового размера
      },
      // Позиции чисел в тексте (какие слова выделить)
      highlightWords: ['150', '64 789', '263', '56', '10 743']
    },

  },
  {
    id: 3,
    type: 1, // Тип 1: Только заголовок + изображение
    title: {
      uk: "Наші продукти",
      en: "Our products"
    },
    text: {
      uk: "",
      en: ""
    },
    image: {
      uk: "/images/our products.jpg",
      en: "/images/our products.jpg"
    }
  },
    {
    id: 4,
    type: 1, // Тип 1: Только заголовок + изображение
    title: {
      uk: "Наші послуги – Авіаперевезення",
      en: "Our services – Air Freight"
    },
    text: {
      uk: "",
      en: ""
    },
    image: {
      uk: "/images/наши послуги авіаперевезення.jpg",
      en: "/images/Our services – Air Freight.jpg"
    }
  },
  // Пример слайда только для английского:
  // {
  //   id: 3,
  //   type: 3,
  //   title: { en: "Innovation in Logistics" },
  //   text: { en: "Modern digital technologies allow us to track shipments in real time, optimize routes and ensure transparency of all logistics processes. We invest in sustainable and green solutions." },
  //   imagePath: "/images/en/HEEO 2025 -10.jpg",
  // },
];


// Функция для получения локализованного контента
export const getLocalizedSlide = (slide, language = 'uk') => {
  // если слайд не предназначен для этого языка — не возвращаем
  if (slide.languages && !slide.languages.includes(language)) return null;
  return {
    ...slide,
    title: typeof slide.title === 'object' ? slide.title[language] || slide.title.uk : slide.title,
    text: typeof slide.text === 'object' ? slide.text[language] || slide.text.uk : slide.text,
    image: slide.image && typeof slide.image === 'object'
      ? slide.image[language] || slide.image.uk || slide.image.en
      : slide.image
  };
};

// Функция для работы с языком в localStorage
export const getStoredLanguage = () => {
  try {
    return localStorage.getItem('presentation-language') || 'uk';
  } catch (error) {
    return 'uk';
  }
};

export const setStoredLanguage = (language) => {
  try {
    localStorage.setItem('presentation-language', language);
  } catch (error) {
    console.warn('Cannot save language to localStorage:', error);
  }
};

// Доступные языки
export const availableLanguages = {
  uk: 'Українська',
  en: 'English'
};
