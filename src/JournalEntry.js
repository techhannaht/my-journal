import { useEffect, useState } from "react"
import { MoodSelect } from "./MoodSelect"
// make journal entry component 

//accept journal prop to create single entry
export const JournalEntry = ({singleJournal, deleteJournalEntry, updateJournalState}) => {

const [showForm, setShowForm] = useState(false)
const [editJournal, setEditJournal] = useState({})

useEffect(() => {
  setEditJournal(singleJournal)
},[])

const handleControlledInputChange = (e) => {

  const newJournalEntry = {...editJournal}

  newJournalEntry[`${e.target.name}`] = e.target.value

  setEditJournal(newJournalEntry)
}

const UpdateEntry = (e) => {
  e.preventDefault()

  const entryToSend = {...editJournal}
  entryToSend.moodId = +entryToSend.moodId

  
      fetch(`http://localhost:8088/journalEntries/${editJournal.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entryToSend),
      }).then(r => r.json)
      .then(updateJournalState)
      .then(() => setShowForm(false))
}


    return <>
    {!showForm ?
     <article className="message">
  
           <div className="message-header">
            <p>{singleJournal.title}</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p>{singleJournal.dateTime}</p>
       <button className="edit" aria-label="edit" onClick={() => setShowForm(!showForm)}></button>
        <button className="delete" aria-label="delete" onClick={() => deleteJournalEntry(singleJournal.id)}></button>
     </div>
     <div className="message-body">
     {singleJournal.entryText}
       </div>
       <div>Mood: {singleJournal.moodId}</div>
       <div>User: {singleJournal.userId}</div>
 
      
     
     </article>
     :

     <article className="message">
  
     <div className="message-header">
         <input name="title" type="text" placeholder="" value={editJournal.title} onChange={handleControlledInputChange}/>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <input type="Date" name="dateTime" value={editJournal.dateTime}  onChange={handleControlledInputChange}/>
 <button className="button is-small is-success"  onClick={(e) => UpdateEntry(e)}> Save </button>
  <button className="button is-small is-danger" onClick={() => setShowForm(!showForm)}> Cancel </button>
</div>
<div className="message-body">
<textarea name="entryText" className="textarea" placeholder="tell me about it ..." value={editJournal.entryText}  onChange={handleControlledInputChange}></textarea> 
 </div>
 <MoodSelect handleControlledInputChange={handleControlledInputChange} journalEntry={editJournal} />
 <div>User: {singleJournal.userId}</div>



</article>
    }
     </>
 }