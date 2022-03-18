import { loader } from "./ui.js";
const displayResults = document.querySelector('.searchResults article');
const main = document.querySelector("main");

const renderData = (data, output, query) => {
    // render data
    const results = data.results;
    //console.log("new api data: ", output.results)
    //console.dir("results: ", results.length);
    // console.log(loader)
    main.insertAdjacentHTML('afterbegin', `<p>${results.length} resultaten gevonden</p>`) // show how many results per page

  results.length >  1 
  ?   
    results.forEach((item, i) => {
      const html = `  
              <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                <img src="${
                  item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
                }">
                </div>
                <div class="flip-card-back">
                  <h2>${item.titles[0]}</h2> 
                  <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                  <a target="_blank" href="${item.detailLink}">+</a> 
                </div>
              </div>
            </div>
            `;
      displayResults.insertAdjacentHTML('afterbegin', html);
      //main.insertAdjacentHTML('beforeend', html);
    })
    :  main.insertAdjacentHTML('afterbegin', `<p>er zijn geen resultaten gevonden</p>`) // show how many results per page;
  }

  const renderDataNewAPI = (data, output, query) => {
    // render data
    const resultsNewAPI = output.results;
    console.log("new api data: ", output.results)
    // console.log(loader)
    main.insertAdjacentHTML('afterbegin', `<p>${resultsNewAPI.length} resultaten gevonden</p>`) // show how many results per page

    resultsNewAPI.length >  1 
  ?   
  resultsNewAPI.forEach((itemNewAPI, i) => {
      const html = `  
              <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                <img src="./src/img/Placeholder_book.svg.png">
                </div>
                <div class="flip-card-back">
                  <h2>${itemNewAPI.titles[0]}</h2> 
                  <p>${itemNewAPI.summaries ? itemNewAPI.summaries[0] : 'Geen samenvatting'}</p>
                  <a target="_blank" href="${itemNewAPI.detailLink}">+</a> 
                </div>
              </div>
            </div>
            `;
      displayResults.insertAdjacentHTML('afterbegin', html);
      //main.insertAdjacentHTML('beforeend', html);
    })
    :  main.insertAdjacentHTML('afterbegin', `<p>er zijn geen resultaten gevonden</p>`) // show how many results per page;
  }
  
  

export {renderData, renderDataNewAPI}
