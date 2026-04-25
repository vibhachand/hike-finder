import { useState } from 'react'
import hikingLogo from './assets/hiking_boot.png'
import TrailMap from './components/Map'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(import.meta.env.VITE_GOOGLE_MAPS_API_KEY)

  return (
    <>
      <section id="center">
        <div className="Map">
          {/* <img src={hikingLogo} className="base" width="2000" height="2700" alt="pixelated hiking boot" /> */}
        </div>
        <div className="TrailMap">
          <TrailMap/>
        </div>
      </section>

    </>
  )
}

export default App
