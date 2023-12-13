const navigation = document.querySelector(".nav-Menu");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
  navigation.classList.toggle("show");
  
  if (hambutton.textContent == "≡") {
    hambutton.textContent = "❌";
  } else {
    hambutton.textContent = "≡";
  }
});
