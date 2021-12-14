// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
let div = document.getElementById("missionTarget");
div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                    
                </ol>
                <img src="${imageUrl}">
  ` 
} //console.log(addDestinationInfo)

function validateInput(testInput) {
    let validated = Number(testInput);
    if (testInput === ""){
        return "Empty";
    }
    else if (isNaN(validated)) {
        return "Not a Number";
    } 
    else if (!isNaN(validated) === false){
        return "Is a Number";
    }
    return validated;
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let readyFuel = true;
    let readyMass = true;

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    //validate string
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields required");
    }

    //validate number
    else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
    alert("Enter appropriate value in each field");
    }   else {
        list.style.visibility="visible";
        pilotStatus.innerHTML=`Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML=`Co-pilot ${copilot} is ready for launch`;
        let launchStatus = document.getElementById("launchStatus");

     //both pass
    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
    list.style.visibility="visible";
    launchStatus.innerHTML="Shuttle is Ready for Launch";
    launchStatus.style.color ='rgb(65, 159, 106)';
    fuelStatus.innerHTML=`Fuel level high enough for launch`;
    cargoStatus.innerHTML=`Cargo mass low enough for launch`;       
}   else {
        list.style.visibility="visible";
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        launchStatus.style.color ='rgb(199, 37, 78)';
}

    //fuel fail; cargo pass
    if (fuelLevel <= 10000 && cargoLevel <= 10000) {
        fuelStatus.innerHTML=`Fuel level too low for launch`;
        cargoStatus.innerHTML=`Cargo mass low enough for launch`;
    }

    //fuel pass; cargo fail
    else if (fuelLevel >= 10000 && cargoLevel >= 10000) {
        fuelStatus.innerHTML=`Fuel level high enough for launch`;
        cargoStatus.innerHTML=`Cargo mass too heavy for launch`;
    }

    //both fail
    else if (fuelLevel <= 10000 && cargoLevel >= 10000) {
        fuelStatus.innerHTML=`Fuel level too low for launch`;
        cargoStatus.innerHTML=`Cargo mass too heavy for launch`;
    }

}
        

//    //both pass
//    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
//         list.style.visibility="visible";
//         launchStatus.innerHTML="Shuttle ready for launch!";
//         launchStatus.style.color ="green";
//         fuelStatus.innerHTML=`Fuel level  is ready for launch.`;
//         cargoStatus.innerHTML=`Cago Mass  is ready for launch.`;       
//     }   else {
//             list.style.visibility="visible";
//             launchStatus.innerHTML = `Shuttle not ready for launch`;
//             launchStatus.style.color ="red";
//     }

//     //fuel fail; cargo pass
//     if (fuelLevel <= 10000 && cargoLevel <= 10000) {
//         fuelStatus.innerHTML=`Fuel level  is too low for launch.`;
//         cargoStatus.innerHTML=`Cargo mass  is low enough for launch.`
//     }

//     //fuel pass; cargo fail
//     else if (fuelLevel >= 10000 && cargoLevel >= 10000) {
//         fuelStatus.innerHTML=`Fuel level  is ready for launch.`;
//         cargoStatus.innerHTML=`Cargo mass  is too heavy for launch.`;
//     }

//     //both fail
//     else if (fuelLevel <= 10000 && cargoLevel >= 10000) {
//         fuelStatus.innerHTML=`Fuel level  is too low for launch.`;
//         cargoStatus.innerHTML=`Cargo mass  is too heavy for launch.`;
//     }
    
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();      
});

    return planetsReturned;
}

function pickPlanet(planets) {
   // Math.round(556.789123)/100
   let index = Math.floor(Math.random()*planets.length);
   return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
