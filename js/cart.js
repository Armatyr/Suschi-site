const cartWrapper = document.querySelector(".order-cart-small__list");
const modalOrderList = document.querySelector(".modal-order-list");

const totalPriceEl = document.querySelector('#total-price');

// Общая стоимость товаров
let priceTotal = 0;

let productArray = [];

window.addEventListener("click", function (event) {
   if (event.target.querySelector('[data-cart]')) {
      const card = event.target.closest(".slider__item");

      const productInfo = {
         id: card.dataset.id,
         
         imgSrc: card.querySelector(".choice-salomon").getAttribute("src"),
         title: card.querySelector(".choice-main").innerText,
        
         itemsInBox: card.querySelector("[data-items-in-box]").innerText,
       
         price: card.querySelector(".choice-pr").innerText,
         counter: card.querySelector("[data-counter]").innerText,
      };

      //  cartWrapper.querySelector('[data-id="' + productInfo.id + '"]'); тоже самое что и строка снизу
      const itemInCart = cartWrapper.querySelector(
         `[data-id="${productInfo.id}"]`
      );

      if (itemInCart) {
         const counterElement = itemInCart.querySelector("[data-counter]");
         counterElement.innerText =
            parseInt(counterElement.innerText) + parseInt(productInfo.counter);
      } else {
         const cartItemHTML = ` <li class="slider__item choice__item order-cart-small" data-id="${productInfo.id}">
                                    <div class="choice__salomon-img-small">
                                      <img class="choice-salomon-small" src="${productInfo.imgSrc}" alt="${productInfo.imgSrc}" width="253" height="203" />
                                    </div>
                                    <div class="choice-main-small-text">
                                      <h2 class="choice-main-small">${productInfo.title}</h2>
                                      <div class="choice-items-small counter-wrapper">
                                        <div class="items__control-small" data-action="minus">-</div>
                                        <div class="items__current-small" data-counter>${productInfo.counter}</div>
                                        <div class="items__control-small" data-action="plus">+</div>
                                      </div>
                                      
                                     
                                      <p class="choice-v-small" data-items-in-box>${productInfo.itemsInBox}</p>
                                   

                                      <p class="choice-pr-small">${productInfo.price}</p>
                                    </div>
                                </li> `;

         cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);

         
      }
      card.querySelector('[data-counter]').innerText = '1';

      toggleCartStatus();

      calcCartPriceAndDelivery();
   
   }
});


// modal  ==============================================================================
 
 
   

const generateModalProduct = (img, title, priceTotal, id, counter) => {
	return `
      <li class="slider__item choice__item order-cart-small modal-order-cart data-id="${id}" >
     
      <div class="choice__salomon-img-small modal-choice__salomon-img">
         <img class="choice-salomon-small modal-choice-salomon" src="${img}" alt="" width="120"
         height="100" />
      </div>
      <div class="choice-main-small-text modal-choice-main-text">
      <h2 class="choice-main-small modal-choice-main">${title}</h2>
      <div class="choice-items-small counter-wrapper modal-choice-items">
         <div class="items__control-small modal-items__control" data-action="minus">-</div>
         <div class="items__current-small modal-items__current" data-counter>${counter}</div>
         <div class="items__control-small modal-items__control" data-action="plus">+</div>
      </div>

      <div class="choice-weight__box">
         <p class="choice-weight">1050 грамм</p>
         <p class="choice-v basket-choice-small modal-choice-v" data-items-in-box>30 кусочков</p>
      </div>

      <div class="choice__line-small"></div>
         <p class="choice-pr-small modal-choice-pr">${priceTotal}</p>
      </div>
      <button class="modal__order-delet">Удалить</button>
     
    </li> `;
    
};
    


const cartContentBtn = document.querySelector(".cart-content__btn");

const modal = new Modal({
	isOpen: (modal) => {
		 console.log('opened');

     
       
       let array = cartWrapper.children;
       console.log(cartWrapper.children);
      
       for (item of array) {
          console.log(item);
           let img = item.querySelector('.choice-salomon-small').getAttribute('src');
           console.log(img);

           let title = item.querySelector('.choice-main-small').textContent;
           console.log(title);
           
           let priceString = item.querySelector('.choice-pr-small').textContent;
           console.log(priceString);

           let id = document.querySelector('[data-id]').dataset.id;
        
           console.log(id);
              
           let counter = document.querySelector('[data-counter]').innerText;

           
           modalOrderList.insertAdjacentHTML('afterbegin', generateModalProduct(img, title, priceString, id, counter));

           let obj = {};
           obj.title = title;
           obj.price = priceString;
           productArray.push(obj);
         }
        console.log(productArray);
        
    
	 },
    
	isClose: () => {
		console.log('closed');
	},
   
     
});

// ========================================================================

// document.querySelector('.modal__form-order').addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	let self = e.currentTarget;

// 	let formData = new FormData(self);
// 	let name = self.querySelector('[name="Имя"]').value;
// 	let tel = self.querySelector('[name="Телефон"]').value;
// 	let mail = self.querySelector('[name="E-mail"]').value;
// 	formData.append('Товары', JSON.stringify(productArray));
// 	formData.append('Имя', name);
// 	formData.append('Телефон', tel);
// 	formData.append('E-mail', mail);

// 	let xhr = new XMLHttpRequest();

// 	xhr.onreadystatechange = function() {
// 		if (xhr.readyState === 4) {
// 			if (xhr.status === 200) {
// 				console.log('Отправлено');
// 			}
// 		}
// 	}

// 	xhr.open('POST', 'mail.php', true);
// 	xhr.send(formData);

// 	self.reset();
// });



// const form = document.querySelector('.modal__form-order');

// new window.JustValidate('.form', {

// submitHandler: function(thisForm) {
//    let formData = new FormData(thisForm);

//    let xhr = new XMLHttpRequest();

//    xhr.onreadystatechange = function () {
//      if (xhr.readyState === 4) {
//        if (xhr.status === 200) {
//          console.log('Отправлено');
//        }
//      }
//    }

//    xhr.open('POST', 'mail.php', true);
//    xhr.send(formData);

//    thisForm.reset();
//  }

// })

$(document).ready(function() {

	//E-mail Ajax Send
   $(".modal__form-order").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});









