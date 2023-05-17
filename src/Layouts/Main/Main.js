import React, {useEffect, useState} from 'react'
import { Routes, Route } from "react-router-dom"

import Index from '../pages/Index'
import Show from '../pages/Show'

const Main = (props) => {
    const [ game, setGame] = useState(null)

    const URL = "http://localhost:4000/gamehub"

    // const URL = "https://person-app-pyvm.onrender.com/people/"
  
    const getGame = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setGame(data)
    }

   const createGame = async (person) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(person)
        })
    }
    const updateGame = async (person, id) => {
        // make put request to create post
        await fetch(URL + id, {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(person),
        });

        // update list of posts 
        getGame();
      }
    
      const deleteGames = async id => {
        // make delete request to create post
        await fetch(URL + id, {
          method: "DELETE",
        })
        // update list of post
        getGame();
      }

    useEffect(() => getGame(), [])

  return (
    <main>
    <Routes>
        <Route exact path="/" element={<Index people={people} createGame={createPeople}/>} />
        <Route
          path="/gamehub/:id"
          element = {
            <Show
              game={game}
              updatePeople={updateGame}
              deletePeople={deleteGame}
            />
          }
        />
    </Routes>
   </main>
     )
}

export default Main