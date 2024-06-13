const btns = document.getElementsByTagName("button");

Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", toggleView);
});

function toggleView(e) {
  const menu = e.target.parentNode.children[1];
  //e.target.parentNode.children[1].classList.toggle("show");
  if (menu.classList.contains("hide") || menu.className === "menu") {
    menu.className = "menu show";
  } else {
    menu.className = "menu hide";
  }
}
