(function () {
  // ISSUE: This code was running before the DOM was fully loaded
  // FIX: Wrap the entire code in a DOMContentLoaded event listener
  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll(".btn");
    let count = 0;
    const counterMachine = document.querySelector(".counter-machine");
    // ISSUE: This selector was targeting the wrong element
    // FIX: Use counterMachine instead of counter for updates
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        if (button.classList.contains("inc")) {
          count++;
        }
        else if (button.classList.contains("dec")) {
          count--;
        }
        // ISSUE: Was updating counter.textContent instead of counterMachine.textContent
        // FIX: Update counterMachine.textContent with the new count
        counterMachine.textContent = count;

        const counter = document.querySelector(".counter");
        if (count > 0) {
          counter.classList.add("positive");
          counter.classList.remove("negative");
        }
        else if (count < 0) {
          counter.classList.remove("positive");
          counter.classList.add("negative");
        }
        else {
          counter.classList.remove("positive");
          counter.classList.remove("negative");
        }
      })
    })
  });
})();