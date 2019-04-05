// GRAB LOGO
let logo = document.querySelector("#hplogo");
// SWAP LOGO
logo.setAttribute("src", "https://fillmurray.com/1000/400");
// MESS WITH LOGO SIZE
logo.style.width = "500px";
logo.style.height = "200px"
logo.style.border = "3px solid orange"
// CHANGE ALL LINKS
let links = document.getElementsByTagName("a");
for(let i = 0 ; i < links.length; i++){ // Can't use forEach, not a real array
    links[i].style.border = "8px solid pink";
    links[i].style.fontSize = "52px";
    links[i].setAttribute("href", "http//www.yahoo.com");
}
