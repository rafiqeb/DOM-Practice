

let sum = 0;
function clickMe(){
    const h2 = document.getElementById('count');
    sum += 1;
    h2.innerText= sum;
}

document.getElementById('minus-btn').addEventListener('click', function(){
    const h2 = document.getElementById('count');
    sum -= 1;
    h2.innerText= sum;
})