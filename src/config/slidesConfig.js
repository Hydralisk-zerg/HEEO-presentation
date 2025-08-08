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
      uk: `
150  років досвіду та спеціальних регіональних знань

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
      uk: "/images/Наші продукти.jpg",
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
    {
    id: 5,
    type: 1, // Тип 1: Только заголовок + изображение
    title: {
      uk: "Наші послуги – Морські перевезення",
      en: "Our services – Sea Freight"
    },
    text: {
      uk: "",
      en: ""
    },
    image: {
      uk: "/images/Our services – Sea Freight.jpg",
      en: "/images/Our services – Sea Freight.jpg"
    }
  },
  {
    id: 6,
    type: 2, // Тип 2: 75% изображение слева + 25% текст справа
    title: {
      uk: "Наші послуги – Автомобільні перевезення",
      en: "Our services – Road Freight"
    },
    text: {
      uk: `Регулярні FTL перевезення

      Перевезення контейнерів

      Вантажі з температурним контролем

      Негабаритні вантажі

      Небезпечні вантажі

      Маємо 380 активних партнерів із загальним 
      13 000 одиниць`,
      en: `Regular FTL shipments

      Shipments of containers

      Temperature control cargoes

      Oversized cargoes

      Dangerous goods

We have 380 active partners with total fleet 
of 13 000 units`
    },
    image: {
      uk: "/images/автоперевозки.jpg",
      en: "/images/автоперевозки.jpg"
    },
    textStyles: {
      // Стили для выделения чисел
      numbers: {
        color: '#FF6B35', // оранжевый цвет для чисел
        fontWeight: 'bold',
        fontSize: '1.2em' // на 20% больше базового размера
      },
      // Позиции чисел в тексте (какие слова выделить)
      highlightWords: ['380', '13 000']
    },
  },
  {
    id: 7,
    type: 1, // Тип 1: Только заголовок + изображение
    title: {
      uk: "Наші послуги – перевезення небезпечних вантажів, IM0 2, 3, 4, 6, 8, 9.",
      en: "Our services – shipments of dangerous goods, IM0 2,3,4,6,8,9."
    },
    text: {
      uk: "",
      en: ""
    },
    image: {
      uk: "/images/Our services – shipments of dangerous goods, IM0 2,3,4,6,8,9..jpg",
      en: "/images/Our services – shipments of dangerous goods, IM0 2,3,4,6,8,9..jpg"
    }
  },
  {
    id: 8,
    type: 1, // Тип 1: Только заголовок + изображение
    title: {
      uk: "Перевантаження: контейнер – вантажівка/вантажівка – контейнер у європейських морських портах",
      en: "Transshipment: container – truck/truck – container in European seaports."
    },
    text: {
      uk: "",
      en: ""
    },
    image: {
      uk: "/images/Our services – transshipment.jpg",
      en: "/images/Our services – transshipment.jpg"
    }
  },
  {
    id: 9,
    type: 1, // Тип 1: Только заголовок + изображение
    title: {
      uk: "Наші послуги – експорт зерна, цукру, соняшникової олії у флекси-танках",
      en: " Our services – export of grains, sugar, sunflower oil in flexy tanks."
    },
    text: {
      uk: "",
      en: ""
    },
    image: {
      uk: "/images/Our services – export of grains, sugar, sunflower oil in flexy tanks.jpg",
      en: "/images/Our services – export of grains, sugar, sunflower oil in flexy tanks.jpg"
    }
  },
  {
    id: 10,
    type: 1, // Тип 1: Только заголовок + изображение
    title: {
      uk: "Наше портфоліо – реалізація проектів – портовий силос COFCO, 2017",
      en: "Our portfolio – project delivery - COFCO port silo, 2017."
    },
    text: {
      uk: "",
      en: ""
    },
    image: {
      uk: "/images/Our portfolio – project delivery - COFCO port silo, 2017.jpg",
      en: "/images/Our portfolio – project delivery - COFCO port silo, 2017.jpg"
    }
  },
  {
    id: 11,
    type: 1, // Тип 1: Только заголовок + изображение
    title: {
      uk: "Наше портфоліо - складські послуги для Nordex 2020-2021",
      en: "Our portfolio - warehousing service for Nordex 2020-2021"
    },
    text: {
      uk: "",
      en: ""
    },
    image: {
      uk: "/images/Our portfolio - warehousing service for Nordex 2020-2021.jpg",
      en: "/images/Our portfolio - warehousing service for Nordex 2020-2021.jpg"
    }
  },
  {
    id: 11,
    type: 1, // Тип 1: Только заголовок + изображение
    title: {
      uk: "Наше портфоліо – реалізація проектів завод Roshen – 2020, 2021",
      en: "Our portfolio – project delivery – Roshen factory – 2020, 2021"
    },
    text: {
      uk: "",
      en: ""
    },
    image: {
      uk: "/images/Our portfolio – project delivery – Roshen factory – 2020, 2021.jpg",
      en: "/images/Our portfolio – project delivery – Roshen factory – 2020, 2021.jpg"
    }
  },
  {
    id: 12,
    type: 1, // Тип 1: Только заголовок + изображение
    title: {
      uk: "Наше портфоліо – Поставка на завод Interstarch – 2018",
      en: "Our portfolio – Interstarch factory delivery  - 2018"
    },
    text: {
      uk: "",
      en: ""
    },
    image: {
      uk: "/images/Our portfolio – Interstarch factory delivery  - 2018.jpg",
      en: "/images/Our portfolio – Interstarch factory delivery  - 2018.jpg"
    }
  },
  {
    id: 13,
    type: 1, // Тип 1: Только заголовок + изображение
    title: {
      uk: "Доставка вантажів з аукціонних будинків ЄС + Велика Британія та США 2022-2023",
      en: "Cargo delivery from auction houses of EU + Great Britain and USA 2022-2023"
    },
    text: {
      uk: "",
      en: ""
    },
    image: {
      uk: "/images/Cargo delivery from auction houses of EU + Great Britain and USA 2022-2023.jpg",
      en: "/images/Cargo delivery from auction houses of EU + Great Britain and USA 2022-2023.jpg"
    }
  },
  {
    id: 14,
    type: 1, // Тип 1: Только заголовок + изображение
    title: {
      uk: "Регулярні енергетичні проекти 2022-2025",
      en: "Regular energy projects 2022-2025"
    },
    text: {
      uk: "",
      en: ""
    },
    image: {
      uk: "/images/Regular energy projects 2022-2025.jpg",
      en: "/images/Regular energy projects 2022-2025.jpg"
    }
  },
 {
    id: 15,
    type: 1, // Тип 1: Только заголовок + изображение
    title: {
      uk: "Регулярні енергетичні проекти 2022-2025",
      en: "Regular energy projects 2022-2025"
    },
    text: {
      uk: "",
      en: ""
    },
    image: {
      uk: "/images/HEEO 2025 -17.jpg",
      en: "/images/HEEO 2025 -17.jpg"
    }
  },
  {
    id: 16,
    type: 1, // Тип 1: Только заголовок + изображение
    title: {
      uk: "Лідери галузі, які довіряють нам",
      en: "Industry leaders who place their trust in us"
    },
    text: {
      uk: "",
      en: ""
    },
    image: {
      uk: "/images/Industry leaders who place their trust in us.jpg",
      en: "/images/Industry leaders who place their trust in us.jpg"
    }
  },
  {
    id: 17,
    type: 1, // Тип 1: Только заголовок + изображение
    title: {
      uk: "Лідери галузі, які довіряють нам",
      en: "Industry leaders who place their trust in us"
    },
    text: {
      uk: "",
      en: ""
    },
    image: {
      uk: "/images/Industry leaders who place their trust in us 2.jpg",
      en: "/images/Industry leaders who place their trust in us 2.jpg"
    }
  },
  {
    id: 18,
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
      uk: "/images/HEEO UKR-1-20_page-0020.jpg",
      en: "/images/HEEO 2025 -20.jpg"
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
