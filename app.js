document.querySelector('.element1').addEventListener('click', doSomething1, true);
document.querySelector('.element2').addEventListener('click', doSomething2,true);

function doSomething1(e) {
  console.log('do something1');
  e.stopPropagation();
}

function doSomething2() {
  console.log('do something2');
}