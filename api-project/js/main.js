import "../styles/style.css";

console.log("start");
setTimeout(()=> {
    console.log("Timer");
},3000);
console.log("end");

//JavaScript can only run one function at a time and should go in the order of start, timer, and then end but because there is a 3 second delay end should not be able to run until timer runs after the three seconds
//because the project is running in browser it will load start, then end, then times 3 seconds later, but it will not wait to log timer before it logs end
//starts runs and works, timer runs and is pushed to the side because it needs three seconds, and end goes while timer is on the side then timer returns and finishes
//
