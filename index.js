
let myLeads = [];

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');
let leadFromLocal = JSON.parse(localStorage.getItem("myLeads"))

if(leadFromLocal){
    myLeads = leadFromLocal;
    render(myLeads);
}else{
    console.log("There is no any lead!")
}

inputBtn.addEventListener("click", function(){
   if(inputEl.value != ''){
    myLeads.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem("myLeads",JSON.stringify(myLeads)); 
    render(myLeads);
    console.log(leadFromLocal);
   }
})

deleteBtn.addEventListener('click',function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

function render(leads){
    let listItem = ""
    for(let i =0; i < leads.length; i++){
        listItem +=`
        <li>
        <a href='${+leads[i]}' target='_blank'>${leads[i]}</a>
        </li>
        ` 
    }
    ulEl.innerHTML = listItem;
}
