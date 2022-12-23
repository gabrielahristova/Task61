import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let priceElements = document.querySelectorAll('.price');
  console.log(priceElements);
priceElements.forEach(element => {
  if(element.classList.contains('hot')) {
    element.innerHTML += '🔥';
  }
});
});
