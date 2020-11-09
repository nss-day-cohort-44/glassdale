import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { saveNote } from "./NotesDataProvider.js"

// create note form HTML with inputs and render form to DOM
// add a click event for when user clicks the submit button
// submit should grab values from form inputs, build new note object, and POST that note to the API

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = (arrayOfCriminals) => {
    // debugger
    contentTarget.innerHTML = `
        <input id="note--dateOfInterview" type="date"/>
        <input id="note--author" type="text" placeholder="Your Name Here"/>
        <select id="note--criminal" class="criminalSelect">
        <option value="0">Please select a criminal...</option>
        ${
            arrayOfCriminals.map(criminal => {
                return `<option value="${ criminal.id }">${ criminal.name }</option>`
            }).join("")
        }
        </select>
        <textarea id="note--note" placeholder="Your Note Here"></textarea>
        <button id="saveNote">Save Note</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        // grab input values
        const dateOfInterview = document.querySelector("#note--dateOfInterview").value
        const author = document.querySelector("#note--author").value
        const criminalId = parseInt(document.querySelector("#note--criminal").value)
        const note = document.querySelector("#note--note").value
        const timestamp = Date.now()
        // make a note object

        const newNote = {
            dateOfInterview,
            timestamp,
            author,
            criminalId,
            note
        }
        // debugger

        // POST object to database / API / json file
        saveNote(newNote)
    }
})


export const NoteForm = () => {
    getCriminals()
    .then(() => {
        const listOfCriminals = useCriminals()
        render(listOfCriminals)
    })
}
