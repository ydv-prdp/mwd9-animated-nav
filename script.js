gsap.to("#circle",{
    rotate:0,
    ease:Expo.easeInOut,
    duration:2
})

var active = 3;
var mncircles = document.querySelectorAll("#mncircle")
var sec = document.querySelectorAll("#sec")

gsap.to(mncircles[active-1],{
    opacity:0.7
})
gsap.to(sec[active-1],{
    opacity:1
})


mncircles.forEach(function(elem, index){
    elem.addEventListener("click",function(){
        gsap.to("#circle",{
            rotate: (3-(index+1))*10,
            ease:Expo.easeInOut,
            duration:2
        })
        greyout();
        gsap.to(this,{
            opacity:0.7
        })
        gsap.to(sec[index],{
            opacity:1
        })
    })
})

function greyout(){
    gsap.to(mncircles,{
        opacity:0.08
    })
    gsap.to(sec,{
        opacity:0.4
    })
}