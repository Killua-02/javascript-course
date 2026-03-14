function toggle(selector){
  const buttonElement=document.querySelector(selector);
  if(buttonElement.classList.contains('is-toggled')){
    buttonElement.classList.remove('is-toggled');
  }else{
    removePreviousToggle();
    buttonElement.classList.add('is-toggled');
  }
}

function removePreviousToggle(){
  const previousToggle=document.querySelector('.is-toggled');
  if(previousToggle){
    previousToggle.classList.remove('is-toggled');
  }
}

function calculate(){
  let inputElement=Number(document.querySelector('.input').value);
  document.querySelector('.shipping-result').innerHTML='';
  document.querySelector('.error-message').innerHTML='';
  if(inputElement<0){
    document.querySelector('.error-message').innerHTML='Error: cost cannot be less than $0'
    return;
  }
  if(inputElement<40){
    inputElement=inputElement+10;
  }
  document.querySelector('.shipping-result').innerHTML=`$${inputElement}`;
}

function keypress(event){
  if(event.key=='Enter'){
    calculate();
  }
}
