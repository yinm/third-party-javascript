function escapeHtml(content) {
  var TABLE_FOR_ESCAPE_HTML = {
    "&": "&amp",
    "\"": "&quot;",
    "<": "&lt;",
    ">": "&gt;",
  };

  return content.replace(/[&"<>]/g, function(match) {
    return TABLE_FOR_ESCAPE_HTML[match];
  });
}

console.log(escapeHtml('hoge&"<>aaaaaaa'));