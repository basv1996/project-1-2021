import renderData from "./renderData.js";
import { loader, noBooksYet } from "./ui.js";
import { getForm } from "./GetValueForm.js";

const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'sport en voeding';
const key = 'f60b69054b02f50180d9c088e06270ea';
const secret = '2f60b69054b02f50180d9c088e06270ea';
const detail = 'Default';
const doelgroep = '&dim=Doelgroep(ageYoungAdults)';
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

const config = {
  Authorization: `Bearer ${secret}`
};


// const getData = async () => {
//   loader.classList.remove("hidden")
//     await fetch(url, config)
//   .then(response => {
//     //console.log(response)
  
//     response.status == 429 ? console.log("aah wat jammer nou, te veel gebruikers") : console.log("hoera, lekker bezig, niet overbleast");
//     return response.json();
//   })
//   .then(data => {
//     loader.classList.add("hidden")
//     noBooksYet.classList.add("hidden")
//     renderData(data);
//   })
//   .catch(err => {
//     console.log(err);
//   })
// };

const getData = () => {
  loader.classList.remove("hidden")
    fetch(url, config)
  .then(response => {
    //console.log(response)
  
    response.status == 429 ? console.log("aah wat jammer nou, te veel gebruikers") : console.log("hoera, lekker bezig, niet overbleast");
    return response.json();
    
  })
  .then(data => {
    loader.classList.add("hidden")
    noBooksYet.classList.add("hidden")
    renderData(data);
  })
  .catch(err => {
    console.log(err);
  })
};

export default getData