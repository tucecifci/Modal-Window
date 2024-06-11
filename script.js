//variables
const openBtn = document.querySelector("#open-btn");
const modalContainer = document.querySelector("#modal-container");
const closeBtn = document.querySelector("#close-btn");

//event listeners()
// openBtn.addEventListener("click", function () {
//   modalContainer.style.display = "block";
// });

function openModal() {
  modalContainer.style.display = "block";
}
function closeModal() {
  modalContainer.style.display = "none";
}
openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", function (e) {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none"; //çarpı dışında ekranın herhangi bir yerine basıldığında modalin kapanmasını sağlar
  }
});
