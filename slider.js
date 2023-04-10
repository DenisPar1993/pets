const data=[
    {
      "id":1,
      "name": "Jennifer",
      "img": "./assets/slides/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id":2,
      "name": "Sophia",
      "img": "./assets/slides/pets-sophie.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id":3,
      "name": "Woody",
      "img": "./assets/slides/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "id":4,
      "name": "Scarlett",
      "img": "./assets/slides/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id":5,
      "name": "Katrine",
      "img": "./assets/slides/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id":6,
      "name": "Timmy",
      "img": "./assets/slides/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "id":7,
      "name": "Freddie",
      "img": "./assets/slides/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id":8,
      "name": "Charly",
      "img": "./assets/slides/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]
  document.addEventListener('DOMContentLoaded',()=>{
    //Переменные
  
    const slider=document.querySelector('.slider-wrap');
  const sliderItem=[...document.querySelectorAll('.slides')];
  const btnNext = document.querySelector('.next')
  const btnPrev=document.querySelector('.prev')
  //Modal window
  const modal=document.querySelector('.modal');
  const closeModalBtn = document.querySelector('.close-modal');
  const modalContainer=document.querySelector('.modal-container')
  console.log(modalContainer,'modal')
  modalContainer.addEventListener('click',(e)=>{
    e.stopPropagation()
  })

// slider.style.width=`${sliderItem[0].getBoundingClientRect().width}px`;
slider.style.width='990px'
console.log(sliderItem[0].getBoundingClientRect().width)
// slider.style.width=`${document.querySelector('.slides').offsetWidth}px`;
  window.addEventListener('resize',()=>{
     let width = document.querySelector('.slides').offsetWidth
    slider.style.width=`${width}px`
    console.log(width)
    InitialsSlice()
  })
  //slides
  const PrevSlide=document.querySelector('.prev-slide')
  const CurrenSlide=document.querySelector('.current-slide')
  const NextSlide=document.querySelector('.next-slide')
  
  
  let currArr=[0,1,2].map(item=>data[item])
  let prevArr=createRandomArrow(data,currArr)
  let nextArr=createRandomArrow(data,currArr)
  console.log(nextArr,'current')
  function InitialsSlice(){
    const currentHTML=createElements(currArr)
    const prevHTML=createElements(prevArr)
    const nextHTML=createElements(nextArr)

    console.log(currentHTML)
    slider.innerHTML=''
    slider.appendChild(prevHTML)
    slider.appendChild(currentHTML)
    slider.appendChild(nextHTML)
  }
  InitialsSlice()
  modal.addEventListener('click',()=>{
    modal.classList.remove('active')
    document.body.style.overflow='';
  })
  console.log(closeModalBtn)
  // closeModalBtn.addEventListener('click',(e)=>{
   
  //   console.log('click')
  //   modal.classList.remove('active');
  // })
  function createElements(arr){
    const card= document.createElement('div')
    card.classList.add('slides');
     arr.forEach(item=>{
       card.innerHTML+=`
       <div class="slider-item" id=${item.id}>
         <img src=${item.img} alt="slide">
          <div class="slide-name">${item.name}</div>
          <a href="#" class="btn-slide">
                Learn more
            </a>
        </div>
       `;
     })
     Array.from(card.children).forEach(item=>{
      let id=item.getAttribute('id');
      const findArr= data.find(item=>item.id==id)


      item.addEventListener('click',()=>{
        const template=`
        <button class="close-modal"><img src="./assets/cross.png" alt="close"></button>
            <img class="modal-img" src=${findArr.img} alt="modal-image">
            <div class="modal-describe">
                <h3 class="modal-title">${findArr.name}</h3>
                <div class="modal-subtitle">${findArr.type} ${findArr.breed}</div>
                <p class="modal-text">${findArr.description}</p>
                <ul class="modal-list">
                    <li class="modal-list__item"><span>Age:</span>${findArr.age}</li>
                    <li class="modal-list__item"><span>Inoculations:</span>${findArr.inoculations}</li>
                    <li class="modal-list__item"><span>Deseases:</span> ${findArr.diseases}</li>
                    <li class="modal-list__item"><span>Parasites:</span> ${findArr.parasites}</li>
                </ul>
            </div>`;
        modalContainer.innerHTML=template;
        document.querySelector('.close-modal').addEventListener('click',()=>{
           modal.classList.remove('active');
           document.body.style.overflow='';
        })
        modal.classList.add('active')
        document.body.style.overflow='hidden';
      })
     })
     return card;
  }

  const arr=[0,1,2,3,4,5,6,7];
  let excludePool=[0,1,2];
  function changeSlide(direction){
    if(direction==='next'){
      prevArr=currArr
     currArr=nextArr;
     nextArr=createRandomArrow(data,currArr)
    }
    if(direction==='prev'){
       nextArr=currArr;
       currArr=prevArr
       prevArr=createRandomArrow(data,currArr)
    }
  }



  function createRandomArrow(mainArr,excludeArr){
      let rand;
      let filteredPool=[]
      let numbArray=[]
      for(let i=0;i<mainArr.length;i++){
      if(!excludeArr.includes(mainArr[i])){
          filteredPool.push(i)
      }
  }
  for(let i=0;i<3;i++){
      rand=filteredPool[Math.floor(Math.random()*filteredPool.length)]
      if(numbArray.includes(rand)){
          i--
      }else{
          numbArray.push(rand)
      }
  }
  
  return numbArray.map(item=>data[item])
  }
  
  console.log(createRandomArrow(arr,excludePool))
  function addNewArray(arr){
    const arrId=arr.map(item=>item.id)
    data.forEach((item)=>{
      if(!arrId.includes(item.id)&& nextArr.length<3){
         nextArr.push(item)
      }
    })
    console.log(arrId)
    console.log(nextArr)
  }
  
  
  
  
  
  // console.log(sliderItem)
  // console.log(sliderItem[0].getBoundingClientRect().width)
  // console.dir(slider.style)
  
  btnNext.addEventListener('click',()=>{
      changeSlide('next')
      const currentHTML=createElements(currArr)
      const prevHTML=createElements(prevArr)
      const nextHTML=createElements(nextArr)
     
      console.log(currentHTML,prevHTML,nextHTML)
      sliderItem.forEach(item=>{
        console.log(item)
        item.style.transition=`transform 300ms ease-out`
        item.style.transform=`translateX(-${sliderItem[0].getBoundingClientRect().width}px)`;
         setTimeout(()=>{
          item.style.transition=`transform 300ms ease-out`;
          item.style.transform=``;
          slider.innerHTML='';
          slider.appendChild(prevHTML);
          slider.appendChild(currentHTML);
          slider.appendChild(nextHTML);
         },400)
         
      })
  
  })
  btnPrev.addEventListener('click',()=>{
      changeSlide('prev')
      const currentHTML=createElements(currArr)
      const prevHTML=createElements(prevArr)
      const nextHTML=createElements(nextArr)
      console.log(prevHTML)
      sliderItem.forEach(item=>{
        item.style.transition=`transform 300ms ease-out`
        item.style.transform=`translateX(${sliderItem[0].getBoundingClientRect().width}px)`;
         setTimeout(()=>{
          item.style.transition=`transform 300ms ease-out`;
          item.style.transform=``;
          slider.innerHTML='';
          slider.appendChild(prevHTML);
          slider.appendChild(currentHTML);
          slider.appendChild(nextHTML);
         },300)
      })
  })
  })