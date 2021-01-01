const port = chrome.extension.connect({
  name: "Sample Communication"
});
port.postMessage("Hi BackGround");
port.onMessage.addListener(function(obj) {
  let ul = document.getElementById("keywordLists");
  let li = document.createElement("li");
  let div_id = document.createElement("div");
  let div_title = document.createElement("div");

  div_id.appendChild(document.createTextNode(obj.id));
  div_id.setAttribute("class", "timestamp");
  div_title.appendChild(document.createTextNode(obj.title));
  div_title.setAttribute("class", "keyword");

  li.appendChild(div_id);
  li.appendChild(div_title);
  ul.appendChild(li);
});