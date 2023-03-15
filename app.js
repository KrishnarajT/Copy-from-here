var text = document.getElementById("text");
var message = document.getElementsByClassName("container")[0];
var frame = document.getElementById("myframe");

const containerid = "text";

setInterval(function () {
	message.classList.remove("animate");
}, 5000);

function CopyToClipboard(containerid) {
	if (document.selection) {
		var range = document.body.createTextRange();
		range.moveToElementText(document.getElementById(containerid));
		range.select().createTextRange();
		document.execCommand("copy");
	} else if (window.getSelection) {
		var range = document.createRange();
		range.selectNode(document.getElementById(containerid));
		window.getSelection().addRange(range);
		document.execCommand("copy");
	}
	message.classList.add("animate");
}

frame.onload = function () {
	text.innerHTML = frame.contentWindow.document.body.innerHTML;
	text.onclick = function () {
		CopyToClipboard("text");
	}
};

