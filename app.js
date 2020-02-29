document.getElementById("content").innerHTML =
  localStorage["text"] || "     "; 

setInterval(function() {
  localStorage["text"] = document.getElementById("content").innerHTML; 
}, 1000);