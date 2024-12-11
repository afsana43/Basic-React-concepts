import { useState } from "react"

export default function Team(){

const [team, setTeam] = useState(11);

const handleAdd = ()=>{
    const newTeam = team + 1;
    setTeam(newTeam) 
}

const handleReduceTeam =()=>{
   setTeam(team - 1)
}

    const teamStyle ={
        border: '2px solid red',
        padding: '10px'
        
    }
    return(
        <>
         <h1 style={teamStyle}>Players:{team} </h1>
        <button onClick={handleAdd}>Add Player</button>

        {/* reduce member */}
        <button onClick={handleReduceTeam}> Reduce TeamMembers</button>
        </>
    )
}