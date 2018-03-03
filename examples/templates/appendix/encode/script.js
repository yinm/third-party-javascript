var value;

value = "あいうえお";
console.log("http://example.com/" + encodeURI(value) + "/hoge");
console.log("http://example.com/" + encodeURIComponent(value) + "/hoge");

value = encodeURIComponent("あいうえお");
console.log(decodeURI(value));
console.log(decodeURIComponent(value));

value = 'http://';
console.log("http://exmaple.com/" + encodeURI(value) + "/hoge");
console.log('http://example.com/' + encodeURIComponent(value) + "/hoge");

value = encodeURIComponent("http://");
console.log(decodeURI(value));
console.log(decodeURIComponent(value));