let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for(let item of buttons){
      item.addEventListener('click',(e)=>{
            let buttonText = e.target.innerText;
            
            if(buttonText == 'C'){
                  screenValue = '';
                  input.value = screenValue;

            }
            else if(buttonText == '='){
                  input.value = eval(screenValue);
            }
            else{
                  screenValue += buttonText;
                  input.value = screenValue;
            }
      })
}