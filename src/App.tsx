import './App.css'
import { ElderWithLocation } from './model/Model'
import { useState } from 'react'
import {DataLoader} from './components/DataLoader'
import Map from './components/Map'

function App() {
  const [elders, setElders] = useState<ElderWithLocation[]>([])

  function handleFileUpload(data: any) {
    setElders(data)
  }

  


  return (
    <div className='App'>
      <DataLoader onFileLoad={handleFileUpload}></DataLoader>
      <Map elders={elders}/>

    </div>
  )
}

export default App
