import { useState } from "react"

function Counter(){
    const [cntUpdate, setCntUpdate] = useState(0);
    const [cntRemove, setCntRemove] = useState(0);

    return(
        <>
        <h1>Welcomt Counter.</h1>
        <h3>{cntUpdate}</h3>
        <button onClick={()=> setCntUpdate(cntUpdate + 1)}>Count Update</button>
        <hr />
        <h2>{cntRemove}</h2>
        
        <button onClick={()=>setCntRemove(cntRemove - 1)}>Count Remove</button>
        </>
    )
}

export default Counter