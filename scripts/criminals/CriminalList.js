import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"

const criminalsContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {

  getCriminals()
    .then(() => {
      const criminalArray = useCriminals()
      console.log(criminalArray)

      let criminalsHTMLRepresentations = ""

      for (const criminal of criminalArray) {

        criminalsHTMLRepresentations += Criminal(criminal)

        criminalsContainer.innerHTML = `
          <h3>Glassdale Criminals</h3>
          <section class="criminalsList">
            ${criminalsHTMLRepresentations}
          </section>
        `

      }
    })

}
