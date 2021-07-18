const checkbox = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked = false;

function handleChecked(e) {
  console.log(e);
  //Check if they have the shift key down
  // andcheck that they are checking its
  if (e.shiftKey && this.checked) {
    let inBetween = false;
    checkbox.forEach((box) => {
      console.log(box, this);
      if (box === this || box === this.lastChecked) {
        inBetween = !inBetween;
        console.log("Starting checking in between");
      }

      if (inBetween) {
        console.log(checkbox.checked);
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkbox.forEach((box) => {
  box.addEventListener("click", handleChecked);
});
