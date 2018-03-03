document.addEventListener('DOMContentLoaded', function(e) {
  var attr1 = 'hoge';
  var content = 'aiueo';

  var body = document.getElementsByTagName('body')[0];
  var div = document.createElement('div');
  div.setAttribute('attr1', attr1);
  div.textContent = content;
  body.appendChild(div);
}, false);
