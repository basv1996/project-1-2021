export const SectionVragen = document.querySelector(".vragen");
export const firstQuestion = document.querySelector(".vragen article:nth-of-type(1)");
export const secondQuestion = document.querySelector(".vragen article:nth-of-type(2)");

export function firstQuest() {
    firstQuestion.classList.add("show");
    secondQuestion.classList.add("hidden");
}

export function secondQuest() {
    firstQuestion.classList.add("hidden");
    secondQuestion.classList.add("show");
}

