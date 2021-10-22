const li = window.document.querySelectorAll("#menu ul li");
const sec = window.document.querySelectorAll("section");

window.addEventListener("scroll",()=>{
 let len = sec.length;
 while(--len && window.scrollY + 90 <sec[len].offsetTop){};
 li.forEach(item=>item.classList.remove("active"));
 li[len].classList.add("active");
});