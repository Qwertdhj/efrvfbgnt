const modal = document.querySelector(".modal");
const how = document.querySelector(".how");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}
how
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
{
how.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
}
const modal_2 = document.querySelector(".modal_2");
const how1 = document.querySelector(".how1");
const closeButton1 = document.querySelector(".close-button2");

function toggleModal() {
    modal.classList.toggle("show-modal_2");
}
how1
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
{
how1.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
}



