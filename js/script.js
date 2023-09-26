function show() {
  document.getElementById("mySidebar").style.width = "275px";
}
function hide() {
  document.getElementById("mySidebar").style.width = "0";
}

// Function to handle scroll events
function handleScroll() {
  const elementsToReveal = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const scrollPosition = window.scrollY;

  elementsToReveal.forEach((element, index) => {
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + scrollPosition;

    if (elementTop < windowHeight) {
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 1000);
    }
  });
}

window.addEventListener('scroll', handleScroll);

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
