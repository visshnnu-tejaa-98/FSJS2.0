// Refresh page after writing something in input and click btn
let input = document.querySelector(".main__form-input");
input.disabled = false;
let btn = document.querySelector(".main__form-btn");
btn.disabled = false;
btn.addEventListener("click", () => {
  window.location.href = "/";
});
