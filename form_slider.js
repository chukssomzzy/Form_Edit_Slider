document.addEventListener("DOMContentLoaded", function(){
  const editIcons = document.querySelectorAll(".list-item .edit-icon");
  const saveButtons = document.querySelectorAll(".list-item .save");
  const updateSliders = document.querySelectorAll(".list-item .update-slider");

  function switchToEdit(e) {
    e.preventDefault();
    e.stopPropagation();
    const elemContainer = this.parentElement.parentElement;

    if (elemContainer.classList.contains("list-item__inner")) {
      const hiddenElem = elemContainer.parentElement.querySelector(".hidden");

      elemContainer.classList.remove("list-item__inner");
      elemContainer.classList.add("hidden");

      if (hiddenElem) {
        hiddenElem.classList.remove("hidden");
        hiddenElem.classList.add("list-item__inner");
      }
    }
  }

  function updateValue(e) {
    const formContainer = this.parentElement.parentElement;
    const valueContainer = formContainer.querySelector(".price__value");

    if (valueContainer) {
      const sectionContainer = formContainer.parentElement.parentElement;

      valueContainer.innerHTML = ` <span class="large">$</span>&nbsp;${e.target.value}`;
      sectionContainer.querySelector("section > aside .price__value").innerHTML = ` <span class="large">$</span>&nbsp;${e.target.value}`;
    }
  }
  for (const editIcon of editIcons) {
    editIcon.addEventListener("click", switchToEdit);
  }

  for (const saveButton of saveButtons) {
    saveButton.addEventListener("click", switchToEdit);
  }

  for (const updateSlider of updateSliders) {
    updateSlider.addEventListener("input", updateValue);
  }
})
