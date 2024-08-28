import './App.css'
import { ElderWithLocation } from './model/Model'
import { useState } from 'react'
import {DataLoader} from './components/DataLoader'

function App() {
  const [elders, setElders] = useState<ElderWithLocation[]>([])

  function handleFileUpload(data: any) {
    setElders(data)
  }
  function printElders() {
    console.log(elders)
  }


  


  return (
    <div>
      <DataLoader onFileLoad={handleFileUpload}></DataLoader>
      <button onClick={printElders}>Print Elders</button>

    </div>
  )
}

export default App
