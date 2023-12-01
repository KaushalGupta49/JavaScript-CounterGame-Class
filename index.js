var count = 0;

function counter() {
  count = count + 1;
  document.getElementById('counter').innerHTML = count;
}

function startgame() {
  document.getElementById('starter').style.display = 'none';
  document.getElementById('content').style.display = '';
}