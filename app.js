const modalBtn = document.querySelector(".modal-btn");
const modalClose = document.querySelector(".modal-close");
const modalWindow = document.querySelector(".modal-window");

modalBtn.addEventListener("click", modalAppear);
modalWindow.addEventListener("click", modalDisappear);
function modalAppear() {
  modalWindow.classList.add("modal-appear");
}

function modalDisappear() {}
