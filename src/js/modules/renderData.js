import { loader } from "./ui.js";
const displayResults = document.querySelector('.searchResults article');
const main = document.querySelector("main");

const renderData = (data) => {
    // render data
    const results = data.results;
    console.dir(results);
    console.log(loader)
    
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
              <p>Onderwerpen: ${item['subject-topical']}</p>
            </div>
            `;

      displayResults.insertAdjacentHTML('afterbegin', html);
      //main.insertAdjacentHTML('beforeend', html);
    });
  }

export default renderData


// <article class="books">
//                 <h2>${item.titles[0]}</h2>
//                 <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
//                 <img src="${
//                   item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
//                 }">
//               </article>