    const sliderTrack = document.querySelector('.trello-track'),
    
    btnN = document.querySelector('.btn-next'),
    btnP = document.querySelector('.btn-prev'),

    beforeAdd = document.querySelector('.item-add'),
    
    trelloItem = document.querySelector('.trello-item'),
    itemHtml = trelloItem.innerHTML,

    menu = document.querySelector('.modal'),
    cross = document.querySelector('.modal-span'),

    dotsConteiner = document.querySelector('.dots-conteiner'),

    btnPrev = document.querySelector('.btn-prev'),
    btnNext = document.querySelector('.btn-next'),
    dotsSlide = document.querySelector('.dots-conteiner'),

    firstCross = document.querySelector('.trello-cross');

    function addNewItem(){

        const newItem = document.createElement('div');
        newItem.className = 'trello-item';
        newItem.innerHTML = itemHtml;
        sliderTrack.insertAdjacentElement('beforeend',newItem);

        addInArr();

        deleteFunc();

        valueInputs();

        deleteInput();

        openMenu();

        addMenuBtn();

        closeMenuBtn();

        removeDots();

        closeMenu();

        addDots();

        slider();    
        
    };

    beforeAdd.addEventListener('click',addNewItem);

    firstCross.style.display = 'none';
    
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
    
    valueInputs();

    function deleteFunc(){
        
        const deleteCross = document.querySelectorAll('.trello-cross');

        for(let item of deleteCross){

            item.addEventListener('click',function(){

                item.parentElement.remove();

                deleteInput();

                closeMenuBtn();

                addMenuBtn();   

                removeDots();

                addDots();

                slider();

            });
        }
    }
    
    deleteFunc();

    function openMenu(){

        const menuBtnDots = document.querySelectorAll('.trello-menu');

        for (let i = 0; i < menuBtnDots.length;i++){

            menuBtnDots[i].addEventListener('click',function(){

                menu.classList.add('active');

            });
        }
    }

    openMenu();

    function closeMenu(){

        cross.addEventListener('click',function(){

            menu.classList.remove('active');

        });
    }

    closeMenu();

    function addMenuBtn(){

        const menuBtn = document.querySelectorAll('.open'),
        addBtn = document.querySelectorAll('.trello-add'),
        input = document.querySelectorAll('#input');

        for (let i = 0; i < addBtn.length;i++){

            addBtn[i].addEventListener('click',function(){

                for (let i = 0; i < menuBtn.length;i++){

                    menuBtn[i].classList.remove('active');
                }

                for(let i = 0 ; i < input.length; i++){
                    
                    input[i].checked = false;

                    
                }
                
                clearArr();

                menuBtn[i].classList.add('active');

            });
        }
    }

    addMenuBtn();

    function closeMenuBtn(){

        const menuBtn = document.querySelectorAll('.open'),
        removeBtn = document.querySelectorAll('.open-span'),
        input = document.querySelectorAll('#input');

        for (let i = 0; i < removeBtn.length;i++){

            removeBtn[i].addEventListener('click',function(){
                
                menuBtn[i].classList.remove('active');

                for(let i = 0 ; i < input.length; i++){
                    
                        input[i].checked = false;

                        
                }
                clearArr();
            });
        }
        
        
    }
    
    closeMenuBtn();

    const arrayCheck = [];

    function clearArr(){

        while(arrayCheck.length > 0){
            arrayCheck.pop();   
        }

    }   

    function addInArr(){
        
      const hideItem = document.querySelectorAll('.hi'),
            addCheck = document.querySelectorAll('.ck'),
            btnMains = document.querySelectorAll('.open-selectBtn'),
            menuBtn = document.querySelectorAll('.open'),
            input = document.querySelectorAll('#input');

        for(let i = 0 ; i < input.length; ++i){

            input[i].addEventListener('change',function(){

                if(this.checked){
                    arrayCheck.push(i);
                    // console.log(arrayCheck);
                }else{
                    arrayCheck.pop(i);
                    // console.log(arrayCheck);
                }
            }); 

            // console.log(i,'инпут')  
        }
         
        for (let i = 0; i < btnMains.length;i++){

            btnMains[i].addEventListener('click',function(){

                if(!arrayCheck.length == 0){
                    
                    for(let it of arrayCheck){

                        hideItem[it].classList.add('hidden');
                        hideItem[it].classList.remove('active');

                        addCheck[it].classList.add('active');
                        addCheck[it].classList.remove('hidden');

                        menuBtn[i].classList.remove('active');
                        // console.log(it,'arr') 

                    }
                }

                clearArr();

            });
        }    
    }

    addInArr();

    function deleteInput(){

      const hideItem = document.querySelectorAll('.hi'),
            addCheck = document.querySelectorAll('.ck'),
            deleteBtns = document.querySelectorAll('.trello-delete');
        
        for (let i = 0; i < deleteBtns.length;i++){

            deleteBtns[i].addEventListener('click', function(){

                addCheck[i].classList.add('hidden');
                addCheck[i].classList.remove('active');

                hideItem[i].classList.add('active');      
                hideItem[i].classList.remove('hidden');      
                      
            });
        }
    }

    
    deleteInput();
    
    function removeDots(){

        const dotsConteiner = document.querySelector('.dots-conteiner'),
        dots = document.querySelectorAll('.dot');

        for(let i = 0; i < dots.length; i++){

            dotsConteiner.removeChild(dots[i]);

        }
    }

    function addDots(){

        const Items = document.querySelectorAll('.trello-item');
        let countItem = 0,
        countDots = 0;

        if(Items.length == 1 && screen.width < 2000){
            
            countDots = 0;
        }
        if(Items.length == 2 && screen.width < 2000){
            
            countDots = 1;
        }
        if(Items.length >= 3 && screen.width < 2000){
            
            countDots = 2;
        }
        if(Items.length == 1 && screen.width < 1000){
            
            countDots = 0;
        }
        if(Items.length >= 2 && screen.width < 1000){
            
            countDots = 1;
        }
        if(Items.length >= 1 && screen.width < 650){
            
            countDots = 0;
        }
        
        for(let i = 0; i < Items.length - countDots ; i++){

            let dot = document.createElement('div');
            dot.className = 'dot';
            dot.setAttribute('data-slide',`${i}`);
            dotsConteiner.insertAdjacentElement('beforeend',dot);

        }   
    }

    function slider(){

        const caruseilSlides = document.querySelectorAll('.trello-item');
        let currentSlide = 0,
            countSlides = 0;
       
        if(screen.width < 2000){
            countSlides = 3;
        }

        if(screen.width < 1000){
            countSlides = 2;
        }

        if(screen.width < 650){
            countSlides = 1;  
        }
        

        const activeDot = function(slide) {

            document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
            document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');

        }

        activeDot(currentSlide);

        const changeSlide = function(slides){

            caruseilSlides.forEach((slide, index) => (slide.style.transform = `translateX(${105 * (index - slides)}%`));

        }

        changeSlide(currentSlide);

        btnNext.addEventListener('click',function(){

            currentSlide++;

            if(caruseilSlides.length - countSlides < currentSlide){
                currentSlide = 0;
            }

            changeSlide(currentSlide);

            activeDot(currentSlide);

        });

        btnPrev.addEventListener('click',function(){

            currentSlide--;

            if(0 > currentSlide){
                currentSlide = caruseilSlides.length - countSlides;
            }

            changeSlide(currentSlide);

            activeDot(currentSlide);

        });
        
        dotsSlide.addEventListener('click',function(e){

            if(e.target.classList.contains('dot')){
                const slide = e.target.dataset.slide;
                changeSlide(slide);
                activeDot(slide);
            }

        });
    }

    addDots();

    slider();


    
        



