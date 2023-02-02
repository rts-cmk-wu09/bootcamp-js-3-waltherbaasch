


//let header = document.querySelectorAll("a")
//link.addEventListener("click", () => {
//console.log("callback fuction...");});
//

let link = querySelectorAll( "nav ul a");
link.forEach(( element, index) => {
  element.addEventlistener("click", (e) =>{
  e.preventDefault();
  console.log("hej");
});
});
