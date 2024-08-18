
document.getElementById('imAge').addEventListener('click' , function (event) {
  // alert('Checked In')
  console.log(event)
}, false)
// we have study in event 

type , timesstamp , prevented , currentElement  
target , Element , srcElement , clientX , clinty
screenX , screenY ,
altkey , ctrlkey , shiftkey , keycode

document.getElementById('imAge').addEventListener('click' , function (event) {
  console.log('checked inside the image')
}, false)
document.getElementById('checkIn').addEventListener('click' , function (event) {
  event.stopPropagation()
  console.log('checked')
}, false)

document.getElementById('google').addEventListener('click' , function (event) {
  console.log('checked prevent')
  event.preventDefault()
}, false)



document.getElementById('ulList').addEventListener('click' , function (e) {
  // alert('Checked In')
  console.log(e.target.parentNode);
  let removeIt = e.target.parentNode ;
  removeIt.remove()
}, false)






















