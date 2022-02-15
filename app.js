// Implement an API to gather train data for my specific route
const input = document.querySelector(".input")
const url =`https://en.wiktionary.org/w/api.php?action=parse&format=json&prop=text|revid|displaytitle&callback=?&page=hello`


// create function to listen for clicks 
// return the data 
// create the boxes for each of the datum

function click(){
fetch(url)
    .then(response => {return response.json()})
    .then(data => {console.log(data)})
    console.log("max")
}

document.addEventListener("keyup",(event)=> {
   if (event.key = "13"){
       click()
   }
    
} )