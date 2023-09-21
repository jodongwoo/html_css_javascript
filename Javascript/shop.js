var products = [];
var cart = [];
$.get('./sauce/store.json').done(function (data) {
  products = data.products;

  products.forEach(function (a, i) {
    document.querySelector('.product_container').insertAdjacentHTML(
      'beforeend',
      `<div class="product_card" style="width:20%" data-id=${a.id}>
        <div class="product_img"><img src="${a.photo}" alt=""></div>
        <div class="product_name" style="color:black">${a.title}</div>
        <div class="product_company_name">${a.brand}</div>
        <div class="product_price_wrap">
            <span style="color:black">Price : </span><span class="product_price">$ ${a.price}</span>
        </div>
        <button id="${a.id}" class="buy_bt">Cart</button>
        </div>`
    );
  });

  // start code
  var search_prodcuts = [];
  var search_result = [];
  document
    .getElementById('search_products')
    .addEventListener('input', function (e) {
      // products = data.products;

      search_prodcuts = document.querySelector('#search_products').value;

      search_result = products.filter(function (search) {
        return (
          search.title.includes(search_prodcuts) ||
          search.brand.includes(search_prodcuts)
        );
      });

      document.querySelector('.product_container').innerHTML = '';

      search_result.forEach(function (a) {
        //
        //  상품 이름, 브랜드에서 검색어와 같은 부분 yellow 를 칠하기 시작
        // console.log(a.title);
        // a.title.replace(
        //   `${search_prodcuts}/g`,
        //   `<span style="background-color:yellow;">${search_prodcuts}</span>`
        // );
        // a.brand.replace(
        //   search_prodcuts,
        //   `<span style="background-color:yellow;">${search_prodcuts}</span>`
        // );
        //
        //  상품 이름, 브랜드에서 검색어와 같은 부분 yellow 를 칠하기 끝
        //

        //
        document.querySelector('.product_container').insertAdjacentHTML(
          'beforeend',
          `<div class="product_card" style="width:20%" data-id=${a.id}>
            <div class="product_img"><img src="${a.photo}" alt=""></div>
            <div class="product_name" style="color:black">${a.title}</div>
            <div class="product_company_name">${a.brand}</div>
            <div class="product_price_wrap">
                <span style="color:black">Price : </span><span class="product_price">$ ${a.price}</span>
            </div>
            <button id="${a.id}" class="buy_bt">Cart</button>
            </div>`
        );
      });
    });

  products.forEach(function (a, i) {
    a.title = a.title.replace(
      `${search_prodcuts}`,
      `<span style="background-color:yellow;">${search_prodcuts}</span>`
    );
    a.brand = a.brand.replace(
      `${search_prodcuts}`,
      `<span style="background-color:yellow;">${search_prodcuts}</span>`
    );
  });

  //
  //
  //
  //
  //
  // 장바구니 담기 시작

  products.forEach(function (a, i) {
    document
      .querySelectorAll('.buy_bt')
      [i].addEventListener('click', function (e) {
        let productId = a.id;

        let 몇번째 = cart.findIndex((a) => {
          return a.id == productId;
        });

        if (몇번째 == -1) {
          let 현재상품 = products.find((a) => {
            return a.id == productId;
          });
          현재상품.count = 1;
          cart.push(현재상품);

          document.querySelector('.cart_area').insertAdjacentHTML(
            'beforeend',
            `<div class="product_card" style="width:20%" data-id=${a.id}>
              <div class="product_img"><img src="${a.photo}" alt=""></div>
              <div class="product_name" style="color:black">${a.title}</div>
              <div class="product_company_name">${a.brand}</div>
              <div class="product_price_wrap">
                <span style="color:black">Price : </span><span class="product_price">$ ${a.price}</span>
              </div>
              <input id="qty_${a.id}" value="${a.count}" type="number" style="width: 75%; margin: 10px; padding: 10px"/>
  
              </div>`
          );
        } else {
          cart[몇번째].count++;

          document.getElementById(`qty_${a.id}`).value = a.count;
        }
        // 합계 구하기 시작
        // var total_price = 0;
        var total_price = 0;
        cart.forEach(function (a) {
          total_price += a.price * a.count;
        });

        document.querySelector('.total_price').innerHTML = total_price;
      });
  });

  // 장바구니 담기 끝

  // end code
});

// document.querySelector('.cart_area').addEventListener('click', function () {
//   var ggg = document.querySelectorAll('.buy_bt')[0].innerHTML;

//   console.log(ggg);

//   ggg.replace('Drag', '싯싯');
// });
