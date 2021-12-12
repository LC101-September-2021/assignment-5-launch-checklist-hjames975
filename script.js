// Write your JavaScript code here!


//const { myFetch } = require("./scriptHelper");

//const { myFetch } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let planet = pickPlanet(listedPlanets);
      console.log(planet);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    
    })
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        
        let pilotinput = document.querySelector("input[name = pilotName]")
        let pilot = pilotinput.value;
        let copilotinput = document.querySelector("input[name = copilotName]")
        let copilot = copilotinput.value;
        let fuelLevelinput = document.querySelector("input[name = fuelLevel]")
        let fuelLevel = (fuelLevelinput.value);
        let cargoLevelinput = document.querySelector("input[name = cargoMass]")
        let cargoLevel = (cargoLevelinput.value);

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    }
    

    )

});