'use strict';

{
    const targets = document.querySelectorAll('.fadein')
    window.addEventListener('scroll',()=>{
        targets.forEach(target => {

            const fade = target.getBoundingClientRect().top + target.clientHeight*0.2

            if(window.innerHeight > fade){
                target.style.opacity='1'
                target.style.transform='translateY(0)'
            }

        })

    })
}

{
    const links = document.querySelectorAll('a[href^="#"]')

    links.forEach(link => {
        link.addEventListener('click', e => {
           
            e.preventDefault()

            const height = document.getElementById('header').clientHeight
            const target = document.querySelector(link.hash)
            const padding =  16;
            const offset = window.pageYOffset + target.getBoundingClientRect().top - height - padding ;


            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            })
        })
    })
}

