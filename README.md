# Reveal.js Презентация

Тестовая презентация, созданная с помощью reveal.js для размещения на GitHub Pages.

## 🚀 Быстрый старт

### Локальный просмотр
1. Откройте файл `index.html` в браузере
2. Или используйте Live Server в VS Code

### Управление презентацией
- **Стрелки** - навигация между слайдами
- **Пробел** - следующий слайд
- **Esc** - обзор всех слайдов
- **F** - полноэкранный режим

## 📦 Размещение на GitHub Pages

### Шаг 1: Создание репозитория
1. Создайте новый репозиторий на GitHub
2. Загрузите все файлы проекта

### Шаг 2: Включение GitHub Pages
1. Перейдите в настройки репозитория (Settings)
2. Найдите раздел "Pages"
3. В источнике выберите "Deploy from a branch"
4. Выберите ветку "main" и папку "/ (root)"
5. Сохраните настройки

### Шаг 3: Получение ссылки
После активации GitHub Pages вы получите ссылку вида:
```
https://username.github.io/repository-name
```

## 📱 Создание QR-кода

### Онлайн генераторы:
- [QR Code Generator](https://www.qr-code-generator.com/)
- [QR.io](https://qr.io/)
- [QRCode Monkey](https://www.qrcode-monkey.com/)

### Инструкция:
1. Скопируйте ссылку на вашу презентацию
2. Вставьте в генератор QR-кодов
3. Настройте размер и дизайн
4. Скачайте готовый QR-код

## 🛠 Кастомизация

### Темы
Замените тему в `index.html`:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.6.1/dist/theme/[THEME].css">
```

Доступные темы:
- black (по умолчанию)
- white
- league
- beige
- sky
- night
- serif
- simple
- solarized
- blood
- moon

### Переходы
Измените тип перехода в настройках JavaScript:
```javascript
transition: 'slide' // none/fade/slide/convex/concave/zoom
```

## 📁 Структура проекта
```
/
├── index.html          # Основная презентация
├── README.md          # Документация
└── .github/
    └── copilot-instructions.md
```

## 🎯 Советы

1. **Мобильная адаптация**: Презентация автоматически адаптируется под мобильные устройства
2. **Офлайн доступ**: Можно скачать reveal.js локально для работы без интернета
3. **Экспорт в PDF**: Добавьте `?print-pdf` к URL для печати
4. **Клавиши навигации**: Изучите все горячие клавиши для удобства

## 📞 Поддержка

- [Документация reveal.js](https://revealjs.com/)
- [GitHub reveal.js](https://github.com/hakimel/reveal.js)

---

**Создано с ❤️ используя reveal.js**
