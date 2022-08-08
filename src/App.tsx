//section for util imports
import React from 'react'
import './App.css'

//section for component imports
import Header from './components/Header/Header'

//section for React.FC
const App: React.FC = () => {
  //

  return (
    <div className='base'>
      <Header />
      <div className='hero'>
        <h1>StudioGraphene Training program</h1>
      </div>
    </div>
  )
}

export default App
