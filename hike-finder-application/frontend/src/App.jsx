import { useState } from 'react'
import hikingLogo from './assets/hiking_boot.png'
import Map from './components/Map.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="Map">
          <img src={hikingLogo} className="base" width="2000" height="2700" alt="" />
        </div>
        <div className="Map">
          <Map/>
        </div>
      </section>

    </>
  )
}

export default App
