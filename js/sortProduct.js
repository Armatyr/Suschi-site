// сортировка товара


document.querySelector('#sort-cheaper').onclick = function () {
   mySortCheaper('data-price');
 }
 document.querySelector('#sort-expensive').onclick = function () {
   mySortExpensive('data-price');
 }
 document.querySelector('#sort-sort').onclick = function () {
   mySortCheaper('data-id');
 }
 document.querySelector('#sort-quantity').onclick = function () {
   mySortCheaper('data-quantity');
 }
 document.querySelector('#sort-weight').onclick = function () {
   mySortCheaper('data-weight');
 }
 
 function mySortCheaper(sortType) {
   let nav = document.querySelector('.slider__items');
   for(let i = 0; i < nav.children.length; i++) {
     for(let j = i; j < nav.children.length; j++) {
       if (+nav.children[i].getAttribute(sortType) > +nav.children[j].getAttribute(sortType)) {
         replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
         insertAfter(replacedNode, nav.children[i]);
       }
     }
   }
 }
 
 function mySortExpensive(sortType) {
   let nav = document.querySelector('.slider__items');
   for(let i = 0; i < nav.children.length; i++) {
     for(let j = i; j < nav.children.length; j++) {
       if (+nav.children[i].getAttribute(sortType) < +nav.children[j].getAttribute(sortType)) {
         replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
         insertAfter(replacedNode, nav.children[i]);
       }
     }
   }
 }
 
 function insertAfter(elem, refElem) {
   return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
 }
 
 
 
 
 const sort_all = document.querySelector(".sort__all");
 const sorts_list = document.querySelector(".sorts-list");
 const sort = document.querySelectorAll(".sorts");
 
 
 sort_all.addEventListener("click", () => {
   sorts_list.classList.toggle("active");
   sort_all.querySelector(".sort-down").classList.toggle("sort-up");
 });
 
 
 sort.forEach((sorts) => {
   sorts.addEventListener("click", () => {
     sort.forEach((sorts) => { sorts.classList.remove(".sort_all") });
     sort_all.querySelector("span").innerHTML = sorts.innerHTML;
     sorts.classList.add(".sort_all");
     sorts_list.classList.toggle("active");
     sort_all.querySelector(".sort-down").classList.toggle(".sort-up");
   });
 });