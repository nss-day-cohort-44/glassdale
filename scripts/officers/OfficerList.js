import { getOfficers, useOfficers } from "./OfficerProvider.js"
import { Officer } from "./Officer.js"

const officersContainer = document.querySelector(".officersContainer")

export const OfficerList = () => {

  getOfficers()
    .then(() => {
      const officerArray = useOfficers()
      console.log(officerArray)

      let officersHTMLRepresentations = ""

      for (const officer of officerArray) {

        officersHTMLRepresentations += Officer(officer)

        officersContainer.innerHTML = `
          <h3>Glassdale Officers</h3>
          <section>
            ${officersHTMLRepresentations}
          </section>
        `
    
      }
    })

}
