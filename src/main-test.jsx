import React from 'react'
import ReactDOM from 'react-dom/client'

// Простой тестовый компонент
const TestApp = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      fontSize: '24px',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>🎯 REACT РАБОТАЕТ!</h1>
        <p>Hellmann East Europe Overseas 2025</p>
        <p>Время загрузки: {new Date().toLocaleString()}</p>
        <div style={{
          width: '100px',
          height: '100px',
          background: 'white',
          borderRadius: '50%',
          margin: '20px auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#004B97',
          fontWeight: 'bold'
        }}>
          LOGO
        </div>
      </div>
    </div>
  )
}

console.log('main.jsx loading...')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<TestApp />)

console.log('React app rendered!')
