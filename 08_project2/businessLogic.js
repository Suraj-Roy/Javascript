const form  = document.querySelector('form');
//console.log(form);
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const output = document.querySelector('#output');

    if(height === ''|| height < 0 || isNaN(height)){
        output.innerHTML = "Please give valid height";
    }

    if(weight === ''|| weight <= 0 || isNaN(weight)){
        output.innerHTML = "Please give valid weight";
    }
    output.innerHTML = `Result : ${(weight / ((height*height)/10000)).toFixed(2)}`;

})