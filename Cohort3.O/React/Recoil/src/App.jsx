import { useEffect, useState } from 'react'
import './App.css'
import { memo } from 'react';

function App() {

  return (
      <Counter/>
  )
}

function Counter(){
  const[Count, setCount ] = useState(0);

  useEffect(() => {
    setInterval(() =>{
      setCount(c => c+1);
    }, 3000)
  }, []);

  return <div>
    <MemoizedCurrentCount Count = {Count}/>
    <Increase/>
    <Decrease/>
  </div>
}

const MemoizedCurrentCount = memo(CurrentCount);3
0

function CurrentCount({Count}){
  return <div>
    {Count}
  </div>
}

const Decrease = memo (function(){
  function decrease(){
   
  }
  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
})

const Increase = memo (function(){
  function increase(){
    
  }
  return <div>
    <button onClick={increase}>Increase</button>
  </div>
})

export default App;
