let burger=document.querySelector('.burger');
let menu=document.querySelector("ul");
burger.addEventListener('click',run);
function run(){
    burger.classList.toggle("active");
    menu.classList.toggle("show");
}
#scrollToTop {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  font-size: 16px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: none; 
  z-index: 1000;
}