function show() {
  document.getElementById("mySidebar").style.width = "275px";
}
function hide() {
  document.getElementById("mySidebar").style.width = "0";
}

// Red Display
document.getElementById("denied").addEventListener("click", function() {
  var element = this;
  element.style.color = "red"; 
  element.style.textDecoration = "line-through";

  // Display message
  var messageElement = document.getElementById("message");
  messageElement.classList.remove("hidden");

  setTimeout(function() {
    element.style.color = "#b7acac";
    element.style.textDecoration = "none";
    messageElement.classList.add("hidden");
  }, 3000); // (3 seconds)
  
  element.removeEventListener("click", arguments.callee);
});
