import './App.css'
import { useState } from 'react'
function App() {

 const colors =JSON.parse(localStorage.getItem('color'))

  const[r,setR] = useState(colors && colors.r? colors.r : 0 )
  const[g,setG] = useState(colors && colors.r? colors.r : 0)
  const[b,setB] = useState(colors && colors.r? colors.r : 0)

  const save=()=>{
    localStorage.setItem('color',JSON.stringify({r,g,b}))
  }
  return (
    <div>
     <h1>Color Mixer</h1>
     <div style={{backgroundColor:'rgb('+r+','+g+','+b+')', height:200 , width:200}}>

     </div>
     <label htmlFor=''>Red</label>
     <input type='range'
     onChange={(event)=>setR(event.target.value)}
     min={0} max={255} />
     <br/>
     <br/>
     <label htmlFor=''>Green</label>
     <input type='range'
      onChange={(event)=>setG(event.target.value)}
     
     min={0} max={255} />
     <br/>
     <br/>
     <label htmlFor=''>Blue</label>
     <input type='range'
      onChange={(event)=>setB(event.target.value)}
     
     min={0} max={255} />
     <br/>
     <br/>


     <button onClick={save}>Save Color Combination</button>
    </div>
  )
}

export default App
