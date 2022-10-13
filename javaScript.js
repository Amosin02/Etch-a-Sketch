const container = document.querySelector('.container');
function loop(){
    for(let row = 1; row <= 16; row++){
    create(row);
        for(let col = 1; col <= 15; col++){
        create(col);
    }}
}

function create (){
    const grid3 = document.createElement('div');
    container.append(grid3)
    grid3.style.padding = '20px';
    grid3.style.border = '2px solid black';
    grid3.classList.add('grid');
}

const box = document.querySelectorAll('.grid');
container.addEventListener('mouseover',color);

function color(e){
    if(e.target.id !== 'container')
        e.target.style.backgroundColor = 'black';
} //e.target isolates the element in a sea of class

loop();