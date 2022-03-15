import renderData from "./renderData.js";

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

const getData = () => {
    fetch(url, config)
  .then(response => {
    //console.log(response)
    response.status == 429 ? console.log("aah wat jammer nou, te veel gebruikers") : console.log("hoera, lekker bezig, niet overbleast");
    return response.json();
  })
  .then(data => {
    renderData(data);
  })
  .catch(err => {
    console.log(err);
  })
};

export default getData