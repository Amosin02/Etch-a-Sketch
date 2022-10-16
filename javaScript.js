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
    steps();
    loop2(num2);
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
    // let pad2 = ((960/num2)/2)-1;
    // const fill = document.getElementsByClassName('grid');
    // console.log(fill);
    // fill.style.border = '1px solid red';
}

function create2 (){
    const grid3 = document.createElement('div');
    container.append(grid3)
    //grid3.style.padding = pad2 + 'px';
    grid3.style.border = '1px solid black';
    grid3.classList.add('grid');
}

loop();