import {useEffect, useState} from 'react'
import axios from 'axios'

import TeamList from "./components/TeamList.jsx";

function App() {
    const [allTeams, setAllTeams] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/teams/')
            .then(res => {
                setAllTeams(res.data)
            })
    })

    const onDragStart = () => {
        console.log(`Drag started on ${event.target}`)
    }

  return (
    <div>
        <h1>PLPredictor 2025-2026</h1>
        <TeamList onDragStart={onDragStart} teams={allTeams}></TeamList>
    </div>

  )
}

export default App
