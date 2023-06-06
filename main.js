const projectGallery = document.querySelector(".projects-gallery");

// for each child of projectGallery (each project) add an event listener
for (const child of projectGallery.children) {
  child.addEventListener("click", () => {
    if (child.classList.contains("open")) {
      // if the clicked project is already open, remove the active class
      child.classList.remove("open");
      return;
    }

    // remove all active classes
    for (const child of projectGallery.children) {
      child.classList.remove("open");
    }
    // add active class to the clicked project
    child.classList.add("open");
  });
}
