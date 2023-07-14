let el_color = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
let btn = document.getElementById("9")
let main = document.querySelector(".body")


btn.addEventListener("click", (e) => {
   let color = "#"
   let index 
   for(let i=0; i < 6; i++)
   {
      index = (Math.floor(Math.random()*15))
      color += el_color[index]
   }

   console.log(color)
   main.style.cssText = `background-color : ${color}`  
})
  


