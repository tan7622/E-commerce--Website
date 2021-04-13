const nav_hamburger_menu = document.querySelector(".hamburger-menu");
const nav_page_container = document.querySelector(".page-container");
const main = document.querySelector(".main");

nav_hamburger_menu.addEventListener("click", () => {
  document.documentElement.scrollTop = 0
  if(nav_page_container.classList.contains("active")){
    main.style.height = '100%'
  }
  else{
    main.style.height = '100vh'
  }
  nav_page_container.classList.toggle("active");
});

main.addEventListener('click',()=>{
  if(nav_page_container.classList.contains("active")){
    nav_page_container.classList.remove("active");
    main.style.height = '100%'
  }
})
