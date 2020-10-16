import {getOfficers, useOfficers} from "./officers/OfficerProvider.js"

getOfficers()
    .then(() => {
    const officerArray = useOfficers()
    console.log(officerArray)
})