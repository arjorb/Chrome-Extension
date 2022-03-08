
let myLeads = [];

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');
const tabBtn = document.getElementById('tab-btn');
let leadFromLocal = JSON.parse(localStorage.getItem("myLeads"))

if(leadFromLocal){
    myLeads = leadFromLocal;
    render(myLeads);
}


tabBtn.addEventListener('click', function(){

    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        render(myLeads);
    })
    // for(let i = 0; i < tab.length; i++){
       
    // }
    
})

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
