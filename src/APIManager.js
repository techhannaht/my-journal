export const getAllJournalEntries = () => {
    return fetch(`http://localhost:8088/journalEntries?_expand=mood&_expand=user`)
    .then(response => response.json())
}