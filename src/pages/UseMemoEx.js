import React, { useMemo, useState } from 'react'

const UseMemoEx = () => {
    // const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)
    // 

    // const result = useMemo(() => {
    //     console.log("Counting ....")
    //     return count * 2;
    // }, [count])


    const Square = useMemo(() => {
        console.log("Square is being computed")
        return number * number
    }, [number])


    // task  create a number with state and add them in array : 1 , 3 , 4, 5686


    return (
        <div>
            <h1>useMemo</h1>
            {/* <h1>{count}</h1>
            <h1>result count*2: {result}</h1>
            <button onClick={() => setCount(count + 1)} >Clik me</button> */}


            <h1>{number}</h1>
            <h1>{Square}</h1>

            <button onClick={() => setNumber(number + 1)}>Click me</button>
        </div>

    )
}

export default UseMemoEx
