let $ = document;
let btnShowModalEl = $.querySelector("#btnShowModal");
let modalParentEl = $.querySelector(".modal-parent");
let bgEl = $.querySelector(".bg");
let xEl = $.querySelector(".X");

btnShowModalEl.addEventListener("click", () => {
  modalParentEl.style.display = "block";
  bgEl.style.filter = "blur(6px)";
});

xEl.addEventListener("click", () => {
  modalParentEl.style.display = "none";
  bgEl.style.filter = "blur(0)";
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    modalParentEl.style.display = "none";
    bgEl.style.filter = "blur(0)";
  }
});
