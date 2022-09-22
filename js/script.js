const adviceText = document.getElementById('advice');
const numberText = document.getElementById('number');
const btn = document.getElementById('btn');

let adviceQuote = {};


const apiUrl = ("https://api.adviceslip.com/advice");


async function getAdvice() {
    try {
        const response = await fetch(apiUrl);
        adviceQuote = await response.json();
    } catch (error) {}
}

getAdvice();

btn.addEventListener('click', () =>{
    numberText.innerText = adviceQuote.id;
    adviceText.textContent = adviceQuote.advice;
})






// function generateAdvice() {
//     fetch('https://api.adviceslip.com/advice')
//     .then((response) => response.json())
//     .then((response) =>
//     {
        
//         let dataId = response.slip.id;
//         let dataAdvice = response.slip.advice;

//         numberText.innerHTML = dataId;
//         adviceText.innerHTML = dataAdvice;
//     })
// }

// btn.addEventListener('click', generateAdvice);
