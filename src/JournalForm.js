import { MoodSelect } from "./MoodSelect"
import {useState} from "react"

export const JournalForm = () => {
 const [journalEntry, setJournalEntry] = useState({})

const handleControlledInputChange = (e) => {


    const newJournalEntry = {...journalEntry}

    newJournalEntry[`${e.target.name}`] = e.target.value 

    setJournalEntry(newJournalEntry)
}

const saveEntry = (e) => {

    e.preventDefault()

    const entrytoSend = {...journalEntry}
    entrytoSend.moodId = +entrytoSend.moodId
    entrytoSend.userId = 1

    fetch(`http://localhost:8080/journalEntries`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(entrytoSend),
    })
    
}



}


    return (
        <form onSubmit={saveEntry}>
            <div className="field">
                <label className="label">Title</label>
                <div className="control">
                    <input name="title" className="input" type="text" placeholder="Name Your Entry" value={journalEntry.title} onChange={handleControlledInputChange}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Title</label>
                <div className="control">
                    <input className="input" type="date" name="dateTime" value={journalEntry.dateTime} onChange={handleControlledInputChange}/>
                </div>
            </div>

            <MoodSelect handleControlledInputChange={handleControlledInputChange} journalEntry={journalEntry}/>

            <div className="field">
                <label className="label">Write It</label>
                <div className="control">
                    <textarea name="entryText" className="textarea" placeholder="Tell me about it..." value={journalEntry.entryText} onChange={handleControlledInputChange}></textarea>
                </div>
            </div>
            <div className="control">
                <input type="submit" className="button is-primary" value="Submit" 
                
                />
            </div>

        </form>


    )
}