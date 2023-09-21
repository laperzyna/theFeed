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
          element.classList.add('visible'); // Add the "visible" class
        }, index * 1000); // Adjust the time delay (in milliseconds) for each element
      }
    });
  }
  
  // Add a scroll event listener to trigger the reveal
  window.addEventListener('scroll', handleScroll);

  