function calcCartPriceAndDelivery() {
  const orderCart = document.querySelector('.order-cart-small__list');
  const priceElements = cartWrapper.querySelectorAll('.choice-pr-small');
  const totalPriceEl = document.querySelector('#total-price');


  const deliveryCost = document.querySelector('.fullprice__delivery');
  const basketText = document.querySelector('.basket-text');
  const basketTitle = document.querySelector('.basket-title');

  const cartFullprice = document.querySelector('.cart__fullprice');
	const cartFullpriceTitle = document.querySelector('.cart__fullprice-title');
	const fullText = document.querySelector('.fullprice-text');
  const cartContentBtn = document.querySelector('.cart-content__btn');
  const goBasket = document.querySelector('.go__basket');

  const modalDeliveryCost = document.querySelector('.modal-delivery__fullprice');
  const modalGoBasket = document.querySelector('.modal--go__basket');
  const modalCartFullprice = document.querySelector('.modal--cart__fullprice');
  const modalCartFullpriceTitle = document.querySelector('.modal--cart__fullprice-title');
 


  // Общая стоимость товаров
  let priceTotal = 0;

  // Обходим все блоки с ценами в корзине
  priceElements.forEach(function (item) {
    // Находим количество товара
    const amountEl = item.closest('.slider__item').querySelector('[data-counter]');
    
    // Добавляем стоимость товара в общую стоимость (кол-во * цену)
    priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
  });

  // Отображаем цену на странице
  totalPriceEl.innerText = priceTotal;
  

  
	

	// Указываем стоимость доставки  Скрываем / Показываем блок со стоимостью доставки
	if (priceTotal <= 2000) {
		deliveryCost.classList.add('cost');
		deliveryCost.innerText = 'Доставка: 500 грн';
		
	} else {
		deliveryCost.classList.remove('cost');
		deliveryCost.innerText = '';
	}  if (priceTotal === 0) {
    deliveryCost.classList.remove('cost');
		deliveryCost.innerText = '';
  } 
	// modal Указываем стоимость доставки  Скрываем / Показываем блок со стоимостью доставки
	if (priceTotal <= 2000) {
		modalDeliveryCost.classList.add('cost');
		modalDeliveryCost.innerText = 'Доставка: 500 грн';
		
	} else {
		modalDeliveryCost.classList.remove('cost');
		modalDeliveryCost.innerText = '';
	}  if (priceTotal === 0) {
    modalDeliveryCost.classList.remove('cost');
		modalDeliveryCost.innerText = '';
  } 


  // корзина пуста или нет
  if (priceTotal > 0) {
    basketTitle.classList.add('cost');
    basketTitle.classList.innerText = '';
    basketText.classList.add('cost');
    basketText.classList.innerText = '';
  } else {
    basketTextx.classList.remove('cost');
    basketTextx.classList.innerText = 'Добавьте же скорее что-нибудь!';
    basketTitlex.classList.remove('cost');
    basketTitlex.classList.innerText = 'Ваша корзина пуста.';
  }


  if (priceTotal <= 0) {
    goBasket.classList.add('www');
    cartFullpriceTitle.classList.add('www');
    cartFullprice.classList.add('www');
    fullText.classList.add('www');
    cartContentBtn.classList.add('www');


    modalGoBasket.classList.add('www');
    modalCartFullprice.classList.add('www');
    modalCartFullpriceTitle.classList.add('www');

   
  } else {
    goBasket.classList.remove('www');
    cartFullpriceTitle.classList.remove('www');
    cartFullprice.classList.remove('www');
    fullText.classList.remove('www');
    cartContentBtn.classList.remove('www');


    modalGoBasket.classList.remove('www');
    modalCartFullprice.classList.remove('www');
    modalCartFullpriceTitle.classList.remove('www');
    
  } 
 }     



 