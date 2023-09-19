var arr_products = [];
var cart = [];
var add_qty = [];
var bt_id;
var qty;
function 찾아줘(c, d) {
  c.indexOf(d);
}

window.addEventListener('load', function (e) {
  $.get('./sauce/store.json').done((data_p) => {
    // data = JSON.parse(data_p);
    var click_i = 0;
    arr_products = data_p.products;

    arr_products.forEach((a, i) => {
      //
      // console.log(arr_products);
      document.querySelector('.product_container').insertAdjacentHTML(
        'beforeend',
        `<div class="product_card" data-id=${a.id}>
        <div class="product_img"><img src="${a.photo}" alt=""></div>
        <div class="product_name">${a.title}</div>
        <div class="product_company_name">${a.brand}</div>
        <div class="product_price_wrap">
            <span>Price : </span><span class="product_price">$ ${a.price}</span>
        </div>
        <button id="bt_${i}" class="buy_bt">Cart</button>
        </div>`
      );

      // document.querySelector('.cart_area').innerHTML = '';
      // document
      //   .getElementById(`bt_${i}`)
      //   .addEventListener('click', function (e) {
      //     // } else if (a.title === find_save.title) {
      //     //   document.querySelector('.cart_area').innerHTML = '';
      //     //   document.querySelector('.cart_area').insertAdjacentHTML(
      //     //     'beforeend',
      //     //     `<div class="product_card" style="width:20%" data-id=${find_save.id}>
      //     //     <div class="product_img"><img src="${find_save.photo}" alt=""></div>
      //     //     <div class="product_name" style="color:black">${find_save.title}</div>
      //     //     <div class="product_company_name">${find_save.brand}</div>
      //     //     <div class="product_price_wrap">
      //     //         <span style="color:black">Price : </span><span class="product_price">$ ${a.price}</span>
      //     //     </div>
      //     //     <div style="color:black; text-align:center">Qty : ${find_save.qty}</div>
      //     //     </div>`
      //     //   );
      //     // }
      //   });
    });
    // console.log(a);
  });
  //
});
console.log(cart);
//

// bt_id = e.detaset.id;
$('.buy_bt').click(function (e) {
  let product_id = e.target.dataset.id;
  var 확인 = cart.findIndex(function (c) {
    return c.id == product_id;
  });
  console.log(cart);
  if (확인 == -1) {
    var temp_cart = arr_products.findIndex(function (c) {
      return c.id == product_id;
      temp_cart.qty = 1;
      cart.push(temp_cart);
    });
  } else {
    cart[확인].qty++;
  }
  console.log(cart);
});

//
//
//
// 검색 시작

document
  .getElementById('search_products')
  .addEventListener('input', function (e) {
    document.querySelector('.product_container').innerHTML = '';
    $.get('./sauce/store.json').done((data_p) => {
      var products_search = document.getElementById('search_products').value;
      var product_name = document.querySelector('.product_name');
      arr_products = data_p.products;

      var new_arr_products = arr_products.filter(function (test) {
        return (
          test.title.includes(products_search) ||
          test.brand.includes(products_search)
        );
      });
      document.querySelector('.product_container').innerHTML = '';
      new_arr_products.forEach(function (a) {
        //
        //      상품 이름, 브랜드에서 검색어와 같은 부분 yellow 를 칠하기 시작
        //
        var yellow_title = a.title.replace(
          `${products_search}`,
          `<span style="background-color:yellow">${products_search}</span>`
        );
        var yellow_brand = a.brand.replace(
          `${products_search}`,
          `<span style="background-color:yellow">${products_search}</span>`
        );

        //
        //      상품 이름, 브랜드에서 검색어와 같은 부분 yellow 를 칠하기 끝
        //
        //
        document.querySelector('.product_container').insertAdjacentHTML(
          'beforeend',
          `<div id="card_${a.id}" class="product_card" data-id=${a.id}>
              <div class="product_img"><img src="${a.photo}" alt=""></div>
              <div class="product_name">${yellow_title}</div>
              <div class="product_company_name">${yellow_brand}</div>
              <div class="product_price_wrap">
                  <span>Price : </span><span class="product_price">$ ${a.price}</span>
              </div>
              <button class="buy_bt">Cart</button>
              </div>`
        );
      });
    });
  });
//
// 검색 끝
//
//
//
//
//
//

//
//
//
//
//
//
//
//
//
//
//

// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData('text', ev.target.id);
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData('text');
//   ev.target.appendChild(document.getElementById(data));
// }
