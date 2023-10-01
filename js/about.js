// about

    
const aboutUsDetail = document.querySelector('.about__us-detail');
const aboutUsTextGrad = document.querySelector('.about__us-text-grad');
const after = document.querySelector(':after');


aboutUsDetail.addEventListener('click', ()  => {

  if (aboutUsTextGrad.classList.toggle('closed')) {
    
    aboutUsDetail.innerText = "Добавить";
    
  } else {
    aboutUsDetail.innerText = "Скрыть";
  }

});