import { useEffect, useState } from "react"

const Clock = ({color}) =>{
    const [time, setTime] = useState(0);
    
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, []);

    return (
        <>

            <h1 style={{color: "red"}}>This is clock</h1>
            <h3
             style={{backgroundColor: color, border: '1px solid yello', width: 100, height:100, borderRadius: 10,}}
             >{time}</h3>
        </>
    )
}

export default Clock