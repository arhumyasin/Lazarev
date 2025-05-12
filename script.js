// function locomotiveAnimation(){
//   gsap.registerPlugin(ScrollTrigger);

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true,
  
//     // for tablet smooth
//     tablet: { smooth: true },
  
//     // for mobile
//     smartphone: { smooth: true }
//   });
//   locoScroll.on("scroll", ScrollTrigger.update);
  
//   ScrollTrigger.scrollerProxy("#main", {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight
//       };
//     }
  
//   });
  
 
  
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
//   ScrollTrigger.refresh();
  
// }
// locomotiveAnimation();

// .................................   2nd Section  .....................................

function SecondSection(){
   let elem = document.querySelectorAll(".right-elem");

   elem.forEach( (elem)=> {
      elem.addEventListener("mouseenter", () => {
         gsap.to( elem.childNodes[3],{
            opacity:1,
            scale: 1,
         })
      })
      elem.addEventListener("mouseleave", () => {
          gsap.to( elem.childNodes[3],{
              opacity:0,
              scale: 0,
           })
     })
     elem.addEventListener("mousemove", (dets) => {
        gsap.to(elem.childNodes[3],{
          x:dets.x - elem.getBoundingClientRect().x-40,
          y:dets.y - elem.getBoundingClientRect().y-200
        })
     })
  })
}
SecondSection();

// .................................  3rd Section .....................................

function ThirdSection() {
   let Page3Center = document.querySelector(".page3-center");
   let Video = document.querySelector("#page3 video");
   
   Page3Center.addEventListener("click", () => { 
        Video.play()
      gsap.to(Video,{
            transform: "scaleX(1)  scaleY(1)",
            opacity: 1,
            duration: 1,
      })
   })
   
   Video.addEventListener("click", () => { 
      Video.pause()
      gsap.to(Video,{
         transform: "scaleX(0.7)  scaleY(0)",
         opacity: 0,
         // borderRadius:"30px",
   })
   })
}
ThirdSection();


// .................................  4th Section .....................................

function fourthSection() {

      // ..................... Video Playing ........................

let Section4 = document.querySelectorAll(".sec-right");
Section4.forEach((elem) => {
 elem.addEventListener("mouseenter", () => {
   elem.childNodes[3].style.opacity = 1,  
   elem.childNodes[3].play(),
   elem.childNodes[3].style.cursor= "none"
   })
   elem.addEventListener("mouseleave", () => {
      elem.childNodes[3].style.opacity = 0,  
      elem.childNodes[3].load() 
      })
})


// ..................... Case Study Animation inside the Video ........................


const secRights = document.querySelectorAll('.sec-right'); // Select all video containers
const hoverElements = document.querySelectorAll('.hover'); // Select all hover elements

secRights.forEach((secRight, index) => {
  const hoverElement = hoverElements[index]; // Match the hover element with its video

  // Mouse enter: Show the hover element with GSAP
  secRight.addEventListener("mouseenter", () => {
    gsap.to(hoverElement, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  // Mouse leave: Hide the hover element with GSAP
  secRight.addEventListener("mouseleave", () => {
    gsap.to(hoverElement, {
      opacity: 0,
      scale: 0,
      duration: 0.3,
      ease: "power2.in",
    });
  });

  // Mouse move: Smoothly move the hover element with GSAP
  secRight.addEventListener('mousemove', (e) => {
    const rect = secRight.getBoundingClientRect(); // Get the video container's dimensions
    const x = e.clientX - 50; // Cursor X position relative to the container
    const y = e.clientY - 200;  // Cursor Y position relative to the container

    // Smoothly move the hover element with GSAP
    gsap.to(hoverElement, {
      x: x - hoverElement.offsetWidth / 2, // Center the hover element horizontally
      y: y - hoverElement.offsetHeight / 2, // Center the hover element vertically
      duration: 0.1, // Fast, smooth movement
      ease: "power1.out",
    });
  });
});


}
fourthSection();

// .................................  5th Section .....................................

function FifthSection() {

    const boxes = document.querySelectorAll("#Page5 .box1");

    boxes.forEach((box) => {

          const img = box.querySelector("#Page5 img");
         const paragraph = box.querySelector("#Page5 p");

     box.addEventListener('mouseenter', () => {
  
       gsap.to(img, {
           scaleY: 1,
           y: '-18%',
           duration: 0.75,
           ease: 'power2.out',
           objectFit : "cover",
           cursor : "pointer",
           borderRadius: "30%",
       });

       gsap.to(paragraph, {
           opacity: 0,
           duration: 0.65,
           ease: 'power2.out',
       });
   });

   box.addEventListener('mouseleave', () => {

       gsap.to(img, {
           scaleY: 1,
           y: '0%',
           duration: 0.85,
           ease: 'power2.out',
           borderRadius: 0,
       });

       gsap.to(paragraph, {
           opacity: 1,
           duration: 0.65,
           ease: 'power2.out',
       });
   });
    })
}  
FifthSection();

// .................................  8th Section .....................................

function eightSection() {
        
  gsap.from("#btm8-parts h5", {
    x:0,
    duration: 1,
    scrollTrigger:{
      trigger: "#btm8-parts h5",
      scroller:"body",
     //  marker:true,
      start: "top 90%",
      end: "top 10%",
      scrub: true
    }
})

}
eightSection();


// .................................  9th Section .....................................

function nineSection(){
  let page9Boxes = document.querySelectorAll(".page9-box");

  page9Boxes.forEach((box) => {
        let video = box.querySelector("video"); // Select the video inside each box
  
      box.addEventListener("mouseenter", () => {
          video.style.opacity = "1";
          video.play();
      });
  
      box.addEventListener("mouseleave", () => {
          video.style.opacity = "0";
          video.pause();
          video.currentTime = 0;
      });
  });
}
nineSection();



// .................................  Loader Animation .....................................

// var tl = gsap.timeLine();

// tl.from("#page1",{
//      opacity: 0,
//      duration: 0.3,
//      delay:0.2
// })
// tl.from("#page1",{
//   transform: "scaleX(0.7)  scaleY(0.2) translateY(80%)",
//   borderRadius: "100px",
//   duration: 2,
//   ease: "export.out"
// })
// tl.from("nav", {
//   opacity: 0,
//   delay: -0.3
// })
// tl.from("#page1 h1, #page1 div", {
//     opacity: 0,
//     duration: 0.5,
//     stagger: 0.2
// })