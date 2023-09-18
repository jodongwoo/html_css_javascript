// var arr_products = product_data;

document.querySelector(".test").addEventListener("click", function () {
  $.get("./sauce/store.json").done((data) => {
    data = JSON.parse(data);
    data.forEach((a, i) => {
      //   console.log(data);
      console.log(a);
      document
        .querySelector(".product_container")
        .insertAdjacentHTML("beforeend", function () {
          `<div class="product_img">${a[i].photo}<img src="./sauce/p001.jpg" alt=""></div>
            <div class="product_name">${a[i].title}</div>
            <div class="product_company_name">${a[i].brand}</div>
            <div class="product_price_wrap">
                <span>Price : $ </span><span class="product_price">${a[i].price}</span>
            </div>
            <button class="buy_bt">Buy</button>`;
        });
    });
  });
});
console.log(data);
