const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page1");


const b11 = document.querySelector(".b11");
b11.addEventListener("click", () =>{
    page2.style.display = "block";
    page1.style.display = "none";
    // console.log("NHHJN")
    page3.style.display = "none";
})

// const b = document.querySelector(".b");
//      b.addEventListener("click", () =>{
//      page3.style.display = "block";
//      page2.style.display = "none";
//      page3.style.display = "none";
// })




const c = document.querySelector(".c");
     c.addEventListener("click", () =>{
     page3.style.display = "block";
     page2.style.display = "none";
     page3.style.display = "none";
});
// const b22 = document.querySelector(".b22");
// b11.addEventListener("click", () =>{
//     page3.style.display = "block";
//     page2.style.display = "none";
//     page1.style.display = "none";
// })