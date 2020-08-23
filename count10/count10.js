function allowDropThis(i) {
    i.preventDefault();
}

function dragThis(i) {
    i.dataTransfer.setData("text", i.target.id);
}

function dropThis(i) {
    i.preventDefault();
    var data = i.dataTransfer.getData("text");
    i.target.appendChild(document.getElementById(data));
}
