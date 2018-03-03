function addTextNode(text) {
  var
    newtext = document.createTextNode(text),
    p1 = document.getElementById('p1');


  p1.appendChild(newtext);
}
