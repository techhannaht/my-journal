import { useState, useEffect } from "react";
import { getAllJournalEntries } from "./APIManager";
import { JournalEntry } from "./JournalEntry";


export const JournalList = ({journalEntries, deleteJournalEntry}) => {

return (
    <>
  {
    journalEntries.map((singleJournal) => <JournalEntry key={`journal--${singleJournal.id}`} singleJournal = {singleJournal} deleteJournalEntry={deleteJournalEntry}/> )
  }
</>
)


}