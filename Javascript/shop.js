// var arr_products = product_data;
// var product_card = `<div class="product_img">${a[i].photo}<img src="./sauce/p001.jpg" alt=""></div>
// <div class="product_name">${a[i].title}</div>
// <div class="product_company_name">${a[i].brand}</div>
// <div class="product_price_wrap">
//     <span>Price : $ </span><span class="product_price">${a[i].price}</span>
// </div>
// <button class="buy_bt">Buy</button>`;

<<<<<<< HEAD
var arr_products = [];

window.addEventListener("load", function () {
  $.get("./sauce/store.json").done((data_p) => {
    // data = JSON.parse(data_p);
    // console.log(data_p.products);
    arr_products = data_p.products;
    arr_products.forEach((a) => {
      // console.log(a);
      document.querySelector(".product_container").insertAdjacentHTML(
        "beforeend",
        `<div class="product_card" data-id=${a.id}>
        <div class="product_img"><img src="${a.photo}" alt=""></div>
        <div class="product_name">${a.title}</div>
        <div class="product_company_name">${a.brand}</div>
        <div class="product_price_wrap">
            <span>Price : $ </span><span class="product_price">${a.price}</span>
        </div>
        <button class="buy_bt">Buy</button>
        </div>`
      );
=======
document.querySelector('.test').addEventListener('click', function () {
  $.get('./sauce/store.json').done((data) => {
    data = JSON.parse(data);
    data.forEach((a, i) => {
      //   console.log(data);
      console.log(a);
      document
        .querySelector('.product_container')
        .insertAdjacentHTML('beforeend', function () {
          `<div class="product_img">${a[i].photo}<img src="./sauce/p001.jpg" alt=""></div>
            <div class="product_name">${a[i].title}</div>
            <div class="product_company_name">${a[i].brand}</div>
            <div class="product_price_wrap">
                <span>Price : $ </span><span class="product_price">${a[i].price}</span>
            </div>
            <button class="buy_bt">Buy</button>`;
        });
>>>>>>> 69fe10ecf2727bbaecf3752ce921f1cc4620bcab
    });
  });
});

document
  .getElementById("search_products")
  .addEventListener("input", function () {
    var products_search = document.getElementById("search_products").value;
    $.get("./sauce/store.json").done((data_p) => {
      arr_products = data_p.products;

      var new_arr_products = arr_products.indexOf(products_search);
      console.log(new_arr_products);

      // new_arr_products.forEach(function (a) {
      //   if (products_search != a.title) {
      //     console.log(a);
      // document.querySelector(".product_container").innerHTML = "";
      // document.querySelector(".product_container").insertAdjacentHTML(
      //   "beforeend",
      //   `<div class="product_card" data-id=${a.id}>
      //     <div class="product_img"><img src="${a.photo}" alt=""></div>
      //     <div class="product_name">${a.title}</div>
      //     <div class="product_company_name">${a.brand}</div>
      //     <div class="product_price_wrap">
      //         <span>Price : $ </span><span class="product_price">${a.price}</span>
      //     </div>
      //     <button class="buy_bt">Buy</button>
      //     </div>`
      // );
      // }
      // });
    });
  });
// });
