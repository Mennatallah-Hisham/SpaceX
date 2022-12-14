
const btnNav = document.querySelector(".btn-mobile-nav");
const overlay = document.querySelector(".overlay");
const iconClose = document.querySelector(".icon-close");
const iconOpen = document.querySelector(".icon-open");
const asideMenu = document.querySelector(".aside");

const counters = document.querySelectorAll(".counter");
const counterCont = document.querySelector(".counter-container");




btnNav.addEventListener("click", () => {
    
    iconClose.classList.toggle("hide");
    iconOpen.classList.toggle("hide");
    overlay.classList.toggle("overlay-active");
    document.body.classList.toggle("no-scroll");
    asideMenu.classList.toggle("aside-active")
});


function countUp() {
    counters.forEach((counter) => {
      
        
        const updateCounter = () => {
           let count = Number(counter.innerText);
      
            const target = +counter.getAttribute('data-target');
         
          
          

            if (count < target) {
            
                counter.innerText =count+1;
                setTimeout(updateCounter, 5);
            } else {
                counter.innerHTML = target;
            }
        }
        updateCounter();
        
    }
    
    )  

}


function resetCounter(){
    counters.forEach((counter) => {
        counter.innerText = '0';
})
}


const startCountUp = function (entry)
{



    if (entry[0].isIntersecting) {
        countUp();
    } else {
       
        resetCounter();
    }
  

}
const obsOptions = {
    root: null,
    threshold: 0,
}
const pgObserver = new IntersectionObserver(startCountUp,obsOptions);

pgObserver.observe(counterCont);
