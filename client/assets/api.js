let resultsBtn = document.querySelector('#results')
let getResultBtn = document.querySelector('#get-result')


resultsBtn.addEventListener('click' , (e) =>{
    fetch('http://localhost:3000/')
        .then(res => res.text())
        .then(res => console.log(res))
})

getResultBtn.addEventListener('click' , (e) =>{
    fetch('http://localhost:3000/')
        .then(res => res.text())
        .then(res => console.log(res))
})


