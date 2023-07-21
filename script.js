let input = document.querySelector('input');
let btn = document.querySelectorAll('button');

for (let i = 0; i< btn.length; i++) {
    btn[i].addEventListener('click',(e)=>{
        try{
        if(e.target.innerHTML == "C"){
            input.value = "";
        }
        else if(e.target.innerHTML == "="){
            input.value = eval(input.value);
        }
        else if(e.target.innerHTML == "X"){
            input.value+="*";
        }
        else{
       input.value += e.target.innerHTML;
        }
    }

catch(err){
   input.value = "Syntax Error";
}
})
}  


