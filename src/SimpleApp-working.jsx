import React from 'react';

function SimpleApp() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '16px',
        padding: '40px',
        textAlign: 'center',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        maxWidth: '600px',
        width: '100%'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <img 
            src="/images/a47f8-90.png" 
            alt="Hellmann Logo" 
            style={{
              height: '60px',
              marginRight: '16px',
              borderRadius: '50%',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          />
          <h1 style={{
            color: '#004B97',
            margin: '0',
            fontWeight: 'bold',
            fontSize: '2.5em'
          }}>
            Хелльманн Східна Європа Оуверсіз
          </h1>
        </div>
        
        <p style={{
          fontSize: '18px',
          color: '#666',
          marginBottom: '30px'
        }}>
          Інтерактивна презентація
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginTop: '30px'
        }}>
          <button style={{
            padding: '15px 25px',
            fontSize: '16px',
            backgroundColor: '#52c41a',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            🌍 Мова / Language
          </button>
          
          <button style={{
            padding: '15px 25px',
            fontSize: '16px',
            backgroundColor: '#1890ff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            ▶️ Презентація
          </button>
          
          <button style={{
            padding: '15px 25px',
            fontSize: '16px',
            backgroundColor: '#fa8c16',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            🎤 Голосовий асистент
          </button>
        </div>

        <p style={{
          marginTop: '20px',
          fontSize: '14px',
          color: '#999'
        }}>
          Час завантаження: {new Date().toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default SimpleApp;
