function onclickBars(){
    let bar = document.querySelector(".bars").classList.toggle("click")
    let menu = document.querySelector(".sidebar")
    menu.classList.add('active');
}
function onClickCross(){
    let cross = document.querySelector('.cross').classList.toggle("click")
    let menu = document.querySelector(".sidebar")
    let sMenu = document.querySelector(".sidebar-menu li a")
        menu.classList.remove('active');
       
}
//     let bar = document.querySelector(".bars").classList.toggle("click")
//     let menu = document.querySelector(".sidebar")
//     let sMenu = document.querySelector(".sidebar-menu")
 
//  document.onclick = function(e){
//     if (e.target.id !== ".sidebar" && e.target.id !== "bar") {
//         menu.classList.remove('active');
//     }
//  }

 