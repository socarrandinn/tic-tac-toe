import { useState } from 'react'
import './App.css'
import { PlayContainer } from './component/PlayContainer'
import { IPlay } from './constant/play.interface'
import { initValue } from './constant/play.initvalue'


function App() {
  const [play, setPlay] = useState<IPlay>(initValue)

  return (
    <div className="App">     
        <PlayContainer {...{ play, setPlay }} />      
    </div>
  )
}

export default App
