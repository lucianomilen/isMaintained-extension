let changeColor = document.getElementById('changeColor');

  changeColor.onclick = (element) => {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
  		console.error(tabs[0]);
  		document.getElementById("content").innerHTML = JSON.stringify(tabs[0]);
	});
};