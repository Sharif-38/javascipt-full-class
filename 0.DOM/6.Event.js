
let sum =0
function clickMe (){
    console.log('Hello');
    const fistElement = document.getElementById('count')
    console.log(fistElement);
    sum += 1
    fistElement.innerText = sum
}

const minuseButton = document.getElementById('minus')
minuseButton.addEventListener('click', function(){
    const fistElement = document.getElementById('count')
    sum-=1
    fistElement.innerText = sum
})