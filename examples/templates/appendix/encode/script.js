document.addEventListener('DOMContentLoaded', function(e) {
  var attr1 = 'hoge';
  var content = 'aiueo';

  body = document.getElementsByTagName('body')[0];
  body.innerHTML = '<div attr1="' + attr1 + '">' + content + '</div>';
}, false);