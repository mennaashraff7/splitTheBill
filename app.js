/*Globale console,alert,prompt*/
const person1 = document.getElementById("person1");
const addItems = document.querySelectorAll(".btn-add");
const submits = document.querySelectorAll(".btn");
var i=0;
createContent();

function addInput(){
    'use strict'
    var newinput = document.createElement("input"); 
    /******* our Main problem here *********/
    document.querySelector(".inputs").appendChild(newinput);
    /******* end Main problem here *********/
    
    /* document.querySelector(".inputs")[i].appendChild(newinput);
       we should extract index that we click on it
        
        byebyeeeeeee die nw 
    
    */
    
    
    newinput.classList.add("input");
    newinput.setAttribute("type","text");
    newinput.setAttribute("placeholder","amount");
 
    
}

function add(){
    var sum=0;
    const inputs=document.querySelectorAll(`.input`);
    inputs.forEach(input =>sum += parseInt( input.value ));
    console.log(sum);

}
function createContent(){
    
var numberOfPpl= prompt("Please Enter a Number","ex:1,2,3,..etc");
        var div = document.querySelector('.container');
    for(i;i<numberOfPpl;i++){
       
       var div2 = document.createElement("div");
       div2.classList.add("bill");
       div.appendChild(div2);
       var div3 = document.createElement("div");
       div3.classList.add("person");
       div2.appendChild(div3);
       var label =  document.createElement('label');
       label.id="person1";
       label.setAttribute("for","amount1");
       label.textContent = "name:"
       var btn1 = document.createElement("button");
       btn1.classList.add("btn-add");
       btn1.textContent = "+";
       var div4 = document.createElement("div");
       div4.classList.add("inputs");
       var input =  document.createElement("input");
        input.classList.add("input");
        input.setAttribute("type","text");
        input.setAttribute("placeholder","amount");
        div4.appendChild(input);
        var btn2 = document.createElement("button");
         btn2.classList.add("btn");
         btn2.textContent = "submit";
        div3.appendChild(label);
        div3.appendChild(btn1);
       div3.appendChild(div4);
       div3.appendChild(btn2);
          }
}
 submits.forEach(submit => submit.addEventListener('click',add));
             
for (var i=0;i<addItems.length;i++){
      addItems[i].addEventListener('click',addInput);
    
    
    
    
    
    
  }