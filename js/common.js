async function loadText(path) {
	return fetch(path)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP ${response.status}: ${response.statusText}`);
			}
			return response.text();
		});
}
function addHeader() {
	let targets = document.getElementsByClassName("site-header");
	let element = document.createElement("p");
	loadText("/Components/header.html").then(result => {
		element.innerHTML = result;
		for (let i = 0; i < targets.length; ++i) {
			targets[i].appendChild(element);
		}
	});
}
function addFooter() {
	let targets = document.getElementsByClassName("site-footer");
	let element = document.createElement("p");
	loadText("/Components/footer.html").then(result => {
		element.innerHTML = result;
		for (let i = 0; i < targets.length; ++i) {
			targets[i].appendChild(element);
		}
	});
}

addHeader();
addFooter();