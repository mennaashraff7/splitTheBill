/*Globale console,alert,prompt*/
const person1 = document.getElementById("person1");


var i=0;


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
       btn1.id=`btn${i+2}`;
       btn1.textContent = "+";
        
       var div4 = document.createElement("div");
       div4.classList.add("inputs");
        div4.id=`inp${i+2}`;
        div4.setAttribute("name",`bbtn${i+2}`)
       var input =  document.createElement("input");
        input.classList.add("input");
        input.setAttribute("type","text");
        input.setAttribute("placeholder","amount");
        div4.appendChild(input);
        var btn2 = document.createElement("button");
         btn2.classList.add("btn");
         btn2.textContent = "submit";
        btn2.id = `${i+2}`;
        div3.appendChild(label);
        div3.appendChild(btn1);
       div3.appendChild(div4);
       div3.appendChild(btn2);
          }
}

createContent();

const submits = document.querySelectorAll(".btn");
const addItems = document.querySelectorAll(".btn-add");

 submits.forEach(submit=> submit.addEventListener('click' ,function(e){
     
       var sum=0;
    const inputs=document.getElementById(`inp${this.id}`);
       
      const children= inputs.querySelectorAll(`.input`); 
       
       children.forEach(child=> sum += parseInt(child.value));
       
          console.log(sum);
   }));
     
 addItems.forEach(addItem=>addItem.addEventListener('click',function(e){
            inputs=document.querySelector(`[name*="b${this.id}"]`);

               var newinput = document.createElement("input"); 

                inputs.appendChild(newinput);

            newinput.classList.add("input");
            newinput.setAttribute("type","text");
            newinput.setAttribute("placeholder","amount");

     
     
     
 }))
             
