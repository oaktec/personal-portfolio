const projectGallery = document.querySelector(".project-gallery");

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

  // Get the links within the child and stop event propagation when clicked
  const links = child.querySelectorAll(".project-links a");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
}
