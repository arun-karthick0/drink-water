// getting an element
const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

// selecting small cups
smallCups.forEach((cup, index) => {
  cup.addEventListener("click", () => {
    highlightCups(index);
  });
});

// highlighting a selected cups
function highlightCups(clickedIndex) {
  const lastIndex =
    clickedIndex === 7 && smallCups[clickedIndex].classList.contains("full")
      ? clickedIndex - 1
      : clickedIndex;

  // toggle for selecting and unselecting
  smallCups.forEach((cup, index) => {
    cup.classList.toggle("full", index <= lastIndex);
  });

  updateBigCup();
}

// big cup animation
function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
