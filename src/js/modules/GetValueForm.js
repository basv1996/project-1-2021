export function getForm() {
    const sectionVragen = document.querySelector(".vragen");
    const searchValue = document.querySelector('main .vragen input').value;

    const vraag1 = document.querySelectorAll('input[name="age"]');
    const vraag2 =document.querySelectorAll('input[name="Sport&Voeding"]')

    vraag1.forEach(item => {
        item.addEventListener('click', (event) => {
            console.log(event.target.value)
            //answer1 = event.target.value;
            //return answer1;
        })
    })

    vraag2.forEach(item => {
        item.addEventListener('click', (event) => {
            console.log(event.target.value)
            //answer2 = event.target.value;
            //return answer2;
        })
    })
   
}