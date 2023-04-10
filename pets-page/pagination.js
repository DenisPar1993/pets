const data=[
    {
      "id":1,
      "name": "Jennifer",
      "img": "../assets/slides/pets-jennifer.png",
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
      "img": "../assets/slides/pets-sophie.png",
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
      "img": "../assets/slides/pets-woody.png",
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
      "img": "../assets/slides/pets-scarlet.png",
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
      "img": "../assets/slides/pets-katrine.png",
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
      "img": "../assets/slides/pets-timmy.png",
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
      "img": "../assets/slides/pets-freddie.png",
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
      "img": "../assets/slides/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];
//Elements
const prevBtn=document.querySelector('.one-prev'),
      lastBtn=document.querySelector('.last-page__btn'),
      nextBtn=document.querySelector('.one-next'),
      firstBtn=document.querySelector('.first-page__btn'),
      numberPageElement=document.querySelector('.num-page'),
      petsWrap=document.querySelector('.pets-wrap');


const modal=document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const modalContainer=document.querySelector('.modal-container')




const generateData=generArr(data)
let pageNumber=1;
let elementCount;
let generateArray=[]
let varArray
let countPages;
culcArray()
nextBtn.addEventListener('click',()=>{
    pageNumber++;
    numberPageElement.innerHTML=pageNumber;
    createElements()
    if(pageNumber===countPages){
        nextBtn.setAttribute('disabled',true);
        lastBtn.setAttribute('disabled',true)
        return
    }
    prevBtn.hasAttribute('disabled')&&prevBtn.removeAttribute('disabled')||firstBtn.removeAttribute('disabled');
})

lastBtn.addEventListener('click',()=>{
    if(pageNumber==countPages){
        return
    }
    pageNumber=countPages;
    createElements()
    nextBtn.setAttribute('disabled',true);
    lastBtn.setAttribute('disabled',true);
    prevBtn.removeAttribute('disabled');
    firstBtn.removeAttribute('disabled');
    numberPageElement.innerHTML=countPages;

})
prevBtn.addEventListener('click',()=>{
    --pageNumber
    numberPageElement.innerHTML=pageNumber;
    createElements()
 if(pageNumber===1){
    prevBtn.setAttribute('disabled',true);
    firstBtn.setAttribute('disabled',true);
    return;
 }
 nextBtn.hasAttribute('disabled')&&nextBtn.removeAttribute('disabled')||lastBtn.removeAttribute('disabled');
})
firstBtn.addEventListener('click',()=>{
    if(pageNumber==countPages){
        return
    }
    pageNumber=1
    createElements()
    prevBtn.setAttribute('disabled',true);
    firstBtn.setAttribute('disabled',true);
    nextBtn.removeAttribute('disabled');
    lastBtn.removeAttribute('disabled');
    numberPageElement.innerHTML=1;
})


modal.addEventListener('click',()=>{
    modal.classList.remove('active')
    document.body.style.overflow='';
  })
  modalContainer.addEventListener('click',(e)=>{
    e.stopPropagation()
  })

culcArray()


function culcArray(){
    if(window.matchMedia("(min-width:1190px").matches){
        if(elementCount!==8){
            elementCount=8
            countPages=48/elementCount
            createElements()
        }
    }
    if(window.matchMedia("(max-width:1190px").matches){
        console.log('нормуль работает на 1190')
        if(elementCount!==6){
            elementCount=6
        countPages=48/elementCount
        createElements()
        }
    }
    if(window.matchMedia("(max-width:642px").matches){
        console.log('нормуль работает на 642')
        if(elementCount!==3){
            elementCount=3
            countPages=48/elementCount
            createElements()
        }
    }

}
window.addEventListener('resize',()=>{
   culcArray()
})

  function sortArray(mainArr,val){
    let resArr=mainArr
    return resArr.sort((a,b)=>{
        if(a[val]<b[val]){
            return -1;
        }
        if(a[val]>b[val]){
            return -1;
        }
        return 0;
    })
  }
  function generArr(arrName){
    let midArr=arrName.map(item=>item)
    let varArr
    let resultArray=[]
    for(let i=0;i<48/data.length;i++){
        midArr=arrName.map(item=>item)
        if(i%3===0){
          varArr=   sortArray(midArr,'type')
          resultArray.push(varArr)
          continue
        }
        if(i%2===0){
         varArr= sortArray(midArr,'name');
         resultArray.push(varArr)
          continue;
        }
        resultArray.push(arrName)
      }
      return [].concat(...resultArray)
  }
function createElements(){
    let countSlice=(pageNumber-1)*elementCount;
const ar=generateData.slice(countSlice,countSlice+elementCount)
petsWrap.innerHTML='';
let template='';
ar.forEach(item=>{
    template+=`
           <div class="pets-item" id=${item.id}>
                <img src=${item.img}>
                <div class="pets-name">${item.name}</div>
                <a href="#" class="btn-pets">
                    Learn more
                </a>
            </div>`;
            
})
petsWrap.innerHTML=template;
Array.from(petsWrap.children).forEach(item=>{
    let id=item.getAttribute('id');
    const findArr= data.find(item=>item.id==id)


    item.addEventListener('click',()=>{
      const template=`
      <button class="close-modal"><img src="../assets/cross.png" alt="close"></button>
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
}

  createElements()
