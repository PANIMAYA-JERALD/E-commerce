// let priceusd =[2000,120,10]
// let priceinr=priceusd.map(d => d*20)
  // console.log(priceinr) 
// 
// 
  // let jero =[34,45,893,223,224,45,556]
  // let cont =jero.filter(d => d<100)
  // console.log(cont  )
// 
//  const input=[-6,-5,-7,-2,4,-6,-1]
  // let poss= input.filter(d => d>0)
  // console.log(poss)
// 
  //  let na ="panimaya jerald king"
  //  let first = na.map(x => x[1]);
  //  console.log(first.length)
// 
  let ul =document.querySelector("ul")
   let box =document.querySelector(".box")
    let button =document.querySelector(".login")
    console.log(ul)

   box.addEventListener('click' ,()=>{
      ul.classList.toggle("showmenu")
     

   })


   
function date() {
  let date =new Date()
  console.log(date)
  console.log(date)
  let hr =date.getHours()
  let min = date.getMinutes()
  let sec = date.getSeconds()
  if(hr>12)
    hr = hr-12
 document.getElementById("hour").
innerHTML = zeroint(hr)
 document.getElementById("min").
innerHTML  = zeroint(min)
 document.getElementById("sec").
innerHTML =zeroint(sec)
  console.los(h1)
  
}
function zeroint(num){
  return num<10?"0"+num:num
}
setInterval(date, 500)