const buttons = document.querySelectorAll("button");

function renderDropDownMenu(e) {
  const menu = Array.from(e.target.parentNode.children)[1];
  menu.classList.toggle("show");
}

Array.from(buttons).forEach((btn) => {
  btn.addEventListener("click", renderDropDownMenu);
});
