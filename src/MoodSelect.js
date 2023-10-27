import { useEffect, useState } from "react"



export const MoodSelect = ({handleControlledInputChange, journalEntry}) => {
    const [moods, setMoods] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [newMood , setNewMood] = useState({})


    //rename this later
    const handleControlledInputChangeHere = (e) => {

        const newNewMood = {...newMood}
    
        newNewMood[`${e.target.name}`] = e.target.value
    
        setNewMood(newNewMood)
     }

     const saveNewMood = (e) => {
        e.preventDefault()
        return fetch("http://localhost:8088/moods", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newMood),
          }).then(() => {
            return fetch("http://localhost:8088/moods")
            .then(r => r.json())
            .then(moods => setMoods(moods))
          })
          .then(() => setShowForm(false))
     }

    useEffect(() =>{
        fetch("http://localhost:8088/moods")
        .then(r => r.json())
        .then(moods => setMoods(moods))
    },[])

    return ( 
        
        !showForm ?
        <div className="field has-addons">
            <label className="label">Mood</label>
            <div className="control">
          
                        <div className="select">
                          <select name="moodId" onChange={handleControlledInputChange} value={journalEntry.moodId}>
                            <option>Select dropdown</option>
                                {
                                 moods.map(mood => <option key={mood.id} value={mood.id}>{mood.name}</option>)
                                }
                          </select>
                        </div>
                    </div>
                        <div className="control" >
                            <button className="button is-link" onClick={()=> {
                                setShowForm(!showForm)
                            }}>Add a mood</button>
                        </div>
                        
        </div> 
        :

        <div className="field has-addons">
  <div className="control">
    <input className="input" name="name" type="text" placeholder="Add a mood" value={newMood.name} onChange={handleControlledInputChangeHere} />
  </div>
  <div className="control">
    <button className="button is-info" onClick={saveNewMood}>
      Add
    </button>
  </div>
</div>

            
    )
}