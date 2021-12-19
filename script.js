    let countDots = 0;
    let countSlides = 1;
    
    
    const sliderTrack = document.querySelector('.trello-track');
    
    const btnN = document.querySelector('.btn-next');
    const btnP = document.querySelector('.btn-prev');


    

    const beforeAdd = document.querySelector('.item-add');
    beforeAdd.addEventListener('click',addNewItem);

    const trelloItem = document.querySelector('.trello-item');
    const itemHtml = trelloItem.innerHTML;

    const menu = document.querySelector('.modal');
    const cross = document.querySelector('.modal-span');

    const dotsConteiner = document.querySelector('.dots-conteiner');

    let btnPrev = document.querySelector('.btn-prev'),
        btnNext = document.querySelector('.btn-next'),
        dotsSlide = document.querySelector('.dots-conteiner');

    function addNewItem(){
        const newItem = document.createElement('div');
        newItem.className = 'trello-item';
        newItem.innerHTML = itemHtml;
        sliderTrack.insertAdjacentElement(
            'beforeend',
            newItem);
        addInArr();
        deleteFunc();
        valueInputs();   
        deleteInput();
        openMenu();
        addMenuBtn();
        closeMenuBtn();
        removeDots();
        closeMenu();
        addDots(countDots);
        slider(countSlides);    
        
    };

    const firstCross = document.querySelector('.trello-cross');
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
                addDots(countDots);
                slider(countSlides);
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
        const menuBtn = document.querySelectorAll('.open');
        const addBtn = document.querySelectorAll('.trello-add');
        for (let i = 0; i < addBtn.length;i++){
            addBtn[i].addEventListener('click',function(){
                for (let i = 0; i < menuBtn.length;i++){
                    menuBtn[i].classList.remove('active');
                }
                menuBtn[i].classList.add('active');
            });
        }
    }

    addMenuBtn();

    function closeMenuBtn(){
        const menuBtn = document.querySelectorAll('.open');
        const removeBtn = document.querySelectorAll('.open-span');
        for (let i = 0; i < removeBtn.length;i++){
            removeBtn[i].addEventListener('click',function(){
                
                menuBtn[i].classList.remove('active');
            });
        }
    }
    
    closeMenuBtn();


    

    
    

    function addInArr(){
        
        const arrayCheck = [];
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
                function clearArr(){
                    while(arrayCheck.length > 0){
                        arrayCheck.pop();   
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
        const dotsConteiner = document.querySelector('.dots-conteiner');
        const dots = document.querySelectorAll('.dot');
        for(let i = 0; i < dots.length; i++){
            dotsConteiner.removeChild(dots[i]);
        }
    }

    
            
    // if(screen.width < 2000){
    //     countSlides = 3;
    //     countDots = 2;
    //     addDots(countDots);
    //     slider(countSlides);
        
    // }else if(screen.width < 800){
    //     countSlides = 2;
    //     countDots = 1;
    //     addDots(countDots);
    //     slider(countSlides);
    // }
    // else if(screen.width < 400){
    //     countSlides = 1;
    //     countDots = 0;
    //     addDots(countDots);
    //     slider(countSlides);
        
    // }           
    
    function addDots(count){
        const Items = document.querySelectorAll('.trello-item');
        
        for(let i = 0; i < Items.length - count; i++){
            let dot = document.createElement('div');
            dot.className = 'dot';
            dot.setAttribute('data-slide',`${i}`);
            dotsConteiner.insertAdjacentElement(
                'beforeend',
                dot
            );
        }   
    }

    addDots(countDots);


    function slider(count){

        const caruseilSlides = document.querySelectorAll('.trello-item');
        let currentSlide = 0;
        

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
            if(caruseilSlides.length - count < currentSlide){
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

    slider(countSlides);


    
        



