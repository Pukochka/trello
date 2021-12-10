
    let item = document.querySelector('.trello-item'),
    addItem = document.querySelector('#addItem'),
    conteiner = document.querySelector('.trello-track'),
    soc = item.innerHTML,
    arrayChecked = [];

addItem.addEventListener('click', addForm);
function addForm(){
    let incont = document.createElement('div');
    incont.className = 'trello-item';
    incont.innerHTML = `${soc}`;
    conteiner.insertBefore(incont,addItem);
    del();
    openmenu();
    addButton();
    removeBtn();
    valueParams();
    BtnAct();
    innerArr();
}

function del(){
    let deleteitem = document.querySelectorAll('.trello-cross');
    
    for(let i = 0; i < deleteitem.length ; i++){
        let item = document.querySelectorAll('.trello-item');
        deleteitem[i].addEventListener('click', function(){
                conteiner.removeChild(item[i],addItem);
        });
    }
}




function openmenu(){
    let menu = document.querySelectorAll('.trello-menu');
    for(let i = 0; i < menu.length ; i++){
        menu[i].addEventListener('click', function(){
            
            modal.classList.add('active');
        });
    }
}



let modal = document.querySelector('.modal');
let modalspan = document.querySelector('.modal-span');


modalspan.addEventListener('click',function(){

    modal.classList.remove('active');
});



let addBtn = document.querySelector('#addBtn');



function addButton(){
    let btn = document.querySelectorAll('.trello-add');
    for(let i = 0; i < btn.length ; i++){
        btn[i].addEventListener('click', function(){
            let openBtn = document.querySelectorAll('.open');
            openBtn[i].classList.add('active');
        });
    }
}
function removeBtn(){
    let removeBtn = document.querySelectorAll('.open-span');
    for(let i = 0; i < removeBtn.length ; i++){
        removeBtn[i].addEventListener('click', function(){
            let open = document.querySelectorAll('.open');
            open[i].classList.remove('active');
        });
    }
}
removeBtn();
addButton();
del();
openmenu();
innerValue();
BtnAct();
innerArr();





function valueParams() {
    let mainInp = document.querySelectorAll('.trello-input'),
        changeValue = document.querySelectorAll('.open-ul-input'),
        change = document.querySelectorAll('.open-ul-label'),
        mainLab = document.querySelectorAll('.trello-label');
        
        for(let i = 0; i < changeValue.length ; i++){
            change[i].innerHTML = changeValue[i].value;
        }
        
        for(let i = 0; i < mainLab.length ; i++){
            mainLab[i].innerHTML = mainInp[i].value;
        }
}




function innerArr(){
    let selectInpt = document.querySelectorAll('.open-ul-input');
    
    for(let i = 0; i < selectInpt.length ; i++){
        
        selectInpt[i].addEventListener('change', function(){

            if ( this.checked ) {
                console.log(arrayChecked);  
                arrayChecked.push(selectInpt[i].value);
                
            } else {

                cleanArr();

            }
        });
    }   
} 




function innerValue(){
    let contUl = document.querySelectorAll('.trello-desc');
    let clip = document.querySelectorAll('#more');
    
    for(let i = 0; i < arrayChecked.length ; i++){
        let parent = document.createElement('li');  
        console.log(arrayChecked[i]);
        parent.innerHTML = `<label class="label">
                                <input class="trello-input" type="checkbox" value="${arrayChecked[i]}">
                                <span class="trello-span"></span>
                                <span class="trello-label"></span> 
                            </label>`;
        for(let i = 0; i < contUl.length ; i++){
            contUl[i].insertBefore(parent,clip[i]);
        }
        

    }
       
    valueParams();  
    
}
function BtnAct() {
    let selectBtn = document.querySelectorAll('.open-selectBtn');
    for(let i = 0; i < selectBtn.length ; i++){
        selectBtn[i].addEventListener('click',manyFunc);
    }
}



function manyFunc() {
    if(arrayChecked.length == 0){

    }else{
        innerValue();
    }
    console.log(arrayChecked);
    cleanArr();  

    let open = document.querySelectorAll('.open');
    let selectInpt = document.querySelectorAll('.open-ul-li input');
    let openUl = document.querySelectorAll('.open-ul');
    let openUlLi = document.querySelectorAll('.open-ul li');
    for(let i = 0; i < open.length ; i++){
        
        open[i].classList.remove('active');
        if( selectInpt.checked){
            openUl[i].removeChild(openUlLi[i]);
        }
        // 
    }
    
    
    
} 
function cleanArr() {
    while(arrayChecked.length > 0){
        arrayChecked.pop();
    }
}



