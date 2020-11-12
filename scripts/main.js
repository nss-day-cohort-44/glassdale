import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { NoteForm } from "./notes/NoteForm.js";
import { OfficerList } from "./officers/OfficerList.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { NoteList } from "./notes/NoteList.js"
// import the module for adding a list of alibis to a criminal card
import "./criminals/AlibiList.js"
import { renderWitnessButton } from "./witnesses/WitnessStmntButton.js";
import "./witnesses/WitnessStmntList.js"
import { renderFacilityButton } from "./facilities/DisplayFacilitiesButton.js";
import "./facilities/FacilityList.js"
import { renderCriminalButton } from "./criminals/DisplayCriminalsButton.js"

OfficerList()
ConvictionSelect()
CriminalList()
OfficerSelect()
renderCriminalButton()
renderWitnessButton()
renderFacilityButton()
NoteForm()
NoteList()
