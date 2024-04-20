gsap.to("#page1 #abt",{
    y:-910,
    duration:2,
    scrollTrigger:{
        tigger:"#page1",
        start:"top top",
        end:"bottom 50%",
        pin:"#page1",
        markers:false,
        scrub:1
    }
})

gsap.to("#scroll h2",{
  x:-1400,
  duration:2,
  scrollTrigger:{
      tigger:"#page2",
      markers:true,
      scrub:1
  }
})

gsap.to("#scroll2 h2",{
  x:1400,
  duration:2,
  scrollTrigger:{
      tigger:"#page2",
      markers:true,
      scrub:1
  }
})

gsap.from("#page3 h1",{
   x:-200,
   duration:5,
   scrollTrigger:{
     trigger:"#page3",
     start:"top top",
     end:"bottom 44%",
     scrub:1
   }
})

gsap.from("#page3 img",{
  width:"0px",
  duration:5,
  scrollTrigger:{
    trigger:"#page3",
    start:"top 20%",
    end:"bottom 70%",
    scrub:1,
    markers:false
  }
})

gsap.from("#work2 img",{
  width:"0px",
  duration:5,
  scrollTrigger:{
    trigger:"#page4",
    start:"top 50%",
    end:"bottom 450%",
    scrub:1
  }
})

gsap.from("#work3 img",{
  width:"0px",
  duration:5,
  scrollTrigger:{
    trigger:"#page4",
    start:"top -75%",
    end:"bottom 300%",
    scrub:1,
    markers:false
  }
})

gsap.from("#work4 img",{
  width:"0px",
  duration:5,
  scrollTrigger:{
    trigger:"#page4",
    start:"top -200%",
    end:"bottom 200%",
    scrub:1,
    markers:false
  }
})

gsap.from("#work5 img",{
  width:"0px",
  duration:5,
  scrollTrigger:{
    trigger:"#page4",
    start:"bottom 170%",
    end:"bottom 80%",
    scrub:1,
    markers:false
  }
})

gsap.to("#page3,#page4",{
  backgroundColor:"black",
  duration:2,
  scrollTrigger:{
    trigger:"#page3",
    start:"top 20%",
    end:"top 14%",
    scrub:1,
    markers:false
  }
})

gsap.to("#page5 #pg1",{
  top:"-300%",
  duration:5,
  scrollTrigger:{
    trigger:"#page5",
    scrub:1,
    pin:true,
    markers:false
  }
})


gsap.from("#page6 h1",{
  y:-300,
  duration:2,
  scrollTrigger:{
    trigger:"#page6",
    start:"top 50%",
    end:"top 0%",
    scrub:1
  }
})

function startload(){
  let counterElem = document.querySelector("#loader h1");
  let currentval = 0;

  function updatecounter(){
    if(currentval === 100)
    {
      return;
    }

    currentval += Math.floor(Math.random() * 10) + 1;

    if(currentval > 100)
    {
      currentval = 100;
    }

    counterElem.textContent = currentval + "%";

    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(updatecounter,delay);
  }

  updatecounter();
}

startload();

gsap.to("#loader",{
  y:-2000,
  delay:4,
  duration:2.5
})


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)