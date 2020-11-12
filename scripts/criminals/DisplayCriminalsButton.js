const contentTarget = document.querySelector(".buttons__criminals")
const eventHub = document.querySelector(".container")


export const renderCriminalButton = () => {

  contentTarget.innerHTML = `
    <button id="display-criminals-button">List Criminals</button>
    `
}

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "display-criminals-button") {

    const CriminalsButtonClicked = new CustomEvent("criminalsClicked")

    eventHub.dispatchEvent(CriminalsButtonClicked)

  }
})
