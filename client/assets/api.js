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
    window.location.href = "http://localhost:3000/test";
})



function displayObject(data){
    let sectionSearch=document.getElementById('Search')
    let name= document.createElement('h3')
    let url =document.createElement('p')
    let description= document.createElement('p')
    name.innerText=data.name
    url.innerText=data.url
    description.innerText=data.description
    sectionSearch.appendChild(name)
    sectionSearch.appendChild(url)
    sectionSearch.appendChild(description)
}
