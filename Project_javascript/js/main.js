//on scrolll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})
const faqs=document.querySelectorAll('.faq');
faqs.forEach((faq)=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open')
        let icon = document.querySelector('.faq_icon i');
        console.log(icon.className)
        if(icon.className=="fa-solid fa-plus")
        {
            icon.className="fa-solid fa-minus";
        }
        else{
            icon.className=="fa-solid fa-plus";
        }
    })
})
const menu =document.querySelector('.nav_menu');
const closed_btn=document.querySelector('.closed-menu-bar');
const open_btn=document.querySelector('.open-menu-bar');
open_btn.addEventListener('click',()=>{
    menu.style.display="flex";
    closed_btn.style.display="inline-block";
    open_btn.style.display="none"
})
closed_btn.addEventListener('click',()=>{
    menu.style.display="none";
    closed_btn.style.display="none";
    open_btn.style.display="inline-block"
})