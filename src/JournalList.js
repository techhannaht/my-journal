import { useState, useEffect } from "react";
import { getAllJournalEntries } from "./APIManager";
import { JournalEntry } from "./JournalEntry";


export const JournalList = () => {

    //how it used to be:
    // const journalEntries = getAllJournalEntries()

    const [journalEntries, setJournalEntries] = useState([])

    useEffect(
        () => {
            getAllJournalEntries()
                .then((journalArray) => {
                    setJournalEntries(journalArray)
                })
        },
        [] //where we observe state - if empty we are just watching intial component state
    )

    return (
        <>
            {
                journalEntries.map((singleJournal) => <JournalEntry key={`journal--${singleJournal.id}`} singleJournal={singleJournal} />)
            }
        </>
    )


}
