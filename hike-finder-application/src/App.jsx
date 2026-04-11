import { useState } from 'react'
import hikingLogo from './assets/hiking_boot.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={hikingLogo} className="base" width="2000" height="2700" alt="" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Hello
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

    </>
  )
}

export default App
