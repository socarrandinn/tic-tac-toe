import { useEffect, useState } from 'react'
import './App.css'
import { PlayProvider } from './component/context/PlayContext'
import { PlayForm } from './component/PlayForm'
import { IPlay } from './constant/play.interface'
import { initValue } from './constant/play.initvalue'


function App() {
  const [play, setPlay] = useState<IPlay>(initValue)

  return (
    <div className="App">
      <PlayProvider>
        <PlayForm {...{ play, setPlay }} />
      </PlayProvider>
    </div>
  )
}

export default App
