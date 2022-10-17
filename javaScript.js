const container = document.querySelector('.container');

let num = 16
function loop(){
    for(let row = 0; row < num; row++){
    create(row);
        for(let col = 1; col < num; col++){
        create(col);
    }}
}

function create (){
    const grid3 = document.createElement('div');
    container.append(grid3)
    grid3.style.padding = pad + 'px';
    grid3.style.border = '1px solid black';
    grid3.classList.add('grid');
}

let pad = ((960/num)/2)-1;

const box = document.querySelectorAll('.grid');
container.addEventListener('mouseover',color);

function color(e){
    if(e.target.id !== 'container')
        e.target.style.backgroundColor ='black';
} //e.target isolates the element in a sea of class

const input = document.querySelector('.input');
const click = document.createElement('button');
input.append(click);
click.textContent = 'Set grid';

click.addEventListener('click', function(){
    let num2 = prompt('Set the squares: ');
    while (num2 == null){
        num2 = prompt('Set the squares: ');
    } if (num2 <= 50 && num2 >= 1){
        console.log(num2);
        steps();
        loop2(num2);
        pads(num2);
    } else {
        num2 = prompt('Set the square (1 is the minimum and 50 is the maximum):')
    }
});

function steps(){
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }
    
}

function loop2(num2){
    for(let row = 0; row < num2; row++){
    create2(row);
        for(let col = 1; col < num2; col++){
        create2(col);
    }}
}

function create2 (){
    const grid3 = document.createElement('div');
    container.append(grid3)
    grid3.style.border = '1px solid black';
    grid3.classList.add('grid');
}

function pads(num2){
    let pad2 = ((960/num2)/2)-1;
    const pad3 = document.getElementsByClassName('grid');
    for(grid of pad3){ //for each grid.div change ang padding to pad2
        grid.style.padding = pad2 + 'px';
    }
}

loop();