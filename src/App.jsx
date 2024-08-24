import { useState } from "react"



const App = () => {
  let [num ,setNum] = useState(0);

  function addNum(){
    setNum(num + 1);
    console.log(num)
  }

  function subtractNum(){
    if(num === 0){
      alert('Number is zero');
      return
    }
    setNum(num -1);
    console.log(num)
  }

  function resetNum(){
    if(num > 0){
      setNum(num = 0);
    }
    else{
      alert('Number is already zero')
    }
  }

return (
  <>
  <div className="d-flex flex-column justify-content-center align-items-center vh-100">
    
      <h1 style={{ fontSize: '80px' }}>{num}</h1>
      <button className="btn btn-danger" style={{ padding: '5px 15px', fontSize: '24px', fontWeight: 'normal',marginBottom:'20px', border: '1px solid black' }} onClick={resetNum}>Reset</button>
      <div className="d-flex gap-2">

      <button className="btn btn-primary" style={{ padding: '5px 15px', fontSize: '24px', fontWeight: 'bold', border: '1px solid black' }} onClick={addNum}>+</button>
      <button className="btn btn-secondary" style={{ padding: '5px 15px', fontSize: '24px', fontWeight: 'bold', border: '1px solid black' }} onClick={subtractNum}>-</button>


      </div>
    </div>
</>
)
}

export default App