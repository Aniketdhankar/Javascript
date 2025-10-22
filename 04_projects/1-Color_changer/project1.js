const buttons =document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(event){
        console.log(event);
        console.log(event.target);
        switch(event.target.id){
            case 'white':
                body.style.backgroundColor='white'
                //body.style.backgroundColor=event.target.id
                break;
            case 'blue':
                body.style.backgroundColor='blue'
                break;
            case 'yellow':
                body.style.backgroundColor='yellow'
                break;
            case 'grey':
                body.style.backgroundColor='grey'
                break;
        }
    })

})
