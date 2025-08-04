import React, { useState, useEffect } from 'react';
import { Card, Button, Typography, Space, message, Alert } from 'antd';
import { 
  SoundOutlined, 
  ArrowLeftOutlined,
  AudioOutlined,
  StopOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const VoiceAssistantPage = ({ onBack, t }) => {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [transcript, setTranscript] = useState('');
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Проверяем поддержку Web Speech API
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = getCurrentLanguage();

      recognitionInstance.onresult = (event) => {
        let finalTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          }
        }
        
        if (finalTranscript) {
          setTranscript(finalTranscript);
          processVoiceCommand(finalTranscript.toLowerCase());
        }
      };

      recognitionInstance.onstart = () => {
        setIsListening(true);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        message.error('Ошибка распознавания речи: ' + event.error);
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
      setIsSupported(true);
    } else {
      setIsSupported(false);
    }
  }, []);

  const getCurrentLanguage = () => {
    // Возвращаем код языка для распознавания речи
    const langMap = {
      'uk': 'uk-UA',
      'en': 'en-US', 
      'ru': 'ru-RU'
    };
    return langMap[localStorage.getItem('selectedLanguage')] || 'ru-RU';
  };

  const processVoiceCommand = (command) => {
    // Обработка голосовых команд
    const commands = {
      'презентация': () => message.success('Команда: Открыть презентацию'),
      'presentation': () => message.success('Command: Open presentation'),
      'презентація': () => message.success('Команда: Відкрити презентацію'),
      'слайд': () => message.success('Команда: Переход к слайду'),
      'slide': () => message.success('Command: Go to slide'),
      'начало': () => message.success('Команда: К началу'),
      'home': () => message.success('Command: Go home'),
      'додому': () => message.success('Команда: На початок'),
      'помощь': () => message.info('Доступные команды: презентация, слайд, начало, помощь'),
      'help': () => message.info('Available commands: presentation, slide, home, help'),
      'допомога': () => message.info('Доступні команди: презентація, слайд, додому, допомога')
    };

    // Ищем совпадения в команде
    for (const [keyword, action] of Object.entries(commands)) {
      if (command.includes(keyword)) {
        action();
        return;
      }
    }
    
    message.warning('Команда не распознана: ' + command);
  };

  const startListening = () => {
    if (recognition && !isListening) {
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognition && isListening) {
      recognition.stop();
    }
  };

  if (!isSupported) {
    return (
      <div style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <Card style={{ maxWidth: 600, width: '100%' }}>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Button 
              icon={<ArrowLeftOutlined />} 
              onClick={onBack}
              style={{ marginBottom: 20 }}
            >
              {t.back}
            </Button>
            
            <Alert
              message={t.voiceNotSupported}
              description="Попробуйте использовать современный браузер, такой как Chrome или Edge."
              type="warning"
              showIcon
            />
          </Space>
        </Card>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <Card
        style={{
          maxWidth: 600,
          width: '100%',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          <Button 
            icon={<ArrowLeftOutlined />} 
            onClick={onBack}
            style={{ marginBottom: 20 }}
          >
            {t.back}
          </Button>
          
          <div style={{ textAlign: 'center' }}>
            <SoundOutlined style={{ fontSize: 64, color: '#fa8c16', marginBottom: 24 }} />
            <Title level={2}>{t.voiceAssistant}</Title>
            
            <div style={{ 
              padding: 20, 
              background: '#f0f0f0', 
              borderRadius: 8, 
              marginBottom: 24,
              minHeight: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {isListening ? (
                <Paragraph style={{ margin: 0, color: '#1890ff' }}>
                  {t.listening}
                </Paragraph>
              ) : (
                <Paragraph style={{ margin: 0, color: '#666' }}>
                  {transcript || t.speak}
                </Paragraph>
              )}
            </div>

            <Space size="large">
              <Button
                type={isListening ? "danger" : "primary"}
                size="large"
                icon={isListening ? <StopOutlined /> : <AudioOutlined />}
                onClick={isListening ? stopListening : startListening}
                style={{ minWidth: 120 }}
              >
                {isListening ? 'Стоп' : t.speak}
              </Button>
            </Space>

            <div style={{ marginTop: 24, textAlign: 'left' }}>
              <Title level={4}>Доступные команды:</Title>
              <ul style={{ color: '#666' }}>
                <li>"Презентация" - открыть презентацию</li>
                <li>"Слайд [номер]" - перейти к слайду</li>
                <li>"Начало" - к первому слайду</li>
                <li>"Помощь" - список команд</li>
              </ul>
            </div>
          </div>
        </Space>
      </Card>
    </div>
  );
};

export default VoiceAssistantPage;
