window.addEventListener('load', function() {
    // Get the <main> element
    const mainElement = document.querySelector('main');
  
    // Check if a <main> element exists
    if (mainElement) {
      // Get all direct child elements of <main>
      const mainChildren = mainElement.children;
      const divsInMain = mainElement.querySelectorAll('div'); // Select all divs within <main>
      divsInMain.forEach(div => {
        div.classList.forEach(classItem => {
            if(classItem.startsWith("revision-notes_blur")){
                div.classList.remove(classItem);
                console.log("Blur Removed");
            }else if(classItem.startsWith("LimitWall_signUpWrapper_")){
                div.style.display='none';
                console.log("LimitWall Removed");
            }
        });
      });
    } else {
      console.log("No <main> element found on this page.");
    }
  });
