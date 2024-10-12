const counterElement = document.getElementById('counter');
const plusbtn = document.getElementById('plus-btn');
const minusbtn = document.getElementById('minus-btn');


let counter = 0;

const updateCounter = (value) =>{

    //plus button
        counter = counter + value;
        counterElement.innerText = counter
        if (counter >= 10) {
            plusbtn.setAttribute('disabled', true);
        }else{
            plusbtn.removeAttribute('disabled', false);
        }

    //minus button
        if (counter <= 0) {
            minusbtn.setAttribute('disabled', true);
        }else{
            minusbtn.removeAttribute('disabled', false);
        }
}

plusbtn.addEventListener('click', () =>{
    updateCounter(1);
})

minusbtn.addEventListener('click', () =>{
    updateCounter(-1);
})