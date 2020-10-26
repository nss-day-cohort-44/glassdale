/*
    Author: Madi
    Responsibility: Get the alibis related to a single criminal and show it in a list
*/
import { useCriminals } from "./CriminalProvider.js"

const eventHub = document.querySelector(".container")

// Create and add an event listener to the eventHub that listens for when an alibi button was clicked
eventHub.addEventListener("alibiButtonClicked", (eventObj) => {
    console.log("Hey I'm listening!!", eventObj.detail.criminalId)
    const arrayOfCriminals = useCriminals()

    // need to find the one criminal whose id matches the criminalId sent in the event
    const foundCriminal = arrayOfCriminals.find((criminalObj) => {
        return criminalObj.id === parseInt(eventObj.detail.criminalId)
    })
    console.log("Found the criminal!", foundCriminal)

    // add that criminal (and their alibis) to the criminal card
    AlibiList(foundCriminal)
})

// a function that adds a list of alibis to the criminal card
const AlibiList = (criminalObj) => {
    // the HTML for all the alibis
    render(criminalObj)
}

// lets make a render method for adding alibis
const render = (criminalObj) => {
    const contentTarget = document.querySelector(`#criminal-${criminalObj.id}`)

    contentTarget.innerHTML += `
    <div class="alibi__list">
        ${criminalObj.known_associates.map(alibiObj => {
        return `
                <p>${alibiObj.name}</p>
                <p>${alibiObj.alibi}</p>
            `
    }).join("")}
    </div>
    `
}