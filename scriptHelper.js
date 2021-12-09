// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    let validated = "";
    if (testInput === ""){
        validated = "Empty";
    }
    else if (isNan(testInput)) {
        validated = "Not a Number";
    } 
    else if (!isNan(testInput)){
        validated = "Is a Number";
    }
   return validated;
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let ready = true;

    let pilotStatus = document.getElementbyId("pilotStatus");
    let copilotStatus = document.getElementbyId("copilotStatus");
    let fuelStatus = document.getElementbyId("fuelStatus");
    let cargoStatus = document.getElementbyId("cargoStatus");
    let launchStatus = document.getElementbyId("launchStatus");
    list.style.visibility = "visibility";
    //validate input

    if (validateInput(pilot.value) === "Empty") {
        window.alert("All fields required");
        event.preventDefault();
    }

   if (fuelLevel < 10000) {
       let ready = true;
       let faultyItems= visible;
       let fuelStatus = console.log("There is not enough fuel for the journey.");
       let launchStatus = console.log("Shuttle not ready for laucnch");
       element.getElementbyId("launchStatus").style.color = red;
       ready = false;
   }
   if (cargoLevel > 10000) {
        let ready = true;
        let faultyItems= visible;
        let fuelStatus = "There is too much mass for the shuttle to take off.";
        let launchStatus = "Shuttle not ready for laucnch";
        element.getElementbyId("launchStatus").style.color = red;
        ready = false;
   }
   if (ready === true) {
        let launchStatus = console.log("Shuttle is ready for launch");
        document.getElementbyId("launchStatus").style.color = green;
        
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
