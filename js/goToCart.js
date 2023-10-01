     let myClick = document.querySelector('.circle-tag');
     let textTag = document.querySelector('.text__tag');

      myClick.addEventListener('click', () => {

    
           myClick.classList.add('active')
           myClick.style.background = '#FF9846';

           textTag.classList.add('active')
           textTag.style.color = '#A4ACAD';
         
           

           myClick.addEventListener('click', () => {
       
            myClick.classList.remove('active')
            myClick.style.background = '';

            textTag.classList.remove('active')
            textTag.style.color = '';
            return myClick;
           });
        
        });
     