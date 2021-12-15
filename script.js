
    const slider = () =>{
        $(function(){
            $('.trello-track').slick({
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots:true,
                prevArrow: '<div class="prev1"><svg class="svg"  width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.14286 7H7.85714L13 1" stroke="#888888" stroke-width="2"/></svg></div>',
                nextArrow: '<div class="next1"><svg class="svg"  width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.14286 7H7.85714L13 1" stroke="#888888" stroke-width="2"/></svg></div>',
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ]                                 
            });
        });
    }
    
    // const beforeAdd = document.querySelector('#addItem');
    // beforeAdd.addEventListener('click',addNewItem);

    const items1 = document.querySelector('.trello-item');
    const itemHTML = items1.innerHTML;
    const addCheck = document.querySelectorAll('.checked');
    const btnMains = document.querySelectorAll('.open-selectBtn');
    const removeBtn = document.querySelectorAll('.open-span');
    const menuBtn = document.querySelectorAll('.open');
    const addBtn = document.querySelectorAll('#more');
    const sliderTrack = document.querySelector('.trello-track');
    const btnN = document.querySelector('.btn-next');
    const btnP = document.querySelector('.btn-prev');

    function _init(){
        valueInputs();
        deleteItem();
        openMenu();
        closeMenu();
        addMenuBtn(addBtn,menuBtn);
        closeMenuBtn(menuBtn,removeBtn);
        addInArr(addCheck,btnMains);
        // setIndex();
        slider();
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
                // setIndex();
                // cloneItem();
                slider();
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
    
    
    
    
    // function slider(){
        
    //     let position = 0;
        
    //     let main = document.querySelector('.trello');
    //     let countItem = 3;
    //     let slideScr = main.clientWidth;
        
    //     let slideItemAll = document.querySelectorAll('.trello-item');
    //     let elemWidth = slideScr / countItem;

    //     function checkP(){
    //         if(position == 0){
    //             btnP.classList.add('hidden');
    //         }else if(position > 0 || position < 0){
    //             btnP.classList.remove('hidden');
    //         }
    //     }

    //     function checkN(elemWidth){
    //         if(position <= (-elemWidth * slideItemAll.length / 2) ){
    //             btnN.classList.add('hidden');
    //         }else{
    //             btnN.classList.remove('hidden');
    //         }
    //     }
    //     checkP();
    //     checkN();
        
        
    //     btnN.addEventListener('click',btnNext);
    //     btnP.addEventListener('click',btnPrev);

    //     function btnNext(){
            
    //         position -= elemWidth;
    //         sliderTrack.style.transform = `translate(${position}px)`;
    //         checkP();
    //         checkN();
    //     }

    //     function btnPrev(){
    //         position += elemWidth;
    //         sliderTrack.style.transform = `translate(${position}px)`;
    //         checkP();
    //         checkN();
            
    //     }

    // }
    
    // function cloneItem(){
    //     let slideItemAll = document.querySelectorAll('.trello-item');
    //     let last = sliderTrack.lastElementChild.getAttribute('data-index');
    //     let cloneItem = slideItemAll[last].cloneNode(true); 

    //     console.log(cloneItem);
    //     return position;
    // }
    // function setIndex(){
    //     let slideItemAll = document.querySelectorAll('.trello-item');
    //     for (let i = 0; i < slideItemAll.length;i++){
    //         slideItemAll[i].setAttribute('data-index',`${i}`);
    //     }
    // }
    
    _init();

    // const SliderMobile = {
    //     slides: [],
    //     next: null,
    //     prev: null,
    //     position:null,
    //     track : document.querySelector('.trello-track'),
    //     init() {
    //         document.querySelectorAll('.trello-item').forEach((el, indx) => {
    //            this.slides.push(el);
    //            if (indx !== 0) {
    //                el.classList.add('next');
    //            } else el.classList.add('active');
    //         });
    //         this.next = document.querySelector('.btn-next');
    //         this.prev = document.querySelector('.btn-prev');
    //         this.updateBtns(0)
    //         this.next.addEventListener('click', () => {
    //             this.showNextSlide();
    //             this.position -= this.track.clientWidth / 3;
    //             console.log(this.position);
    //         });
    //         this.prev.addEventListener('click', () => {
    //             this.showPrevSlide();
    //             this.position += this.track.clientWidth;
    //             console.log(this.position);

    //         });
    //     },
    //     showNextSlide() {
    //         const current = this.slides.find(el => el.classList.contains('active'));
    //         const currentIndex = this.slides.indexOf(current);
            
    //         if (currentIndex + 1 < this.slides.length) {
    //             current.classList.remove('active');
    //             current.classList.add('prev');
    //             this.slides[this.slides.indexOf(current) + 1].style.transform = `translate(${this.position}px)`;
    //             this.slides[this.slides.indexOf(current) + 1].classList.add('active');
    //             this.updateBtns(currentIndex+1)
    //         }
    //     },
    //     showPrevSlide() {
    //         const current = this.slides.find(el => el.classList.contains('active'));
    //         const currentIndex = this.slides.indexOf(current);
            
    //         if (currentIndex > 0) {
    //             current.classList.remove('active');
    //             current.classList.add('next');
    //             this.slides[this.slides.indexOf(current) - 1].style.transform = `translate(${this.position}px)`;
    //             this.slides[this.slides.indexOf(current) - 1].classList.add('active');
    //             this.updateBtns(currentIndex-1)
    //         }
    //     },
    //     updateBtns(index) {
    //         if (index === 0) {
    //             this.prev.classList.add('disable');
    //         } else this.prev.classList.remove('disable');
    //         if (index === this.slides.length - 1) {
    //             this.next.classList.add('disable');
    //         } else this.next.classList.remove('disable');
    //     }
    // }
    // SliderMobile.init();
        



