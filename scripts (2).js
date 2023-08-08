const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");
const bout1 = document.querySelector(".bout1");
const bout2 = document.querySelector(".bout2");
const bout3 = document.querySelector(".bout3");
const bout4 = document.querySelector(".bout4");
const bout5 = document.querySelector(".bout5");


const one = document.querySelector(".one");
one.addEventListener("click", () =>{
    page2.style.display = "flex";
    page1.style.display = "none";
    // console.log("NHHJN")

});

bout2.addEventListener("click", () =>{
    page3.style.display = "flex";
    page1.style.display = "none";
    page2.style.display = "none";
});

bout5.addEventListener("click", () =>{
    page2.style.display = "flex";
    page3.style.display = "none";
})

bout1.addEventListener("click", () =>{
   page1.style.display = "flex";
   page3.style.display = "none";
   page2.style.display = "none";
 });




const aaa = document.querySelector(".aaa");
const bbb = document.querySelector(".bbb");
const ccc = document.querySelector(".ccc");
const ggg = document.querySelector(".ggg");

aaa.addEventListener("click", () =>{
       page1.style.display = "flex";
       page2.style.display = "none";
       page3.style.display = "none";
})

bbb.addEventListener("click", () =>{
    page2.style.display = "flex";
    page1.style.display = "none";
    page3.style.display = "none";
})

ggg.addEventListener("click", () =>{
    page3.style.display = "flex";
    page2.style.display = "none";
    page1.style.display = "none";
})