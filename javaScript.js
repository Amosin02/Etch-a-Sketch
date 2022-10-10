const container = document.querySelector('.container');
const plasticContainer = document.querySelector('.plasticContainer');
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

loop();