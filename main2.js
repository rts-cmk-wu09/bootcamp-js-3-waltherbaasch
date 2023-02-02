let link = document.querySelectorAll("nav ul a"); 
/* let params = new URLSearchParams(document.location.search)
 let page = params.get("page"); */
 link.forEach((element, index) => { element.addEventListener("click", (e) => 
 { e.preventDefault(); let page = e.target.attributes[0].value;
     document.querySelector("#homepage").getElementsByClassName.display = "none"; 
     if (page == "page1") { document.querySelector("#page1").style.display = "block"; 
     document.querySelector("#page2").style.display = "none";
      document.querySelector("#page3").style.display = "none";
     } else if (page == "page2") { document.querySelector("#page1").style.display = "none";
      document.querySelector("#page2").style.display = "block"; document.querySelector("#page3").style.display = "none";
     } else { document.querySelector("#page1").style.display = "none"; document.querySelector("#page2").style.display = "none";
      document.querySelector("#page3").style.display = "block";
    } });
});