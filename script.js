// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
    let list = document.getElementbyId("faultyItems");
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        //let pilot = document.getElementById("pilotName");
        let pilotinput = document.querySelector("input [name = pilotName]")
        let pilot = pilotinput.value;
        let copilotinput = document.querySelector("input [name = copilotName]")
        let copilot = copilotinput.value;
        let fuelLevelinput = document.querySelector("input [name = fuelLevel]")
        let fuelLevel = fuelLevelinput.value;
        let caargoMassinput = document.querySelector("input [name = cargoMass]")
        let cargoMass = caargoMassinput.value;
        let lauchStatusinput = document.querySelector("input [name = lauchStatus]")
        let lauchStatus = lauchStatusinput.value;
        
        //formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    }
    

    )
});