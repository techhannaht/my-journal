export const getAllJournalEntries = () => {
    return fetch(`http://localhost:8080/journalEntries`)
    .then(response => response.json())
}