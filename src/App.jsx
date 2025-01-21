import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>Counter: {count}</h1>
      <div className="card">
        <button onClick={() => {setCount(() => count + 1)}}>Add</button>
        <button onClick={() => {
          if(count < 1){
            alert("Conter can not be lower than 0");
          }
          else {
            setCount(() => count - 1);
          }
        }}>Minus</button>
      </div>
    </>
  )
}

export default App
