export const SectionVragen = document.querySelector(".vragen");
export const firstQuestion = document.querySelector(".vragen article:nth-of-type(1)");
export const ageQuestion = document.querySelector(".leeftijdVraag");
export const searchQuestion = document.querySelector(".searchVraag");
export const firstQuestionAnswers = document.querySelectorAll(".vragen article:nth-of-type(1) a")
export const secondQuestion = document.querySelector(".vragen article:nth-of-type(2)");
export const searchResults = document.querySelector(".searchResults");
export const noBooksYet = document.querySelector('.searchResults p:first-of-type')
export const loader = document.querySelector(".loader-container")

// export function firstQuest() {
//     firstQuestion.classList.add("show");
//     secondQuestion.classList.toggle("hidden");
// }

export function secondQuest() {
    firstQuestion.classList.add("hidden");
    secondQuestion.classList.remove("hidden");
    secondQuestion.classList.add("show");
}

export function hideAll() {
    firstQuestion.classList.add("hidden");
    secondQuestion.classList.add("hidden")
    SectionVragen.classList.add("hidden")
    searchResults.classList.remove("hidden")
}

ageQuestion.addEventListener("click", secondQuest)
searchQuestion.addEventListener("click", hideAll)

