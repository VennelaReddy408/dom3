let z=document.getElementById("hello")
z.style.backgroundColor="yellow"
let pchildElem=document.createElement("div");
let flowerImage=document.createElement("img")
flowerImage.width="300"
flowerImage.src="https://cms.interiorcompany.com/wp-content/uploads/2024/01/aster-attractive-flower-images.jpg"
pchildElem.textContent="this is div tag in p tag"

z.append(pchildElem,flowerImage)
// z.remove(flowerImage.pchildElem)
let teddyImage=document.createElement("iframe")
teddyImage.frameBorder = 1 ;
teddyImage.src="https://i.pinimg.com/236x/20/e9/26/20e9261364328df9fee291117234bdc8.jpg"
// teddyImage.width="500px"
z.replaceChild(teddyImage,flowerImage)
// clone
const cloneElem=z.cloneNode(true);
document.body.append(cloneElem)
// modify
let pallaviPic=document.createElement("img")
pallaviPic.setAttribute("src","https://akm-img-a-in.tosshub.com/indiatoday/images/story/202410/sai-pallavi-270104449-16x9.jpeg?VersionId=d98Cp_2h62BODz9GptUwowi0GARPXQ4Z&size=690:388")
pallaviPic.setAttribute("width","800")
pallaviPic.style.backgroundColor="purple"
pallaviPic.style.padding="30px"
console.log(pallaviPic.getAttribute("width"))
document.body.append(pallaviPic)
console.log(pallaviPic.removeAttribute("width"))

// Working with classses
let divTag=document.createElement("div")
divTag.className="container"
divTag.classList.add("vamsi")
divTag.classList.add("ravi")
divTag.classList.remove("vamsi")
divTag.classList.replace("ravi","vennela")
console.log(divTag)
// Event handling
pallaviPic.addEventListener("click",function(){
    alert("Saipallavi image is clicked")
    pallaviPic.style.borderRadius="50%"

})
// navigating the dom tree
let p=document.querySelector("p")
console.log(p.parentElement)


let div=document.querySelector("div")
console.log(div.children)
    console.log(div.firstElementChild);

    console.log(div.lastElementChild)

    let thirdP=document.querySelector(".three")
    console.log(thirdP.nextSibling)
    console.log(thirdP.nextElementSibling)

    let t=document.querySelector(".three")
    t.insertAdjacentElement("afterend",flowerImage)






