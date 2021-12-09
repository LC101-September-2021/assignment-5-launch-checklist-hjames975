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
    let readyFuel = true;
    let readyMass = true;

    let pilotStatus = document.querySelector("pilotStatus");
    let copilotStatus = document.querySelector("copilotStatus");
    let fuelStatus = document.querySelector("fuelStatus");
    let cargoStatus = document.querySelector("cargoStatus");
    //let launchStatus = document.getElementbyId("launchStatus");
    list.style.visibility = "visibility";
    //validate input

    if (validateInput(pilot.value) === "") {
        alert("All fields required");
        preventDefault();
    }
    else if (validateInput(copilot) === "") {
        alert("All fields required");
        preventDefault();
    }
    else if (validateInput(fuelLevel) === "") {
        alert("All fields required");
        preventDefault();
    }
    else if (validateInput(cargoLevel) === "") {
        alert("All fields required");
        preventDefault();
    }
    else{
        pilotStatus.innerHTML=`Pilot ${pilot} is ready for launch.`;
        copilotStatus.innerHTML=`Co-Pilot ${copilot} is ready for launch.`;
        list.style.visibility="visible";
    }


   if (fuelLevel < 10000) {
       alert("There is not enough fuel for the journey.");
       fuelLevel.innerHTML = `Shuttle not ready for laucnch`;
       
       ready = false;
   }else {
       readyFuel = true;
   }
   if (cargoLevel > 10000) {
        alert("There is too much mass for the shuttle to take off.");
        cargoLevel.innerHTML = `Shuttle not ready for laucnch`;
        
        readyMass = false;
   }else {
       readyMass = true;
   }
   if (readyFuel === true && readyMass === true) {
        launchStatus.innerHTML="Shuttle ready for launch!";
        launchStatus.color.innerHTML ="green";
        
   }else {
        launchStatus.innerHTML="Shuttle not ready for launch!";
        launchStatus.color.innerHTML ="red";
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
