import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js';
import { NoteAsHTML } from './NoteHTMLConverter.js';
import { getNotes, useNotes } from './NotesDataProvider.js'

// get the notes from the api >> use the notes array
// iterate the notes array >> make an html representation each
// render html string of notes to the notesContainer element on the DOM


const notesContainer = document.querySelector(".notesContainer");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())


export const NoteList = () => {
  getNotes()
    // .then(() => getCriminals())
    .then(getCriminals)
    .then(() => {
      const allNotes = useNotes()
      const allCriminals = useCriminals()
      render(allNotes, allCriminals)
    })
}


const render = (notesArray, criminalsArray) => {
  let notesHTMLRepresentations = ""
  for (const note of notesArray) {

    // Find the related criminal
    const relatedCriminal = criminalsArray.find(criminal => criminal.id === note.criminalId)
    // debugger
    notesHTMLRepresentations += NoteAsHTML(note, relatedCriminal)
  }
  notesContainer.innerHTML = `
              <h3>Case Notes</h3>
              ${notesHTMLRepresentations}
          `
}
