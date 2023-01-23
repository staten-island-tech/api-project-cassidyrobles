import "../styles/style.css";
import { DOMselectors } from "./DOM";

//console.log("start");
//setTimeout(()=> {
    //console.log("Timer");
//},3000);
//console.log("end");

//JavaScript can only run one function at a time and should go in the order of start, timer, and then end but because there is a 3 second delay end should not be able to run until timer runs after the three seconds
//because the project is running in browser it will load start, then end, then times 3 seconds later, but it will not wait to log timer before it logs end
//starts runs and works, timer runs and is pushed to the side because it needs three seconds, and end goes while timer is on the side then timer returns and finishes
//promises say that the line will be prevented from loading until the data loads
//once a promise is fulfilled you can do something with it
//sometimes data takes a long time to load and will go on to the next line of code, which is bad and promises will help prevent this

//function greet(name){
    //const greetPromise = new Promise(function(resolve, reject){
       // resolve(`Hello ${name}`);
    //})
   // return greetPromise;
//}
//const suzie = greet("suzie");

//suzie.then((result)=>{
   // console.log(result);
//});
// when promise resolves say hello and persons name
// when this runs it will say promis fulfilled hello suzie because the promise is returned and resolved the string is returned 
// we can add . then once a promise resolves
// code says that once the promise is fulfilled 
// we get data(suzie) and in the process of getting that data we get a promise. Then we do something with that data, like log it to the console
const URL = "https://www.omdbapi.com/?apikey=b376b4a9&s=aba";

DOMselectors.section.innerHTML = "";

async function getData() {
    DOMselectors.section.innerHTML = "";
    try{
        const response = await fetch(URL); //
        const data = await response.json();
        console.log(data);
        //const Year = "2008";
        let year = DOMselectors.year.value
        data.Search.filter( (el) => el.Year == `${year}`)
        .forEach(el => { 
            console.log(el.Title);
            DOMselectors.section.insertAdjacentHTML(
                "beforeend",
                `<div>
                <h3 class="movie">${el.Title}</h3>
                </div>`
            );
            
        });
       
        
    } catch (error) {
        console.log(error);
    }
    }

DOMselectors.btn.addEventListener("click", getData);