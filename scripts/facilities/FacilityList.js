import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProvider.js";
import { Facility } from "./Facility.js";
import { getFacilities, useFacilities } from "./FacilityProvider.js";

const eventHub = document.querySelector(".container")
const facilitiesContainer = document.querySelector(".caseDataContainer")

let facilities = []
let crimFac = []
let criminals = []

eventHub.addEventListener("facilitiesButtonClicked", () => {
  FacilityList()
})

const FacilityList = () => {

  getFacilities()
    .then(getCriminalFacilities)
    .then(getCriminals)
    .then(() => {
      facilities = useFacilities()
      crimFac = useCriminalFacilities()
      criminals = useCriminals()

      render()
    })

}

const render = () => {
  facilitiesContainer.innerHTML = `
          <h3>Glassdale Facilities</h3>
          <section class="facilitiesList">
            ${facilities.map(facility => {
    const criminalRelationshipsForThisFacility = crimFac.filter(cf => cf.facilityId === facility.id)

    const criminalsAtThisFacility = criminalRelationshipsForThisFacility.map(cf => {
      const matchingCriminalObj = criminals.find(criminal => criminal.id === cf.criminalId)
      return matchingCriminalObj
    })

    return Facility(facility, criminalsAtThisFacility)
  }).join("")
    }
          </section>
        `
}
