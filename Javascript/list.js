var producs_option = [
  `<option>모자 사이즈 : 소두(M)</option>
                              <option>모자 사이즈 : 중두(L)</option>
                              <option>모자 사이즈 : 대두(XL)</option>`,
  `<option>셔츠 사이즈 : M</option>
                              <option>셔츠 사이즈 : L</option>
                              <option>셔츠 사이즈 : XL</option>`,
  `<option>바지 사이즈 : 28 inch</option>
                              <option>바지 사이즈 : 30 inch</option>
                              <option>바지 사이즈 : 32 inch</option>`,
];

var hat = ['소두(S)', '중두(L)', '대두(XL)', '왕대두(XXL)'];
var shirts = ['90(S)', '120(L)', '140(XL)'];
var pants = ['28(S)', '32(L)', '36(XL)'];

var array_products = [hat, shirts, pants];
var 알파벳 = ['A. ', 'B. ', 'C. ', 'D. '];
// console.log(array_products[1]);

var form = document.querySelectorAll('.form-select');

form[0].addEventListener('input', function () {
  const i = this.value;

  form[1].classList.remove('hidden');
  form[1].innerHTML = '';

  array_products[i].forEach(function (a, b) {
    // console.log(a);
    console.log(b);
    form[1].insertAdjacentHTML(
      'beforeend',
      `<option>${알파벳[b]}${a}</option>`
    );
  });
});

// form[0].addEventListener('input', function () {
//   var ii = this.value;

//   form[1].classList.remove('hidden');
//   form[1].innerHTML = '';
//   for (let i = 0; i < array_products[ii].length; i++) {
//     form[1].insertAdjacentHTML(
//       'beforeend',
//       `<option>${array_products[ii][i]}</option>`
//     );
//   }
// });

// form[0].addEventListener('input', function () {
//   if (this.value == 0) {
//     form[1].classList.remove('hidden');
//     form[1].innerHTML = '';
//     for (var i = 0; i < hat.length; i++)
//       form[1].insertAdjacentHTML('beforeend', `<option>${hat[i]}</option>`);
//   }
//   if (this.value == 1) {
//     form[1].classList.remove('hidden');
//     form[1].innerHTML = '';
//     for (var i = 0; i < shirts.length; i++)
//       form[1].insertAdjacentHTML('beforeend', `<option>${shirts[i]}</option>`);
//   }
//   if (this.value == 2) {
//     form[1].classList.remove('hidden');
//     form[1].innerHTML = '';
//     for (var i = 0; i < pants.length; i++)
//       form[1].insertAdjacentHTML('beforeend', `<option>${pants[i]}</option>`);
//   }
// });

// function show_sub_select(i) {
//   form[1].classList.remove('hidden');
//   form[1].innerHTML = '';
//   form[1].insertAdjacentHTML('beforeend', array_products[i[i]]);
// }

// form[0].addEventListener('input', function () {
//   if(array_products[]){}
//   var i = this.value;
//   show_sub_select(i);
// });

//   var productOption = document.querySelectorAll('.form-select');

//   productOption[0].addEventListener('input', function(e){
//   if(e.currentTarget.value == '모자'){
//     console.log(e.currentTarget.value);
//     productOption[1].classList.remove('hidden');
//     productOption[2].classList.remove('hidden');
//     productOption[2].classList.add('hidden');
//   }
//   if (this.value == '셔츠'){
//     productOption[1].classList.remove('hidden');
//     productOption[2].classList.remove('hidden');
//     productOption[1].classList.add('hidden');
//   }
// });

var products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' },
];

function product_array(i) {
  document.querySelectorAll('.product_name')[i].innerHTML = products[i].title;
  document.querySelectorAll('.product_price')[i].innerHTML = products[i].price;
}

// for (let i = 0; i < 3; i++) {
//   product_array(i);
// }
//
//
//
//
//
//
//
//
// 출석부 체크
// products.forEach(function (aa, i) {
//   console.log(aa);
//   product_array(i);
// });

// var 출석부 = ['흥민', '영희', '철수', '재석'];

// function findName(Schoolname) {
//   출석부.forEach(function (check) {
//     if (Schoolname == check) {
//       alert('있어요');
//     }
//   });
// }

// findName('영희');
//
//
//
//
//
//
//
// 구구단. 1
//
for (let ii = 2; ii < 10; ii++) {
  for (let i = 1; i < 10; i++) {
    console.log(ii, i);
  }
}
//
//
// 구구단. 2
//
// var numNum = [2, 3, 4, 5, 6, 7, 8, 9];
// var numNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let ii = 0; ii < numNum.length; ii++) {
//   for (let i = 0; i < numNum2.length; i++) {
//     console.log(numNum[ii], numNum2[i]);
//   }
// }
//
//
//

// 구구단. 3
// numNum.forEach(function (a) {
//   numNum2.forEach(function (b) {
//     console.log(a, b);
//   });
// });
