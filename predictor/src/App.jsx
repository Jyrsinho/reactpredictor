import {useEffect, useState} from 'react'
import axios from 'axios'
import './app.css'


import TeamList from "./components/TeamList.jsx";

function App() {
    const [allTeams, setAllTeams] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/teams/')
            .then(res => {
                setAllTeams(res.data)
            })
    },[])

    const onDragStart = (event) => {
        console.log(`Drag started on ${event.target.textContent}`);
        event.target.style = {
            opacity: '70%'
        }
    }

    const onDragOver = (event) => {
        event.preventDefault();
        console.log(`Drag over ${event.target.textContent}`);

    }

    const onDragLeave = (event) => {
        event.preventDefault(); //TODO checkaa onko tämä tarpeellinen edes
        console.log("Left the container ", event.target.textContent);
    }

    const onDrop = (event) => {
        if (event.target.classList.contains('dropzone')) {
            console.log(`Correct dropzone ${event.target.textContent}`);
        } else {
            console.log(`Incorrect dropzone ${event.target.textContent}`);
        }
    }

  return (
    <div>
        <h1>PLPredictor 2025-2026</h1>
        <TeamList
            onDragOver={onDragOver}
            onDragStart={onDragStart}
            onDrop={onDrop}
            onDragLeave={onDragLeave}
            teams={allTeams}></TeamList>
    </div>

  )
}

export default App
