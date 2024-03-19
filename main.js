  
  // ---------------menu bar---------------------

// let buttons = document.querySelector(".menu-line-overall"),
//    links=document.querySelector(".buttons");

//    buttons.addEventListener("click",() =>{
//       links.classList.toggle("display")

//       buttons .children[0].classList.toggle("toggle1")
//       buttons .children[1].classList.toggle("toggle2")
//       buttons .children[2].classList.toggle("toggle3")
//    })

let menu = document.querySelector('.menubar')

let menulist= document.querySelector('.nav-col-2 ul')

menu.addEventListener('click',()=>{
   menulist.classList.toggle('showmenu')
});
// ----------------------------------------------


// var typed =new typed ("typing-text",{
//    String : ["programmer" ,"yohdhcjbkjbc","youtuberbjbc"],
//    typespeed : 150 ,
//    backspeed : 150,
//    looped : true
// })

   // ---------------------about-------------------------

   var tablinks=document.getElementsByClassName("tab-links")

   var tabcontents=document.getElementsByClassName("tab-content")

   function opentab(Tabname){
      for(tablink of tablinks){
         tablink.classList.remove("active-link")
      }

      for(tabcontent of tabcontents){
         tabcontent.classList.remove("active-tab")
      }

       event.currentTarget.classList.add('active-link')
       document.getElementById(Tabname).classList.add('active-tab')
   }

   // -----------------------------------------------------------
