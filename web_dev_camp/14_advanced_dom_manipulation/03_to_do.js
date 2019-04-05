// Change 1st li

// let firstLi = document.querySelector('li');

// firstLi.addEventListener('mouseover', ()=>{
//     firstLi.style.color = 'red';
// });

// firstLi.addEventListener('mouseout', ()=> {
//     firstLi.style.color = 'black';
// })

// Change All li

let allLi = document.querySelectorAll('li');

for(let i = 0 ; i < allLi.length ; i++){
    allLi[i].addEventListener('mouseover', function(){  // DO NOT USE ARROW FUNCTION WITH THIS
        this.classList.add('selected');
    });
    allLi[i].addEventListener('mouseout', function () {  // DO NOT USE ARROW FUNCTION WITH THIS
        this.classList.remove('selected');
    });
    allLi[i].addEventListener('click', function () {  // DO NOT USE ARROW FUNCTION WITH THIS
        this.classList.toggle('done');
    });
}


