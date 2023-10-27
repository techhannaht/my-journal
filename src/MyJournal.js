import { useEffect, useState } from "react"
import { JournalForm } from "./JournalForm"
import { JournalList } from "./JournalList"
import { Weather } from "./Weather"
import { getAllJournalEntries } from "./APIManager"


export const MyJournal = () => {
    const [journalEntries, setJournalEntries ] = useState([])

    useEffect(
        () => {
          getAllJournalEntries()
          .then((journalArray) => {
            setJournalEntries(journalArray)
          })
        },
        [] //where we observe state - if empty we are just watching intial component state
      )

      const updateJournalState = () => {
        return getAllJournalEntries()
          .then((journalArray) => {
            setJournalEntries(journalArray)
          })
        }
        const deleteJournalEntry = (id)=> {
            return fetch(`  http://localhost:8088/journalEntries/${id}`, {method: "DELETE"})
            .then(updateJournalState)
          }
      

      

    return (
        
    <section className="section">
        <div className="container">
            <h1 className="title">
                My Journal
            </h1>
            <p className="subtitle">
                 Tell me how you really feel
            </p>
            <div className="columns">
                <div className="column is-three-fifths">
                    <JournalForm updateJournalState={updateJournalState} />
                </div>
                <div className="column">
                    <Weather  />
                </div>
            </div>
            <JournalList journalEntries={journalEntries} deleteJournalEntry={deleteJournalEntry}/>
    
    </div>
    </section>
    
    )

}


/////future features

// sort entries by mood

//users can see their own post.
