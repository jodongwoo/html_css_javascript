var i = 5;
setInterval(function () {
  i = i - 1;
  if (i > 0) {
    document.querySelector('.second').innerHTML = i;
    console.log(i);
  } else if (i == 0) {
    document.querySelector('.second').innerHTML = i;
    document.querySelector('.container').style.display = 'none';
    console.log(i);
  }
}, 1000);
