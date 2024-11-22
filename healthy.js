const btn1 = document.getElementById('btn1')
const spec = document.querySelector('.spec')

spec.style.display = "none"

btn1.addEventListener('click',function(){
    spec.style.display = "block"
    btn1.style.display = "none"
})