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
const onderwijsUrl = `https://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=${query}+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=${key}&output=json`;

const config = {
  Authorization: `Bearer ${secret}`
};

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
    fetch(onderwijsUrl, config)
    .then(result => result.json())
            .then(output => {
                render(data, output, query) 
            })
    renderData(data);
  })
  .catch(err => {
    console.log(err);
  })
};

export default getData