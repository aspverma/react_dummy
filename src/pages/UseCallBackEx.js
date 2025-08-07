import React, { useCallback, useState } from 'react'

const UseCallBackEx = () => {
 const [count , setCount]=useState(0)

 const HandelClick =useCallback(()=>{
  
    setCount(count+1);

 },[count])


  return (
    <div>
      <h1>UseCallBack </h1>
{/* save your function from re-creating every time you render your component */}

{/* usecallBack helps to keep the same function between
 renders untill needed  */}


{/* syntax  
 const AnyFunction=useCallBack(()=>{
    
    },[dependencies])

*/}

{/* 
without useCallback:
every time the components  renders , hadnelClick is new , 
which couse child components to re-render unneccessrally 

*/}

{/* 

when to use : 
1. you pass the function to a child components 
2. that child is wrapped in react.memo()
to prevent extra renders .
3. you need a stable function in useEffect , useMemo

*/}



<h2>{count}</h2>

<button onClick={HandelClick}>click me </button>


    </div>
  )
}

export default UseCallBackEx
