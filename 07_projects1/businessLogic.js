const buttons = document.querySelectorAll('.button');
//console.log(buttons);
const body = document.querySelector('body');
//console.log(body)

buttons.forEach( (button) =>{
    //console.log(button);
    button.addEventListener('click',(e) =>{
        //console.log(e);
        //console.log(e.target.id);
        if(e.target.id === 'red'){
            body.style.backgroundColor = 'rgb(189, 47, 47)';
        } else if(e.target.id === 'green'){
            body.style.backgroundColor = 'rgb(44, 222, 44)';
        } else if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'rgb(240, 192, 49)';
        } else{
            body.style.backgroundColor = 'rgb(39, 181, 194)';
        } 
    })
});