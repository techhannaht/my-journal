// make journal entry component 
//accept journal prop to create single entry
export const JournalEntry = ({singleJournal, deleteJournalEntry}) => {




    return <>
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
       <button className="delete" aria-label="delete" onClick={() => deleteJournalEntry(singleJournal.id)}></button>
     </div>
     <div className="message-body">
     {singleJournal.entryText}
       </div>
       <div>Mood: {singleJournal.moodId}</div>
       <div>User: {singleJournal.userId}</div>
 
      
     
     </article>
     </>
 }