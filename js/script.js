$(()=>
{
    let header = document.getElementById('header');
    let navtoggle = document.getElementById('nav-toggle');
    let closebtn = document.getElementById('closebtn')
    let scrollupbtn = document.getElementById('side-button')
    //Code for scrolling header background color
    window.addEventListener("scroll",function (e) {
        let yOfset = window.pageYOffset;
        if(yOfset >200)
        {  scrollupbtn.style.opacity ="1";
            scrollupbtn.style.transform="translateY(-10px)"
            header.classList.add("scrolled")
        }
        else{
            scrollupbtn.style.opacity="0";
            scrollupbtn.style.transform="translateY(0px)"
            header.classList.remove("scrolled")
        }
    })
    closebtn.addEventListener("click",()=>{
        header.classList.remove("open")
    })
    function toggleClass(element,classname) {
        let classList1 = element.className.split("")
        if(classList1.indexOf(classname)===-1)
        {
            element.classList.add(classname)
        }
        else{
            element.classList.remove(classname);
        }
    }
    navtoggle.addEventListener('click',()=>{
        toggleClass(header,"open");
    });

});