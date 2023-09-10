var tabButtonSelecter = document.querySelectorAll('.tab-button');
var tabButton = document.querySelectorAll('.tab-button');
var tabContent = document.querySelectorAll('.tab-content');
var iii = tabButtonSelecter.length;

function tabtab(ii) {
  tabButton[0].classList.remove('orange');
  tabButton[1].classList.remove('orange');
  tabButton[2].classList.remove('orange');
  tabContent[0].classList.remove('show');
  tabContent[1].classList.remove('show');
  tabContent[2].classList.remove('show');
  tabButton[ii].classList.add('orange');
  tabContent[ii].classList.add('show');
}

document.querySelector('.list').addEventListener('click', function (e) {
  tabtab(e.target.dataset.bt);
});

var car2 = { name: '소나타', price: [50000, 3000, 4000], color: 'white' };

document.getElementById('p_name').innerHTML = car2['name'];
document.getElementById('p_price').innerHTML = car2['price'][0];
document.getElementById('p_color').innerHTML = car2['color'];

// for (let i = 0; i < iii; i++) {
//   tabButtonSelecter[i].addEventListener('click', function () {
//     for (let i = 0; i < iii; i++) {
//       tabButton[i].classList.remove('orange');
//       tabContent[i].classList.remove('show');
//     }
//     tabButton[i].classList.add('orange');
//     tabContent[i].classList.add('show');
//   });
// }

// tabButtonSelecter[1].addEventListener('click', function () {
//   for (let i = 0; i < iii; i++) {
//     tabButton[i].classList.remove('orange');
//     tabContent[i].classList.remove('show');
//   }
//   tabButton[1].classList.add('orange');
//   tabContent[1].classList.add('show');
// });

// tabButtonSelecter[2].addEventListener('click', function () {
//   for (let i = 0; i < iii; i++) {
//     tabButton[i].classList.remove('orange');
//     tabContent[i].classList.remove('show');
//   }
//   tabButton[2].classList.add('orange');
//   tabContent[2].classList.add('show');
// });

// tabButtonSelecter[3].addEventListener('click', function () {
//   for (let i = 0; i < iii; i++) {
//     tabButton[i].classList.remove('orange');
//     tabContent[i].classList.remove('show');
//   }
//   tabButton[3].classList.add('orange');
//   tabContent[3].classList.add('show');
// });

// tabButtonSelecter[4].addEventListener('click', function () {
//   for (let i = 0; i < iii; i++) {
//     tabButton[i].classList.remove('orange');
//     tabContent[i].classList.remove('show');
//   }
//   tabButton[4].classList.add('orange');
//   tabContent[4].classList.add('show');
// });

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
// tabButtonSelecter[1].addEventListener('click', function () {
//   tabButton[0].classList.remove('orange');
//   tabButton[1].classList.remove('orange');
//   tabButton[2].classList.remove('orange');
//   tabContent[0].classList.remove('show');
//   tabContent[1].classList.remove('show');
//   tabContent[2].classList.remove('show');
//   tabButton[1].classList.add('orange');
//   tabContent[1].classList.add('show');
// });

// tabButtonSelecter[2].addEventListener('click', function () {
//   tabButton[0].classList.remove('orange');
//   tabButton[1].classList.remove('orange');
//   tabButton[2].classList.remove('orange');
//   tabContent[0].classList.remove('show');
//   tabContent[1].classList.remove('show');
//   tabContent[2].classList.remove('show');
//   tabButton[2].classList.add('orange');
//   tabContent[2].classList.add('show');
// });
