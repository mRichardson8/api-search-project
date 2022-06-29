let resultsBtn = document.querySelector('#results')
let getResultBtn = document.querySelector('#get-result')


resultsBtn.addEventListener('click' , (e) =>{
    fetch('http://localhost:3000/search')
        .then(res => res.json())
        .then(data => {
            for(i=0;i<data.length;i++){
                displayObject(data[i])

            }
        })
        
        // .then(res => res.forEach(element => {
        //     console.log(element);
            
        // }))
})

getResultBtn.addEventListener('click' , (e) =>{
    let randomPage = Math.floor(Math.random() * 10)
    window.location.href = `http://localhost:3000/page/${randomPage}`;
})



function displayObject(data){
    let sectionSearch=document.getElementById('Search')
    let name= document.createElement('h3')
    let url =document.createElement('p')
    let description= document.createElement('p')
    let div = document.createElement('div')
    div.classList += 'search-result'
    name.innerText=data.name
    url.innerText=data.url
    description.innerText=data.description
    div.appendChild(name)
    div.appendChild(url)
    div.appendChild(description)
    sectionSearch.appendChild(div)
}
