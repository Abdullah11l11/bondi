// Start Navbar
let myLinks = document.querySelectorAll(".navbar .navbar-nav .nav-link");
function remove() {
    myLinks.forEach((link) => {
      link.classList.remove("active");
    })
}
myLinks.forEach((link) => {
  link.addEventListener("click", () => {
    remove();
    link.classList.add("active");
  });
});

// End Navbar
// Start Featurs
let btnList = document.querySelectorAll(".portfolio .list .btn");

btnList.forEach((btn) => {
  btn.addEventListener("click", () => {
    btnList.forEach((btn) => {
      btn.classList.remove("main-btn");
      btn.classList.add("text-black-50");
    });
    btn.classList.add("main-btn");
    btn.classList.remove("text-black-50");
  })
});

// End Featurs
// On Scrol
window.addEventListener("scroll", () => {
  myLinks.forEach((link) => {
    let id = link.getAttribute("href").substring(1);
    let sec = document.getElementById(id);
    if (window.scrollY > sec.offsetTop - 100) {
      remove();
      link.classList.add("active");
    }
  })
})