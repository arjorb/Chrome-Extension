
let myLeads = [];

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');
let leadFromLocal = JSON.parse(localStorage.getItem("myLeads"))

if(leadFromLocal){
    myLeads = leadFromLocal;
    renderLeads();
}else{
    console.log("There is no any lead!")
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem("myLeads",JSON.stringify(myLeads)); 
    renderLeads();
    console.log(leadFromLocal);
})

deleteBtn.addEventListener('click',function(){
    localStorage.clear();
    myLeads = [];
    renderLeads();
})

function renderLeads(){
    let listItem = ""
    for(let i =0; i < myLeads.length; i++){
        listItem +=`
        <li>
        <a href='${+myLeads[i]}' target='_blank'>${myLeads[i]}</a>
        </li>
        ` 
    }
    ulEl.innerHTML = listItem;
}
