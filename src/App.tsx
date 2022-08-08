//section for util imports
import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

//section for component imports

//section for React.FC
const App: React.FC = () => {
  return (
    <div>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
    </div>
  )
}

export default App
