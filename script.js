let input= document.getElementById("screen");
let buttons = document.querySelectorAll("input[type=button]");
console.log(buttons.length);
let string = "";
buttons.forEach((button)=>
{
    button.addEventListener('click',(e)=>{
        if(e.target.value ==='=')
        {
            console.log("=");
            string = eval(string);
            input.value = string;
            
        }

        else if(e.target.value === 'AC')
        {
            console.log("ac");
            string = "";
            input.value = "";
        }

        else if(e.target.value == 'DEL')
        {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        else{
            string += e.target.value;
            input.value = string;
        }
    })
})