import { useState } from "react"
import { MoodSelect } from "./MoodSelect"



export const JournalForm = ({updateJournalState}) => {
 const [journalEntry, setJournalEntry] = useState({})

 const handleControlledInputChange = (e) => {

    const newJournalEntry = {...journalEntry}

    newJournalEntry[`${e.target.name}`] = e.target.value

    setJournalEntry(newJournalEntry)
 }
    

 const saveEntry = (e) => {
    e.preventDefault()

    const entryToSend = {...journalEntry}
    entryToSend.moodId = +entryToSend.moodId
    entryToSend.userId = 1

    
        fetch("http://localhost:8088/journalEntries", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(entryToSend),
        }).then(updateJournalState)
 }


    return ( 
        <form onSubmit={saveEntry}>
            <div className="field">
                <label className="label">Title</label>
                <div className="control">
                    <input name="title" className="input" type="text" placeholder="Name your entry" value={journalEntry.title} onChange={handleControlledInputChange}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Date</label>
                <div className="control">
                    <input className="input" type="Date" name="dateTime" value={journalEntry.dateTime}  onChange={handleControlledInputChange}/>
                </div>
            </div>
            <MoodSelect handleControlledInputChange={handleControlledInputChange} journalEntry={journalEntry} />
            <div className="field">
                <label className="label">Write it</label>
                <div className="control">
                    <textarea name="entryText" className="textarea" placeholder="tell me about it ..." value={journalEntry.entryText}  onChange={handleControlledInputChange}></textarea> 
                </div>
            </div>
            <div className="control">
                <button type="submit" className="button is-primary">Submit</button>
            </div>
     
        </form>
    )
}