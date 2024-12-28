document.addEventListener("DOMContentLoaded", () => {
  //Reference to the add button and the input field
  const addButton = document.getElementById("add-btn");
  const inputField = document.getElementById("note-input");
  const corkboard = document.querySelector(".corkboard");

  //Function to generate a random color for sticky notes

  function getRandomColor() {
    const colors = [
      "#f4d03f",
      "#f39c12",
      "#f1948a",
      "#aed6f1",
      "#7dcea0",
      "#d2b4de",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  //Function to create a new sticky note

  function addStickyNote() {
    const noteText = inputField.value.trim();

    if (noteText === "") {
      alert("Please write something before adding a note!");
      return;
    }

    //Create the sticky note element

    const note = document.createElement("div");
    note.classList.add("sticky-note");
    note.style.backgroundColor = getRandomColor();
    note.innerHTML = `
<p>${noteText}</p> 
<button class= "delete-btn">X</button>;
`;

    //Add delete functionality
    note.querySelector(".delete-btn").addEventListener("click", () => {
      note.remove();
    });

    //Append to corkboard
    corkboard.appendChild(note);

    //Clear the input field
    inputField.value = "";
  }

  // Event listener for the add button
  addButton.addEventListener("click", addStickyNote);
});
