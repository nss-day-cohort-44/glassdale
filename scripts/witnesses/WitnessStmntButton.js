const contentTarget = document.querySelector(".buttons__witnesses")
const eventHub = document.querySelector(".container")


export const renderWitnessButton = () => {

  contentTarget.innerHTML = `
    <button id="display-witnesses-button">Witness Statements</button>
    `
}

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "display-witnesses-button") {
    // console.log("witness statement button was clicked")

    const witnessButtonClicked = new CustomEvent("witnessesClicked")

    eventHub.dispatchEvent(witnessButtonClicked)

  }
})
