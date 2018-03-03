document.addEventListener('DOMContentLoaded', function(e) {
  function escapeHTML(html) {
    var elem = document.createElement('div');
    elem.appendChild(document.createTextNode(html));
    return elem.innerHTML;
  }

  console.log(escapeHTML('<a>'));
}, false);