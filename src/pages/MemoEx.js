import React, { useMemo, useState } from 'react'

const MemoEx = () => {
    const [number, setNumber] = useState(10)
    const [results, setResults] = useState([])

    const result = useMemo(() => {
        return number / 2
    }, [number])

    const divideAndPush = () => {
        results.push(result)
        setResults(results.slice())
    }
    return (
        <div>
            <h1> useMemo + push </h1>
            <h1>{number}</h1>
            <p>divide {result}</p>

            <button onClick={() => setNumber(number + 2)}>innc</button>

            <button onClick={divideAndPush} >push</button>

            <ul>
                {
                    results.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>

        </div>
    )
}

export default MemoEx
