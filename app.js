/*Globale console,alert,prompt*/
const person1 = document.getElementById("person1");
const taxes = document.getElementById("tax");
const service = document.getElementById("service");
const button = document.getElementById("Button");
var   totalService=0,
        split =0;


window.onload = function(){
    
const submits = document.querySelectorAll(".btn");
const addItems = document.querySelectorAll(".btn-add");
    
    
submits.forEach(submit=> submit.addEventListener('click' ,function(e){
     
       var sum=0;
    const inputs=document.getElementById(`inp${this.id}`);
    const sumBox =document.getElementById(`sum${this.id}`);
       
      const children= inputs.querySelectorAll(`.input`); 
       
       children.forEach(child=> sum += parseInt(child.value));
       
         sumBox.textContent = "total sum:  " + sum + "L.E" +`\nTaxes:${taxes.value/numberOfPpl}\nService:${service.value/numberOfPpl}\ntotal money you should pay:${sum+split}`;
   
   }));
     
 addItems.forEach(addItem=>addItem.addEventListener('click',function(e){
            inputs=document.querySelector(`[name*="b${this.id}"]`);

               var newinput = document.createElement("input"); 

                inputs.appendChild(newinput);

            newinput.classList.add("input");
            newinput.setAttribute("type","text");
            newinput.setAttribute("placeholder","amount");

     
     
     
 }));
    
    
    
    
}

var i=0,
   
    numberOfPpl=0;


function addInput(){
    'use strict'
  
  
    
}

function add(e){
    var sum=0;
     console.log(this);
    const inputs=document.querySelectorAll(`.input`);
    
    inputs.forEach(input =>sum += parseInt( input.value ));
    console.log(sum);

}
function createContent(){
    
 numberOfPpl= prompt("Please Enter a Number","ex:1,2,3,..etc");


 
    
var div = document.querySelector('.container');
    
    
    for(i;i<numberOfPpl;i++){
        
        var name = prompt("please Enter a Name ");
       
       var div2 = document.createElement("div");
       div2.classList.add("bill");
       div.appendChild(div2);
       var div3 = document.createElement("div");
       div3.classList.add("person");
       div2.appendChild(div3);
       var label =  document.createElement('label');
       label.id="person1";
       label.setAttribute("for","amount1");
       label.textContent = "name:";
       
       var span = document.createElement("span");
       span.textContent= name;    
       var btn1 = document.createElement("button");
       btn1.classList.add("btn-add");
       btn1.id=`btn${i}`;
       btn1.textContent = "+";
        
        var divBox = document.createElement("div");
        divBox.classList.add("box");
        
       var div4 = document.createElement("div");
       div4.classList.add("inputs");
        div4.id=`inp${i}`;
        div4.setAttribute("name",`bbtn${i}`);
        
       var div5 = document.createElement("div");
       div5.classList.add("sumBox");
        div5.id=`sum${i}`;
      
        
       var input =  document.createElement("input");
        input.classList.add("input");
        input.setAttribute("type","text");
        input.setAttribute("placeholder","amount");
        div4.appendChild(input);
        var btn2 = document.createElement("button");
         btn2.classList.add("btn");
         btn2.textContent = "submit";
        btn2.id = `${i}`;
        
        div3.appendChild(label);
        div3.appendChild(span);
        div3.appendChild(btn1);
        div3.appendChild(divBox);
        divBox.appendChild(div4);
        divBox.appendChild(div5);
        div3.appendChild(btn2);
    
          }
}

createContent();
 button.addEventListener('click',function(e){
  if(taxes.value==  " " || services.value ==" ") alert("you should fill all boxes");
  else{ totalService = parseInt(taxes.value) + parseInt(service.value);
      
        split= totalService/numberOfPpl;
      
      
      }
      
 });
 
             
