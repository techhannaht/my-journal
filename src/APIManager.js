export const getAllJournalEntries = () => {
    return fetch(`http://localhost:8088/journalEntries`)
    .then(response => response.json())
}