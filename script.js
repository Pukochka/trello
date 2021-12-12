    
    // const beforeAdd = document.querySelector('#addItem');
    // beforeAdd.addEventListener('click',addNewItem);

    const items1 = document.querySelector('.trello-item');
    const itemHTML = items1.innerHTML;
    const addCheck = document.querySelectorAll('.checked');
    const btnMains = document.querySelectorAll('.open-selectBtn');
    const removeBtn = document.querySelectorAll('.open-span');
    const menuBtn = document.querySelectorAll('.open');
    const addBtn = document.querySelectorAll('#more');

    function _init(){
        valueInputs();
        deleteItem();
        openMenu();
        closeMenu();
        addMenuBtn(addBtn,menuBtn);
        closeMenuBtn(menuBtn,removeBtn);
        
        addInArr(addCheck,btnMains)
    }

    function addNewItem(){
        const parentItem = items1.parentNode;
        const addItem = document.createElement('div');
        addItem.className = 'trello-item';
        addItem.innerHTML = itemHTML;
        parentItem.insertBefore(addItem,beforeAdd);
        _init();
    };
    
    function valueInputs() {
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

    function deleteItem(){
        const item = document.querySelectorAll('.trello-item');
        const cross = document.querySelectorAll('.trello-cross');
        for (let i = 0; i < item.length;i++){
            cross[i].addEventListener('click',function(){
                item[i].remove();
            });
        }
    }

    

    function openMenu(){
        const menu = document.querySelector('.modal');
        const menuBtn = document.querySelectorAll('.trello-menu');
        for (let i = 0; i < menuBtn.length;i++){
            menuBtn[i].addEventListener('click',function(){
                menu.classList.add('active');
            });
        }
    }

    function closeMenu(){
        const menu = document.querySelector('.modal');
        const cross = document.querySelector('.modal-span');
        cross.addEventListener('click',function(){
            menu.classList.remove('active');
        });
    }

    function addMenuBtn(addBtn,menuBtn){
        for (let i = 0; i < addBtn.length;i++){
            addBtn[i].addEventListener('click',function(){
                menuBtn[i].classList.add('active');
            });
        }
    }

    function closeMenuBtn(menuBtn,removeBtn){
        for (let i = 0; i < removeBtn.length;i++){
            removeBtn[i].addEventListener('click',function(){
                menuBtn[i].classList.remove('active');
            });
        }
    }
    
    
    let arrayCheck = [];
    function addInArr(btn,btnM){
        const input = document.querySelectorAll('#input');
        const conteinerInput = document.querySelectorAll('.open-ul li')
        
        for (let i = 0; i < input.length;i++){
            input[i].addEventListener('change',function(){
                if(input[i].checked){
                    arrayCheck.push(i);
                    console.log(arrayCheck);
                }else{
                    arrayCheck.pop(this.value);
                    console.log(arrayCheck);
                }
            });
            for (let i = 0; i < btnM.length;i++){
                btnM[i].addEventListener('click',function(){
                    if(!arrayCheck.length == 0){
                    
                        for(let item of arrayCheck){
                            conteinerInput[item].classList.add('hidden');
                            addCheck[item].classList.add('active');
                            menuBtn[i].classList.remove('active');
                        }
                        setTimeout(clearArr,100);
                    
                    }
                });
            }
            
        }  
        
    }

    
     
    function clearArr(){
        while(arrayCheck.length > 0){
            arrayCheck.pop();   
        }
        
    }
    
    function slider(){
        const sliderItem = document.querySelector('.trello-item');
        const scrollWidth = item.offsetWidth;

    }

    _init();



