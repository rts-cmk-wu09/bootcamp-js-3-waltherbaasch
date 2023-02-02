


//let header = document.querySelectorAll("a")
//link.addEventListener("click", () => {
//console.log("callback fuction...");});
////let params = new URLSearchParams(document.location.search)
//et page = params.get("page");

let link = querySelectorAll( "nav ul a");

link.forEach(( element, index) => {
e.preventDefault();
let page = e.target.atrributes[0].value;
element.addEventlistener("click", (e) =>{
  document.querySelector("#homepage").style.display = "none";

  if (page === "page1"){

  
  document.querySelector("#page1").style.display = "block";
}
  else if (page === "page2"){

    }
});
});

//link.forEach(( element, index) => {
  //element.addEventlistener("click", (e) =>{
 // e.preventDefault();
 // console.log("hej");
//});
//});
