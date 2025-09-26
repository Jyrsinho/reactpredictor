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
    }, [])

    const onDragStart = (e, index) => {
        console.log(`Drag started on ${event.target.textContent}`);
        e.target.style.opacity = '70%'
        let payload = JSON.stringify({
            position: index,
            teamName: e.target.textContent
        });
        e.dataTransfer.setData("application/json", payload);
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
        let payload = event.dataTransfer.getData("application/json");
        console.log(payload);
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
