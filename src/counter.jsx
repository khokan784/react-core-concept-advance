import { useState } from "react"

export default function Counter(){
    const [count, setcount] =useState(0);
    const handleAdd = () => {
        const newCount = count + 1
        setcount(newCount)
    }
    const handleReduse = () => {
        const newCount = count - 1
        setcount(newCount)
    }
    return (
        <div>
            <h3>Counter : {count}</h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleReduse}>reduse</button>
        </div>
    )
}