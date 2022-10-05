const secondPageBtn = document.querySelector(".modal-btn");
const modalClose = document.querySelector(".modal-close");
const modalWindow = document.querySelector(".modal-window");
const modalContent = document.querySelector(".modal-content");

secondPageBtn.addEventListener("click", modalAppear);
modalClose.addEventListener("click", modalDisappear);

function modalAppear() {
  modalContent.classList.add("modal-appear");
  modalWindow.classList.add("modal-appear");
}

function modalDisappear() {
  modalContent.classList.remove("modal-appear");
  modalWindow.classList.remove("modal-appear");
}
