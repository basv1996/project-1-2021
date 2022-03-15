const displayResults = document.querySelector('.searchResults');
const main = document.querySelector("main");

const renderData = (data) => {
    // render data
    const results = data.results;
    console.dir(results);

    results.forEach((item, i) => {
      const html = `
              <article class="books">
                <h2>${item.titles[0]}</h2>
                <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                <img src="${
                  item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
                }">
              </article>
            `;
      displayResults.insertAdjacentHTML('afterbegin', html);
      //main.insertAdjacentHTML('beforeend', html);
    });
  }

export default renderData